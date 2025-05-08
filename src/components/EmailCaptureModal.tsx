import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <Mail className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Get 10% Off!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to our newsletter and get an exclusive 10% discount on your first DissolvaGum order. Plus, stay updated on new flavors and special offers!
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-150 text-base"
                >
                  Subscribe & Get Discount
                </button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailCaptureModal;

