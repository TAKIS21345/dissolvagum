"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background via-primary/70 to-secondary/60 dark:from-background dark:via-primary/50 dark:to-secondary/40 text-foreground overflow-hidden py-16">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <style jsx>{`
          @keyframes subtleGradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient-bg {
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, var(--accent), var(--primary), var(--secondary), var(--accent));
            background-size: 400% 400%;
            animation: subtleGradientShift 20s infinite ease-in-out;
          }
        `}</style>
        <div className="animated-gradient-bg"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-3xl mx-auto">
        {/* Placeholder for Video loop - could be an actual video or an animated SVG/GIF */}

        <motion.h1 
          className="font-glacial-indifference-bold text-5xl md:text-7xl font-bold mb-8 text-gray-800 dark:text-white leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Chew Some Gum, Skip the Mess.
        </motion.h1>
        
        <motion.p 
          className="font-glacial-indifference text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Experience the future of chewing gum. DissolvaGum offers incredible flavor and a satisfying chew, then simply melts away. No mess, no waste, just pure enjoyment.
        </motion.p>

        <Link href="/shop" passHref>
          <motion.button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-glacial-indifference-bold font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-background mb-12"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discover DissolvaGum
          </motion.button>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
          {[ "Zero Waste", "Fully Dissolvable", "Great Taste"].map((text, i) => (
            <motion.div 
              key={text}
              className="bg-white/70 dark:bg-black/30 backdrop-blur-md p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            >
              <h3 className="font-glacial-indifference-bold text-lg font-semibold text-gray-800 dark:text-white">{text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

