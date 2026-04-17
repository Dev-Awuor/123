import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
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
export function Connect() {
  const [connectFormStatus, setConnectFormStatus] = useState<
    'idle' | 'submitted'>(
    'idle');
  const [prayerFormStatus, setPrayerFormStatus] = useState<
    'idle' | 'submitted'>(
    'idle');
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConnectFormStatus('submitted');
  };
  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerFormStatus('submitted');
  };
  const nextSteps = [
  {
    num: '01',
    title: 'VISIT',
    desc: 'Join us for a Sunday service and experience Olivet.',
    cta: 'Plan Your Visit',
    action: () => window.location.href = '/visit',
    isLink: true,
    path: '/visit'
  },
  {
    num: '02',
    title: 'CONNECT',
    desc: 'Fill out a connect card so we can get to know you.',
    cta: 'Connect Card',
    action: () => scrollToSection('connect-card')
  },
  {
    num: '03',
    title: 'GROW',
    desc: 'Join a Life Group and go deeper in faith and community.',
    cta: 'Find a Life Group',
    action: () => scrollToSection('life-groups')
  },
  {
    num: '04',
    title: 'SERVE',
    desc: 'Discover your gifts and serve the Kingdom with us.',
    cta: 'Volunteer',
    action: () => window.location.href = '/serve',
    isLink: true,
    path: '/serve'
  },
  {
    num: '05',
    title: 'GO PUBLIC',
    desc: 'Declare your faith through baptism.',
    cta: 'Sign Up for Baptism',
    action: () => scrollToSection('baptism')
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Your next step starts here"
        watermark="CONNECT"
        image={siteAssets.missionFamily}
        imageAlt="Olivet community members"
        imageLabel="Next Steps"
        title={[
        {
          text: 'FIND YOUR'
        },
        {
          text: 'PEOPLE',
          accent: true
        }]}
        description="From first-time guests to digital members, this is where relationships, prayer, and real belonging begin."
        actions={[
        {
          label: 'Connect Card',
          href: '#connect-card',
          variant: 'primary'
        },
        {
          label: 'Life Groups',
          href: '#life-groups'
        }]} />

      {/* ─── NEXT STEPS PATHWAY ─── */}
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
              {'{ THE PATHWAY }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              YOUR NEXT STEP
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
            
            {nextSteps.map((step, index) =>
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center group">
              
                <div className="md:col-span-2 flex items-baseline">
                  <p className="stat-display text-obc-primary/20 transition-colors duration-500 group-hover:text-obc-primary">
                    {step.num}
                  </p>
                </div>
                <div className="md:col-span-7 border-l-2 border-transparent group-hover:border-obc-accent pl-0 md:pl-8 transition-colors duration-300">
                  <h3 className="section-display mb-3 text-[clamp(2rem,3vw,3rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {step.title}
                  </h3>
                  <p className="text-obc-midnight/70 text-lg">{step.desc}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  {step.isLink ?
                <Link
                  to={step.path!}
                  className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group/link">
                  
                      {step.cta}
                      <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  
                    </Link> :

                <button
                  onClick={step.action}
                  className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group/link">
                  
                      {step.cta}
                      <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  
                    </button>
                }
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── CONNECT CARD SECTION ─── */}
      <section
        id="connect-card"
        className="bg-obc-midnight py-24 md:py-32 scroll-mt-20 relative overflow-hidden">
        
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            HELLO
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="lg:col-span-5">
              
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                {'{ GET IN TOUCH }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-white">
                CONNECT
                <br />
                <span className="text-obc-lavender">CARD</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Let us know who you are so we can welcome you into the Olivet
                family. Whether you're a first-time guest or looking to get more
                involved, we'd love to connect with you.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="lg:col-span-7 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm">
              
              {connectFormStatus === 'idle' ?
              <form onSubmit={handleConnectSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="firstName"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        First Name
                      </label>
                      <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="lastName"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Last Name
                      </label>
                      <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="email"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Email
                      </label>
                      <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="phone"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Phone
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="status"
                    className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                    
                      I am a...
                    </label>
                    <select
                    id="status"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors appearance-none">
                    
                      <option value="" className="text-obc-midnight">
                        Select...
                      </option>
                      <option value="first-time" className="text-obc-midnight">
                        First-time visitor
                      </option>
                      <option value="returning" className="text-obc-midnight">
                        Returning visitor
                      </option>
                      <option value="looking" className="text-obc-midnight">
                        Looking for a church home
                      </option>
                      <option value="member" className="text-obc-midnight">
                        Already a member
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-bold mb-4 uppercase tracking-widest">
                      I'm interested in... (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                    'Life Groups',
                    'Volunteering',
                    'Baptism',
                    'Prayer',
                    'GED Program',
                    "Children's Ministry"].
                    map((interest) =>
                    <label
                      key={interest}
                      className="flex items-center space-x-3 cursor-pointer group">
                      
                          <div className="relative flex items-center justify-center w-5 h-5 border border-white/30 rounded-sm bg-white/5 group-hover:border-obc-lavender transition-colors">
                            <input
                          type="checkbox"
                          className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                        
                            <div className="w-3 h-3 bg-obc-lavender rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                            {interest}
                          </span>
                        </label>
                    )}
                    </div>
                  </div>

                  <button
                  type="submit"
                  className="w-full bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 flex items-center justify-center mt-8">
                  
                    Connect With Us
                    <ArrowUpRight size={18} className="ml-3" />
                  </button>
                </form> :

              <div className="text-center py-16">
                  <div className="w-20 h-20 bg-white/10 text-obc-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-white">
                    Thanks for connecting!
                  </h3>
                  <p className="text-white/70 mb-8">
                    We've received your information and someone from our team
                    will be in touch soon.
                  </p>
                  <button
                  onClick={() => setConnectFormStatus('idle')}
                  className="text-obc-lavender font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-lavender pb-1 hover:text-white hover:border-white transition-colors">
                  
                    Submit another card
                  </button>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LIFE GROUPS SECTION ─── */}
      <section
        id="life-groups"
        className="bg-obc-offwhite py-24 md:py-32 scroll-mt-20">
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                
                {'{ COMMUNITY }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                
                LIFE
                <br />
                <span className="text-obc-primary">GROUPS</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-obc-midnight/70 text-lg leading-relaxed mb-10">
                
                Circles go deeper than rows. We believe that spiritual growth
                happens best in the context of relationships. Our Life Groups
                meet weekly or bi-weekly in homes, coffee shops, and online to
                study the Word, pray together, and share life.
              </motion.p>
              <motion.div variants={fadeUp}>
                <button className="inline-flex items-center bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 group">
                  Find a Life Group
                  <ArrowUpRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={stagger}
              className="relative">
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={fadeUp}
                  className="col-span-2 aspect-[16/9] overflow-hidden rounded-sm">
                  
                  <img
                    src={siteAssets.missionGathering}
                    alt="Life Group Meeting"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700" />
                  
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="aspect-square overflow-hidden rounded-sm">
                  
                  <img
                    src={siteAssets.missionService}
                    alt="Bible Study"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700" />
                  
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="aspect-square overflow-hidden rounded-sm">
                  
                  <img
                    src={siteAssets.missionSupport}
                    alt="Community"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700" />
                  
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BAPTISM SECTION ─── */}
      <section
        id="baptism"
        className="bg-obc-primary py-24 md:py-32 scroll-mt-20 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            WASHED
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}>
            
            <motion.p
              variants={fadeUp}
              className="text-obc-lavender text-xs uppercase tracking-[0.3em] font-bold mb-6">
              
              {'{ GO PUBLIC }'}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-white">
              
              BAPTISM
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              
              Baptism is an outward declaration of an inward decision to follow
              Jesus. It's a significant milestone in your spiritual journey and
              a time of celebration for our entire church family.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
                Sign Up for Baptism
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRAYER REQUESTS SECTION ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="lg:col-span-5">
              
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                {'{ WE ARE HERE FOR YOU }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                PRAYER
                <br />
                <span className="text-obc-primary">REQUESTS</span>
              </h2>
              <p className="text-obc-midnight/70 text-lg leading-relaxed mb-8">
                We believe in the power of prayer. Whatever you're facing, you
                don't have to face it alone. Share your request with us, and our
                pastoral care team will pray with you.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-sm border border-obc-midnight/10 shadow-xl">
              
              {prayerFormStatus === 'idle' ?
              <form onSubmit={handlePrayerSubmit} className="space-y-6">
                  <div>
                    <label
                    htmlFor="prayerName"
                    className="block text-obc-midnight/70 text-xs font-bold mb-2 uppercase tracking-widest">
                    
                      Name (Optional)
                    </label>
                    <input
                    type="text"
                    id="prayerName"
                    className="w-full bg-obc-offwhite border border-obc-midnight/10 rounded-sm px-4 py-3 text-obc-midnight focus:outline-none focus:border-obc-accent transition-colors" />
                  
                  </div>

                  <div>
                    <label
                    htmlFor="prayerRequest"
                    className="block text-obc-midnight/70 text-xs font-bold mb-2 uppercase tracking-widest">
                    
                      Prayer Request
                    </label>
                    <textarea
                    id="prayerRequest"
                    required
                    rows={5}
                    className="w-full bg-obc-offwhite border border-obc-midnight/10 rounded-sm px-4 py-3 text-obc-midnight focus:outline-none focus:border-obc-accent transition-colors resize-none">
                  </textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-obc-midnight/30 rounded-sm bg-obc-offwhite group-hover:border-obc-accent transition-colors">
                      <input
                      type="checkbox"
                      id="confidential"
                      className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                    
                      <div className="w-3 h-3 bg-obc-accent rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <label
                    htmlFor="confidential"
                    className="text-obc-midnight/80 text-sm font-medium cursor-pointer">
                    
                      Is this request confidential?
                    </label>
                  </div>

                  <button
                  type="submit"
                  className="w-full bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 flex items-center justify-center mt-8">
                  
                    Submit Prayer Request
                    <ArrowUpRight size={18} className="ml-3" />
                  </button>
                </form> :

              <div className="text-center py-16">
                  <div className="w-20 h-20 bg-obc-offwhite text-obc-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-obc-midnight">
                    We are praying for you.
                  </h3>
                  <p className="text-obc-midnight/70 mb-8">
                    Your prayer request has been received by our pastoral care
                    team.
                  </p>
                  <button
                  onClick={() => setPrayerFormStatus('idle')}
                  className="text-obc-accent font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-accent pb-1 hover:text-obc-primary hover:border-obc-primary transition-colors">
                  
                    Submit another request
                  </button>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-obc-midnight py-24 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-6 text-[clamp(2.4rem,5vw,4rem)] text-white">
              Questions? We're here for you.
            </h2>
            <p className="text-obc-lavender text-lg mb-10">
              Call us at 423-266-8709 or email info@olivetbaptistchurch.com
            </p>
            <a
              href="mailto:info@olivetbaptistchurch.com"
              className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
              
              Contact the Church Office
              <ArrowUpRight
                size={18}
                className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              
            </a>
          </motion.div>
        </div>
      </section>
    </main>);

}
