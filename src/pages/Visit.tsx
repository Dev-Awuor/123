import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Monitor,
  Copy,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  CheckCircle } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { siteAssets } from '../content/siteAssets';
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
export function Visit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const copyToClipboard = (label: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(label);
    window.setTimeout(() => {
      setCopiedAddress((current) => current === label ? null : current);
    }, 1800);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitted');
  };
  const campusOptions = [
  {
    key: 'main',
    name: 'Main Campus',
    shortLabel: 'Downtown',
    address: '740 E MLK Blvd, Chattanooga, TN 37403',
    times: 'Sundays 9:30AM // Wednesdays 12:00PM & 6:30PM',
    img: siteAssets.buildingHero,
    mapsHref: 'https://maps.google.com/?q=740+E+MLK+Blvd,+Chattanooga,+TN+37403',
    description: 'Historic downtown worship with strong preaching, visible hospitality, and easy access for first-time guests.'
  },
  {
    key: 'nation',
    name: 'Olivet Nation',
    shortLabel: 'Jersey Pike',
    address: '4872 Jersey Pike, Chattanooga, TN 37416',
    times: 'Sundays 12:00PM',
    img: siteAssets.buildingWide,
    mapsHref: 'https://maps.google.com/?q=4872+Jersey+Pike,+Chattanooga,+TN+37416',
    description: 'A later service expression with the same Olivet DNA in a welcoming, family-focused room.'
  }];

  const arrivalSteps = [
  {
    num: '01',
    title: 'PARK + BREATHE',
    desc: 'When you pull in, our team will point you toward available guest parking and help you get oriented quickly.'
  },
  {
    num: '02',
    title: 'MEET THE WELCOME TEAM',
    desc: 'Tell someone it is your first time. We will help you find seating, children’s check-in, or the right campus room.'
  },
  {
    num: '03',
    title: 'SETTLE INTO WORSHIP',
    desc: 'Expect music, prayer, and a message from Bishop Adams without awkward singling out or pressure.'
  }];

  const visitEssentials = [
  {
    num: '01',
    title: 'Parking',
    desc: 'Guest parking and directional help are available when you arrive.'
  },
  {
    num: '02',
    title: "Children's Ministry",
    desc: 'Safe, age-appropriate environments open 15 minutes before service.'
  },
  {
    num: '03',
    title: 'What to Wear',
    desc: 'Come as you are. You will see everything from denim to suits.'
  },
  {
    num: '04',
    title: 'Service Flow',
    desc: 'Most gatherings run about 90 minutes with worship, prayer, and preaching.'
  }];

  const faqs = [
  {
    q: 'What should I expect on my first visit?',
    a: 'Expect a warm welcome! Our services typically last 90 minutes and include passionate worship, prayer, and a practical, biblical message from Bishop Adams. Guests are never singled out or put on the spot.'
  },
  {
    q: 'What do you have for kids?',
    a: "We provide safe, age-appropriate environments for children during all services. Our trained children's ministry team ensures your kids have fun while learning about Jesus. Check-in begins 15 minutes before service."
  },
  {
    q: 'Where should I park?',
    a: 'When you arrive at either campus, look for our parking team in the bright vests. They will safely direct you to a free designated parking area reserved just for you.'
  },
  {
    q: 'How long is the service?',
    a: 'Our worship gatherings typically last about 90 minutes.'
  },
  {
    q: "What if I'm not a Christian?",
    a: "You belong here. Olivet is a place to explore faith, ask questions, and experience God's love regardless of your background or where you are on your spiritual journey."
  },
  {
    q: 'Do I need to bring anything?',
    a: 'Just yourself! If you have a Bible, bring it, but we also project scriptures on the screens. Come exactly as you are.'
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="You belong here"
        watermark="VISIT"
        image={siteAssets.buildingHero}
        imageAlt="Olivet campus"
        imageLabel="Plan Your Visit"
        title={[
        {
          text: 'PLAN YOUR'
        },
        {
          text: 'VISIT',
          accent: true
        }]}
        description="Choose the campus or online path that fits you best, and know what to expect before you arrive."
        actions={[
        {
          label: 'Join In Person',
          href: '#in-person',
          variant: 'primary'
        },
        {
          label: 'Join Online',
          href: '#online'
        }]} />

      {/* ─── HOW WILL YOU JOIN US ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32 relative z-20">
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
              {'{ CHOOSE YOUR PATH }'}
            </p>
            <h2 className="section-display text-[clamp(2.6rem,5vw,4.8rem)] text-obc-midnight">
              HOW WILL YOU JOIN US?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.button
              variants={fadeUp}
              onClick={() => scrollToSection('in-person')}
              className="group relative min-h-[30rem] overflow-hidden rounded-sm border border-obc-midnight/10 text-left shadow-[0_24px_70px_rgba(45,30,59,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-obc-accent">
              
              <img
                src={siteAssets.buildingWide}
                alt="Olivet in-person worship"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight via-obc-midnight/45 to-obc-primary/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,173,255,0.24),transparent_32%)]" />
              <div className="relative flex h-full flex-col justify-between p-10 md:p-12">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                    In-Person Experience
                  </div>
                  <Building2 size={22} className="text-obc-lavender" />
                </div>
                <div>
                  <h3 className="section-display mb-4 text-[clamp(2.6rem,5vw,4.3rem)] text-white">
                    IN
                    <br />
                    PERSON
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-white/75">
                    Step into the room, meet the people, and get a real feel for
                    worship at Olivet before the first song even starts.
                  </p>
                  <span className="mt-8 inline-flex items-center text-obc-lavender font-bold uppercase tracking-[0.2em] text-sm group-hover:tracking-[0.3em] transition-all duration-300">
                    View Details <ArrowUpRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </motion.button>

            <motion.button
              variants={fadeUp}
              onClick={() => scrollToSection('online')}
              className="group relative min-h-[30rem] overflow-hidden rounded-sm border border-obc-midnight/10 text-left shadow-[0_24px_70px_rgba(45,30,59,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-obc-accent">
              
              <img
                src={siteAssets.posterYouth}
                alt="Olivet online worship"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight via-obc-midnight/45 to-obc-primary/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,173,255,0.28),transparent_36%)]" />
              <div className="relative flex h-full flex-col justify-between p-10 md:p-12">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                    Digital Community
                  </div>
                  <Monitor size={22} className="text-obc-lavender" />
                </div>
                <div>
                  <h3 className="section-display mb-4 text-[clamp(2.6rem,5vw,4.3rem)] text-white">
                    ONLINE
                    <br />
                    ACCESS
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-white/75">
                    Worship live from anywhere, stay close to the teaching, and
                    explore Olivet before you ever drive to campus.
                  </p>
                  <span className="mt-8 inline-flex items-center text-obc-lavender font-bold uppercase tracking-[0.2em] text-sm group-hover:tracking-[0.3em] transition-all duration-300">
                    View Details <ArrowUpRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── IN-PERSON SECTION ─── */}
      <section
        id="in-person"
        className="bg-obc-midnight py-24 md:py-32 scroll-mt-20 relative overflow-hidden">
        
        {/* Ghosted Watermark */}
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            IN PERSON
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-20 border-b border-white/10 pb-6">
            
            <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
              {'{ GATHER WITH US }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
              IN-PERSON
            </h2>
          </motion.div>

          {/* Gathering Times */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="mb-24">
            
            <motion.h3
              variants={fadeUp}
              className="text-obc-lavender text-sm uppercase tracking-[0.3em] font-bold mb-8 border-l-2 border-obc-accent pl-4">
              
              GATHERING TIMES
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                variants={fadeUp}
                className="rounded-sm border border-white/10 bg-white/5 p-8 md:p-10">
                
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-3">
                  SUNDAYS
                </p>
                <p className="section-display text-[clamp(2.5rem,5vw,4.2rem)] text-white leading-[0.9]">
                  9:30AM
                  <br />
                  <span className="text-obc-lavender">12:00PM</span>
                </p>
                <p className="mt-4 max-w-sm text-white/65">
                  Downtown at 9:30AM. Olivet Nation at 12:00PM.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-sm border border-white/10 bg-white/5 p-8 md:p-10">
                
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-3">
                  WEDNESDAYS
                </p>
                <p className="section-display text-[clamp(2.5rem,5vw,4.2rem)] text-white leading-[0.9]">
                  12:00PM
                  <br />
                  <span className="text-obc-lavender">6:30PM</span>
                </p>
                <p className="mt-4 max-w-sm text-white/65">
                  Midweek Bible study and prayer at the main campus.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="mb-24 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-sm">
              <img
                src={siteAssets.missionFamily}
                alt="Olivet church family gathering"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight/80 via-obc-midnight/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="hero-kicker mb-3 text-obc-lavender">First 15 minutes</p>
                <p className="section-display text-[clamp(2.3rem,4vw,3.6rem)] text-white">
                  WHAT
                  <br />
                  ARRIVAL FEELS LIKE
                </p>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-0 divide-y divide-white/10 border-t border-white/10">
              {arrivalSteps.map((step) =>
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1fr)]">
                
                  <p className="stat-display text-obc-lavender">{step.num}</p>
                  <div>
                    <p className="section-display text-[clamp(2rem,3vw,2.8rem)] text-white">
                      {step.title}
                    </p>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/65">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="mb-24">
            
            <motion.h3
              variants={fadeUp}
              className="text-obc-lavender text-sm uppercase tracking-[0.3em] font-bold mb-8 border-l-2 border-obc-accent pl-4">
              
              LOCATIONS
            </motion.h3>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {campusOptions.map((campus) =>
              <motion.div
                key={campus.key}
                variants={fadeUp}
                whileHover={{
                  y: -8
                }}
                className="group overflow-hidden rounded-sm border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-colors duration-500 hover:bg-white/[0.07]">
                
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={campus.img}
                      alt={campus.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight via-obc-midnight/25 to-transparent" />
                    <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-obc-midnight/35 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                      {campus.shortLabel}
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <h4 className="section-display text-[clamp(2rem,3vw,3rem)] text-white">
                      {campus.name}
                    </h4>
                    <p className="mt-4 text-white/70">{campus.description}</p>
                    <div className="mt-6 space-y-3">
                      <p className="flex items-start text-white/75">
                        <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-obc-accent" />
                        <span>{campus.address}</span>
                      </p>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-obc-lavender">
                        {campus.times}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <button
                        onClick={() => copyToClipboard(campus.key, campus.address)}
                        className="inline-flex items-center text-white/60 transition-colors hover:text-white">
                        
                        <Copy size={14} className="mr-2" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">
                          {copiedAddress === campus.key ? 'Copied' : 'Copy Address'}
                        </span>
                      </button>
                      <a
                        href={campus.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-obc-accent hover:text-obc-lavender transition-colors">
                        
                        <MapPin size={14} className="mr-2" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">
                          Get Directions
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Important Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="mb-24">
            
            <motion.h3
              variants={fadeUp}
              className="text-obc-lavender text-sm uppercase tracking-[0.3em] font-bold mb-8 border-l-2 border-obc-accent pl-4">
              
              IMPORTANT DETAILS
            </motion.h3>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {visitEssentials.map((item) =>
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative min-h-[18rem] bg-obc-midnight px-8 pb-10 pt-9 transition-colors duration-500 hover:bg-white/5 md:min-h-[19rem] md:px-10 md:pb-12 md:pt-10">
                
                  <div className="absolute right-4 top-4 select-none text-white/[0.04] transition-colors duration-500 group-hover:text-obc-lavender/10">
                    <p className="font-serif text-8xl font-bold leading-none">
                      {item.num}
                    </p>
                  </div>

                  <div className="relative z-10 mt-14">
                    <h4 className="max-w-[11rem] font-serif text-[clamp(2rem,2.4vw,2.7rem)] leading-[0.9] text-white transition-colors duration-300 group-hover:text-obc-lavender">
                      {item.title}
                    </h4>
                    <p className="mt-5 max-w-[14rem] text-sm leading-7 text-white/62">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="mb-32">
            
            <h3 className="text-obc-lavender text-sm uppercase tracking-[0.3em] font-bold mb-8 border-l-2 border-obc-accent pl-4">
              FAQ
            </h3>
            <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
              {faqs.map((faq, i) =>
              <div key={i} className="group">
                  <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none">
                  
                    <span className="section-display pr-8 text-[clamp(1.55rem,2.4vw,2.2rem)] text-white transition-colors group-hover:text-obc-lavender">
                      {faq.q}
                    </span>
                    <ChevronDown
                    size={24}
                    className={`text-white/30 transition-transform duration-500 group-hover:text-obc-accent shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  
                  </button>
                  <AnimatePresence>
                    {openFaq === i &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="overflow-hidden">
                    
                        <div className="pb-8 pr-4">
                          <p className="text-white/70 text-lg leading-relaxed border-l-2 border-obc-accent pl-6">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>

          {/* VISITOR FORM */}
          <motion.div
            id="visitor-form"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-16 backdrop-blur-sm">
            
            {formStatus === 'idle' ?
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
                <div className="lg:col-span-2">
                  <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                    {'{ PLAN YOUR VISIT }'}
                  </p>
                  <h3 className="section-display mb-6 text-[clamp(2.6rem,5vw,4.4rem)] text-white">
                    LET US KNOW
                    <br />
                    YOU'RE COMING
                  </h3>
                  <p className="text-white/70 text-lg">
                    We're excited to host you. Share your visit plans so our
                    team can welcome you properly.
                  </p>
                  <div className="mt-10 rounded-sm border border-white/10 bg-white/5 p-6">
                    <p className="hero-kicker mb-3 text-obc-lavender">Your Sunday plan</p>
                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                        1. Choose your campus
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                        2. Arrive 15 minutes early
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                        3. Let the welcome team know it is your first time
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                        htmlFor="firstName"
                        className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-wider">
                        
                          First Name
                        </label>
                        <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full bg-white/10 border border-white/20 text-white rounded-sm px-4 py-4 focus:outline-none focus:border-obc-lavender transition-colors" />
                      
                      </div>
                      <div>
                        <label
                        htmlFor="lastName"
                        className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-wider">
                        
                          Last Name
                        </label>
                        <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full bg-white/10 border border-white/20 text-white rounded-sm px-4 py-4 focus:outline-none focus:border-obc-lavender transition-colors" />
                      
                      </div>
                    </div>

                    <div>
                      <label
                      htmlFor="email"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-wider">
                      
                        Email
                      </label>
                      <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white rounded-sm px-4 py-4 focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>

                    <div>
                      <label
                      htmlFor="campus"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-wider">
                      
                        Which campus are you visiting?
                      </label>
                      <select
                      id="campus"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white rounded-sm px-4 py-4 focus:outline-none focus:border-obc-lavender transition-colors appearance-none">
                      
                        <option value="" className="text-obc-midnight">
                          Select...
                        </option>
                        {campusOptions.map((campus) =>
                        <option
                          key={campus.key}
                          value={campus.key}
                          className="text-obc-midnight">
                          
                            {campus.name}
                          </option>
                        )}
                      </select>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-white text-obc-midnight py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 mt-4 flex items-center justify-center group">
                    
                      Submit Details
                      <ArrowUpRight
                      size={18}
                      className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    
                    </button>
                  </form>
                </div>
              </div> :

            <div className="text-center py-16">
                <div className="w-24 h-24 bg-white/10 text-obc-lavender rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={48} />
                </div>
                <h3 className="section-display mb-6 text-[clamp(2.6rem,5vw,4.4rem)] text-white">
                  We can't wait to meet you!
                </h3>
                <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                  Your visit is planned. Our team will be ready to welcome you.
                </p>
                <button
                onClick={() => setFormStatus('idle')}
                className="text-obc-accent font-bold uppercase tracking-[0.2em] text-sm border-b border-obc-accent pb-1 hover:text-obc-lavender hover:border-obc-lavender transition-colors">
                
                  Plan another visit
                </button>
              </div>
            }
          </motion.div>
        </div>
      </section>

      {/* ─── ONLINE SECTION ─── */}
      <section
        id="online"
        className="bg-obc-offwhite py-24 md:py-32 scroll-mt-20">
        
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
              {'{ DIGITAL COMMUNITY }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              ONLINE
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={stagger}
              className="w-full lg:w-1/2">
              
              <motion.p
                variants={fadeUp}
                className="editorial-lead mb-8">
                
                Whether you're on a break at work, in the middle of a long
                shift, or gathered at home, you are seen, known, and loved.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-obc-midnight/70 text-lg leading-relaxed mb-12">
                
                We pray for you intentionally. This is your space — to be formed
                by the Word, covered in prayer, and sent to live on mission.
                Your faithfulness, love, and support declare that the glory of
                God is not confined to four walls.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                
                <div className="border-l-2 border-obc-accent pl-6">
                  <p className="text-obc-midnight/50 text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    SUNDAYS (LIVE)
                  </p>
                  <p className="section-display text-[clamp(1.85rem,3vw,2.5rem)] text-obc-midnight">
                    9:30AM // 12:00PM
                  </p>
                </div>
                <div className="border-l-2 border-obc-accent pl-6">
                  <p className="text-obc-midnight/50 text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    ON DEMAND
                  </p>
                  <p className="section-display text-[clamp(1.85rem,3vw,2.5rem)] text-obc-midnight">
                    Uploaded Weekly
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-6">
                
                <a
                  href="https://youtube.com/@adamsksr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 group">
                  
                  Watch on YouTube
                  <ArrowUpRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="w-full lg:w-1/2">
              
              <div className="relative">
                <div className="paper-panel absolute -left-4 top-6 z-10 hidden rounded-sm border border-obc-midnight/10 bg-obc-offwhite px-5 py-4 shadow-lg md:block">
                  <p className="hero-kicker text-obc-accent">Digital family</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-obc-midnight">
                    Live on YouTube and weekly on demand.
                  </p>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={siteAssets.posterFeature}
                  alt="Online Worship"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight/80 via-obc-midnight/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="hero-kicker mb-3 text-obc-lavender">Watch with us</p>
                    <p className="section-display text-[clamp(2rem,4vw,3.2rem)] text-white">
                      FROM
                      <br />
                      ANYWHERE
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-8 right-6 hidden w-40 overflow-hidden rounded-sm border border-white/10 bg-obc-midnight shadow-[0_24px_70px_rgba(45,30,59,0.35)] sm:block">
                  <img
                    src={siteAssets.missionStage}
                    alt="Olivet worship moment"
                    className="aspect-[4/5] w-full object-cover" />
                  <div className="px-4 py-3">
                    <p className="hero-kicker text-obc-lavender">Online access</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      Prayer, preaching, and replay access.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="bg-obc-primary py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-12 text-[clamp(3rem,6vw,5.8rem)] text-white">
              WE CAN'T WAIT
              <br />
              <span className="text-obc-lavender">TO MEET YOU.</span>
            </h2>
            <button
              onClick={() => scrollToSection('visitor-form')}
              className="inline-flex items-center bg-white text-obc-midnight px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
              
              Plan Your Visit
              <ArrowUpRight
                size={18}
                className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              
            </button>
          </motion.div>
        </div>
      </section>
    </main>);

}
