"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryAssets = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery1-11.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery2-12.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery3-13.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery4-14.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery5-15.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery6-16.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery7-17.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery8-18.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/gallery9-10.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryAssets.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryAssets.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-slide functionality matches common architectural landing pages
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="gallery" className="relative mb-12">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-[1200px]">
        <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col md:flex-row">
          {/* Main Content Area */}
          <div className="flex-grow p-4 md:p-10 order-1">
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              {/* Slides */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryAssets.map((src, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
                    <Image
                      src={src}
                      alt={`Abhee Celestial City Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Counter / Dots overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryAssets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentIndex === idx ? "bg-white w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-[14px] text-[#6c757d] italic">
              * Actual project renders and site photographs showing construction progress and amenities.
            </div>
          </div>

          {/* Vertical Section Title (Side Header) - Matching the Pixel Perfect Layout */}
          <div className="hidden lg:flex items-start justify-center w-[80px] border-l border-gray-100 bg-[#fff] order-2 pt-10">
            <span 
              className="vertical-text text-[2.5rem] font-light text-black opacity-80 whitespace-nowrap rotate-180"
              style={{ writingMode: 'vertical-rl' }}
            >
              Gallery
            </span>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden p-4 border-b border-gray-100 order-0">
             <h2 className="text-[1.75rem] font-semibold text-[#323992]">Gallery</h2>
          </div>
        </div>
      </div>
      
      {/* Background decoration to match the high-level design transitions */}
      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
}