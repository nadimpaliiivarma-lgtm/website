import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-5xl mx-auto">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-10"
        />

        <h1 className="text-4xl font-bold text-[#0F3D3E] mb-6 font-serif">
          {service.title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          {service.description}
        </p>

        <div className="aspect-video mb-12">
          <iframe
            src={service.youtubeLink}
            title="Service Video"
            className="w-full h-full rounded-2xl shadow-md"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-[#0F3D3E] text-white px-8 py-3 rounded-full hover:bg-[#C6A969] transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}
