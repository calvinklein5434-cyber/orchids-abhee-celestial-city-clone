"use client";

import React from 'react';
import Image from 'next/image';
import { usePopup } from '@/hooks/use-popup';

const FloorPlans = () => {
  const { openPopup } = usePopup();
  const masterPlanAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/masterplan-6.jpg";
  
  const floorPlans = [
    {
      title: '2 BHK',
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/floor1-7.jpg",
    },
    {
      title: '2.5 BHK',
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/floor2-8.jpg",
    },
    {
      title: '3 BHK Large',
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/floor3-9.jpg",
    }
  ];

  return (
    <section 
      id="floorss" 
      className="card rounded-0 border-0 shadow mb-3 relative overflow-hidden bg-white"
      style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}
    >
      <div className="card-body p-4 md:p-10 flex flex-col lg:flex-row">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h2 className="text-[24px] font-medium text-[#212529] opacity-80 border-b border-[#dee2e6] pb-2">Site Map & Floor Plan</h2>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:pr-12 order-2 lg:order-1">
            {/* Master Plan Section */}
            <div className="flex flex-col items-center mb-8">
              <div 
                className="w-full max-w-[600px] border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={openPopup}
              >
                  <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                    <Image 
                      src={masterPlanAsset}
                      alt="Master Plan"
                      fill
                      className="object-contain blur-md"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-[#323992] text-white px-6 py-2 text-sm font-medium shadow-lg">View Master Plan</span>
                    </div>
                  </div>
              </div>
              <div className="bg-[#323992] text-white text-center py-2 text-sm font-medium mt-1 w-full max-w-[600px] cursor-pointer" onClick={openPopup}>
                Master Plan
              </div>
            </div>

            {/* Floor Plan Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {floorPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer transition-all duration-300"
                  onClick={openPopup}
                >

                  <div className="border border-gray-200 p-2 hover:shadow-md transition-shadow">
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
                      <Image 
                        src={plan.image}
                        alt={plan.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110 blur-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-[#323992] text-white px-4 py-2 text-xs font-medium shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">View Plan</span>
                      </div>
                    </div>
                  </div>
                <div className="bg-[#323992] text-white text-center py-2 text-sm font-medium mt-1">
                  {plan.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Label - Hidden on mobile, flex on LG */}
        <div className="hidden lg:flex items-center justify-center border-l border-gray-100 bg-white w-[60px] order-1 lg:order-2">
          <div className="vertical-text whitespace-nowrap text-[2.5rem] font-normal leading-none tracking-tight opacity-90 select-none">
            Site Map & Floor Plan
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: #000;
        }
      `}</style>
    </section>
  );
};

export default FloorPlans;
