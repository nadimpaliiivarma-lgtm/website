import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED
import { TrustIndicators } from "../components/sections/TrustIndicators";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Layout } from "../components/Layout";
import { Services } from "../components/sections/Services";

export default function Home() {
  const navigate = useNavigate(); // ✅ ADDED

  const images = [
    "/images/home-page.jpeg",
    "/images/child-home.jpeg",
    "/images/children-home.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout>
      <div className="flex flex-col">

        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full min-h-[35vh] mt-6 overflow-hidden">

          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[4000ms] ${
                  index === current ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-black/40 z-20"></div>

          <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 min-h-[90vh] text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Little Smiles. Big Happiness.
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
              Every little smile holds a world of dreams, laughter, and happiness.
              We believe caring for tiny teeth is about more than just treatment —
              it’s about creating a safe, cheerful space where children feel
              comfortable, confident, and excited to smile.
            </p>

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="mt-8 bg-[#C6A969] hover:bg-[#b39556] text-white px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        </section>

        {/* ===== 3D SPHERE SECTION ===== */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* 3D Sphere */}
            <div className="flex justify-center">
              <div className="sphere-wrapper">
                <div className="sphere">
                  <img src="/images/home-pics.jpeg" alt="Kids Smile 1" />
                  <img src="/images/home-pics2.jpeg" alt="Kids Smile 2" />
                  <img src="/images/home-pics3.jpeg" alt="Kids Smile 3" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-[#0F3D3E] mb-6">
                Little Smiles Matter
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Every little smile holds a world of dreams, laughter, and happiness.
                We believe caring for tiny teeth is about more than just treatment —
                it’s about creating a safe, cheerful space where children feel
                comfortable and confident.
              </p>
            </div>

          </div>
        </section>

        {/* Other Sections */}
        <Services />
        <TrustIndicators />
        <ContactCTA />

      </div>

      {/* ===== SPHERE CSS ===== */}
      <style jsx>{`
        .sphere-wrapper {
          perspective: 1200px;
          width: 320px;
          height: 320px;
        }

        .sphere {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateSphere 20s infinite linear;
        }

        .sphere img {
          position: absolute;
          width: 220px;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          left: 50px;
          top: 50px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        .sphere img:nth-child(1) {
          transform: rotateY(0deg) translateZ(160px);
        }

        .sphere img:nth-child(2) {
          transform: rotateY(120deg) translateZ(160px);
        }

        .sphere img:nth-child(3) {
          transform: rotateY(240deg) translateZ(160px);
        }

        @keyframes rotateSphere {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>

    </Layout>
  );
}
