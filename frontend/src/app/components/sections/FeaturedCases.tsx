import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface Case {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
  description: string;
}

const cases: Case[] = [
  {
    id: 1,
    title: "Zirconia Crown Restoration – Case 1",
    category: "Restorative Dentistry",
    before: "/images/zirconia-case1-before.jpeg",
    after: "/images/zirconia-case1-after.jpeg",
    description: "Restoration using high-quality zirconia crowns to improve strength, function, and natural aesthetics."
  },
  {
    id: 2,
    title: "Zirconia Crown Restoration – Case 2",
    category: "Cosmetic & Restorative Dentistry",
    before: "/images/zirconia-case2-before.jpeg",
    after: "/images/zirconia-case2-after.jpeg",
    description: "Precision zirconia crown treatment providing durability, comfort, and a natural-looking smile."
  }
];

export function FeaturedCases() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

          <div className="max-w-2xl">

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F3D3E] mb-4">
              Clinical Case Showcase
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              Below are sample clinical cases demonstrating treatment quality and patient care.
              These represent examples of restorative and cosmetic dental procedures.
            </p>

            <p className="text-gray-500 text-base">
              See how Dr. Nadimpalli Varma transforms smiles through advanced dental treatments.
            </p>

          </div>

          <Link to="/cases">
            <Button variant="outline" className="hidden md:flex">
              View All Cases
            </Button>
          </Link>

        </div>


        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {cases.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >

              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">

                {/* AFTER Image */}
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* AFTER badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0F3D3E] shadow-sm">
                  AFTER
                </div>


                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/90 via-[#0F3D3E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">

                  <p className="text-[#C6A969] text-sm font-medium uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </p>

                  <h3 className="text-white font-serif text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.description}
                  </p>


                  {/* BEFORE Preview */}
                  <div className="mt-4 flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">

                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 relative">

                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />

                      <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-[8px] text-white text-center py-0.5">
                        BEFORE
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* Default Bottom Card */}
              <div className="p-6 transition-opacity duration-300 group-hover:opacity-0 absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm m-4 rounded-xl shadow-sm">

                <h3 className="font-serif text-xl font-bold text-[#0F3D3E]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">

          <Link to="/cases">
            <Button variant="outline" className="w-full">
              View All Cases
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}
