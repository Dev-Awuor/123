import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollPopAnimation } from '../components/ScrollPopAnimation';
import { siteAssets } from '../content/siteAssets';
import { eventPath, homePreviewEvents } from '../content/events';
import { socialLinks } from '../content/siteLinks';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50
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
const stagger = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
export function Home() {
  return (
    <main className="w-full overflow-hidden">
      <ScrollPopAnimation />

      <section className="bg-obc-midnight py-4">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-[0.24em] text-obc-lavender">
            
            <span>Sundays 9:30AM</span>
            <span className="text-white/40">Downtown</span>
            <span>Sundays 12:00PM</span>
            <span className="text-white/40">Olivet Nation</span>
            <span>Weekday Outreach 12:00PM</span>
            <span className="text-white/40">Matthew 25</span>
          </motion.div>
        </div>
      </section>

      {/* ─── BISHOP ADAMS SECTION ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-5/12">
              
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={siteAssets.pastorPortrait}
                  alt="Bishop Kevin L. Adams, Sr."
                  className="w-full h-full object-cover rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-[1.02]" />
                
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={stagger}
              className="w-full lg:w-7/12">
              
              <motion.p
                variants={fadeUp}
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-6">
                
                {'{ SENIOR PASTOR }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,6rem)] text-white">
                
                BISHOP KEVIN L.
                <br />
                <span className="text-obc-lavender">ADAMS, SR.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                
                For over 30 years, Bishop Adams has shepherded the Olivet family
                with bold, uncompromising teaching rooted in Kingdom principles.
                His vision is simple — build a family of believers who model the
                Kingdom of God in the earth.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/about"
                  className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
                  
                  Learn More About Bishop Adams
                  <ArrowUpRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LATEST SERMON ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-16 border-b border-obc-midnight/10 pb-6">
            
            <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
              {"{ THIS WEEK'S MESSAGE }"}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              DON'T FORGET
              <br />
              WHAT WORKS
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-2/3">
              
              <div className="relative aspect-video w-full rounded-sm overflow-hidden group cursor-pointer shadow-2xl mb-8">
                <img
                  src={siteAssets.posterFeature}
                  alt="Sermon Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-obc-midnight/40 transition-opacity group-hover:bg-obc-midnight/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 transition-transform duration-300 group-hover:scale-110 shadow-xl">
                    <Play size={36} className="text-obc-primary" />
                  </div>
                </div>
              </div>
              <Link
                to="/watch"
                className="inline-flex items-center bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 group">
                
                Watch the full message
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-1/3 bg-white p-10 rounded-sm shadow-xl border border-obc-light">
              
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-6">
                {'{ NEXT SERIES }'}
              </p>
              <div className="aspect-[4/3] bg-obc-light rounded-sm mb-8 overflow-hidden">
                <img
                  src={siteAssets.posterPrayer}
                  alt="Next Series"
                  className="w-full h-full object-cover opacity-90" />
                
              </div>
              <h4 className="font-serif text-obc-midnight text-3xl mb-3 leading-none">
                KINGDOM
                <br />
                AUTHORITY
              </h4>
              <p className="text-obc-midnight/70 mb-8 text-sm">
                Starting next Sunday across all campuses.
              </p>
              <Link
                to="/watch"
                className="inline-flex items-center text-obc-accent font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-accent pb-1 hover:text-obc-primary hover:border-obc-primary transition-colors duration-300 group">
                
                Download Notes
                <ArrowUpRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EVENTS PREVIEW ─── */}
      <section className="bg-obc-primary py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-6 gap-6">
            
            <div>
              <p className="text-obc-lavender text-xs uppercase tracking-[0.3em] font-bold mb-3">
                {"{ WHAT'S NEXT }"}
              </p>
              <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
                UPCOMING
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
              
              See All Events
              <ArrowUpRight
                size={18}
                className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="space-y-0 divide-y divide-white/10">
            
            {homePreviewEvents.map((event) =>
            <motion.div
              key={event.slug}
              variants={fadeUp}
              className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center group cursor-pointer">
              
                <div className="md:col-span-3 flex gap-4 items-baseline">
                  <p className="stat-display text-obc-lavender">
                    {event.day}
                  </p>
                  <p className="text-white/70 text-sm uppercase tracking-[0.25em] font-bold">
                    {event.month}
                  </p>
                </div>
                <div className="md:col-span-6 border-l-2 border-transparent group-hover:border-obc-lavender pl-0 md:pl-6 transition-colors duration-300">
                  <h3 className="section-display mb-2 text-[clamp(2rem,3vw,3rem)] text-white transition-colors group-hover:text-obc-lavender">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-base">{event.teaser}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Link
                    to={eventPath(event.slug)}
                    className="inline-flex items-center text-obc-lavender font-bold uppercase tracking-[0.2em] text-xs group-hover:tracking-[0.3em] transition-all duration-300">
                    
                    Details <ArrowUpRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── GIVE SECTION ─── */}
      <section className="bg-obc-midnight py-32 md:py-48 relative overflow-hidden">
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <p className="font-serif text-white text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none font-bold whitespace-nowrap">
            GIVE
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={stagger}>
            
            <motion.p
              variants={fadeUp}
              className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-8">
              
              {'{ GENEROSITY CHANGES EVERYTHING }'}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12">
              
              "Bring the whole tithe into the storehouse, that there may be food
              in my house."
              <span className="block text-obc-lavender text-2xl md:text-3xl mt-8 italic">
                — Malachi 3:10
              </span>
            </motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center">
              <Link
                to="/give"
                className="inline-flex items-center bg-white text-obc-midnight px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
                
                Give Now
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CAMPUSES SECTION ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-16 border-b border-obc-midnight/10 pb-6">
            
            <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
              {'{ LOCATIONS }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              FIND YOUR HOME
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="space-y-0 divide-y divide-obc-midnight/10">
            
            {[
            {
              name: 'MAIN CAMPUS',
              address: '740 E MLK Blvd, Chattanooga, TN 37403',
              times: 'Sundays 9:30AM // Wednesdays 12PM & 6:30PM',
              img: siteAssets.buildingHero
            },
            {
              name: 'OLIVET NATION',
              address: '4872 Jersey Pike, Chattanooga, TN 37416',
              times: 'Sundays 12:00PM',
              img: siteAssets.buildingWide
            },
            {
              name: 'MATTHEW 25 CAMPUS',
              address: '751 E MLK Blvd, Chattanooga, TN 37403',
              times: 'Weekday Feeding 12PM // Clothing Closet',
              img: siteAssets.missionCommunity
            }].
            map((campus, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
              
                <div className="md:col-span-5">
                  <div className="aspect-[16/9] overflow-hidden rounded-sm relative">
                    <div className="absolute inset-0 bg-obc-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                    src={campus.img}
                    alt={campus.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  
                  </div>
                </div>
                <div className="md:col-span-7 md:pl-8 border-l-2 border-transparent group-hover:border-obc-accent transition-colors duration-300">
                  <h3 className="section-display mb-4 text-[clamp(2.1rem,3vw,3rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {campus.name}
                  </h3>
                  <div className="space-y-3 mb-8">
                    <p className="text-obc-midnight/80 font-medium flex items-center text-lg">
                      <MapPin size={18} className="mr-3 text-obc-accent" />{' '}
                      {campus.address}
                    </p>
                    <p className="text-obc-midnight/60 flex items-center text-lg">
                      <Clock size={18} className="mr-3 text-obc-accent" />{' '}
                      {campus.times}
                    </p>
                  </div>
                  <Link
                  to="/visit"
                  className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group/link">
                  
                    Get Directions
                    <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── STAY CONNECTED ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}>
              
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                {'{ STAY CONNECTED }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-white">
                FOLLOW
                <br />
                <span className="text-obc-lavender">THE JOURNEY</span>
              </h2>

              <div className="flex flex-wrap gap-8 mt-12">
                {socialLinks.map((social) =>
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm uppercase tracking-[0.25em] font-bold transition-colors duration-300">

                    {social.name}
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="bg-white/5 p-10 md:p-14 rounded-sm border border-white/10 backdrop-blur-sm">
              
              <h3 className="font-serif text-white text-3xl mb-4">
                Get updates from OBC
              </h3>
              <p className="text-white/60 text-base mb-8">
                Sign up for our weekly newsletter to stay in the loop on events,
                messages, and ministry updates.
              </p>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}>
                
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-obc-lavender transition-colors text-base"
                  required />
                
                <button
                  type="submit"
                  className="w-full bg-white text-obc-primary px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 flex items-center justify-center">
                  
                  Subscribe
                  <ArrowUpRight size={18} className="ml-3" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>);

}
