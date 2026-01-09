"use client";

import React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    {
      name: 'Overview',
      href: '#over',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/overview-1.svg',
    },
    {
      name: 'Costing',
      href: '#floors',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/overview-1.svg',
    },
    {
      name: 'Site Map & Floor Plan',
      href: '#floorss',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/blueprint-2.svg',
    },
    {
      name: 'Amenities',
      href: '#ame',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/amenities-3.svg',
    },
    {
      name: 'Location',
      href: '#looc',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/location-4.svg',
    },
    {
      name: 'Virtual Tour',
      href: '#videos',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/site-visit-5.svg',
    },
    {
      name: 'Brochure',
      href: '#',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/bro-download-6.svg',
      isModal: true,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.link/p2oroo',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/svgs/amenities-3.svg', // Placeholder icon, will use WhatsApp SVG below
      isWhatsApp: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1050] bg-[#f8f9fa] border-b border-[#dee2e6] h-[66px] flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/logo-1.png"
              alt="Abhee Celestial City"
              width={190}
              height={50}
              className="h-[40px] md:h-auto w-auto"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a 
              href="https://wa.link/p2oroo"
              className="lg:hidden flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-xs font-bold"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <button
              className="lg:hidden p-2 text-[#212529] border border-black/10 rounded focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:flex absolute lg:relative top-[66px] lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row shadow-lg lg:shadow-none border-t lg:border-t-0 border-[#dee2e6] items-center z-[1100] transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col lg:flex-row items-center w-full lg:w-auto py-4 lg:py-0">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full lg:w-auto group">
                  <a
                    href={link.href}
                    className={`flex items-center px-4 py-3 lg:py-2 text-[14.4px] font-medium transition-colors duration-200 whitespace-nowrap border-b lg:border-b-0 border-[#eee] lg:border-transparent ${
                      link.isWhatsApp 
                        ? 'text-[#25D366] hover:text-[#20bd5c]' 
                        : index === 0 
                          ? 'text-[#323992]' 
                          : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.isWhatsApp ? (
                      <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] mr-2 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    ) : (
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-[20px] h-[20px] mr-2"
                        style={{ filter: index === 0 ? 'none' : 'grayscale(1) opacity(0.5)' }}
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      <style jsx global>{`
        .nav-link {
          font-family: 'Inter', sans-serif;
          color: rgba(0, 0, 0, 0.5);
        }
        .nav-link:hover {
          color: rgba(0, 0, 0, 0.7);
        }
        .nav-item.active .nav-link {
          color: #323992;
        }
        @media (max-width: 1023px) {
          nav {
            z-index: 1040;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;