"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, ChevronsRight } from "lucide-react";

const InteractiveExperience = () => {
  const [isChewing, setIsChewing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 2 hours in seconds
  const [showDissolution, setShowDissolution] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isChewing && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isChewing) {
      setIsChewing(false);
      // Optionally trigger something when timer ends before spitting out
    }
    return () => clearInterval(timer);
  }, [isChewing, timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleStartChewing = () => {
    setIsChewing(true);
    setShowDissolution(false);
    setTimeLeft(120*60); // Reset timer
  };

  const handleSpitOut = () => {
    setIsChewing(false);
    setShowDissolution(true);
  };

  const handleReset = () => {
    setIsChewing(false);
    setShowDissolution(false);
    setTimeLeft(120 * 60);
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <Play className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Experience DissolvaGum</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Simulate the unique dissolving action of our revolutionary gum.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          {/* Gum Animation Placeholder */}
          <div className="w-full h-48 bg-teal-200 dark:bg-teal-800 rounded-md flex flex-col items-center justify-center text-teal-700 dark:text-teal-300 mb-6 relative overflow-hidden">
            <AnimatePresence>
            {!showDissolution && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                exit={{ opacity: 0, scale: 0.5}}
                className="text-center"
              >
                <p className="text-2xl font-semibold">{(isChewing) ? "Chewing..." : "Ready to Chew!"}</p>
                {isChewing && <p className="text-4xl font-mono mt-2">{formatTime(timeLeft)}</p>}
                {!isChewing && !showDissolution && <p className="mt-2">Press "Start Chewing"</p>}
              </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {showDissolution && (
              <motion.div
                key="dissolving"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-teal-200 dark:bg-teal-800 p-4"
              >
                <motion.div 
                  className="w-16 h-16 bg-white dark:bg-gray-300 rounded-full mb-3"
                  animate={{
                    scale: [1, 1.2, 0.8, 0.5, 0],
                    opacity: [1, 0.8, 0.6, 0.3, 0],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <p className="text-xl font-semibold">Dissolving Rapidly...</p>
                <p className="text-sm">No trace left behind!</p>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button 
              onClick={handleStartChewing} 
              disabled={isChewing}
              className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-150"
            >
              <Play size={20} className="mr-2" /> Start Chewing
            </button>
            <button 
              onClick={handleSpitOut} 
              disabled={!isChewing || showDissolution}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-150"
            >
              <ChevronsRight size={20} className="mr-2" /> Spit Out
            </button>
            <button 
              onClick={handleReset} 
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-150"
            >
              <RotateCcw size={20} className="mr-2" /> Reset
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">This is a simplified simulation for demonstration purposes.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveExperience;

