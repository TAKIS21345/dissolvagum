"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Alex is the visionary behind DissolvaGum, driven by a passion for sustainability and innovation. With a background in material science, Alex spearheaded the research and development of our unique dissolvable gum formula.",
    image: "/placeholder-alex.png", // Placeholder image
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of R&D",
    bio: "Dr. Sharma leads our research team, bringing over 15 years of experience in food technology and polymer chemistry. Her expertise was crucial in perfecting the taste, texture, and dissolvability of DissolvaGum.",
    image: "/placeholder-priya.png", // Placeholder image
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ben Carter",
    role: "Marketing Director",
    bio: "Ben is a creative marketing strategist with a knack for building brands that resonate. He is dedicated to sharing the DissolvaGum story and its positive impact with the world.",
    image: "/placeholder-ben.png", // Placeholder image
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const TeamBios = () => {
  return (
    <motion.section 
      className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/70 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <Briefcase className="mx-auto text-teal-500 dark:text-teal-400 mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Meet the Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            The passionate individuals bringing DissolvaGum to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-teal-500 dark:border-teal-400">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="bg-gray-300 dark:bg-gray-600" // Background for placeholder
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{member.bio}</p>
              <div className="flex space-x-3">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamBios;

