import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { ContactCTA } from '../components/sections/ContactCTA';

export default function About() {
  return (
    <Layout>
      <div className="bg-white">

        {/* HEADER */}
        <div className="relative pt-32 pb-20 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-6xl font-bold text-[#0F3D3E] mb-6"
            >
              Meet Dr. N. Mahendra Varma
            </motion.h1>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Managing Director & Chief Dental Specialist at Varma Multispeciality Dental Clinic, Srikakulam.
            </p>
          </div>
        </div>

        {/* MAIN DOCTOR SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/doctor-profile2.jpeg"
                    alt="Dr. N. Mahendra Varma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#0F3D3E]">
                    Dr. N. Mahendra Varma, MDS
                  </h2>
                  <p className="text-[#C6A969] font-medium uppercase tracking-wide mt-2">
                    Endodontist | Root Canal Specialist
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Mahendra Varma completed his BDS in 2009 from Oxford Dental School, Bangalore 
                    and went on to complete his MDS in Root Canal Treatments in 2013 from Oxford Dental College, Bangalore.
                  </p>

                  <p>
                    He served as a Professor at Sree Sai Dental College for 12 years.
                  </p>

                  <p>
                    He also served as the President of the Indian Dental Association (IDA), Srikakulam from 2019 to 2021.
                  </p>

                  <p>
                    Currently, he works full-time at Varma Multispeciality Dental Clinic providing modern, patient-focused care.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-[#0F3D3E] mb-3">
                    Highlights
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 12+ Years Academic Experience</li>
                    <li>• Former IDA President (2019–2021)</li>
                    <li>• Specialist in Root Canal Treatments</li>
                    <li>• 15+ Years of Clinical Experience</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR TEAM SECTION */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-6 text-center">

            <h2 className="font-serif text-4xl font-bold text-[#0F3D3E] mb-12">
              Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* DR HASAAN */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
                <img
                  src="/images/hasaan.jpeg"
                  alt="Dr. Adeeb Hasaan"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-[#0F3D3E]">
                  Dr. Adeeb Hasaan
                </h3>
                <p className="text-[#C6A969] font-medium mt-1">
                  Oral & Maxillofacial Surgeon
                </p>
                <p className="text-gray-600 mt-4">
                  Completed BDS in 2012 and MDS in 2016 from Oxford Dental College, Bangalore.
                  With over 10 years of expertise in facial surgery and aesthetics.
                </p>
              </div>

              {/* DR NAVANEETH */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
                <img
                  src="/images/navaneeth.jpeg"
                  alt="Dr. Navaneeth Senapathi"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-[#0F3D3E]">
                  Dr. Navaneeth Senapathi
                </h3>
                <p className="text-[#C6A969] font-medium mt-1">
                  Pediatric Dentist & Academician
                </p>
                <p className="text-gray-600 mt-4">
                  Completed BDS (2006–2011) and MDS in Pedodontics & Preventive Dentistry (2013–2016).
                  Specializing in children's dental care.
                </p>
              </div>

              {/* DR RAMOJI */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
                <img
                  src="/images/ramoji.jpeg"
                  alt="Dr. Ramoji Rao Lenka"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-[#0F3D3E]">
                  Dr. Ramoji Rao Lenka
                </h3>
                <p className="text-[#C6A969] font-medium mt-1">
                  Orthodontist & Invisible Aligners Specialist
                </p>
                <p className="text-gray-600 mt-4">
                  IOS Certified Orthodontist specializing in invisible aligners, fixed braces and jaw alignment treatments.
                  Completed BDS and MDS in Orthodontics with expertise in smile makeovers.
                </p>
              </div>

              {/* DR RAJESH */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
                <img
                  src="/images/rajesh.jpeg"
                  alt="Dr. Rajesh Akula"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-[#0F3D3E]">
                  Dr. Rajesh Akula
                </h3>
                <p className="text-[#C6A969] font-medium mt-1">
                  Prosthodontist & Crown & Bridge Specialist
                </p>
                <p className="text-gray-600 mt-4">
                  University Gold Medallist in Prosthodontics with expertise in crowns, bridges,
                  dentures and implant-supported restorations. Experienced academician and researcher.
                </p>
              </div>

            </div>
          </div>
        </section>

        <ContactCTA />

      </div>
    </Layout>
  );
}
