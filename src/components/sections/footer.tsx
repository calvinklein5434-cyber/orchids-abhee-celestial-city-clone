import React from 'react';
import Link from 'next/link';

/**
 * Footer Component
 * 
 * A dark-themed footer based on the specified design requirements.
 * Contains accessibility-friendly, high-contrast text against a dark background (#212529).
 * Includes project disclaimer, RERA information, and rights reserved notice.
 */
const Footer = () => {
  return (
    <footer className="footer-section bg-[#212529] text-white py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-[1200px]">
          {/* WhatsApp CTA */}
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Have Any Questions?</h3>
            <a 
              href="https://wa.link/p2oroo"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Click Here to Whatsapp
            </a>
          </div>

          {/* Main Disclaimer Block */}
          <div className="disclaimer-content mb-8">
            <p className="text-[12px] leading-[1.8] text-center text-[#ddd] mb-6 font-sans">
              Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. 
              Prices mentioned are subject to change without notice and properties mentioned are subject to availability. 
              Images for representation purposes only. This is the official website of authorized marketing partner. 
              We may share data with RERA registered brokers/companies for further processing. 
              We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
            </p>
          </div>

          <div className="copyright-section border-t border-gray-700 pt-6 w-full text-center">
            <p className="text-[12px] text-gray-400">
              © Copyright 2026 Strategy & Marketing Partner
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;