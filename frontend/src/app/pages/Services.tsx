import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-16 text-[#0F3D3E] font-serif">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {servicesData.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h2 className="text-white text-2xl font-semibold">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

