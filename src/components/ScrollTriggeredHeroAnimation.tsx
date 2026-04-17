import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimationSequence {
  frame: number;
  delay: number; // ms delay for auto-trigger
  duration: number; // animation duration in ms
  scale?: number; // scale transformation
  opacity?: number; // opacity change
  yOffset?: number; // vertical parallax offset
}

const animationSequences: AnimationSequence[] = [
  {
    frame: 1,
    delay: 0,
    duration: 3500,
    opacity: 1,
    scale: 1,
  },
  {
    frame: 2,
    delay: 3500,
    duration: 2500,
    opacity: 1,
    scale: 1,
    yOffset: -50,
  },
  {
    frame: 3,
    delay: 6000,
    duration: 2500,
    opacity: 1,
    scale: 1.1,
    yOffset: -100,
  },
  {
    frame: 4,
    delay: 8500,
    duration: 2500,
    opacity: 1,
    scale: 1.3,
    yOffset: -150,
  },
  {
    frame: 5,
    delay: 11000,
    duration: 2500,
    opacity: 0.9,
    scale: 1.5,
    yOffset: -200,
  },
  {
    frame: 6,
    delay: 13500,
    duration: 3000,
    opacity: 1,
    scale: 1,
    yOffset: 0,
  },
];

interface AnimationFrameProps {
  frameNumber: number;
  imageUrl: string;
  text?: string;
  textPosition?: 'top' | 'center' | 'bottom';
  overlayOpacity?: number;
  scale?: number;
  yOffset?: number;
  opacity?: number;
}

const AnimationFrame: React.FC<AnimationFrameProps> = ({
  frameNumber,
  imageUrl,
  text,
  textPosition = 'center',
  overlayOpacity = 0,
  scale = 1,
  yOffset = 0,
  opacity = 1,
}) => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      animate={{
        scale,
        y: yOffset,
        opacity,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      {/* Image Layer */}
      <img
        src={imageUrl}
        alt={`Frame ${frameNumber}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      {overlayOpacity > 0 && (
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: overlayOpacity }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Text Layer */}
      {text && (
        <motion.div
          className={`absolute inset-x-0 flex items-center justify-center ${
            textPosition === 'top'
              ? 'top-20'
              : textPosition === 'bottom'
              ? 'bottom-32'
              : 'top-1/2 -translate-y-1/2'
          }`}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white text-center drop-shadow-2xl px-4 max-w-4xl leading-tight">
            {text}
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
};

export const ScrollTriggeredHeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frames = [
    {
      number: 1,
      name: 'THE MOUNTAIN (REVELATION)',
      imageUrl: '/images/frame-1-mountain.jpg',
      text: 'On the Mountain... God Reveals.',
      textPosition: 'center' as const,
      overlayOpacity: 0,
    },
    {
      number: 2,
      name: 'THE REVEAL BEGINS',
      imageUrl: '/images/frame-2-reveal.jpg',
      text: 'On the Mountain... God Reveals.',
      textPosition: 'center' as const,
      overlayOpacity: 0,
    },
    {
      number: 3,
      name: 'THE VALLEY + CAVE',
      imageUrl: '/images/frame-3-valley-cave.jpg',
      text: 'In the Valley... He Forms.',
      textPosition: 'center' as const,
      overlayOpacity: 0,
    },
    {
      number: 4,
      name: 'ZOOM INTO VALLEY',
      imageUrl: '/images/frame-4-zoom-valley.jpg',
      text: 'In the Valley... He Forms.',
      textPosition: 'top' as const,
      overlayOpacity: 0,
    },
    {
      number: 5,
      name: 'BUILDING COMMUNITY',
      imageUrl: '/images/frame-5-community-build.jpg',
      text: 'What Was Spoken... We Build.',
      textPosition: 'bottom' as const,
      overlayOpacity: 0.5,
    },
    {
      number: 6,
      name: 'FULL TRANSITION',
      imageUrl: '/images/frame-6-full-transition.jpg',
      text: 'What Was Spoken... We Build.',
      textPosition: 'bottom' as const,
      overlayOpacity: 0,
    },
  ];

  // Calculate frame-specific scroll transforms
  const frameOpacities = frames.map((_, idx) => {
    return useTransform(
      scrollYProgress,
      [idx / frames.length, (idx + 1) / frames.length],
      [0, 1]
    );
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '400vh' }} // 4x viewport for animation space
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {frames.map((frame, idx) => (
          <motion.div
            key={frame.number}
            className="absolute inset-0"
            style={{ opacity: frameOpacities[idx] }}
          >
            <AnimationFrame
              frameNumber={frame.number}
              imageUrl={frame.imageUrl}
              text={frame.text}
              textPosition={frame.textPosition}
              overlayOpacity={frame.overlayOpacity}
            />
          </motion.div>
        ))}

        {/* Progress Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {frames.map((_, idx) => (
            <motion.div
              key={idx}
              className="h-1 bg-white rounded-full"
              style={{
                width: useTransform(
                  scrollYProgress,
                  [idx / frames.length, (idx + 1) / frames.length],
                  ['8px', '24px']
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [idx / frames.length, (idx + 1) / frames.length],
                  [0.5, 1]
                ),
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
