"use client";

import { motion } from "framer-motion";
import { FlaskConical, CheckCircle, Clock } from "lucide-react";

const ScienceBreakdown = () => {
  const points = [
    {
      icon: <FlaskConical className="text-blue-500 dark:text-blue-400" size={32} />,
      title: "Polysorbate Release Mechanism",
      description: "Our food-grade polysorbates are encapsulated. Upon changes in the oral environment (e.g., after active chewing stops and saliva pH changes slightly or exposure to air), these capsules gently rupture, releasing the emulsifying agents.",
      image: "/placeholder-science-polysorbate.png" // Placeholder image
    },
    {
      icon: <CheckCircle className="text-green-500 dark:text-green-400" size={32} />,
      title: "Microbial Breakdown Process",
      description: "The released emulsifiers break down the gum base into smaller, water-soluble components. These components are then easily processed by common oral microbes and further break down naturally in the environment, leaving no harmful residues.",
      image: "/placeholder-science-microbial.png" // Placeholder image
    },
    {
      icon: <Clock className="text-orange-500 dark:text-orange-400" size={32} />,
      title: "Timeline to Complete Dissolution",
      description: "Once spat out, DissolvaGum typically dissolves completely within a few hours, depending on environmental conditions like moisture and temperature. This is a stark contrast to conventional gum which can persist for years.",
      image: "/placeholder-science-timeline.png" // Placeholder image
    }
  ];

  return (
    <motion.section 
      className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <FlaskConical className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">The Science Simplified</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            A closer look at the innovative chemistry that makes DissolvaGum work.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-600 rounded-full">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{point.title}</h3>
              {/* Placeholder for simple, colorful illustration */}
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-500 rounded-md mb-4 flex items-center justify-center text-gray-400 dark:text-gray-300">
                [Illustration for {point.title}]
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-8 text-center">Note: The scientific explanations are simplified for this showcase website.</p>
      </div>
    </motion.section>
  );
};

export default ScienceBreakdown;

