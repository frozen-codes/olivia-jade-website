import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { mediaContent } from '../data/content';

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mediaContent.hero.featured[0].url}
          alt={mediaContent.hero.featured[0].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/70 to-black z-10" />
      </div>
      
      {/* Dynamic grid background */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 opacity-20 z-20">
        {Array(48).fill().map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="font-['Montserrat_Alternates'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
              Welcome to AuraVibe
            </span>
          </h1>
          <p className="font-['Poppins'] text-xl md:text-2xl text-gray-300 mb-8">
            {greeting}, explorer! Step into the future of digital experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full
            font-['Poppins'] text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30
            transition-all duration-300"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
