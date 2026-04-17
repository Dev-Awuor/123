import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimationFrame {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  text?: string;
  textPosition?: 'top' | 'center' | 'bottom';
  showNav?: boolean;
  showOverlay?: boolean;
  overlayOpacity?: number;
}

const frames: AnimationFrame[] = [
  {
    id: 1,
    name: 'THE MOUNTAIN (REVELATION)',
    description: 'Cinematic wide shot of Lookout Mountain at sunrise',
    imageUrl: '/images/frame-1-mountain.jpg',
    text: 'On the Mountain... God Reveals.',
    textPosition: 'center',
    showNav: false,
    showOverlay: false,
  },
  {
    id: 2,
    name: 'THE REVEAL BEGINS',
    description: 'Clouds clearing, Tennessee River faintly visible',
    imageUrl: '/images/frame-2-reveal.jpg',
    text: 'On the Mountain... God Reveals.',
    textPosition: 'center',
    showNav: true,
    showOverlay: false,
    overlayOpacity: 0,
  },
  {
    id: 3,
    name: 'THE VALLEY + CAVE (FORMATION)',
    description: 'Man in valley near cave, contemplative mood',
    imageUrl: '/images/frame-3-valley-cave.jpg',
    text: 'In the Valley... He Forms.',
    textPosition: 'center',
    showNav: true,
    showOverlay: false,
  },
  {
    id: 4,
    name: 'ZOOM INTO THE VALLEY (IMMERSION)',
    description: 'Zoomed perspective of valley with cave enlarged',
    imageUrl: '/images/frame-4-zoom-valley.jpg',
    text: 'In the Valley... He Forms.',
    textPosition: 'top',
    showNav: true,
    showOverlay: false,
  },
  {
    id: 5,
    name: 'BUILDING THE VALLEY (COMMUNITY)',
    description: 'Modern community structures forming',
    imageUrl: '/images/frame-5-community-build.jpg',
    text: 'What Was Spoken... We Build.',
    textPosition: 'bottom',
    showNav: true,
    showOverlay: true,
    overlayOpacity: 0.5,
  },
  {
    id: 6,
    name: 'FULL TRANSITION (DOMINION)',
    description: 'Fully developed community, fully visible',
    imageUrl: '/images/frame-6-full-transition.jpg',
    text: 'What Was Spoken... We Build.',
    textPosition: 'bottom',
    showNav: true,
    showOverlay: true,
    overlayOpacity: 0,
  },
];

export const HeroAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the hero section
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight * 4; // 4x viewport height for animation
      const progress = Math.min(scrollTop / heroHeight, 1);
      setScrollProgress(progress);

      // Determine which frame to show based on scroll
      const frameIndex = Math.floor(progress * (frames.length - 1));
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const frame = frames[currentFrame];

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <motion.img
        key={`frame-${frame.id}`}
        src={frame.imageUrl}
        alt={frame.name}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Dark Overlay */}
      {frame.showOverlay && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: frame.overlayOpacity || 0 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Hero Text */}
      {frame.text && (
        <motion.div
          className={`absolute inset-x-0 flex items-center justify-center ${
            frame.textPosition === 'top'
              ? 'top-20'
              : frame.textPosition === 'bottom'
              ? 'bottom-20'
              : 'top-1/2 -translate-y-1/2'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg px-4">
            {frame.text}
          </h1>
        </motion.div>
      )}

      {/* Navigation Bar (appears in frames 2+) */}
      {frame.showNav && (
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {frames.map((_, idx) => (
          <motion.div
            key={idx}
            className="h-1 bg-white rounded-full"
            initial={{ width: '8px', opacity: 0.5 }}
            animate={{
              width: idx === currentFrame ? '24px' : '8px',
              opacity: idx === currentFrame ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};
