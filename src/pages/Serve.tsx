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
export function Serve() {
  const [serveFormStatus, setServeFormStatus] = useState<'idle' | 'submitted'>(
    'idle'
  );
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleServeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServeFormStatus('submitted');
  };
  const serveTeams = [
  {
    name: 'Greeting / Hospitality',
    desc: 'Create a welcoming environment for everyone who walks through our doors.',
    img: siteAssets.buildingHero
  },
  {
    name: 'Worship & Production',
    desc: 'Lead the congregation in worship through music, sound, and lighting.',
    img: siteAssets.posterPrayer
  },
  {
    name: "Children's Ministry",
    desc: 'Invest in the next generation by teaching kids about Jesus in a fun, safe environment.',
    img: siteAssets.missionFamily
  },
  {
    name: 'Youth Ministry',
    desc: 'Mentor and guide middle and high school students as they navigate faith and life.',
    img: siteAssets.posterYouth
  },
  {
    name: 'Media & Tech',
    desc: 'Operate cameras, screens, and broadcast equipment to share our services online.',
    img: siteAssets.posterFeature
  },
  {
    name: 'Matthew 25 Outreach',
    desc: 'Serve meals and distribute clothing to our community during the week.',
    img: siteAssets.missionCommunity
  },
  {
    name: 'Prayer Team',
    desc: 'Intercede for our church, community, and the specific prayer requests we receive.',
    img: siteAssets.missionPrayer
  },
  {
    name: 'Parking & Safety',
    desc: 'Ensure a safe, smooth experience from the moment people arrive on campus.',
    img: siteAssets.missionGathering
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Volunteer with purpose"
        watermark="SERVE"
        image={siteAssets.missionService}
        imageAlt="Serving in community"
        imageLabel="Use Your Gifts"
        title={[
        {
          text: 'USE YOUR'
        },
        {
          text: 'GIFTS',
          accent: true
        }]}
        description="The Kingdom is built by people who show up, care deeply, and give their hands to the mission."
        actions={[
        {
          label: 'Browse Teams',
          href: '#volunteer-form',
          variant: 'primary'
        },
        {
          label: 'Community Outreach',
          to: '/outreach'
        }]} />

      {/* ─── SERVE TEAMS SECTION ─── */}
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
              {'{ OPPORTUNITIES }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              SERVE TEAMS
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
            
            {serveTeams.map((team, index) =>
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
              
                <div className="md:col-span-4">
                  <div className="aspect-[16/9] overflow-hidden rounded-sm relative">
                    <div className="absolute inset-0 bg-obc-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                    src={team.img}
                    alt={team.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  
                  </div>
                </div>
                <div className="md:col-span-8 md:pl-8 border-l-2 border-transparent group-hover:border-obc-accent transition-colors duration-300">
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,3rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {team.name}
                  </h3>
                  <p className="text-obc-midnight/70 text-lg mb-8 max-w-2xl">
                    {team.desc}
                  </p>
                  <button
                  onClick={() => scrollToSection('volunteer-form')}
                  className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group/link">
                  
                    Join This Team
                    <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── VOLUNTEER SIGNUP FORM ─── */}
      <section
        id="volunteer-form"
        className="bg-obc-midnight py-24 md:py-32 scroll-mt-20 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            JOIN
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
                {'{ SIGN UP }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-white">
                READY TO
                <br />
                <span className="text-obc-lavender">SERVE?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Fill out the form and a ministry leader will connect with you
                about next steps. We can't wait to serve alongside you.
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
              
              {serveFormStatus === 'idle' ?
              <form onSubmit={handleServeSubmit} className="space-y-6">
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
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="campus"
                    className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                    
                      Preferred Campus
                    </label>
                    <select
                    id="campus"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors appearance-none">
                    
                      <option value="" className="text-obc-midnight">
                        Select...
                      </option>
                      <option value="main" className="text-obc-midnight">
                        Main Campus
                      </option>
                      <option value="nation" className="text-obc-midnight">
                        Olivet Nation
                      </option>
                      <option value="either" className="text-obc-midnight">
                        Either
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-bold mb-4 uppercase tracking-widest">
                      Which team interests you? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serveTeams.map((team, index) =>
                    <label
                      key={index}
                      className="flex items-center space-x-3 cursor-pointer group">
                      
                          <div className="relative flex items-center justify-center w-5 h-5 border border-white/30 rounded-sm bg-white/5 group-hover:border-obc-lavender transition-colors">
                            <input
                          type="checkbox"
                          className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                        
                            <div className="w-3 h-3 bg-obc-lavender rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                            {team.name}
                          </span>
                        </label>
                    )}
                    </div>
                  </div>

                  <button
                  type="submit"
                  className="w-full bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 flex items-center justify-center mt-8">
                  
                    Sign Me Up
                    <ArrowUpRight size={18} className="ml-3" />
                  </button>
                </form> :

              <div className="text-center py-16">
                  <div className="w-20 h-20 bg-white/10 text-obc-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-white">
                    Thank you for stepping up!
                  </h3>
                  <p className="text-white/70 mb-8">
                    We've received your information. A ministry leader will be
                    in touch with you shortly to discuss next steps.
                  </p>
                  <button
                  onClick={() => setServeFormStatus('idle')}
                  className="text-obc-lavender font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-lavender pb-1 hover:text-white hover:border-white transition-colors">
                  
                    Submit another form
                  </button>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PASTORAL CARE SECTION ─── */}
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
                {'{ SUPPORT }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                PASTORAL
                <br />
                <span className="text-obc-primary">CARE</span>
              </h2>
              <p className="text-obc-midnight/70 text-lg leading-relaxed mb-8">
                In times of loss or illness, we are here for you. Our pastoral
                care team is dedicated to supporting our church family through
                all seasons of life.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={stagger}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 md:p-10 rounded-sm border border-obc-midnight/10 shadow-xl">
                
                <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-obc-midnight">
                  Bereavement
                </h3>
                <p className="text-obc-midnight/70 mb-8 leading-relaxed">
                  If you've experienced a loss in your family, please let us
                  know so we can surround you with love and support during this
                  difficult time.
                </p>
                <button className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group">
                  Notify the Church
                  <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white p-8 md:p-10 rounded-sm border border-obc-midnight/10 shadow-xl">
                
                <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-obc-midnight">
                  Illness
                </h3>
                <p className="text-obc-midnight/70 mb-8 leading-relaxed">
                  If you or a loved one is ill or hospitalized, let us know so
                  our pastoral care team can pray with you and arrange a visit
                  if desired.
                </p>
                <button className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs border-b border-obc-midnight pb-1 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group">
                  Request Care
                  <ArrowUpRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-obc-primary py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-10 text-[clamp(2.4rem,5vw,4rem)] text-white">
              Not sure where to start?
              <br />
              <span className="text-obc-lavender">
                We'll help you find your fit.
              </span>
            </h2>
            <Link
              to="/connect"
              className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
              
              Contact Us
              <ArrowUpRight
                size={18}
                className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              
            </Link>
          </motion.div>
        </div>
      </section>
    </main>);

}
