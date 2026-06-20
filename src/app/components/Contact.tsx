import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-8ba7aeab/contact`;
      console.log('Submitting contact form to:', url);
      console.log('Form data:', data);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Submit result:', result);

      if (result.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
        console.error('Error submitting contact form:', result.error);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to send message: ${errorMessage}`);
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-4 border-violet-900/30"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-indigo-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-violet-400 font-semibold tracking-wider text-sm uppercase">Contact</span>
              <h2 className="text-4xl font-bold mb-6 mt-2">Let's Work Together</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                I'm currently looking for new opportunities and internships. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:shrimulik02@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email Me</p>
                  <p className="font-semibold text-lg text-white group-hover:text-violet-300 transition-colors">shrimulik02@gmail.com</p>
                </div>
              </a>

              <a href="tel:8940173320" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Call Me</p>
                  <p className="font-semibold text-lg text-white group-hover:text-violet-300 transition-colors">8940173320</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="font-semibold text-lg text-white group-hover:text-violet-300 transition-colors">Salem, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white transition-all" 
                    placeholder="enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white transition-all" 
                    placeholder="Enter your Email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white transition-all" 
                  placeholder="Project Inquiry" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white resize-none transition-all" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-violet-900/20 flex items-center justify-center gap-2 mt-4 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>Made By Shrikant Mulik</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;