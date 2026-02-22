import React from "react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Button } from "../components/ui/Button";

const workingImage = "/images/working.jpeg";

const cases = [
  {
    id: 1,
    title: "Full Smile Rehabilitation",
    category: "Cosmetic Dentistry",
    description:
      "Comprehensive aesthetic correction improving alignment, color, and symmetry for a confident smile.",
    before: "/images/full-smile-rehabilitation-before.jpeg",
    after: "/images/full-smile-rehabilitation-after.jpeg",
  },
  {
    id: 2,
    title: "Correction of Midline in Single Day with Cosmetic Treatment",
    category: "Smile Design",
    description:
      "Precise cosmetic enhancement aligning midline symmetry and smile balance in a single appointment.",
    before: "/images/midline-correction-before.jpeg",
    after: "/images/midline-correction-after.jpeg",
  },
  {
    id: 3,
    title: "Anterior Crown Restoration",
    category: "Restorative Dentistry",
    description:
      "Precision-crafted crown restoring strength and natural translucency in the smile zone.",
    before: "/images/zirconia-case1-before.jpeg",
    after: "/images/zirconia-case1-after.jpeg",
  },
  {
    id: 4,
    title: "Posterior Bridge Treatment",
    category: "Fixed Prosthodontics",
    description:
      "Functional rehabilitation restoring chewing efficiency and long-term structural stability.",
    before: "/images/zirconia-case2-before.jpeg",
    after: "/images/zirconia-case2-after.jpeg",
  },
];

export default function Cases() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">

        {/* Hero Section */}
        <div className="pt-32 pb-20 bg-[#F8F9FA] text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0F3D3E] mb-6">
            Patient Transformations
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A glimpse into our cosmetic and restorative treatments —
            combining precision, durability, and natural aesthetics.
          </p>
        </div>

        {/* Cases Grid */}
        <section className="py-16 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {cases.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100"
              >

                {/* Before / After Images */}
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt="Before treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                      Before
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={item.after}
                      alt="After treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#0F3D3E] text-white text-xs px-3 py-1 rounded-full">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-xs text-[#C6A969] uppercase font-bold tracking-wider mb-2">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-2xl font-bold text-[#0F3D3E] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <Button variant="secondary" size="sm">
                    Book Consultation
                  </Button>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Working Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">

              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={workingImage}
                    alt="Doctor performing procedure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F3D3E]">
                  Precision in Every Procedure
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Every treatment is performed with meticulous attention to
                  detail. From preparation to final placement, our approach
                  ensures comfort, durability, and seamless aesthetics tailored
                  to each patient.
                </p>

                <Button variant="primary" size="md">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />

      </div>
    </Layout>
  );
}