import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  Users } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { eventPath, getEventBySlug, getRelatedEvents } from '../content/events';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
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
      staggerChildren: 0.14
    }
  }
};

export function EventDetail() {
  const { slug } = useParams();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return (
      <main className="min-h-[70vh] bg-obc-offwhite pt-32">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <div className="rounded-sm border border-obc-midnight/10 bg-white p-10 shadow-[0_24px_70px_rgba(45,30,59,0.08)] md:p-16">
            <p className="hero-kicker mb-4 text-obc-accent">Event not found</p>
            <h1 className="section-display text-[clamp(2.8rem,6vw,5rem)] text-obc-midnight">
              THIS EVENT
              <br />
              ISN&apos;T HERE
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-obc-midnight/70">
              The event detail page you requested could not be found. Head back
              to the events page to view the current list.
            </p>
            <Link
              to="/events"
              className="action-link action-link-bracket mt-8 text-obc-midnight hover:text-obc-accent">
              
              <span>Back to events</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>);
  }

  const relatedEvents = getRelatedEvents(event.slug);
  const primaryActionIsExternal = event.primaryAction.href?.startsWith('http');

  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow={event.eyebrow}
        watermark="EVENT"
        image={event.image}
        imageAlt={event.imageAlt}
        imageLabel={event.imageLabel}
        title={event.titleLines}
        description={event.teaser}
        actions={[
        event.primaryAction,
        {
          label: 'All Events',
          to: '/events'
        }]} />

      <section className="bg-obc-offwhite py-10 md:py-12">
        <div className="container mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 md:px-12">
          <Link
            to="/events"
            className="inline-flex items-center text-xs font-bold uppercase tracking-[0.22em] text-obc-midnight/60 transition-colors hover:text-obc-accent">
            
            <ArrowLeft size={14} className="mr-2" />
            Back to Events
          </Link>
        </div>
      </section>

      <section className="bg-obc-offwhite pb-24 md:pb-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            
            {[
            {
              label: 'Date',
              value: event.dateLabel,
              Icon: Calendar
            },
            {
              label: 'Time',
              value: event.time,
              Icon: Clock
            },
            {
              label: 'Location',
              value: event.location,
              Icon: MapPin
            },
            {
              label: 'Best for',
              value: event.audience,
              Icon: Users
            }].
            map((item) =>
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{
                y: -8
              }}
              className="group rounded-sm border border-obc-midnight/10 bg-white p-8 shadow-[0_24px_70px_rgba(45,30,59,0.08)]">
              
                <item.Icon size={20} className="mb-6 text-obc-accent" />
                <p className="hero-kicker mb-3 text-obc-accent">{item.label}</p>
                <p className="text-lg leading-relaxed text-obc-midnight/75">
                  {item.value}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_24rem]">
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
                className="hero-kicker mb-4 text-obc-accent">
                
                Event Overview
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display text-[clamp(3rem,6vw,5.6rem)] text-obc-midnight">
                
                WHAT TO
                <br />
                EXPECT
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="editorial-lead mt-8">
                
                {event.summary}
              </motion.p>

              <div className="mt-10 space-y-6">
                {event.details.map((detail) =>
                <motion.p
                  key={detail}
                  variants={fadeUp}
                  className="max-w-3xl text-lg leading-relaxed text-obc-midnight/72">
                  
                    {detail}
                  </motion.p>
                )}
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-14 grid gap-6 md:grid-cols-3">
                
                {event.highlights.map((highlight) =>
                <div
                  key={highlight.label}
                  className="rounded-sm border border-obc-midnight/10 bg-obc-offwhite p-8">
                  
                    <p className="hero-kicker mb-3 text-obc-accent">
                      {highlight.label}
                    </p>
                    <p className="leading-relaxed text-obc-midnight/72">
                      {highlight.text}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeUp}
              className="paper-panel self-start rounded-sm border border-obc-midnight/10 p-8 shadow-[0_24px_70px_rgba(45,30,59,0.08)] lg:sticky lg:top-28">
              
              <p className="hero-kicker mb-4 text-obc-accent">At a glance</p>
              <h3 className="section-display text-[clamp(2rem,4vw,3.2rem)] text-obc-midnight">
                READY FOR
                <br />
                THE ROOM?
              </h3>
              <p className="mt-6 text-base leading-relaxed text-obc-midnight/72">
                {event.campusNote}
              </p>

              <div className="mt-8 space-y-5 border-t border-obc-midnight/10 pt-6">
                <div>
                  <p className="hero-kicker text-obc-accent">Address</p>
                  <p className="mt-2 text-obc-midnight/72">{event.address}</p>
                </div>
                <div>
                  <p className="hero-kicker text-obc-accent">Audience</p>
                  <p className="mt-2 text-obc-midnight/72">{event.audience}</p>
                </div>
                <div>
                  <p className="hero-kicker text-obc-accent">Room feel</p>
                  <p className="mt-2 text-obc-midnight/72">{event.teaser}</p>
                </div>
              </div>

              {event.primaryAction.to ?
              <Link
                to={event.primaryAction.to}
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-obc-midnight px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-obc-accent">
                
                  {event.primaryAction.label}
                  <ArrowUpRight size={16} className="ml-3" />
                </Link> :

              <a
                href={event.primaryAction.href}
                target={primaryActionIsExternal ? '_blank' : undefined}
                rel={primaryActionIsExternal ? 'noopener noreferrer' : undefined}
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-obc-midnight px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-obc-accent">
                
                  {event.primaryAction.label}
                  <ArrowUpRight size={16} className="ml-3" />
                </a>
              }
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-obc-midnight py-24 md:py-32">
        <div className="absolute inset-y-0 right-[-10rem] flex items-center opacity-[0.03]">
          <p className="watermark-display whitespace-nowrap text-white/[0.92]">
            SCHEDULE
          </p>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid items-start gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)]">
            
            <div>
              <motion.p
                variants={fadeUp}
                className="hero-kicker mb-4 text-obc-lavender">
                
                Event Flow
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="section-display text-[clamp(3rem,6vw,5.8rem)] text-white">
                
                RUN OF
                <br />
                THE DAY
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                
                A quick look at the way the experience moves so guests know how
                to arrive, settle in, and make the most of the day.
              </motion.p>
            </div>

            <motion.div
              variants={stagger}
              className="space-y-0 divide-y divide-white/10 border-t border-white/10">
              
              {event.schedule.map((item) =>
              <motion.div
                key={`${item.time}-${item.label}`}
                variants={fadeUp}
                className="grid gap-5 py-7 md:grid-cols-[8rem_minmax(0,1fr)]">
                
                  <p className="section-display text-[clamp(1.6rem,3vw,2.4rem)] text-obc-lavender">
                    {item.time}
                  </p>
                  <div>
                    <p className="text-xl font-semibold uppercase tracking-[0.12em] text-white">
                      {item.label}
                    </p>
                    <p className="mt-2 max-w-2xl leading-relaxed text-white/65">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-obc-offwhite py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
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
              className="hero-kicker mb-4 text-obc-accent">
              
              Visual Tone
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              
              THE
              <br />
              ATMOSPHERE
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)_minmax(0,0.85fr)]">
              
              {event.gallery.map((image, index) =>
              <div
                key={image.alt}
                className={`${index === 0 ? 'md:row-span-2 md:aspect-[4/5]' : 'aspect-[4/3]'} overflow-hidden rounded-sm shadow-[0_24px_70px_rgba(45,30,59,0.1)]`}>
                
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="mb-16 border-b border-obc-midnight/10 pb-6">
            
            <p className="hero-kicker mb-3 text-obc-accent">More to explore</p>
            <h2 className="section-display text-[clamp(3rem,6vw,5.8rem)] text-obc-midnight">
              RELATED
              <br />
              EVENTS
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            
            {relatedEvents.map((relatedEvent) =>
            <motion.article
              key={relatedEvent.slug}
              variants={fadeUp}
              whileHover={{
                y: -8
              }}
              className="group overflow-hidden rounded-sm border border-obc-midnight/10 bg-obc-offwhite shadow-[0_24px_70px_rgba(45,30,59,0.08)]">
              
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={relatedEvent.image}
                    alt={relatedEvent.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="p-8">
                  <p className="hero-kicker mb-3 text-obc-accent">
                    {relatedEvent.dateLabel}
                  </p>
                  <h3 className="section-display text-[clamp(2rem,3vw,3rem)] text-obc-midnight">
                    {relatedEvent.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-obc-midnight/72">
                    {relatedEvent.teaser}
                  </p>
                  <Link
                    to={eventPath(relatedEvent.slug)}
                    className="action-link action-link-bracket mt-6 text-obc-midnight hover:text-obc-accent">
                    
                    <span>See event details</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            )}
          </motion.div>
        </div>
      </section>
    </main>);
}
