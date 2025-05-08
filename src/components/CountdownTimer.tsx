"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    // @ts-ignore
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }
    timerComponents.push(
      <div key={interval} className="text-center">
        {/* @ts-ignore */}
        <span className="text-2xl md:text-3xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="block text-xs uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <motion.div 
      className="bg-red-500 dark:bg-red-700 text-white p-4 rounded-lg shadow-lg my-8 max-w-md mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-2">
        <AlertTriangle size={24} className="mr-2" />
        <h3 className="text-lg font-semibold">Limited Time Offer!</h3>
      </div>
      {timerComponents.length ? (
        <div className="flex justify-around items-start">
          {timerComponents}
        </div>
      ) : (
        <p className="text-center text-xl font-bold">Offer Expired!</p>
      )}
      <p className="text-xs text-center mt-3 opacity-80">Placeholder: Offer ends when timer reaches zero.</p>
    </motion.div>
  );
};

export default CountdownTimer;

