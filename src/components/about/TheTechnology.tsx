"use client";

import { motion } from "framer-motion";
import { Zap, Atom, Recycle } from "lucide-react";

const TheTechnology = () => {
  return (
    <motion.section 
      className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <Atom className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">The Technology Behind DissolvaGum</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Discover the science that makes our gum disappear, not just your worries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Animated Diagram Placeholder */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white text-center">How It Works: A Visual Guide</h3>
            {/* Placeholder for animated diagram */}
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
              [Animated Diagram: Chicle Base → Encapsulated Emulsifiers → Breakdown Process]
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">This diagram will visually represent the dissolving mechanism.</p>
          </motion.div>

          {/* Breakdown Process Explanation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-teal-100 dark:bg-teal-800 rounded-full mr-4">
                  <Zap className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">Natural Chicle Base</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We start with a sustainably sourced natural chicle base, providing the perfect chewiness you expect from premium gum.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full mr-4">
                  <Atom className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">Encapsulated Emulsifiers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The magic lies in our patented food-grade emulsifiers. These are micro-encapsulated and designed to remain stable during chewing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full mr-4">
                  <Recycle className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">Rapid Breakdown Process</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Once you\'re done chewing and the gum is exposed to a change in environment (e.g., saliva dilution, air), the capsules break down, releasing the emulsifiers. These rapidly break apart the gum\'s structure, allowing it to dissolve harmlessly and completely in a short period.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TheTechnology;

