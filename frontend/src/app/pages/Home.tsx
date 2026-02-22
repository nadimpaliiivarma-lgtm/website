import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustIndicators } from '../components/sections/TrustIndicators';
import { FeaturedCases } from '../components/sections/FeaturedCases';
import { ContactCTA } from '../components/sections/ContactCTA';
import { Layout } from '../components/Layout';
import { Services } from '../components/sections/Services';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">

        <Hero />
        <Services />

        {/* DOCTOR PROFILE SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative flex justify-center">
              <img
                src="images/doctor-profile2.jpeg"
                alt="Doctor Profile"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0F3D3E] text-white px-6 py-3 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold">10+ Years</p>
                <p className="text-xs">Experience</p>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl font-bold text-[#0F3D3E] mb-4">
                Dr. Varma
              </h2>

              <p className="text-lg text-[#C6A969] font-medium mb-6">
                BDS, MDS – Prosthodontist & Implant Specialist
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                With extensive experience in advanced restorative and cosmetic
                dentistry, Dr. Varma specializes in zirconia crowns,
                dental bridges, smile designing, and complete oral rehabilitation.
                He is committed to delivering precision-based, painless dental care
                using modern digital technology.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                
                <li>✔ Advanced Zirconia & Ceramic Restorations</li>
                <li>✔ Smile Designing & Cosmetic Dentistry</li>
                <li>✔ Dental Implants & Full Mouth Rehabilitation</li>
                <li>✔ Patient-Centered Modern Care</li>
                <li>✔ With Experience of 13+ Years</li>
              </ul>

              <button className="bg-[#0F3D3E] hover:bg-[#1A5F61] text-white px-8 py-3 rounded-2xl shadow-md transition-all duration-300">
                Book Appointment
              </button>
            </div>

          </div>
        </section>

        <TrustIndicators />
        <FeaturedCases />
        <ContactCTA />

      </div>
    </Layout>
  );
}




