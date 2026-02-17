import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Heart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "MDS Qualified Specialist",
    description: "Expert care from a highly qualified Master of Dental Surgery."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Modern Equipment",
    description: "State-of-the-art technology for precise and painless treatments."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Zirconia Expert",
    description: "Specialized in high-quality, durable, and natural-looking crowns."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Patient-Centric Care",
    description: "Compassionate approach focusing on your comfort and long-term health."
  }
];

export function TrustIndicators() {
  return (
    <section className="py-20 bg-white relative z-20 -mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-[#0F3D3E] mb-6 group-hover:bg-[#0F3D3E] group-hover:text-[#C6A969] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F3D3E] mb-3 font-serif">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
