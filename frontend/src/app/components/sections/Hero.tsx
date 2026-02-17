import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-emerald-50/50 pt-20 pb-32 md:pt-32 md:pb-40">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0F3D3E]/5 blur-3xl rounded-l-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#C6A969]/10 blur-3xl rounded-r-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 z-10"
          >

            {/* Clinic badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm text-sm font-medium text-[#0F3D3E]">
              <Star className="w-4 h-4 fill-[#C6A969] text-[#C6A969]" />
              <span>Varma's Multispeciality Dental Clinic • Srikakulam</span>
            </div>

            {/* Doctor name */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0F3D3E]">
              Dr. Nadimpalli Varma, <span className="text-[#C6A969] italic">MDS</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Providing comprehensive dental care including cosmetic dentistry, restorative treatments,
              preventive care, crowns, bridges, and smile restoration using modern equipment and advanced techniques.
            </p>

            {/* Clinic name */}
            <p className="text-md text-[#0F3D3E] font-semibold">
              Varma's Multispeciality Dental Clinic, Srikakulam
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">

              {/* View Cases */}
              <Link to="/cases">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  View Cases
                </Button>
              </Link>

              {/* WhatsApp Appointment */}
              <a
                href="https://wa.me/919502293434?text=Hello Doctor, I would like to book an appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Book Appointment via WhatsApp
                </Button>
              </a>

            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-4 pt-8 border-t border-emerald-100/50">

              <div className="flex -space-x-4">

                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="Happy Patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

              </div>

              <div className="text-sm font-medium text-[#0F3D3E]">
                <span className="block font-bold text-lg">2000+</span>
                Happy Smiles Treated
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >

            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-lg mx-auto">

              {/* Background frame */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#0F3D3E] to-[#1A5F61] rotate-3 opacity-20" />

              {/* Doctor Image */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-sm -rotate-3 z-10 overflow-hidden shadow-2xl">

                <img
                  src="/images/doctor-profile.jpeg"
                  alt="Dr. Nadimpalli Varma, MDS"
                  className="w-full h-full object-cover object-top"
                />

              </div>

              {/* Floating cosmetic dentistry card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-20 max-w-[200px]"
              >

                <div className="flex items-center gap-3 mb-2">

                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#0F3D3E]">
                    <Star className="w-5 h-5 fill-[#0F3D3E]" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Expert In</p>
                    <p className="font-bold text-[#0F3D3E]">Cosmetic & Restorative Dentistry</p>
                  </div>

                </div>

              </motion.div>

              {/* Accepting patients indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 -right-4 md:top-20 md:-right-12 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg z-20"
              >

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#0F3D3E]">
                    Accepting New Patients
                  </span>
                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
