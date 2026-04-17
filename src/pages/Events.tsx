import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MapPin,
  Clock,
  ChevronRight,
  Send } from
'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import {
  eventPath,
  featuredEvent,
  listedEvents,
  recurringEvents } from
'../content/events';
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
export function Events() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };
  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Don't miss what God is doing"
        watermark="EVENTS"
        image={featuredEvent.image}
        imageAlt={featuredEvent.imageAlt}
        imageLabel="Upcoming Events"
        title={[
        {
          text: 'UPCOMING'
        },
        {
          text: 'EVENTS',
          accent: true
        }]}
        description="Experiences for worship, outreach, families, students, and the wider Chattanooga community all live here."
        actions={[
        {
          label: 'Featured Event',
          href: '#featured-event',
          variant: 'primary'
        },
        {
          label: 'Plan Your Visit',
          to: '/visit'
        }]} />

      {/* ─── FEATURED EVENT ─── */}
      <section id="featured-event" className="bg-obc-offwhite py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px'
            }}
            variants={fadeUp}>
            
            <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-8">
              {'{ FEATURED }'}
            </p>

            <Link
              to={eventPath(featuredEvent.slug)}
              className="relative block group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm aspect-[21/9]">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight via-obc-midnight/30 to-transparent" />

                {/* Date badge — oversized */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10">
                  <div className="bg-obc-accent text-white px-5 py-4 md:px-8 md:py-6">
                    <p className="section-display text-[clamp(2.5rem,6vw,4.5rem)] text-white">
                      {featuredEvent.day}
                    </p>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold mt-1">
                      {featuredEvent.month}
                    </p>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                  <div className="max-w-3xl">
                    <h2 className="section-display mb-4 text-[clamp(2.8rem,6vw,5.5rem)] text-white">
                      {featuredEvent.titleLines.map((line) =>
                      <span
                        key={line.text}
                        className={`block ${line.accent ? 'text-obc-lavender' : ''}`}>
                        
                          {line.text}
                        </span>
                      )}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm mb-6">
                      <span className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {featuredEvent.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {featuredEvent.location}
                      </span>
                    </div>
                    <p className="text-white/70 text-base md:text-lg max-w-xl mb-8 hidden md:block">
                      {featuredEvent.teaser}
                    </p>
                    <span className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group/btn">
                      View Event Details
                      <ArrowUpRight
                        size={18}
                        className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="flex items-end justify-between mb-16 border-b border-obc-midnight/10 pb-6">
            
            <div>
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
                {"{ WHAT'S NEXT }"}
              </p>
              <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                UPCOMING
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            {listedEvents.map((event) =>
            <motion.article
              key={event.slug}
              variants={fadeUp}
              whileHover={{
                y: -8
              }}
              className="group rounded-sm border border-obc-midnight/10 bg-obc-offwhite/60 p-5 shadow-[0_24px_70px_rgba(45,30,59,0.05)] transition-shadow hover:shadow-[0_28px_80px_rgba(45,30,59,0.1)]">
              
                <div className="flex gap-6">
                  {/* Date column — bold typographic */}
                  <div className="flex-shrink-0 w-20 md:w-24 pt-1">
                    <p className="stat-display text-obc-primary">
                      {event.day}
                    </p>
                    <p className="text-obc-accent text-xs uppercase tracking-[0.25em] font-bold mt-1">
                      {event.month}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-grow border-l-2 border-obc-light pl-6 group-hover:border-obc-accent transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-sm mb-4 aspect-[16/9]">
                      <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    </div>
                    <h3 className="section-display mb-2 text-[clamp(1.9rem,3vw,2.7rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-obc-midnight/60 text-sm mb-3">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1.5" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-obc-midnight/70 text-base leading-relaxed mb-4">
                      {event.teaser}
                    </p>
                    <Link
                      to={eventPath(event.slug)}
                      className="inline-flex items-center text-obc-accent font-bold uppercase tracking-[0.2em] text-xs group-hover:tracking-[0.3em] transition-all duration-300">
                      
                      Details <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── RECURRING / EVERY WEEK ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        {/* Decorative oversized text */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 opacity-[0.03] pointer-events-none select-none">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            EVERY
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}>
            
            <motion.p
              variants={fadeUp}
              className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
              
              {'{ EVERY WEEK }'}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="section-display mb-20 text-[clamp(3rem,6vw,6.2rem)] text-white">
              
              EVERY WEEK
              <br />
              <span className="text-obc-lavender">AT OLIVET</span>
            </motion.h2>

            <div className="space-y-0 divide-y divide-white/10">
              {recurringEvents.map((item, i) =>
              <motion.div
                key={i}
                variants={fadeUp}
                className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group">
                
                  <div className="md:col-span-4">
                    <h3 className="section-display text-[clamp(2rem,3vw,3rem)] text-white transition-colors duration-300 group-hover:text-obc-lavender">
                      {item.label}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="editorial-lead !text-obc-lavender">
                      {item.times}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
                      {item.location}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div variants={fadeUp} className="mt-16">
              <Link
                to="/visit"
                className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300">
                
                Plan Your Visit <ArrowUpRight size={18} className="ml-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA / SUBSCRIBE ─── */}
      <section className="bg-obc-primary py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="text-center">
            
            <motion.h2
              variants={fadeUp}
              className="section-display mb-6 text-[clamp(2.8rem,6vw,5.5rem)] text-white">
              
              STAY IN
              <br />
              <span className="text-obc-lavender">THE LOOP</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
              
              Get event notifications delivered straight to your inbox. No spam
              — just what's happening at Olivet.
            </motion.p>

            <motion.div variants={fadeUp}>
              {!subscribed ?
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                
                  <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 rounded-sm focus:outline-none focus:border-obc-lavender focus:bg-white/15 transition-all text-base" />
                
                  <button
                  type="submit"
                  className="bg-white text-obc-primary px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 flex items-center justify-center whitespace-nowrap">
                  
                    Subscribe <Send size={16} className="ml-3" />
                  </button>
                </form> :

              <div className="bg-white/10 border border-white/20 rounded-sm px-8 py-6 max-w-lg mx-auto">
                  <p className="section-display mb-2 text-[clamp(1.8rem,3vw,2.4rem)] text-white">
                    You're in.
                  </p>
                  <p className="text-white/70">
                    We'll keep you posted on everything happening at Olivet.
                  </p>
                </div>
              }
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex justify-center gap-8 mt-14">
              {socialLinks.map((social) =>
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-xs uppercase tracking-[0.25em] font-bold transition-colors duration-300">

                  {social.name}
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>);

}
