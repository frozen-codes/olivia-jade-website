import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function Avatar() {
  // Note: Replace this with actual avatar model path once available
  // const { scene } = useGLTF('/path-to-avatar-model.glb');
  
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#9333ea"
        emissive="#9333ea"
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

const AvatarGreeting = () => {
  return (
    <section className="h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="aspect-square max-h-[70vh]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
              />
              
              <Avatar />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Canvas>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <h2 className="font-['Montserrat_Alternates'] text-3xl md:text-4xl font-bold mb-4
              bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Meet Digital Olivia
            </h2>
            <p className="font-['Poppins'] text-lg text-gray-300">
              Your personal guide to the AuraVibe experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvatarGreeting;
