"use client";

// import { Metadata } from 'next'; // Removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Removed metadata export
// export const metadata: Metadata = {
//   title: 'Contact Us - DissolvaGum',
//   description: 'Get in touch with the DissolvaGum team. We are here to answer your questions and receive your feedback.',
// };

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    toast.success("Message Sent!", {
      description: "Thank you for contacting us. We'll get back to you shortly. (This is a placeholder)",
    });
    (event.target as HTMLFormElement).reset();
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex items-start space-x-4 mb-4">
              <Phone size={24} className="text-teal-500 dark:text-teal-400 mt-1" />
              <div>
                <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200">Phone (Placeholder)</h3>
                <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mon - Fri, 9am - 5pm EST</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-teal-500 dark:text-teal-400 mt-1" />
              <div>
                <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200">Office (Conceptual)</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Innovation Drive, Suite 404<br/>Tech City, TC 54321</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">We are a digital-first company.</p>
              </div>
            </div>
          </div>
           <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
             <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">Connect on Social (Placeholder)</h3>
             <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.455 0 1.613.823 3.043 2.074 3.878-.765-.025-1.482-.233-2.11-.583v.061c0 2.254 1.603 4.135 3.729 4.568-.389.106-.802.163-1.228.163-.300 0-.591-.03-.876-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.099 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.479 2.323-2.41z"/></svg></a>
                <a href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
             </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

