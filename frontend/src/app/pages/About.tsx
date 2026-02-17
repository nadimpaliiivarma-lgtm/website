import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { ContactCTA } from '../components/sections/ContactCTA';

export default function About() {
  return (
    <Layout>

      <div className="bg-white">


        {/* Header Section */}
        <div className="relative pt-32 pb-20 bg-[#F8F9FA]">

          <div className="container mx-auto px-4 md:px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-6xl font-bold text-[#0F3D3E] mb-6"
            >
              Meet Dr. Nadimpalli Varma
            </motion.h1>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Providing comprehensive dental care with precision, professionalism, and patient-focused treatment.
            </p>

          </div>

        </div>



        {/* Profile Section */}
        <section className="py-20">

          <div className="container mx-auto px-4 md:px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">


              {/* Doctor Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >

                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">

                  <img
                    src="/images/doctor-profile.jpeg"
                    alt="Dr. Nadimpalli Varma"
                    className="w-full h-full object-cover"
                  />

                </div>

              </motion.div>



              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >

                <div>

                  <h2 className="font-serif text-3xl font-bold text-[#0F3D3E] mb-2">
                    Dr. Nadimpalli Varma, MDS
                  </h2>

                  <p className="text-[#C6A969] font-medium text-lg uppercase tracking-wide">
                    Dental Specialist & Cosmetic Dentist
                  </p>

                </div>


                <div className="space-y-6 text-gray-600 leading-relaxed">

                  <p>
                    Dr. Nadimpalli Varma is a qualified dental specialist dedicated to providing
                    high-quality dental care using modern techniques and advanced equipment.
                  </p>

                  <p>
                    He offers a wide range of dental treatments including cosmetic dentistry,
                    restorative procedures, preventive care, crowns and bridges, root canal treatment,
                    and smile restoration.
                  </p>

                  <p>
                    At Varma's Multispeciality Dental Clinic, he focuses on patient comfort,
                    precision treatment, and long-term dental health, ensuring every patient receives
                    personalized and professional care.
                  </p>

                </div>



                {/* Expertise */}
                <div className="pt-8 border-t border-gray-100">

                  <h3 className="font-serif text-xl font-bold text-[#0F3D3E] mb-4">
                    Areas of Expertise
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {[
                      "Cosmetic Dentistry",
                      "Zirconia Crowns & Bridges",
                      "Dental Implants",
                      "Smile Restoration",
                      "Root Canal Treatment",
                      "Preventive Dental Care"
                    ].map((item, i) => (

                      <li key={i} className="flex items-center gap-2 text-gray-700">

                        <span className="w-2 h-2 rounded-full bg-[#C6A969]" />

                        {item}

                      </li>

                    ))}

                  </ul>

                </div>


              </motion.div>

            </div>

          </div>

        </section>



        {/* Clinic Section */}
        <section className="py-20 bg-[#F8F9FA]">

          <div className="container mx-auto px-4 md:px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">


              <div className="order-2 lg:order-1 space-y-8">

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F3D3E]">
                  Varma's Multispeciality Dental Clinic
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  The clinic is equipped with modern dental technology to provide accurate diagnosis,
                  effective treatment, and comfortable patient experience.
                </p>


                <div className="grid grid-cols-2 gap-6">

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

                    <h4 className="font-bold text-[#0F3D3E] mb-2">
                      Modern Equipment
                    </h4>

                    <p className="text-sm text-gray-500">
                      Advanced dental tools for precision and safety.
                    </p>

                  </div>


                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

                    <h4 className="font-bold text-[#0F3D3E] mb-2">
                      Patient Care
                    </h4>

                    <p className="text-sm text-gray-500">
                      Comfortable and professional treatment environment.
                    </p>

                  </div>

                </div>


              </div>


              {/* Clinic Image */}
              <div className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden shadow-lg">

                <img
                  src="/images/equipment1.jpeg"
                  alt="Clinic Equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>


            </div>

          </div>

        </section>



        <ContactCTA />


      </div>

    </Layout>
  );
}
