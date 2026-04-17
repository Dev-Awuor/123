import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from './Navbar';
import valleyImage from '../assets/obc/animate/frame-1-mountain.jpg';
import jesusImage from '../assets/obc/animate/Jesus.png';
import cloudsImage from '../assets/obc/animate/clouds.jpg';

export const ScrollPopAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full">
      {/* ─── NAVBAR SECTION ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Navbar />
      </motion.div>

      {/* ─── SECTION 1: MOUNTAIN + JESUS ─── */}
      <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Background: Mountain (pops in first) */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src={valleyImage}
              alt="Mountain Valley"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Foreground: Jesus (stays on top layer) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src={jesusImage}
              alt="Jesus overlooking valley"
              className="h-full object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Hero Text */}
        <motion.div
          className="absolute top-32 left-0 right-0 z-20 pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl px-4 max-w-4xl mx-auto leading-tight">
            On the Mountain...
            <br />
            <span className="text-obc-lavender">God Reveals.</span>
          </h1>
        </motion.div>
      </section>

      {/* ─── SECTION 2: VALLEY FULL ─── */}
      <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <img
            src={valleyImage}
            alt="Valley"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl px-4 max-w-4xl leading-tight">
            In the Valley...
            <br />
            <span className="text-obc-lavender">He Forms.</span>
          </h2>
        </motion.div>
      </section>

      {/* ─── SECTION 3: CLOUDS ─── */}
      <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Clouds Background Layer */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <img
            src={cloudsImage}
            alt="Clouds"
            className="w-full h-full object-cover"
            style={{ backgroundColor: 'transparent' }}
          />
        </motion.div>

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Overlay text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl px-4 max-w-4xl leading-tight">
            What Was Spoken...
            <br />
            <span className="text-obc-lavender">We Build.</span>
          </h2>
        </motion.div>
      </section>

      {/* Progress indicator - only visible during scroll */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40 pointer-events-none">
        <motion.div
          className="h-1 bg-white rounded-full"
          initial={{ width: '24px' }}
          whileInView={{ width: '8px' }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="h-1 bg-white rounded-full"
          initial={{ width: '8px' }}
          whileInView={{ width: '24px' }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="h-1 bg-white rounded-full"
          initial={{ width: '8px' }}
          whileInView={{ width: '24px' }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  );
};
