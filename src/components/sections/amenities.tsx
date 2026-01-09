import React from 'react';
import Image from 'next/image';

/**
 * Amenities Section Component
 * 
 * Clones the amenities section of the Abhee Celestial City landing page.
 * Features a grid of items with icons and titles.
 * Includes the characteristic vertical section title on the right.
 */

const amenitiesData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/swimming-pool-1.png",
    label: "SWIMMING POOL WITH POOL DECK"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/children-2.png",
    label: "KIDS PLAY AREA"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/Club-House-3.png",
    label: "GRAND CLUB HOUSE"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/yoga-4.png",
    label: "MEDITATION WITH YOGA DECK"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/Garden-5.png",
    label: "FLORAL GARDEN"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/badminton-court-1-6.png",
    label: "MULTIPURPOSE COURT"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/gym-7.png",
    label: "OUTDOOR GYM"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/jogging-8.png",
    label: "JOGGING TRACK"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/icons/spa-salon-9.png",
    label: "SPA/SALOON"
  }
];

export default function Amenities() {
  return (
    <section 
      id="ame" 
      className="relative bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] mb-[3rem] overflow-hidden"
    >
      <div className="p-4 md:p-10 flex flex-col lg:flex-row">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h2 className="text-[24px] font-medium text-[#212529] opacity-80 border-b border-[#dee2e6] pb-2">Amenities</h2>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:pr-12 order-2 lg:order-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {amenitiesData.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-4 md:p-6 border border-[#dee2e6] hover:shadow-md transition-shadow duration-300 min-h-[120px] md:min-h-[140px]"
              >
                <div className="mb-3 md:mb-4 relative h-[35px] w-[35px] md:h-[45px] md:w-[45px] flex items-center justify-center">
                  <Image 
                    src={item.icon} 
                    alt={item.label}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[9px] md:text-[11px] font-semibold text-[#212529] text-center uppercase tracking-wider leading-tight">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Section Title - Desktop only */}
        <div className="hidden lg:flex items-center justify-center border-l border-[#dee2e6] pl-6 py-4 order-1 lg:order-2">
          <div 
            className="vertical-text text-[2.5rem] font-light text-[#000] opacity-80 whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}
          >
            Amenities
          </div>
        </div>
      </div>
    </section>
  );
}