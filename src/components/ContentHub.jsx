import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { mediaContent } from '../data/content';

const MediaCard = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current && item.type === 'video') {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && item.type === 'video') {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (item.type === 'gallery') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-2 bg-purple-900/20 rounded-xl overflow-hidden backdrop-blur-sm
          border border-purple-500/20 p-6"
      >
        <h3 className="font-['Montserrat_Alternates'] text-xl font-bold mb-4 text-white">
          {item.title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {item.images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-purple-900/20 rounded-xl overflow-hidden backdrop-blur-sm
        border border-purple-500/20 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video relative overflow-hidden">
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            src={item.url}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500
              group-hover:scale-110"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="font-['Montserrat_Alternates'] text-xl font-bold mb-2 text-white">
          {item.title}
        </h3>
        <p className="font-['Poppins'] text-gray-300">
          {item.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300
            font-['Poppins'] text-sm hover:bg-purple-500/30 transition-colors duration-300"
        >
          {item.type === 'video' ? 'Watch Now' : 'View More'} →
        </motion.button>
      </div>
    </motion.div>
  );
};

const ContentHub = () => {
  const [activeCategory, setActiveCategory] = useState('fashion');
  const categories = [
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'tech', name: 'Tech', icon: '💻' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '✨' }
  ];

  return (
    <section className="min-h-screen bg-black/90 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Montserrat_Alternates'] text-4xl md:text-5xl font-bold text-center mb-12
            bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Explore My World
        </motion.h2>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-['Poppins'] text-lg transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-purple-900/20 text-gray-300 hover:bg-purple-900/40'
                }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mediaContent[activeCategory].items.map(item => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
