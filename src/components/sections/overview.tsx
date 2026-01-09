"use client";

import React from 'react';
import { Download } from 'lucide-react';
import { usePopup } from '@/hooks/use-popup';

/**
 * Overview component for Abhee Celestial City Phase 2.
 * This section includes a vertical side-label, project summary, 
 * detailed highlights, and a request brochure CTA.
 */
const Overview = () => {
  const { openPopup } = usePopup();
  return (
    <section 
      id="over" 
      className="bg-white border-0 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] mb-12 mt-20 md:mt-8 relative overflow-hidden"
      style={{ borderRadius: '0px' }}
    >
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-8 lg:p-10 order-2 md:order-1">
          <div className="md:pr-12">
            <h2 className="text-[28px] font-bold text-[#212529] mb-4 leading-[1.3]">
              Abhee Celestial City Phase 2 | <span className="text-[#323992] font-semibold block md:inline">Luxury Apartments Off Sarjapur Road, Bangalore</span>
            </h2>
            
            <div className="space-y-4 text-[16px] text-[#484848] leading-[1.6] mb-6">
              <p>
                Abhee Celestial City Phase 2 is located at a prime address off Sarjapur Road (Dommasandra), Bangalore, and is part of a grand 50-acre integrated township development. Just 10 minutes from the upcoming metro stations and surrounded by 7 international schools, the project offers excellent connectivity to Sarjapur, Whitefield, and Outer Ring Road (Bellandur) via the fast-developing Panathur corridor.
              </p>
              <p>
                Designed for more life and larger living, Abhee Celestial City Phase 2 features expansive open landscapes, world-class infrastructure, and thoughtfully planned residential spaces. Residents enjoy access to 40+ premium lifestyle amenities along with a massive 50,000+ sq. ft. exclusive clubhouse featuring an indoor heated swimming pool, squash court, spa, guest rooms, and more.
              </p>
              <p>
                Abhee Celestial City Phase 2 is an ultra-modern high-rise residential project spread across 50 acres, redefining luxury living on the Sarjapur–Whitefield corridor. With elegantly designed 2 BHK, 2.5 BHK & 3 BHK apartments rising up to 26 - 28 floors, the project offers panoramic views, seamless connectivity, and a truly elevated lifestyle experience.
              </p>
            </div>

            <h4 className="text-[18px] font-bold text-[#212529] mb-3">Key Highlights – Abhee Celestial City Phase 2</h4>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mb-8 text-[15px] text-[#484848]">
              {[
                "50 acres of land area (mega integrated township development)",
                "Luxury high-rise residential towers",
                "40+ modern lifestyle amenities",
                "Large open green spaces",
                "50,000+ sq. ft. premium clubhouse",
                "100% Vastu-compliant homes",
                "High-rise towers with scenic views",
                "Mivan construction for superior quality and timely delivery"
              ].map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#323992] mr-2 font-bold">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

              <div className="pt-2">
                <button 
                  onClick={openPopup}
                  className="inline-flex items-center justify-center bg-[#323992] text-white px-6 py-2.5 rounded-[0.25rem] font-medium transition-colors hover:bg-[#282d75] shadow-sm text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Request Brochure
                </button>
              </div>
          </div>
        </div>

        {/* Vertical Section Side-Label */}
        <div 
          className="hidden md:flex items-center justify-center bg-[#f8f9fa] border-l border-[#dee2e6] w-[60px] order-1 md:order-2"
        >
          <span 
            className="whitespace-nowrap font-normal text-[#212529] opacity-80 text-[40px]" 
            style={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(0deg)' 
            }}
          >
            Overview
          </span>
        </div>

        {/* Mobile Header (Shows only on small screens) */}
        <div className="md:hidden bg-[#f8f9fa] py-3 px-6 border-b border-[#dee2e6]">
            <span className="text-[24px] font-medium text-[#212529] opacity-80">Overview</span>
        </div>
      </div>
    </section>
  );
};

export default Overview;
