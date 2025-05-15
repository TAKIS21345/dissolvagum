"use client";

// import { Metadata } from 'next'; // Removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useRef } from 'react';

// Removed metadata export
// export const metadata: Metadata = {
//   title: 'Contact Us - DissolvaGum',
//   description: 'Get in touch with the DissolvaGum team. We are here to answer your questions and receive your feedback.',
// };

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message Sent!", {
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        if (formRef.current) formRef.current.reset();
      } else {
        const result = await res.json();
        toast.error((result as any).error || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <motion.h1 
        className="font-glacial-indifference-bold text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div 
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-glacial-indifference-bold text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Send us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-glacial-indifference">Full Name</Label>
              <Input type="text" id="name" name="name" required className="mt-1 w-full dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-glacial-indifference">Email Address</Label>
              <Input type="email" id="email" name="email" required className="mt-1 w-full dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 font-glacial-indifference">Subject</Label>
              <Input type="text" id="subject" name="subject" required className="mt-1 w-full dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-glacial-indifference">Message</Label>
              <Textarea id="message" name="message" rows={5} required className="mt-1 w-full dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-glacial-indifference-bold font-bold py-3">
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-glacial-indifference-bold text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Our Contact Information</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-start space-x-4 mb-4">
              <Mail size={24} className="text-teal-500 dark:text-teal-400 mt-1" />
              <div>
                <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200">Email</h3>
                <a href="mailto:team@dissolvagum.com" className="text-teal-600 dark:text-teal-400 hover:underline">team@dissolvagum.com</a>
                <p className="text-sm text-gray-500 dark:text-gray-400">For general inquiries and support.</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
            <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">Connect on Social (Placeholder)</h3>
            <div className="flex space-x-4">
              {/* Other social icons can remain or be updated as needed */}
              <a href="https://instagram.com/DissolvaGum" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors">
                {/* Instagram SVG icon */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

