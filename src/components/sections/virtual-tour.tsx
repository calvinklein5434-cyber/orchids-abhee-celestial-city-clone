"use client";

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { usePopup } from '@/hooks/use-popup';

/**
 * Technical Specs based on computed styles:
 * - Card Shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)
 * - Card Background: #ffffff
 * - Vertical Text Color: #000, opacity 0.8
 * - Vertical Text Size: 2.5rem
 * - Primary Color: #323992 (Deep corporate blue)
 */

const VirtualTour = () => {
  const videoThumbnail = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/videos-20.jpg";
  const { openPopup } = usePopup();

  return (
    <section
      id="videos"
      className="section-card rounded-0 border-0 shadow mb-[3rem] bg-white relative overflow-hidden"
      style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}>

      <div className="card-body p-4 md:p-10 flex flex-col lg:flex-row min-h-[400px]">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h2 className="text-[24px] font-medium text-[#212529] opacity-80 border-b border-[#dee2e6] pb-2">Virtual Tour</h2>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow pr-0 lg:pr-12 order-2 lg:order-1">
          {/* Video Placeholder Container */}
          <div 
            onClick={openPopup}
            className="relative group cursor-pointer w-full aspect-video md:aspect-[21/9] overflow-hidden mt-10"
          >
            <Image
              src={videoThumbnail}
              alt="Abhee Celestial City Virtual Tour Thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105" />

            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              {/* Play Button */}
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Play className="text-[#323992] fill-[#323992] w-8 h-8 md:w-10 md:h-10 ml-1" />
                </div>
              </div>

              {/* Text Overlay */}
              <div className="bg-black/50 backdrop-blur-sm py-4 px-6 md:px-12 rounded-sm border border-white/20">
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wider mb-2 uppercase">
                  VIRTUAL TOUR
                </h2>
                <p className="text-white text-base md:text-xl font-medium !whitespace-pre-line">Abhee Celestial City Phase 2 at Off Sarjapur Road, Bangalore
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Section Title (Visible on Desktop) */}
        <div className="hidden lg:flex items-center justify-center border-l border-[#dee2e6] pl-6 ml-auto order-1 lg:order-2">
          <div className="vertical-text whitespace-nowrap select-none">
            Virtual Tour
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 2.5rem;
          font-weight: 400;
          color: #000;
          opacity: 0.8;
          font-family: var(--font-sans);
        }
      `}</style>
    </section>);

};

export default VirtualTour;