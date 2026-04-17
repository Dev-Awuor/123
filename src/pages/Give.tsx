import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowUpRight } from
'lucide-react';
import { Link } from 'react-router-dom';
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
export function Give() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
  {
    q: 'Is my online giving secure?',
    a: 'Yes. We use industry-standard encryption and secure payment gateways (Vanco and Givelify) to ensure your financial information is protected. We do not store your credit card details on our servers.'
  },
  {
    q: 'Can I set up recurring giving?',
    a: 'Absolutely. Both Vanco and Givelify allow you to set up automatic recurring gifts weekly, bi-weekly, or monthly, making it easy to remain consistent in your generosity.'
  },
  {
    q: 'How do I get a giving statement for taxes?',
    a: 'Annual giving statements are mailed and emailed at the beginning of each year for the previous tax year. You can also access your giving history anytime through your Vanco or Givelify account.'
  },
  {
    q: "What's the difference between tithes and offerings?",
    a: 'A tithe is the biblical baseline of giving (10% of income) returned to the local church. An offering is any gift given above and beyond the tithe, often designated for specific ministries or projects.'
  },
  {
    q: 'Can I designate my gift to a specific fund?',
    a: 'Yes. When giving online, you will see dropdown options to direct your gift to the General Fund, Missions, Building Fund, or specific outreach initiatives like the Matthew 25 Campus.'
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Generosity changes everything"
        watermark="GIVE"
        image={siteAssets.missionCommunity}
        imageAlt="Community outreach at Olivet"
        imageLabel="Make an Impact"
        title={[
        {
          text: 'MAKE AN'
        },
        {
          text: 'IMPACT',
          accent: true
        }]}
        description="Your giving fuels worship, discipleship, outreach, and the practical care happening through every OBC campus."
        actions={[
        {
          label: 'See Giving Options',
          href: '#ways-to-give',
          variant: 'primary'
        },
        {
          label: 'View Outreach',
          to: '/outreach'
        }]} />

      {/* ─── IMPACT SECTION ─── */}
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
              {'{ YOUR GIVING AT WORK }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              FUELING
              <br />
              THE MISSION
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {[
            {
              title: 'Ministry',
              image: siteAssets.posterPrayer,
              alt: 'Prayer gathering poster',
              copy:
              'Your tithes and offerings support weekly worship, teaching, and discipleship across three campuses.'
            },
            {
              title: 'Community',
              image: siteAssets.missionCommunity,
              alt: 'Community outreach at Olivet',
              copy:
              'Through the Matthew 25 Campus, we feed families every weekday and provide clothing to those in need.'
            },
            {
              title: 'Education',
              image: siteAssets.missionSupport,
              alt: 'Community support at Olivet',
              copy:
              'Our GED program helps adults earn their diploma and find employment, creating cycles of generational success.'
            }].
            map((item) =>
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -8
              }}
              className="group overflow-hidden rounded-sm border border-obc-midnight/10 bg-white shadow-[0_24px_70px_rgba(45,30,59,0.08)]">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                </div>
                <div className="p-10">
                  <p className="hero-kicker mb-4 text-obc-accent">{item.title}</p>
                  <h3 className="section-display mb-4 text-[clamp(2rem,3vw,2.7rem)] text-obc-midnight">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-obc-midnight/70">
                    {item.copy}
                  </p>
                </div>
              </motion.article>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── GIVING OPTIONS ─── */}
      <section
        id="ways-to-give"
        className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-16 border-b border-white/10 pb-6">
            
            <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
              {'{ PLATFORMS }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
              WAYS TO GIVE
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <motion.div
              variants={fadeUp}
              className="bg-white/5 border border-white/10 p-12 rounded-sm group hover:border-obc-lavender/50 transition-colors duration-500">
              
              <h3 className="section-display mb-6 text-[clamp(2rem,3vw,3rem)] text-white transition-colors group-hover:text-obc-lavender">
                GIVE WITH VANCO
              </h3>
              <p className="text-white/70 mb-10 leading-relaxed max-w-md">
                Secure online giving for tithes, offerings, and designated
                funds. Easy to set up recurring gifts.
              </p>
              <button className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group/btn">
                Give via Vanco
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white/5 border border-white/10 p-12 rounded-sm group hover:border-obc-lavender/50 transition-colors duration-500">
              
              <h3 className="section-display mb-6 text-[clamp(2rem,3vw,3rem)] text-white transition-colors group-hover:text-obc-lavender">
                GIVE WITH GIVELIFY
              </h3>
              <p className="text-white/70 mb-10 leading-relaxed max-w-md">
                Quick mobile giving through the Givelify app. Perfect for giving
                during service or on the go.
              </p>
              <button className="inline-flex items-center bg-white text-obc-midnight px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group/btn">
                Give via Givelify
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                
              </button>
            </motion.div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-white/50 text-sm uppercase tracking-[0.2em] font-bold border-l-2 border-obc-accent pl-4">
            
            You can also give in person via cash or check during any worship
            service.
          </motion.p>
        </div>
      </section>

      {/* ─── SCRIPTURE SECTION ─── */}
      <section className="bg-obc-primary py-32 md:py-48 relative overflow-hidden">
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            TITHE
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-12 text-[clamp(2.6rem,5vw,5rem)] text-white">
              "Bring the whole tithe into the storehouse, that there may be food
              in my house."
            </h2>
            <p className="text-obc-lavender text-xl md:text-2xl uppercase tracking-[0.3em] font-bold">
              — Malachi 3:10
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── GIVING FAQ ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
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
              {'{ QUESTIONS }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              FAQ
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="space-y-0 divide-y divide-obc-midnight/10 border-t border-b border-obc-midnight/10">
            
            {faqs.map((faq, i) =>
            <motion.div key={i} variants={fadeUp} className="group">
                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none">
                
                  <span className="section-display pr-8 text-[clamp(1.8rem,3vw,2.5rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {faq.q}
                  </span>
                  <ChevronDown
                  size={24}
                  className={`text-obc-midnight/30 transition-transform duration-500 group-hover:text-obc-accent shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                
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
                        <p className="text-obc-midnight/70 text-lg leading-relaxed border-l-2 border-obc-accent pl-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="bg-obc-midnight py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="section-display mb-12 text-[clamp(3rem,6vw,5.8rem)] text-white">
              HAVE QUESTIONS
              <br />
              <span className="text-obc-lavender">ABOUT GIVING?</span>
            </h2>
            <Link
              to="/connect"
              className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
              
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
