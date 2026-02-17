import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Smile, Activity, Stethoscope, HeartPulse } from 'lucide-react';

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, whitening, and aesthetic contouring.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Crowns & Bridges",
    description: "Restore function and appearance with high-quality zirconia and ceramic options.",
    // using a generic icon since specific Crown might not be available or imported
    icon: <Activity className="w-6 h-6" /> 
  },
  {
    title: "Smile Restoration",
    description: "Comprehensive makeovers to give you the confident smile you deserve.",
    icon: <Smile className="w-6 h-6" />
  },
  {
    title: "Preventive Care",
    description: "Regular checkups, cleanings, and fluoride treatments to maintain oral health.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Restorative Dentistry",
    description: "Repair damaged teeth with fillings, root canals, and modern restorative techniques.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "General Treatments",
    description: "Complete family dental care including extractions and gum treatments.",
    icon: <HeartPulse className="w-6 h-6" />
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0F3D3E_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F3D3E] mb-4">Comprehensive Dental Expertise</h2>
          <p className="text-gray-600 text-lg">
            Dr. Varma offers a full spectrum of dental services, combining advanced technology with compassionate care to ensure your long-term oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-[#0F3D3E] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#0F3D3E] group-hover:text-[#C6A969]">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F3D3E] mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
