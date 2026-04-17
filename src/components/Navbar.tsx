import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteAssets } from '../content/siteAssets';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const isHomePage = location.pathname === '/';
  const isVisitPage = location.pathname === '/visit';
  const hasSolidHeader = mobileMenuOpen || !isHomePage || isScrolled;
  const navLinks = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Watch',
    path: '/watch'
  },
  {
    name: 'Give',
    path: '/give'
  },
  {
    name: 'Events',
    path: '/events'
  },
  {
    name: 'Connect',
    path: '/connect'
  }];

  const leftNavLinks = navLinks.slice(0, 3);
  const rightNavLinks = navLinks.slice(3);

  const isRouteActive = (path: string) =>
  location.pathname === path ||
  path !== '/' && location.pathname.startsWith(`${path}/`);

  const getNavLinkClassName = (path: string) => {
    const isActive = isRouteActive(path);
    return `relative text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 ${isActive ? 'text-obc-lavender' : 'text-white/88 hover:text-white'}`;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${hasSolidHeader ? 'border-b border-white/10 bg-obc-midnight/92 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>

        <div className="container mx-auto hidden h-full grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 md:px-12 xl:grid">
          <nav className="flex items-center justify-end gap-6 2xl:gap-8">
            {leftNavLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              aria-current={isRouteActive(link.path) ? 'page' : undefined}
              className={getNavLinkClassName(link.path)}>

                {link.name}
              </Link>
            )}
          </nav>

          <Link
            to="/"
            aria-label="Olivet Baptist Church home"
            className="relative z-50 flex items-center justify-self-center">

            <img
              src={siteAssets.logo}
              alt="Olivet Baptist Church logo"
              className="h-11 w-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] md:h-12" />
          </Link>

          <div className="flex items-center justify-start gap-6 2xl:gap-8">
            <nav className="flex items-center gap-6 2xl:gap-8">
              {rightNavLinks.map((link) =>
              <Link
                key={link.name}
                to={link.path}
                aria-current={isRouteActive(link.path) ? 'page' : undefined}
                className={getNavLinkClassName(link.path)}>

                  {link.name}
                </Link>
              )}
            </nav>
            <Link
              to="/visit"
              className={`group ml-2 inline-flex flex-col items-start gap-2 whitespace-nowrap pt-1 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 ${isVisitPage ? 'text-obc-lavender' : 'text-white hover:text-obc-lavender'}`}>

              <span className="flex items-center gap-2">
                Plan Your Visit
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span
                className={`h-px w-full origin-left bg-obc-lavender transition-transform duration-300 ${isVisitPage ? 'scale-x-100' : 'scale-x-75 group-hover:scale-x-100'}`} />
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex h-full items-center justify-between px-6 md:px-12 xl:hidden">
          <Link
            to="/"
            aria-label="Olivet Baptist Church home"
            className="relative z-50 flex items-center">

            <img
              src={siteAssets.logo}
              alt="Olivet Baptist Church logo"
              className="h-11 w-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] md:h-12" />
          </Link>

          <div className="relative z-50 flex items-center space-x-4">
            <Link
              to="/visit"
              className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${isVisitPage ? 'bg-white text-obc-midnight' : 'bg-obc-accent text-white'}`}>

              Visit
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu">
              
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: '-100%'
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: '-100%'
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-obc-primary/95 backdrop-blur-xl">
          
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) =>
            <motion.div
              key={link.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1 + i * 0.1
              }}>
              
                  <Link
                to={link.path}
                aria-current={isRouteActive(link.path) ? 'page' : undefined}
                className={`font-serif text-4xl transition-colors ${isRouteActive(link.path) ? 'text-obc-lavender' : 'text-white hover:text-obc-lavender'}`}>
                
                    {link.name}
                  </Link>
                </motion.div>
            )}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.6
              }}
              className="pt-8">
              
                <Link
                to="/visit"
                className="bg-obc-accent text-white px-8 py-4 rounded-lg uppercase tracking-widest text-sm font-semibold inline-block">
                
                  Plan Your Visit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
