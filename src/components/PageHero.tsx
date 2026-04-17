import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type HeroLine = {
  text: string,
  accent?: boolean,
};

type HeroAction = {
  label: string,
  to?: string,
  href?: string,
  variant?: 'primary' | 'secondary',
};

type PageHeroProps = {
  eyebrow: string,
  title: HeroLine[],
  description?: string,
  image: string,
  imageAlt: string,
  watermark: string,
  imageLabel?: string,
  actions?: HeroAction[],
  floatingImage?: string,
  floatingAlt?: string,
  imageClassName?: string,
};

const heroContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  watermark,
  imageLabel,
  actions = [],
  floatingImage,
  floatingAlt,
  imageClassName = ''
}: PageHeroProps) {
  return (
    <section className="relative mt-20 overflow-hidden border-b border-obc-midnight/10 bg-obc-offwhite">
      <div className="grid min-h-[calc(78vh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)]">
        <motion.div
          initial={{
            opacity: 0,
            clipPath: 'inset(0 0 100% 0)'
          }}
          animate={{
            opacity: 1,
            clipPath: 'inset(0 0 0 0)'
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative min-h-[42vh] overflow-hidden border-b border-obc-midnight/10 lg:min-h-full lg:border-b-0 lg:border-r">
          
          <motion.img
            initial={{
              scale: 1.12,
              filter: 'grayscale(1)'
            }}
            animate={{
              scale: 1,
              filter: 'grayscale(0.18)'
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            src={image}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imageClassName}`} />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-obc-midnight/70 via-obc-primary/25 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,173,255,0.28),transparent_34%)]" />

          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-6 md:right-6">
            <p className="hero-watermark text-white/[0.08]">{watermark}</p>
          </div>

          {floatingImage &&
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              rotate: -4
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -2
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35
            }}
            className="absolute bottom-0 right-6 hidden max-w-[14rem] lg:block">
            
            <img
              src={floatingImage}
              alt={floatingAlt ?? ''}
              className="max-h-[22rem] w-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
            
          </motion.div>
          }
        </motion.div>

        <div className="paper-panel relative flex items-center overflow-hidden px-6 py-14 sm:px-10 lg:px-12 xl:px-16">
          <div className="absolute inset-y-0 right-0 w-px bg-obc-accent/25" />
          <div className="absolute right-[-4rem] top-8 hidden lg:block">
            <p className="hero-watermark text-obc-midnight/[0.05]">{watermark}</p>
          </div>

          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-xl">
            
            <motion.p
              variants={heroItem}
              className="hero-kicker mb-5 text-obc-accent">
              
              {eyebrow}
            </motion.p>

            <motion.div variants={heroItem} className="space-y-1">
              {title.map((line) =>
              <span
                key={line.text}
                className={`hero-display block ${line.accent ? 'text-obc-accent' : 'text-obc-midnight'}`}>
                
                  {line.text}
                </span>
              )}
            </motion.div>

            {description &&
            <motion.p
              variants={heroItem}
              className="mt-8 max-w-lg text-lg leading-relaxed text-obc-midnight/72 md:text-xl">
              
                {description}
              </motion.p>
            }

            <motion.div
              variants={heroItem}
              className="mt-10 h-px w-full max-w-md origin-left bg-obc-midnight/15" />

            {actions.length > 0 &&
            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              
                {actions.map((action) => {
                const className = `action-link action-link-bracket ${action.variant === 'primary' ? 'text-obc-midnight hover:text-obc-accent' : 'text-obc-midnight/70 hover:text-obc-accent'}`;
                const content = (
                  <>
                    <span>{action.label}</span>
                    <ArrowUpRight size={16} />
                  </>
                );
                if (action.to) {
                  return (
                    <Link key={action.label} to={action.to} className={className}>
                      {content}
                    </Link>);
                }
                const isExternal = action.href?.startsWith('http');
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={className}>
                    
                    {content}
                  </a>);
              })}
              </motion.div>
            }
          </motion.div>
        </div>
      </div>
    </section>);
}
