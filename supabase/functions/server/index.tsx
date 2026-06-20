import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8ba7aeab/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-8ba7aeab/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        error: "Name, email, and message are required" 
      }, 400);
    }

    // Create a unique key for this contact submission
    const timestamp = Date.now();
    const key = `contact_${timestamp}`;

    // Store the contact form data
    const contactData = {
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp,
      date: new Date().toISOString()
    };

    await kv.set(key, contactData);

    console.log(`Contact form submission saved: ${key}`);

    return c.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      id: key
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return c.json({ 
      success: false, 
      error: `Failed to save contact form: ${error.message}` 
    }, 500);
  }
});

// Get all contact submissions endpoint
app.get("/make-server-8ba7aeab/contacts", async (c) => {
  try {
    // Query the database directly to get key-value pairs
    const { createClient } = await import("jsr:@supabase/supabase-js@2.49.8");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );
    
    const { data, error } = await supabase
      .from("kv_store_8ba7aeab")
      .select("key, value")
      .like("key", "contact_%");
    
    if (error) {
      console.error("Database error retrieving contacts:", error);
      return c.json({ 
        success: false, 
        error: `Failed to retrieve contacts from database: ${error.message}` 
      }, 500);
    }
    
    return c.json({ 
      success: true, 
      contacts: data || [],
      count: data?.length || 0
    });
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    return c.json({ 
      success: false, 
      error: `Failed to retrieve contacts: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);