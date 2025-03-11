import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentHub from './components/ContentHub';
import AvatarGreeting from './components/AvatarGreeting';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <AvatarGreeting />
          </Suspense>
          <ContentHub />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
