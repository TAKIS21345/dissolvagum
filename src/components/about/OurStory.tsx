"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb } from "lucide-react";

const OurStory = () => {
  return (
    <motion.section 
      className="py-12 md:py-16 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <BookOpen className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            The journey of DissolvaGum: from a simple idea to a revolutionary product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Founder's Inspiration Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Lightbulb className="text-yellow-500 mb-3" size={32} />
              <h3 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-white">The Spark of Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "It all started at school," recalls Taksh Nahata. "Seeing gum stuck everywhere, including on my shoe, I realized this was a problem that needed solving. That moment sparked the idea for DissolvaGum."
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                This initial frustration led to years of research and collaboration, culminating in the creation of a gum that dissolves and leaves no mess behind.
              </p>
            </div>
          </motion.div>

          {/* Timeline Graphic Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-teal-50 dark:bg-teal-900/50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Our Journey: Key Milestones</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 dark:text-teal-400 mr-2">2021:</span> Idea Conception - The park bench moment.
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 dark:text-teal-400 mr-2">2022:</span> R&D Phase - Exploring biodegradable materials and safe dissolving agents.
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 dark:text-teal-400 mr-2">2023:</span> First Prototype - A chewable, dissolvable formula achieved.
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 dark:text-teal-400 mr-2">2024:</span> Flavor Development & Testing - Perfecting taste and texture.
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-teal-600 dark:text-teal-400 mr-2">2025:</span> DissolvaGum Launch - Bringing our vision to the world!
                </li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">* This is a conceptual timeline for the showcase website.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;

