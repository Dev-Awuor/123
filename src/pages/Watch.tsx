import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Search,
  Download,
  FileText,
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
export function Watch() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Sunday Services', 'Bible Study', 'Wednesday Night'];
  const archiveSermons = [
  {
    title: 'The Power of Purpose',
    date: 'Oct 23, 2024',
    series: 'Stand Alone',
    img: siteAssets.posterFeature
  },
  {
    title: 'Kingdom Authority Pt. 3',
    date: 'Oct 16, 2024',
    series: 'Kingdom Authority',
    img: siteAssets.posterPrayer
  },
  {
    title: 'Kingdom Authority Pt. 2',
    date: 'Oct 9, 2024',
    series: 'Kingdom Authority',
    img: siteAssets.posterRevival
  },
  {
    title: 'Kingdom Authority Pt. 1',
    date: 'Oct 2, 2024',
    series: 'Kingdom Authority',
    img: siteAssets.posterConference
  },
  {
    title: 'Faith in the Fire',
    date: 'Sep 25, 2024',
    series: 'Stand Alone',
    img: siteAssets.posterCommunity
  },
  {
    title: 'The Golden Altar',
    date: 'Aug 2, 2023',
    series: 'Bible Study',
    img: siteAssets.posterYouth
  }];

  const teachingNotes = [
  {
    title: "Don't Forget What Works",
    date: 'Oct 30, 2024',
    type: 'PDF'
  },
  {
    title: 'The Golden Altar (Noon)',
    date: 'Aug 2, 2023',
    type: 'PDF'
  },
  {
    title: 'The Golden Altar (Evening)',
    date: 'Aug 2, 2023',
    type: 'PDF'
  },
  {
    title: 'The Golden Altar Presentation',
    date: 'Aug 2, 2023',
    type: 'PPTX'
  },
  {
    title: 'Table of Shewbread Series',
    date: 'Jul 19, 2023',
    type: 'PDF'
  },
  {
    title: 'Tabernacle Series',
    date: 'May 2023',
    type: 'PDF'
  }];

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Live and on demand"
        watermark="WATCH"
        image={siteAssets.posterFeature}
        imageAlt="Olivet sermon series art"
        imageLabel="Media Hub"
        imageClassName="object-top"
        title={[
        {
          text: 'WATCH'
        },
        {
          text: 'ONLINE',
          accent: true
        }]}
        description="Stream the latest teaching, revisit message series, and keep companion notes close throughout the week."
        actions={[
        {
          label: 'Subscribe on YouTube',
          href: 'https://youtube.com/@adamsksr',
          variant: 'primary'
        },
        {
          label: 'Plan a Visit',
          to: '/visit'
        }]} />

      {/* ─── LIVE STREAM ─── */}
      <section className="bg-obc-midnight py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={stagger}
              className="w-full lg:w-1/3">
              
              <motion.p
                variants={fadeUp}
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                
                {'{ LIVE STREAM }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,5rem)] text-white">
                
                JOIN US
                <br />
                LIVE
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/70 text-lg mb-10">
                
                Experience the teaching of Bishop Adams from anywhere in the
                world. Live every Sunday at 9:30AM and 12:00PM EST.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="https://youtube.com/@adamsksr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
                
                Subscribe on YouTube
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="w-full lg:w-2/3">
              
              <div className="aspect-video w-full bg-black rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group cursor-pointer border border-white/10">
                <img
                  src={siteAssets.posterFeature}
                  alt="Live Stream"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-obc-accent rounded-full flex items-center justify-center pl-2 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_40px_rgba(86,26,143,0.8)]">
                    <Play size={36} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
                  LIVE
                </div>
              </div>
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
              {'{ LATEST MESSAGE }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              DON'T FORGET
              <br />
              WHAT WORKS
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-3/5 aspect-video relative group cursor-pointer rounded-sm overflow-hidden shadow-2xl">
              <img
                src={siteAssets.posterPrayer}
                alt="Latest Sermon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-obc-midnight/40 transition-opacity group-hover:bg-obc-midnight/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-2 transition-transform duration-300 group-hover:scale-110 shadow-xl">
                  <Play size={32} className="text-obc-primary" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 lg:pl-8">
              <p className="text-obc-midnight/50 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                OCTOBER 30, 2024
              </p>
              <h3 className="editorial-lead mb-6">
                A powerful reminder to return to the foundational principles of
                faith.
              </h3>
              <div className="flex flex-col gap-6 mt-10">
                <button className="inline-flex items-center justify-center bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 group w-fit">
                  Watch Now
                  <ArrowUpRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                </button>
                <button className="inline-flex items-center text-obc-accent font-bold uppercase tracking-[0.2em] text-xs hover:text-obc-primary transition-colors w-fit">
                  <Download size={16} className="mr-3" /> Download Notes
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERMON ARCHIVE ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-obc-midnight/10 pb-6 gap-8">
            
            <div>
              <p className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-3">
                {'{ ARCHIVE }'}
              </p>
              <h2 className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight md:mb-0">
                ALL MESSAGES
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) =>
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 text-xs uppercase tracking-[0.1em] font-bold transition-colors border ${activeFilter === filter ? 'bg-obc-midnight text-white border-obc-midnight' : 'bg-transparent text-obc-midnight/50 border-obc-midnight/20 hover:border-obc-midnight hover:text-obc-midnight'}`}>
                  
                    {filter}
                  </button>
                )}
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="SEARCH..."
                  className="w-full bg-transparent border-b-2 border-obc-midnight/20 pl-10 pr-4 py-2 text-obc-midnight text-sm uppercase tracking-widest focus:outline-none focus:border-obc-accent transition-colors placeholder:text-obc-midnight/30" />
                
                <Search
                  className="absolute left-0 top-2 text-obc-midnight/40"
                  size={18} />
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
            
            {archiveSermons.map((sermon, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="group cursor-pointer">
              
                <div className="aspect-video rounded-sm overflow-hidden relative mb-6 shadow-lg">
                  <img
                  src={sermon.img}
                  alt={sermon.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-obc-midnight/20 group-hover:bg-obc-midnight/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl">
                      <Play size={24} className="text-obc-primary" />
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-transparent group-hover:border-obc-accent pl-0 group-hover:pl-4 transition-all duration-300">
                  <p className="text-obc-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    {sermon.series}
                  </p>
                  <h3 className="section-display mb-2 text-[clamp(1.9rem,3vw,2.7rem)] text-obc-midnight transition-colors group-hover:text-obc-accent">
                    {sermon.title}
                  </h3>
                  <p className="text-obc-midnight/50 text-xs uppercase tracking-[0.2em] font-bold">
                    {sermon.date}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <div className="text-center">
            <button className="inline-flex items-center text-obc-midnight font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-midnight pb-2 hover:text-obc-accent hover:border-obc-accent transition-colors duration-300">
              Load More Messages
            </button>
          </div>
        </div>
      </section>

      {/* ─── TEACHING NOTES ─── */}
      <section className="bg-obc-primary py-24 md:py-32 relative overflow-hidden">
        {/* Ghosted Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            NOTES
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-16 border-b border-white/20 pb-6">
            
            <p className="text-obc-lavender text-xs uppercase tracking-[0.3em] font-bold mb-3">
              {'{ RESOURCES }'}
            </p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
              TEACHING NOTES
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="space-y-0 divide-y divide-white/10">
            
            {teachingNotes.map((note, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/5 px-4 -mx-4 transition-colors">
              
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-obc-lavender group-hover:text-obc-midnight transition-colors text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="section-display mb-1 text-[clamp(1.7rem,2.8vw,2.3rem)] text-white transition-colors group-hover:text-obc-lavender">
                      {note.title}
                    </h4>
                    <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
                      {note.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 md:ml-auto pl-18 md:pl-0">
                  <span className="text-obc-lavender text-xs uppercase tracking-[0.2em] font-bold border border-obc-lavender/30 px-3 py-1 rounded-sm">
                    {note.type}
                  </span>
                  <button className="text-white hover:text-obc-lavender transition-colors flex items-center text-xs uppercase tracking-[0.2em] font-bold">
                    Download <Download size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── PODCAST ─── */}
      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="w-full lg:w-1/2">
              
              <div className="relative overflow-hidden rounded-sm border border-obc-midnight/10 bg-white shadow-[0_30px_90px_rgba(45,30,59,0.12)]">
                <img
                  src={siteAssets.missionFamily}
                  alt="Olivet community conversation"
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-obc-midnight/75 via-obc-midnight/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="hero-kicker mb-3 text-obc-lavender">New audio ministry</p>
                  <p className="section-display text-[clamp(2rem,4vw,3.15rem)] text-white">
                    VOICES OF
                    <br />
                    OLIVET
                  </p>
                </div>
                <div className="paper-panel absolute -bottom-6 right-6 hidden w-40 overflow-hidden rounded-sm border border-obc-midnight/10 bg-obc-offwhite shadow-xl sm:block">
                  <img
                    src={siteAssets.pastorPortrait}
                    alt="Bishop Kevin L. Adams, Sr."
                    className="aspect-[4/5] w-full object-cover" />
                  <div className="border-t border-obc-midnight/10 px-4 py-3">
                    <p className="hero-kicker text-obc-accent">Featuring</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-obc-midnight">
                      Sermons, interviews, and stories
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

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
                className="text-obc-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
                
                {'{ COMING SOON }'}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display mb-8 text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
                
                LISTEN ON
                <br />
                THE GO
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-obc-midnight/70 text-lg mb-12 max-w-md">
                
                We're launching a new podcast featuring sermons, interviews, and
                deep dives into the Word. Subscribe to get notified when we go
                live.
              </motion.p>

              <motion.form
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mb-12"
                onSubmit={(e) => e.preventDefault()}>
                
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow bg-white border border-obc-midnight/10 rounded-sm px-6 py-4 text-obc-midnight focus:outline-none focus:border-obc-accent transition-colors"
                  required />
                
                <button
                  type="submit"
                  className="bg-obc-midnight text-white px-8 py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-accent transition-colors duration-300 flex items-center justify-center whitespace-nowrap">
                  
                  Notify Me
                </button>
              </motion.form>

              <motion.div
                variants={fadeUp}
                className="flex gap-6 opacity-40 grayscale">
                
                <span className="font-bold uppercase tracking-[0.2em] text-sm">
                  Apple Podcasts
                </span>
                <span className="font-bold uppercase tracking-[0.2em] text-sm">
                  Spotify
                </span>
              </motion.div>
            </motion.div>
          </div>
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
              WANT TO GO
              <br />
              <span className="text-obc-lavender">DEEPER?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link
                to="/visit"
                className="inline-flex items-center bg-white text-obc-midnight px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-obc-lavender transition-colors duration-300 group">
                
                Plan Your Visit
                <ArrowUpRight
                  size={18}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                
              </Link>
              <Link
                to="/connect"
                className="inline-flex items-center text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-obc-lavender pb-2 hover:border-white transition-colors duration-300 group">
                
                Join a Life Group
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
