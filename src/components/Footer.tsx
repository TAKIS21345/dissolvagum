"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">DissolvaGum</h3>
            <p className="text-sm mb-4">
              Chew Some Gum, Skip the Mess. Eco-friendly, long-lasting, and no sticky waste.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-teal-400 transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/terms" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/shipping" className="hover:text-teal-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/legal/accessibility" className="hover:text-teal-400 transition-colors">Accessibility Statement</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DissolvaGum. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-teal-400 transition-colors"><Facebook size={20}/></a>
            <a href="#" aria-label="Twitter" className="hover:text-teal-400 transition-colors"><Twitter size={20}/></a>
            <a href="#" aria-label="Instagram" className="hover:text-teal-400 transition-colors"><Instagram size={20}/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-teal-400 transition-colors"><Linkedin size={20}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

