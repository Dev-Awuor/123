import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from './Navbar';
import valleyImage from '../assets/obc/animate/frame-1-mountain.jpg';
import jesusImage from '../assets/obc/animate/Jesus.png';
import cloudsImage from '../assets/obc/animate/clouds.jpg';

export const ScrollRevealAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // FRAME 1 (0-33%): Jesus enters with text
  // FRAME 2 (33-66%): Valley fades in behind
  // FRAME 3 (66-100%): Clouds + navbar come in

  // Jesus image animations
  const jesusOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);
  const jesusScale = useTransform(scrollYProgress, [0, 0.15, 1], [0.8, 1, 1]);
  const jesusY = useTransform(scrollYProgress, [0, 0.15, 1], [100, 0, 0]);

  // Valley background animations
  const valleyOpacity = useTransform(scrollYProgress, [0.15, 0.5, 1], [0, 1, 1]);
  const valleyScale = useTransform(scrollYProgress, [0.15, 0.5, 0.8, 1], [1.2, 1, 1, 1]);

  // Clouds + Navbar animations
  const cloudsOpacity = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 1]);
  const cloudsY = useTransform(scrollYProgress, [0.5, 0.75, 1], [200, 0, 0]);

  // Text animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 0.5, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2, 0.6], [0.9, 1, 1.1]);

  // Navbar animations
  const navbarOpacity = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 1]);
  const navbarY = useTransform(scrollYProgress, [0.5, 0.75, 1], [80, 0, 0]);

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className="relative">
      {/* Fixed Scene Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {/* LAYER 1: Valley Background */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: valleyOpacity, scale: valleyScale }}
        >
          <img
            src={valleyImage}
            alt="Valley"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LAYER 2: Jesus (Center) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: jesusOpacity, scale: jesusScale, y: jesusY }}
        >
          <img
            src={jesusImage}
            alt="Jesus overlooking valley"
            className="h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* LAYER 3: Clouds Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: cloudsOpacity, y: cloudsY }}
        >
          <img
            src={cloudsImage}
            alt="Clouds"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LAYER 4: Dark Overlay (for navbar contrast) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent"
          style={{ opacity: navbarOpacity }}
        />

        {/* LAYER 5: Text Overlay */}
        <motion.div
          className="absolute inset-0 flex items-start justify-center pt-20 pointer-events-none"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-2xl px-4 max-w-4xl leading-tight">
            On the Mountain... God Reveals.
          </h1>
        </motion.div>

        {/* LAYER 6: Navbar (Fixed top, fades in with clouds) */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-50"
          style={{ opacity: navbarOpacity, y: navbarY }}
        >
          <Navbar />
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          <motion.div
            className="h-1 bg-white/70 rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0, 0.33], ['8px', '24px']),
            }}
          />
          <motion.div
            className="h-1 bg-white/70 rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0.33, 0.66], ['8px', '24px']),
            }}
          />
          <motion.div
            className="h-1 bg-white/70 rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0.66, 1], ['8px', '24px']),
            }}
          />
        </div>
      </div>

      {/* Content Section Below Animation */}
      <div className="relative bg-white">
        {/* Your page content goes here */}
      </div>
    </div>
  );
};
