"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const EnvironmentalImpact = () => {
  return (
    <motion.section 
      className="py-12 md:py-16 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <Leaf className="mx-auto text-green-500 dark:text-green-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Environmental Impact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Chewing responsibly: How DissolvaGum helps reduce waste and protect our planet.
          </p>
        </div>
        <motion.div
          className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-white">The Problem with Traditional Gum</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            Traditional chewing gum is made from synthetic polymers, similar to plastics. It doesn't biodegrade, leading to unsightly litter on streets, under tables, and in public spaces. This waste is costly to clean up and contributes to plastic pollution.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
            DissolvaGum offers a clean alternative. By dissolving completely, it leaves no trace, helping keep our environment cleaner, one chew at a time.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
            <h4 className="text-md font-semibold text-gray-700 dark:text-white">Did you know?</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">It can cost local councils significant amounts annually to remove conventional gum litter from pavements.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnvironmentalImpact;

