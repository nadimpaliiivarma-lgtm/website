import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0F3D3E] text-white">

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C6A969]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Contact Varma's Multispeciality Dental Clinic
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed">
            Book your appointment or contact us for consultations and complete dental care services with Dr. Nadimpalli Varma, MDS.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">


            {/* Call Button */}
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => window.location.href = 'tel:+919502293434'}
              icon={<Phone className="w-5 h-5" />}
            >
              Call +91 9502293434
            </Button>


            {/* WhatsApp Button */}
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[200px] bg-[#25D366] hover:bg-[#128C7E] text-white"
              onClick={() =>
                window.open(
                  'https://wa.me/919502293434?text=Hello Doctor, I would like to book an appointment',
                  '_blank'
                )
              }
              icon={<Phone className="w-5 h-5" />}
            >
              Book via WhatsApp
            </Button>


            {/* Email Button */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] border-white text-white hover:bg-white hover:text-[#0F3D3E]"
              onClick={() =>
                window.location.href = 'mailto:nadimpallivarma@gmail.com'
              }
              icon={<Mail className="w-5 h-5" />}
            >
              Email Us
            </Button>


            {/* Directions Button */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] border-white text-white hover:bg-white hover:text-[#0F3D3E]"
              onClick={() =>
                window.open(
                  'https://maps.app.goo.gl/uZakA2rJPVWgGMrB8',
                  '_blank'
                )
              }
              icon={<MapPin className="w-5 h-5" />}
            >
              Get Directions
            </Button>


          </div>

        </motion.div>

      </div>

    </section>
  );
}
