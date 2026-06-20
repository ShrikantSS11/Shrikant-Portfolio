import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, User, MessageSquare, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { toast } from 'sonner';

interface ContactSubmission {
  key: string;
  value: {
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: number;
    date: string;
  };
}

const ContactAdmin = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-8ba7aeab/contacts`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        const validContacts = (result.contacts || []).filter(
          (contact: any) => contact && contact.value && contact.value.name
        );
        const sortedContacts = validContacts.sort((a: ContactSubmission, b: ContactSubmission) =>
          (b.value?.timestamp || 0) - (a.value?.timestamp || 0)
        );
        setContacts(sortedContacts);
        if (sortedContacts.length > 0) {
          toast.success(`Loaded ${sortedContacts.length} contact submission${sortedContacts.length > 1 ? 's' : ''}`);
        }
      } else {
        throw new Error(result.error || 'Failed to load contacts');
      }
    } catch (error) {
      const isNetworkError = error instanceof TypeError && error.message === 'Failed to fetch';
      const message = isNetworkError
        ? 'Backend unavailable — the server function may not be deployed yet.'
        : (error instanceof Error ? error.message : 'Unknown error');
      setFetchError(message);
      if (!isNetworkError) {
        console.error('Error fetching contacts:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (!loading && fetchError?.startsWith('Backend unavailable')) return null;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="contact-admin" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Contact Submissions</h2>
            <p className="text-slate-400">
              View all messages from your contact form ({contacts.length} total)
            </p>
          </div>
          <button
            onClick={fetchContacts}
            disabled={loading}
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl transition-all disabled:opacity-50"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {loading && contacts.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto"></div>
            <p className="text-slate-400 mt-4">Loading submissions...</p>
          </div>
        ) : fetchError ? (
          <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-red-500/20">
            <Mail size={48} className="mx-auto text-red-400/50 mb-4" />
            <p className="text-red-400 text-lg font-medium">Could not load submissions</p>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">{fetchError}</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-white/10">
            <Mail size={48} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400 text-lg">No contact submissions yet</p>
            <p className="text-slate-500 text-sm mt-2">Messages will appear here when someone fills out your contact form</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-violet-400" />
                    <span className="font-semibold">{contact.value.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-violet-400" />
                    <a 
                      href={`mailto:${contact.value.email}`}
                      className="text-slate-300 hover:text-violet-300 transition-colors"
                    >
                      {contact.value.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-violet-400" />
                    <span className="text-slate-400 text-sm">
                      {formatDate(contact.value.timestamp)}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={16} className="text-violet-400" />
                    <span className="text-sm text-slate-400">Subject:</span>
                    <span className="font-medium">{contact.value.subject}</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-slate-300 whitespace-pre-wrap">{contact.value.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactAdmin;