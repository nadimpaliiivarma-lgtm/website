import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { cn } from '../lib/utils';

export function Footer() {
  const location = useLocation();

  const serviceLinks = [
    { name: 'Full Smile Rehabilitation', path: '/services/full-smile-rehabilitation' },
    { name: 'Correction Of Midline', path: '/services/correction-of-midline' },
    { name: 'Anterior Crown Restoration', path: '/services/anterior-crown-restoration' },
    { name: 'Posterior Bridge Treatment', path: '/services/posterior-bridge-treatment' },
    { name: 'Tooth Whitening', path: '/services/tooth-whitening' },
    { name: 'Dental Implants', path: '/services/dental-implants' },
  ];

  return (
    <footer className="bg-[#0F3D3E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-serif text-xl font-bold border border-white/20">
                V
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold leading-tight">
                  Varma's
                </h3>
                <p className="text-[10px] tracking-widest uppercase text-[#C6A969] font-medium">
                  Dental Clinic
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Providing comprehensive dental care including cosmetic, restorative,
              and preventive treatments using modern technology in Srikakulam.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C6A969] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C6A969]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Dr. Varma', path: '/about' },
                { name: 'Case Gallery', path: '/cases' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      'transition-colors',
                      location.pathname === link.path
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C6A969]">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className={cn(
                      'transition-colors',
                      location.pathname === service.path
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C6A969]">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A969] shrink-0 mt-0.5" />
                <span>
                  Near Ramalaxmana Junction,<br />
                  Opp Shanthi Hospital, Ground Floor,<br />
                  Srikakulam, Andhra Pradesh, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C6A969] shrink-0" />
                <a
                  href="tel:+919502293434"
                  className="hover:text-white transition-colors"
                >
                  +91 9502293434
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C6A969] shrink-0" />
                <a
                  href="mailto:nadimpallivarma@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  nadimpallivarma@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Varma's Multispeciality Dental Clinic. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-default">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

