import React from 'react';

const DeveloperInfo = () => {
  return (
    <section 
      className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] mb-12 relative overflow-hidden"
    >
      <div className="p-4 md:p-10 flex flex-col lg:flex-row">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h2 className="text-[24px] font-medium text-[#212529] opacity-80 border-b border-[#dee2e6] pb-2">Developer</h2>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:pr-12 order-2 lg:order-1">
          <h4 className="text-[1.125rem] font-bold text-[#212529] mb-4">About Developer</h4>
          
          <div className="text-[16px] leading-[1.6] text-[#484848] text-justify space-y-4">
            <p className="font-bold">
              Abhee Celestial City Phase 2 – Premium Homes on Sarjapur Road, Bangalore
            </p>
            <p>
              Abhee Developer, one of Bangalore’s most trusted real estate developers, proudly presents Abhee Celestial City Phase 2, a landmark residential project located on the thriving Sarjapur Road corridor. Strategically positioned near top IT hubs, educational institutions, shopping malls, and entertainment centers, this new launch offers the perfect blend of luxury, convenience, and modern urban living.
            </p>
            <p>
              Designed for today’s discerning homebuyers, Abhee Celestial City Phase 2 features thoughtfully planned 2, 3, and 4 BHK apartments with spacious layouts, high-quality construction, and world-class amenities. Residents can enjoy landscaped gardens, children’s play areas, clubhouse, swimming pool, gym, and 24/7 security — ensuring a safe and comfortable lifestyle.
            </p>
            <p>
              Sarjapur Road has emerged as one of Bangalore’s fastest-growing residential hubs, making Abhee Celestial City Phase 2 not only a perfect home but also a smart investment opportunity. With a proven track record of quality, timely delivery, and innovative designs, Abhee Developer continues to set new benchmarks in Bangalore’s real estate landscape.
            </p>
          </div>
        </div>

        {/* Vertical Section Marker */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full w-[60px] items-center justify-center border-l border-[#dee2e6] bg-white order-1 lg:order-2">
          <span 
            className="vertical-text text-[2.5rem] font-normal text-black opacity-80 select-none"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              whiteSpace: 'nowrap'
            }}
          >
            Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfo;