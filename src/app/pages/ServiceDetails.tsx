import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pt-20">

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0F3D3E] mb-6 text-center">
          {service.title}
        </h1>

        {/* Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          {service.description}
        </p>

        {/* Disclaimer BELOW description */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-md text-yellow-900 text-sm leading-relaxed">
          <strong>Disclaimer:</strong> {service.disclaimer}
        </div>

        {/* YouTube Video */}
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src={service.youtubeLink}
            title={service.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>

      </div>

    </div>
  );
}