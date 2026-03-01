import React, { useEffect, useState } from 'react';
import { TrustIndicators } from '../components/sections/TrustIndicators';
import { ContactCTA } from '../components/sections/ContactCTA';
import { Layout } from '../components/Layout';
import { Services } from '../components/sections/Services';

export default function Home() {
  const images = [
    "/images/home-page.jpeg",
    "/images/child-home.jpeg",
    "/images/children-home.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">

        {/* ===== SLIDING HERO SECTION ===== */}
        <section className="relative h-screen w-full overflow-hidden">

          {/* Sliding Background */}
          <div
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced Dental Care With Precision
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Providing painless, modern, and personalized dental treatments
              for beautiful and confident smiles.
            </p>

            <button className="bg-[#C6A969] hover:bg-[#b39556] text-white px-8 py-3 rounded-2xl shadow-lg transition-all duration-300">
              Book Appointment
            </button>
          </div>

        </section>

        {/* Services Section */}
        <Services />

        {/* DOCTOR PROFILE SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="relative flex justify-center">
              <img
                src="/images/children-home.jpeg"
                alt="Children Home"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-[#0F3D3E] text-white px-6 py-3 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold">15+ Years</p>
                <p className="text-xs">Experience</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0F3D3E] mb-4">
                Dr. Varma
              </h2>

              <p className="text-lg text-[#C6A969] font-medium mb-6">
                BDS, MDS – Endodontist and Smile Design Expert
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
                <li>✔ With Experience of 15+ Years</li>
              </ul>

              <button className="bg-[#0F3D3E] hover:bg-[#1A5F61] text-white px-8 py-3 rounded-2xl shadow-md transition-all duration-300">
                Book Appointment
              </button>
            </div>

          </div>
        </section>

        <TrustIndicators />
        <ContactCTA />

      </div>
    </Layout>
  );
}
