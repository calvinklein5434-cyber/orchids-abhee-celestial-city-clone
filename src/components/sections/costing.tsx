"use client";

import React from 'react';
import Image from 'next/image';
import { usePopup } from '@/hooks/use-popup';

const CostingSection = () => {
  const { openPopup } = usePopup();
  const costingData = [
    {
      type: '2 BHK',
      area: '1345 sq.ft.',
      price: 'View Price',
    },
    {
      type: '2.5 BHK',
      area: '1685 sq.ft.',
      price: 'View Price',
    },
    {
      type: '3 BHK Medium',
      area: '1700 sq.ft.',
      price: 'View Price',
    },
    {
      type: '3 BHK Large',
      area: '1900 sq.ft.',
      price: 'View Price',
    },
    {
      type: '4 BHK',
      area: '2200+ sq.ft.',
      price: 'View Price',
    },
  ];

  const paymentPlanImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/costing-details-5.jpg";

  return (
    <section className="relative overflow-hidden bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] mb-[3rem]" id="floors">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Main Content Area */}
        <div className="flex-1 p-[1.5rem] md:p-[2rem]">
          <div className="flex flex-col gap-6">
            <div className="relative">
               {/* Note: The 'Costing' vertical header is handled on the right side for desktop, but for mobile we show a normal header */}
               <h2 className="md:hidden text-[#323992] text-[1.25rem] font-bold mb-4">Costing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Table Column */}
              <div className="md:col-span-7 overflow-x-auto">
                <table className="w-full border-collapse border border-[#dee2e6] text-[14px]">
                  <thead>
                    <tr className="bg-[#f8f9fa]">
                      <th className="border border-[#dee2e6] p-[0.75rem] text-left font-bold text-[#212529]">Type</th>
                      <th className="border border-[#dee2e6] p-[0.75rem] text-left font-bold text-[#212529]">Area</th>
                      <th className="border border-[#dee2e6] p-[0.75rem] text-left font-bold text-[#212529]">Price</th>
                    </tr>
                  </thead>
                    <tbody>
                      {costingData.map((item, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-[#dee2e6] cursor-pointer hover:bg-[#f8f9fa] transition-colors"
                          onClick={openPopup}
                        >
                          <td className="border border-[#dee2e6] p-[0.75rem] align-middle text-[#212529]">
                            {item.type}
                          </td>

                        <td className="border border-[#dee2e6] p-[0.75rem] align-middle text-[#212529]">
                          {item.area}
                        </td>
                          <td className="border border-[#dee2e6] p-[0.75rem] align-middle text-[#212529]">
                            <button
                              onClick={openPopup}
                              className="inline-block bg-[#323992] text-white text-[12px] font-bold py-[6px] px-[12px] rounded-[0.25rem] w-fit uppercase hover:bg-[#282d75] transition-colors"
                            >
                              {item.price}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Blurred Image / Inquiry Column */}
                <div className="md:col-span-5 flex flex-col items-center gap-4">
                  <div 
                    onClick={openPopup}
                    className="relative group cursor-pointer w-full overflow-hidden rounded-[2px]"
                  >
                    {/* Property Overlayer Visual */}
                    <div className="absolute inset-0 bg-black/5 z-10"></div>
                    
                    {/* "Enquire Now" floating button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                       <span className="bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] px-4 py-2 text-[14px] font-medium shadow-sm active:scale-95 transition-transform">
                          Enquire Now
                       </span>
                    </div>

                    <Image
                      src={paymentPlanImage}
                      alt="Costing Details Payment Plan"
                      width={500}
                      height={300}
                      className="w-full h-auto filter blur-[5px] transition-all duration-300 group-hover:blur-[2px] object-cover"
                    />
                  </div>
                  
                  <button
                    onClick={openPopup}
                    className="w-full bg-[#323992] text-white text-[13px] font-bold py-2 px-4 rounded-[4px] text-center uppercase shadow-md hover:bg-[#282d75] transition-colors"
                  >
                    Complete Costing Details
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* Vertical Side Header */}
        <div className="hidden md:flex w-[60px] bg-white border-l border-[#dee2e6] items-center justify-center">
          <div className="vertical-text select-none pointer-events-none">
            Costing
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 2.5rem;
          font-weight: 400;
          color: #000;
          opacity: 0.8;
          white-space: nowrap;
          font-family: var(--font-sans);
        }
      `}</style>
    </section>
  );
};

export default CostingSection;
