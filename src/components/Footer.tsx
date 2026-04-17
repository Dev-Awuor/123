import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Twitter } from 'lucide-react';
import { siteAssets } from '../content/siteAssets';
import { socialUrls } from '../content/siteLinks';
export function Footer() {
  const quickLinks = [
  {
    label: 'About Us',
    path: '/about'
  },
  {
    label: 'Watch Live',
    path: '/watch'
  },
  {
    label: 'Give Online',
    path: '/give'
  },
  {
    label: 'Events',
    path: '/events'
  },
  {
    label: 'Community Outreach',
    path: '/outreach'
  },
  {
    label: 'Serve',
    path: '/serve'
  }];
  const socialLinks = [
  {
    label: 'Facebook',
    href: socialUrls.facebook,
    Icon: Facebook
  },
  {
    label: 'YouTube',
    href: socialUrls.youtube,
    Icon: Youtube
  },
  {
    label: 'X (Twitter)',
    href: socialUrls.x,
    Icon: Twitter
  }];

  return (
    <footer className="bg-obc-midnight text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Quick Links */}
          <div>
            <Link
              to="/"
              aria-label="Olivet Baptist Church home"
              className="mb-6 block w-fit">
              
              <img
                src={siteAssets.logo}
                alt="Olivet Baptist Church logo"
                className="h-20 w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.32)] md:h-24" />
            </Link>
            <p className="text-obc-lavender text-sm uppercase tracking-widest mb-4">
              (QUICK LINKS)
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  className="text-white/80 hover:text-white transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <p className="text-obc-lavender text-sm uppercase tracking-widest mb-6">
              (CAMPUSES)
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Main Campus</h4>
                <p className="text-white/70 text-sm">
                  740 E MLK Blvd
                  <br />
                  Chattanooga, TN 37403
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Sun 9:30AM | Wed 12PM & 6:30PM
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Olivet Nation</h4>
                <p className="text-white/70 text-sm">
                  4872 Jersey Pike
                  <br />
                  Chattanooga, TN 37416
                </p>
                <p className="text-white/50 text-xs mt-1">Sun 12:00PM</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Matthew 25 Campus</h4>
                <p className="text-white/70 text-sm">
                  751 E MLK Blvd
                  <br />
                  Chattanooga, TN 37403
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Weekday Feeding 12PM | Clothing
                </p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-obc-lavender text-sm uppercase tracking-widest mb-6">
              (CONNECT)
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:423-266-8709"
                  className="text-white/80 hover:text-white transition-colors">
                  
                  423-266-8709
                </a>
              </li>
              <li>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@obcministries.org"
                  className="text-white/80 hover:text-white transition-colors">
                  
                  info@obcministries.org
                </a>
              </li>
              <li className="pt-4">
                <p className="text-obc-lavender/80 text-xs italic">
                  For pastoral emergencies, please call the main office and
                  follow the prompts.
                </p>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-obc-lavender text-sm uppercase tracking-widest mb-6">
              (SOCIALS)
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const icon = <social.Icon size={20} />;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-obc-accent">

                    {icon}
                  </a>);
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Olivet Baptist Church. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <Link to="/connect" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="/visit" className="hover:text-white transition-colors">
              Plan a Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
