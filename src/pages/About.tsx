import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
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
export function About() {
  const [openBelief, setOpenBelief] = useState<number | null>(null);
  const beliefs = [
  {
    num: '01',
    title: 'God',
    content:
    'We believe in one God, Creator of all things, holy, infinitely perfect, and eternally existing in a loving unity of three equally divine Persons: the Father, the Son and the Holy Spirit.'
  },
  {
    num: '02',
    title: 'Jesus Christ',
    content:
    "We believe that Jesus Christ is God incarnate, fully God and fully man, one Person in two natures. Jesus—Israel's promised Messiah—was conceived through the Holy Spirit and born of the virgin Mary."
  },
  {
    num: '03',
    title: 'The Holy Spirit',
    content:
    'We believe that the Holy Spirit, in all that He does, glorifies the Lord Jesus Christ. He convicts the world of its guilt. He regenerates sinners, and in Him they are baptized into union with Christ and adopted as heirs in the family of God.'
  },
  {
    num: '04',
    title: 'The Bible',
    content:
    'We believe that God has spoken in the Scriptures, both Old and New Testaments, through the words of human authors. As the verbally inspired Word of God, the Bible is without error in the original writings.'
  },
  {
    num: '05',
    title: 'Salvation',
    content:
    'We believe that the shed blood of Jesus Christ and His resurrection provide the only ground for justification and salvation for all who believe, and only such as receive Jesus Christ are born of the Holy Spirit.'
  },
  {
    num: '06',
    title: 'Baptism',
    content:
    "We believe that water baptism and the Lord's Supper are ordinances to be observed by the Church during the present age. They are, however, not to be regarded as means of salvation."
  },
  {
    num: '07',
    title: 'The Church',
    content:
    "We believe that the true Church comprises all who have been justified by God's grace through faith alone in Christ alone. They are united by the Holy Spirit in the body of Christ, of which He is the Head."
  }];

  const values = [
  {
    num: '01',
    title: 'Faith',
    desc: "Unwavering trust in God's promises and power."
  },
  {
    num: '02',
    title: 'Family',
    desc: 'Building strong homes and spiritual community.'
  },
  {
    num: '03',
    title: 'Fellowship',
    desc: 'Authentic relationships rooted in love.'
  },
  {
    num: '04',
    title: 'Service',
    desc: 'Meeting the needs of our city with compassion.'
  },
  {
    num: '05',
    title: 'Kingdom Authority',
    desc: 'Walking in the power given to believers.'
  },
  {
    num: '06',
    title: 'Worship',
    desc: 'A lifestyle of honoring God in all we do.'
  },
  {
    num: '07',
    title: 'Evangelism',
    desc: 'Sharing the hope of Christ with the world.'
  },
  {
    num: '08',
    title: 'Education',
    desc: 'Equipping believers through the Word.'
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="One family. Three campuses. One Kingdom mission."
        watermark="ABOUT"
        image={siteAssets.buildingWide}
        imageAlt="Olivet campus exterior"
        imageLabel="Our Story"
        title={[
        {
          text: 'WE ARE'
        },
        {
          text: 'OLIVET',
          accent: true
        }]}
        description="A multi-campus church rooted in Chattanooga, shaped by biblical teaching, and committed to serving beyond Sunday."
        actions={[
        {
          label: 'Plan Your Visit',
          to: '/visit',
          variant: 'primary'
        },
        {
          label: 'Watch Online',
          to: '/watch'
        }]} />

      {/* ─── OUR STORY ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-1/3">
              
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                {'{ OUR STORY }'}
              </p>
              <h2 className="section-display sticky top-32 text-[clamp(2.8rem,5vw,4.8rem)] text-obc-midnight">
                A BEACON
                <br />
                OF HOPE
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={stagger}
              className="w-full lg:w-2/3">
              
              <motion.p
                variants={fadeUp}
                className="editorial-lead mb-10">
                
                For decades, Olivet Baptist Church has stood as a beacon of
                hope, healing, and transformation in the heart of Chattanooga.
              </motion.p>

              <div className="space-y-8 text-obc-midnight/70 text-lg leading-relaxed mb-16">
                <motion.p variants={fadeUp}>
                  What began as a faithful gathering of believers has blossomed
                  into a multi-campus movement dedicated to Kingdom building.
                  Under the visionary leadership of Bishop Kevin L. Adams, Sr.,
                  Olivet has expanded its reach beyond the four walls of the
                  traditional church, seeking to meet people exactly where they
                  are.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Our journey is marked by a relentless pursuit of community
                  impact. From our historic Main Campus downtown to the
                  expansive Olivet Nation campus, and our dedicated Matthew 25
                  outreach center, every step of our growth has been fueled by
                  one desire: to model the Kingdom of God in the earth. We are
                  more than a church; we are a family.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-obc-midnight/10 pt-12">
                
                <div className="border-l-2 border-obc-accent pl-6">
                  <h4 className="font-serif text-2xl text-obc-midnight mb-2">
                    The Foundation
                  </h4>
                  <p className="text-sm text-obc-midnight/70">
                    Established in Chattanooga with a heart for the city.
                  </p>
                </div>
                <div className="border-l-2 border-obc-accent pl-6">
                  <h4 className="font-serif text-2xl text-obc-midnight mb-2">
                    Matthew 25
                  </h4>
                  <p className="text-sm text-obc-midnight/70">
                    Launched our dedicated outreach campus to feed and clothe
                    our community.
                  </p>
                </div>
                <div className="border-l-2 border-obc-accent pl-6">
                  <h4 className="font-serif text-2xl text-obc-midnight mb-2">
                    Olivet Nation
                  </h4>
                  <p className="text-sm text-obc-midnight/70">
                    Expanded to Highway 58, creating a new hub for worship and
                    family ministry.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BISHOP ADAMS EXPANDED ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-5/12">
              
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={siteAssets.pastorPortrait}
                  alt="Bishop Kevin L. Adams, Sr."
                  className="w-full h-full object-cover rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700" />
                
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
              className="w-full lg:w-7/12 pt-8">
              
              <motion.p
                variants={fadeUp}
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-6">
                
                {'{ SENIOR PASTOR / TEACHER }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-10 text-[clamp(3rem,6vw,6rem)] text-white">
                
                BISHOP KEVIN L.
                <br />
                <span className="text-obc-lavender">ADAMS, SR.</span>
              </motion.h2>

              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <motion.p variants={fadeUp}>
                  Bishop Kevin L. Adams, Sr. is a visionary leader, dynamic
                  teacher, and compassionate pastor who has dedicated his life
                  to empowering individuals to discover their God-given purpose.
                  As the Senior Pastor of Olivet Baptist Church, his leadership
                  has transformed a local congregation into a thriving,
                  multi-campus ministry with a global reach.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Known for his profound yet practical teaching style, Bishop
                  Adams breaks down complex biblical principles into actionable
                  truths. His ministry emphasizes "Kingdom Authority"—equipping
                  believers to operate in the power and dominion promised by
                  Christ in every area of life: family, business, community, and
                  personal growth.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Beyond the pulpit, Bishop Adams is a deeply respected
                  community leader in Chattanooga. He has spearheaded numerous
                  initiatives aimed at economic empowerment, educational
                  advancement, and social justice. His heart for the
                  marginalized led to the creation of the Matthew 25 Campus, a
                  testament to his belief that the church must be the hands and
                  feet of Jesus.
                </motion.p>
                <motion.p variants={fadeUp}>
                  He is a devoted husband, father, and spiritual father to many,
                  continually modeling what it means to lead with integrity,
                  love, and unwavering faith.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP SECTION ─── */}
      <section className="bg-white py-24 md:py-32">
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
              {'{ OUR TEAM }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              EXECUTIVE
              <br />
              LEADERSHIP
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {[
            {
              name: 'Dr. Sarah Adams',
              title: "First Lady / Women's Ministry",
              img: siteAssets.missionPrayer
            },
            {
              name: 'Pastor Marcus Johnson',
              title: 'Executive Pastor',
              img: siteAssets.buildingHero
            },
            {
              name: 'Min. David Wright',
              title: 'Worship & Arts Director',
              img: siteAssets.posterPrayer
            }].
            map((leader, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="group cursor-pointer">
              
                <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm relative">
                  <div className="absolute inset-0 bg-obc-midnight/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                
                </div>
                <div className="border-l-2 border-transparent group-hover:border-obc-accent pl-0 group-hover:pl-4 transition-all duration-300">
                  <h3 className="font-serif text-3xl text-obc-midnight mb-2 group-hover:text-obc-accent transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-obc-midnight/50 text-xs uppercase tracking-[0.2em] font-bold">
                    {leader.title}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR MISSION ─── */}
      <section className="bg-obc-primary py-32 md:py-48 relative overflow-hidden">
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            MISSION
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
            
            <p className="text-obc-lavender text-xs uppercase tracking-[0.3em] font-bold mb-8">
              {'{ OUR MISSION }'}
            </p>
            <h2 className="section-display text-[clamp(2.6rem,5vw,5rem)] text-white">
              Through covenant relationships, we will unite a spiritual bond
              with fellow believers to fulfill the call of
              <span className="section-display mt-6 block text-[clamp(3.4rem,8vw,8rem)] leading-[0.85] text-obc-lavender">
                KINGDOM BUILDING.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR BELIEFS ─── */}
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
              {'{ THEOLOGY }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              WHAT WE
              <br />
              BELIEVE
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
            
            {beliefs.map((belief, i) =>
            <motion.div key={i} variants={fadeUp} className="group">
                <button
                onClick={() => setOpenBelief(openBelief === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none">
                
                  <div className="flex items-center space-x-8">
                    <span className="text-obc-accent/50 font-serif text-3xl md:text-4xl italic group-hover:text-obc-accent transition-colors">
                      {belief.num}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl text-obc-midnight group-hover:text-obc-accent transition-colors">
                      {belief.title}
                    </span>
                  </div>
                  <ChevronDown
                  size={24}
                  className={`text-obc-midnight/30 transition-transform duration-500 group-hover:text-obc-accent ${openBelief === i ? 'rotate-180' : ''}`} />
                
                </button>
                <AnimatePresence>
                  {openBelief === i &&
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
                  
                      <div className="pb-8 pl-16 md:pl-[5.5rem] pr-4">
                        <p className="text-obc-midnight/70 text-lg leading-relaxed border-l-2 border-obc-accent pl-6">
                          {belief.content}
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

      {/* ─── OUR VALUES ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
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
              {'{ DNA }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
              CORE VALUES
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            
            {values.map((value, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-obc-midnight p-10 relative group hover:bg-white/5 transition-colors duration-500">
              
                {/* Ghosted Number */}
                <div className="absolute top-4 right-4 text-white/[0.03] font-serif text-8xl font-bold leading-none select-none group-hover:text-obc-lavender/10 transition-colors duration-500">
                  {value.num}
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="font-serif text-white text-2xl mb-4 group-hover:text-obc-lavender transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
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
              READY TO EXPERIENCE
              <br />
              <span className="text-obc-lavender">OLIVET?</span>
            </h2>
            <Link
              to="/visit"
              className="inline-flex items-center bg-white text-obc-midnight px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
              
              Plan Your Visit
              <ArrowUpRight
                size={18}
                className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              
            </Link>
          </motion.div>
        </div>
      </section>
    </main>);

}
