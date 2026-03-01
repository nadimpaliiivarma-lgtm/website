import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
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


            {/* Instagram */}
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

            <ul className="space-y-3 text-sm text-gray-300">

              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Dr. Varma
                </Link>
              </li>

              <li>
                <Link to="/cases" className="hover:text-white transition-colors">
                  Case Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* Services */}
          <div>

            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C6A969]">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-300">

              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Zirconia Crowns</li>
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Smile Restoration</li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C6A969]">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">


              {/* Address */}
              <li className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-[#C6A969] shrink-0 mt-0.5" />

                <span>
                  Near Ramalaxmana Junction,<br />
                  Opp Shanthi Hospital, Ground Floor,<br />
                  Srikakulam, Andhra Pradesh, India
                </span>

              </li>


              {/* Phone */}
              <li className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-[#C6A969] shrink-0" />

                <a
                  href="tel:+919502293434"
                  className="hover:text-white transition-colors"
                >
                  +91 9502293434
                </a>

              </li>


              {/* Email */}
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
