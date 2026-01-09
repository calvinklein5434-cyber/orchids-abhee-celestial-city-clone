"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { usePopup } from '@/hooks/use-popup';
import { motion } from 'framer-motion';

const bannerImages = [
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/banner1-2.jpg",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/banner2-3.jpg"];



const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openPopup } = usePopup();

  useEffect(() => {
    if (bannerImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div className="flex flex-col lg:flex-row no-gutters">
        {/* Main Content Side (Carousel & Details) */}
        <div className="relative w-full lg:w-3/4">
          {/* Carousel */}
            <div className="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
            {bannerImages.map((src, index) =>
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'}`
              }>

                <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover !w-full !h-full !max-w-full" />

              </div>
            )}
          </div>

            {/* Branding Content Overlay */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center">
                <div className="container mx-auto px-4 pointer-events-auto !w-[81.9%] !h-[498px] !max-w-[81.9%]">
                  <div className="bg-black/40 backdrop-blur-sm p-4 md:p-6 border-l-4 border-[#ffc107] !max-w-[88.1%] !w-[319px] !h-full md:!max-w-[319px]">
                    <span className="inline-block bg-[#323992] text-white px-3 py-1 text-sm font-bold tracking-widest mb-3">
                      BOOKING OPEN
                    </span>
                      <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2">Abhee Celestial City 2 
                      <span className="block text-sm md:text-base font-normal">at Off Sarjapur Road, Bangalore</span>
                      </h1>
                  <h3 className="text-white text-base font-medium mb-4">By Abhee Ventures</h3>

                  <motion.div
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 10, -10, 10, 0],
                    rotate: [0, 3, 0, -3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={openPopup}
                  className="bg-[#ffc107] text-[#212529] p-3 mb-6 cursor-pointer relative z-10">
                    <p className="text-xs md:text-[13px] font-bold text-center leading-snug">
                      EOI Benefits:<br />
                      Submit your Expression of Interest (EOI) form and get priority allotment & launch benefits at the time of booking<br />
                      (Limited inventory – EOI basis)
                    </p>
                  </motion.div>

                  {/* Project Details */}
                  <ul className="text-white space-y-2 mb-6 text-sm md:text-base">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-[#ffc107] mr-2" />
                      <span className="font-semibold mr-2 text-[#ffc107]">Type :</span> 2 & 3 BHK Apartment
                    </li>
                      <li className="flex items-start md:items-center whitespace-normal md:whitespace-nowrap text-[13px] md:text-sm">
                        <ChevronRight className="w-4 h-4 text-[#ffc107] mr-2 flex-shrink-0 mt-1 md:mt-0" />
                        <span className="font-semibold mr-2 text-[#ffc107]">Current Status :</span> EOI Open | Pre-Launch
                      </li>

                        <li className="flex items-start md:items-center whitespace-normal md:whitespace-nowrap text-[10px] md:text-[12px] gap-1 w-full">
                          <ChevronRight className="w-3 h-3 text-[#ffc107] flex-shrink-0 mt-1 md:mt-0" />
                          <span className="font-semibold text-[#ffc107]">Expected Price :</span> CALL NOW TO GET EOI PRICE
                        </li>
                  </ul>

                  <h3 className="text-white text-base md:text-lg font-bold mb-4 whitespace-normal !whitespace-pre-line">Starting Price: ₹ 1.39 Cr.
                </h3>

                      <button
                  onClick={openPopup}
                  className="bg-[#ffc107] hover:bg-[#e0a800] text-[#212529] font-bold py-2 px-8 rounded transition-colors uppercase tracking-wider text-sm shadow-xl">
                        Register Your EOI Now
                      </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Sidebar Form */}
            <div className="w-full lg:w-1/4 bg-[#f8f9fa] lg:h-auto border-l border-gray-200">
              <div className="lg:sticky lg:top-[80px] p-0 z-20">
                {/* Contact Info Header */}
                <div className="bg-[#323992] text-white p-4">
                  <ul className="space-y-3">
                      <li className="flex flex-col">
                        <a href="tel:+918088650299" className="hover:text-[#ffc107] transition-colors font-bold text-lg">+91 89516 09430 <span className="text-xs font-normal">(INDIA)</span></a>
                      </li>
                          <li>
                            <a
                    href="https://wa.link/p2oroo"
                    className="flex items-center gap-2 bg-[#323992] text-white px-3 py-2 rounded text-sm font-semibold hover:bg-[#282e75] transition-all">

                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                              </svg>
                              Click Here to Whatsapp
                            </a>
                          </li>
                    <li className="flex gap-2">
                      <button
                    onClick={openPopup}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-xs py-2 border border-white/30 rounded">
                        Site Visit
                      </button>
                      <button
                    onClick={openPopup}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-xs py-2 border border-white/30 rounded">
                        Request Meeting
                      </button>
                    </li>
                  </ul>
                </div>

              {/* Registration Form */}
              <div className="p-6 bg-white shadow-lg w-full">
                <h3 className="text-[#323992] font-bold text-xl mb-6 border-b-2 border-[#ffc107] pb-2">
                  Register your Interest
                </h3>
              <form className="space-y-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all" />

                </div>
                <div className="space-y-1">
                  <input
                    type="tel"
                    placeholder="Contact No"
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all" />

                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all" />

                </div>
                <div className="space-y-1">
                  <select className="w-full border border-gray-300 p-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all">
                    <option>--Select customer type--</option>
                    <option>Im a potential Buyer</option>
                    <option>An Agent</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all" />

                </div>
                <div className="space-y-1">
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#323992] transition-all">
                  </textarea>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" className="mt-1" id="consent" defaultChecked />
                  <label htmlFor="consent" className="text-[10px] leading-tight text-gray-500">
                    I Consent to The Processing of Provided Data According To Privacy Policy | Terms & Conditions. 
                    I Authorize Property Junction and its representatives to Call, SMS, Email or WhatsApp Me.
                  </label>
                </div>

                <button className="w-full bg-[#323992] hover:bg-[#282e75] text-white font-bold py-3 uppercase tracking-wider transition-colors shadow-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;