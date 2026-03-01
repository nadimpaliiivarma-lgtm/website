import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white min-h-screen pt-20">

        {/* Header */}
        <section className="bg-[#0F3D3E] text-white py-20 relative overflow-hidden">

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">

            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact Varma's Multispeciality Dental Clinic for appointments, consultations, and dental care services.
            </p>

          </div>

        </section>


        <section className="py-20 container mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">


            {/* Contact Info */}
            <div className="space-y-12">

              <div>

                <h2 className="font-serif text-3xl font-bold text-[#0F3D3E] mb-6">
                  Contact Information
                </h2>


                <div className="space-y-6">


                  {/* Address */}
                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#0F3D3E] shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>

                    <div>

                      <h4 className="font-bold text-[#0F3D3E] text-lg">
                        Visit Us
                      </h4>

                      <p className="text-gray-600">
                        Near Ramalaxmana Junction,<br />
                        Opp Shanthi Hospital, Ground Floor,<br />
                        Srikakulam, Andhra Pradesh, India 532001
                      </p>

                    </div>

                  </div>


                  {/* Phone */}
                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#0F3D3E] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>

                    <div>

                      <h4 className="font-bold text-[#0F3D3E] text-lg">
                        Call Us
                      </h4>

                      <p className="text-gray-600 mb-1">
                        Mon-Sat from 9am to 8pm
                      </p>

                      <a
                        href="tel:+919502293434"
                        className="text-[#C6A969] font-bold hover:underline"
                      >
                        +91 9502293434
                      </a>

                    </div>

                  </div>


                  {/* Email */}
                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#0F3D3E] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>

                    <div>

                      <h4 className="font-bold text-[#0F3D3E] text-lg">
                        Email Us
                      </h4>

                      <p className="text-gray-600 mb-1">
                        Send us your query anytime
                      </p>

                      <a
                        href="mailto:nadimpallivarma@gmail.com"
                        className="text-[#C6A969] font-bold hover:underline"
                      >
                        nadimpallivarma@gmail.com
                      </a>

                    </div>

                  </div>


                  {/* Working Hours */}
                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#0F3D3E] shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>

                    <div>

                      <h4 className="font-bold text-[#0F3D3E] text-lg">
                        Working Hours
                      </h4>

                      <div className="text-gray-600">

                        <div className="flex justify-between w-60">
                          <span>Monday - Saturday:</span>
                          <span>9:00 AM - 8:00 PM</span>
                        </div>

                        <div className="flex justify-between w-60">
                          <span>Sunday:</span>
                          <span>By Appointment</span>
                        </div>

                      </div>

                    </div>

                  </div>


                </div>

              </div>


              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative bg-gray-200">

                <iframe
                  title="Clinic Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=Ramalaxmana%20Junction%20Srikakulam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                />

              </div>

            </div>


            {/* WhatsApp Booking Section */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center h-full">

              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <Phone className="w-8 h-8" />
              </div>

              <h2 className="font-serif text-3xl font-bold text-[#0F3D3E] mb-4">
                Book Your Appointment
              </h2>

              <p className="text-gray-600 mb-8 max-w-md">
                Book your dental appointment easily through WhatsApp. Click below to contact the clinic directly.
              </p>


              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white shadow-green-200"
                onClick={() =>
                  window.open(
                    'https://wa.me/919502293434?text=Hello Doctor, I would like to book an appointment',
                    '_blank'
                  )
                }
                icon={<Phone className="w-5 h-5" />}
              >
                Book Appointment via WhatsApp
              </Button>

            </div>


          </div>

        </section>

      </div>
    </Layout>
  );
}
