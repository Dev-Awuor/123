import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, CheckCircle } from 'lucide-react';
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
export function Outreach() {
  const [gedFormStatus, setGedFormStatus] = useState<'idle' | 'submitted'>(
    'idle'
  );
  const handleGedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGedFormStatus('submitted');
  };
  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Community impact"
        watermark="OUTREACH"
        image={siteAssets.missionCommunity}
        imageAlt="Community outreach at Olivet"
        imageLabel="Beyond Sunday"
        title={[
        {
          text: 'BEYOND'
        },
        {
          text: 'SUNDAY',
          accent: true
        }]}
        description="Serving Chattanooga with the hands and feet of Christ through food, clothing, education, and practical care."
        actions={[
        {
          label: 'Volunteer',
          to: '/serve',
          variant: 'primary'
        },
        {
          label: 'Support Outreach',
          to: '/give'
        }]} />

      {/* ─── MATTHEW 25 SECTION ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="order-2 lg:order-1 relative">
              
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                <img
                  src={siteAssets.missionService}
                  alt="Matthew 25 Campus"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]" />
                
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={stagger}
              className="order-1 lg:order-2">
              
              <motion.p
                variants={fadeUp}
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                
                {'{ MATTHEW 25 CAMPUS }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                
                FEEDING BODIES.
                <br />
                <span className="text-obc-primary">RESTORING HOPE.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-obc-midnight/70 text-lg leading-relaxed mb-10">
                
                Inspired by Matthew 25:35-36, this campus is dedicated to
                meeting the practical needs of our community. We believe that by
                serving the least of these, we are serving Christ Himself.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="space-y-0 divide-y divide-obc-midnight/10 mb-12">
                
                <div className="py-4 flex justify-between items-center">
                  <span className="font-bold text-obc-midnight uppercase tracking-widest text-sm">
                    Weekday Feeding
                  </span>
                  <span className="text-obc-midnight/70">12:00 PM</span>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <span className="font-bold text-obc-midnight uppercase tracking-widest text-sm">
                    Clothing Closet
                  </span>
                  <span className="text-obc-midnight/70">Open Daily</span>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <span className="font-bold text-obc-midnight uppercase tracking-widest text-sm">
                    Location
                  </span>
                  <span className="text-obc-midnight/70">751 E MLK Blvd</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-6">
                
                <Link
                  to="/serve"
                  className="inline-flex items-center bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 group">
                  
                  Volunteer
                  <ArrowUpRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </Link>
                <a
                  href="https://maps.google.com/?q=751+E+MLK+Blvd,+Chattanooga,+TN+37403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-midnight pb-2 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300 group">
                  
                  <MapPin size={18} className="mr-3" /> Get Directions
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Impact Stats - Editorial Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="mt-24 md:mt-32 border-t-2 border-obc-midnight">
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-obc-midnight/10">
              <motion.div
                variants={fadeUp}
                className="py-12 md:px-8 text-center">
                
                <p className="stat-display mb-4 text-obc-primary">
                  2,500+
                </p>
                <p className="text-obc-midnight/70 uppercase tracking-[0.2em] font-bold text-xs">
                  Meals Served Monthly
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="py-12 md:px-8 text-center">
                
                <p className="stat-display mb-4 text-obc-primary">
                  500+
                </p>
                <p className="text-obc-midnight/70 uppercase tracking-[0.2em] font-bold text-xs">
                  Families Clothed Annually
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="py-12 md:px-8 text-center">
                
                <p className="stat-display mb-4 text-obc-primary">
                  365
                </p>
                <p className="text-obc-midnight/70 uppercase tracking-[0.2em] font-bold text-xs">
                  Days of Service
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── GED PROGRAM SECTION ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            LEARN
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
              variants={stagger}
              className="lg:col-span-5">
              
              <motion.p
                variants={fadeUp}
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                
                {'{ EDUCATION }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-white">
                
                GED
                <br />
                <span className="text-obc-lavender">PROGRAM</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/70 text-lg leading-relaxed mb-8">
                
                Education is a key to breaking cycles of poverty. Our free adult
                education program provides the tutoring, resources, and support
                needed to earn a GED. Upon graduation, we also provide
                employment assistance to help our graduates take their next
                step.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                className="space-y-0 divide-y divide-white/10 mb-8">
                
                <li className="py-4 flex justify-between items-center text-white/90">
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Cost
                  </span>
                  <span className="text-obc-lavender">Free</span>
                </li>
                <li className="py-4 flex justify-between items-center text-white/90">
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Location
                  </span>
                  <span className="text-obc-lavender">Main Campus</span>
                </li>
                <li className="py-4 flex justify-between items-center text-white/90">
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Extras
                  </span>
                  <span className="text-obc-lavender">
                    Employment Assistance
                  </span>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="lg:col-span-7 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm">
              
              {gedFormStatus === 'idle' ?
              <>
                  <h3 className="section-display mb-8 text-[clamp(2rem,3vw,2.7rem)] text-white">
                    Take the Next Step
                  </h3>
                  <form onSubmit={handleGedSubmit} className="space-y-6">
                    <div>
                      <label
                      htmlFor="gedName"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Name
                      </label>
                      <input
                      type="text"
                      id="gedName"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="gedPhone"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Phone
                      </label>
                      <input
                      type="tel"
                      id="gedPhone"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="gedEmail"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        Email
                      </label>
                      <input
                      type="email"
                      id="gedEmail"
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="gedSource"
                      className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">
                      
                        How did you hear about this program?
                      </label>
                      <select
                      id="gedSource"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-obc-lavender transition-colors appearance-none">
                      
                        <option value="" className="text-obc-midnight">
                          Select...
                        </option>
                        <option value="social" className="text-obc-midnight">
                          Social Media
                        </option>
                        <option value="friend" className="text-obc-midnight">
                          Friend / Family
                        </option>
                        <option value="church" className="text-obc-midnight">
                          Church Announcement
                        </option>
                        <option value="other" className="text-obc-midnight">
                          Other
                        </option>
                      </select>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 flex items-center justify-center mt-8">
                    
                      I'm Interested
                      <ArrowUpRight size={18} className="ml-3" />
                    </button>
                  </form>
                </> :

              <div className="text-center py-16">
                  <div className="w-20 h-20 bg-white/10 text-obc-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-white">
                    We'll be in touch!
                  </h3>
                  <p className="text-white/70">
                    Thank you for your interest in the GED program. Our
                    education coordinator will contact you soon.
                  </p>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MORE WAYS WE SERVE ─── */}
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
              {'{ INITIATIVES }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              MORE WAYS WE SERVE
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
              title: 'Community Partnerships',
              desc: 'Partnering with local organizations to amplify our impact across Chattanooga.'
            },
            {
              title: 'Back to School Drives',
              desc: 'Equipping local students with the supplies they need for a successful school year.'
            },
            {
              title: 'Holiday Outreach',
              desc: 'Providing meals, gifts, and hope to families during Thanksgiving and Christmas.'
            }].
            map((initiative, index) =>
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center group">
              
                <div className="md:col-span-4">
                  <h3 className="section-display text-[clamp(2rem,3vw,3rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {initiative.title}
                  </h3>
                </div>
                <div className="md:col-span-6 border-l-2 border-transparent group-hover:border-obc-accent pl-0 md:pl-8 transition-colors duration-300">
                  <p className="text-obc-midnight/70 text-lg">
                    {initiative.desc}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-xs group-hover:text-obc-accent transition-colors">
                    Learn More <ArrowUpRight size={16} className="ml-2" />
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-obc-primary py-24 md:py-32 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-10 text-[clamp(2.4rem,5vw,4.6rem)] text-white">
              Want to partner with us in
              <br />
              <span className="text-obc-lavender">
                serving Chattanooga?
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/serve"
                className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
                
                Volunteer
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
              <Link
                to="/give"
                className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
                
                Give to Outreach
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>);

}
