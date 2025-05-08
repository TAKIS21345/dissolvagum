"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "DissolvaGum is a game-changer! Tastes great and no more sticky mess under tables. My kids love it too.",
    name: "Sarah L.",
    rating: 5,
  },
  {
    quote: "Finally, a gum I can chew without worrying about where to dispose of it. The spearmint flavor is fantastic.",
    name: "John B.",
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but DissolvaGum actually works! It just... disappears. Highly recommend.",
    name: "Emily K.",
    rating: 4,
  },
  {
    quote: "The eco-friendly aspect is what sold me. Plus, the long-lasting flavor is a huge bonus.",
    name: "David P.",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Auto-rotate every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < current.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`} fill={i < current.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6">"{current.quote}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">- {current.name}</p>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevTestimonial} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors text-gray-700 dark:text-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors text-gray-700 dark:text-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-teal-500' : 'bg-gray-300 dark:bg-gray-500 hover:bg-teal-300 dark:hover:bg-teal-700'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

