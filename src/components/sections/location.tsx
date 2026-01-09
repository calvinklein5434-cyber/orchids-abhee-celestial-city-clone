"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const connectivityData = [
  { name: 'Star Bazaar', distance: '3 km' },
  { name: 'Green Wood High School', distance: '3 km' },
  { name: 'Inventum Academy', distance: '3 km' },
  { name: 'Kshema Hospital', distance: '3 km' },
  { name: 'Decathlon', distance: '3 km' },
  { name: 'Snehaadan Hospital', distance: '3 km' },
  { name: 'Belenus Champion Hospital', distance: '3 km' },
  { name: 'Croma', distance: '3 km' },
  { name: 'Jain Flight Sports Academy', distance: '3 km' },
  { name: 'City Hyper Mart', distance: '5 km' },
  { name: 'Kidztopia Amusement Park', distance: '5 km' },
  { name: 'Santhosh Hi Mart', distance: '5 km' },
  { name: 'JP Morgan', distance: '5 km' },
  { name: 'Brand Factory', distance: '5 km' },
  { name: 'Manipal Hospital Whitefield', distance: '7 km' },
];

const LocationSection: React.FC = () => {
  return (
    <section className="container-fluid mb-12" id="looc">
      <div className="row">
        <div className="col-md-9">
          <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="p-4 md:p-10 flex flex-col lg:flex-row relative">
              {/* Mobile Header */}
              <div className="lg:hidden mb-6">
                <h2 className="text-[24px] font-medium text-[#212529] opacity-80 border-b border-[#dee2e6] pb-2">Location</h2>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow pr-0 lg:pr-12 order-2 lg:order-1">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Column: Map Image */}
                  <div className="w-full md:w-[60%] border border-[#dee2e6] p-2 bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/LocationMap-19.jpg"
                        alt="Abhee Celestial City Location Map"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Column: Connectivity List */}
                  <div className="w-full md:w-[40%]">
                    <h3 className="text-[1.125rem] font-bold text-[#212529] mb-4">Connectivity:</h3>
                    <ul className="space-y-2">
                      {connectivityData.map((item, index) => (
                        <li key={index} className="flex items-start text-[14px] text-[#212529]">
                          <ChevronRight className="w-4 h-4 text-[#6c757d] mt-1 flex-shrink-0" />
                          <span className="ml-1">
                            {item.name} – {item.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vertical Section Label */}
              <div className="hidden lg:flex absolute right-0 top-0 h-full w-[60px] items-center justify-center border-l border-[#dee2e6] bg-white order-1 lg:order-2">
                <span className="vertical-text text-[28px] font-medium text-[#000] opacity-80 select-none">
                  Location
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .vertical-text {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;
