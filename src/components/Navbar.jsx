import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-['Montserrat_Alternates'] text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AuraVibe
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#content">Content</NavLink>
              <NavLink href="#store">Store</NavLink>
              <NavLink href="#chat">AI Chat</NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="font-['Poppins'] text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium 
    transition-all duration-300 hover:bg-purple-500/20"
  >
    {children}
  </a>
);

export default Navbar;
