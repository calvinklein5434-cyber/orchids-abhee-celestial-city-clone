"use client";

import React, { useState, useEffect } from "react";
import { POPUP_TRIGGER_EVENT } from "@/hooks/use-popup";
import {
  Dialog,
  DialogContent } from
"@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Headphones, Car, BadgePercent, X } from "lucide-react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener(POPUP_TRIGGER_EVENT, handleTrigger);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Show popup after 10 seconds

    return () => {
      window.removeEventListener(POPUP_TRIGGER_EVENT, handleTrigger);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the data to an API
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="p-0 overflow-hidden sm:max-w-[600px] bg-white border-none !w-0 !h-0"
        showCloseButton={false}>

        {/* Custom Header */}
        <div className="bg-[#323992] py-3 px-4 relative flex items-center justify-center">
          <h2 className="text-white text-lg font-bold uppercase tracking-wider">
            Request A Site Visit
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 text-white/80 hover:text-white transition-colors">

            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/01094675-c23f-432c-b065-2c82ff5c3d40-india-sales-office-com/assets/images/logo-1.png"
              alt="Abhee Celestial City"
              className="h-16 w-auto" />

          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:border-[#323992] transition-colors">
                <Headphones className="text-gray-600 group-hover:text-[#323992]" size={24} />
              </div>
              <span className="text-[12px] font-medium text-gray-700">Instant Call Back</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:border-[#323992] transition-colors">
                <Car className="text-gray-600 group-hover:text-[#323992]" size={24} />
              </div>
              <span className="text-[12px] font-medium text-gray-700">Free Site Visit</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:border-[#323992] transition-colors">
                <BadgePercent className="text-gray-600 group-hover:text-[#323992]" size={24} />
              </div>
              <span className="text-[12px] font-medium text-gray-700">Best Price</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-1">
                <Input
                  placeholder="Name *"
                  required
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#323992] placeholder:text-gray-500" />

              </div>
              <div className="space-y-1">
                <Input
                  placeholder="Mobile no. with country code *"
                  type="tel"
                  required
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#323992] placeholder:text-gray-500" />

              </div>
              <div className="space-y-1">
                <Input
                  placeholder="Email Id *"
                  type="email"
                  required
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#323992] placeholder:text-gray-500" />

              </div>
              <div className="space-y-1">
                <Select>
                  <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-0 focus:ring-0 focus:border-[#323992] text-gray-500 h-10">
                    <SelectValue placeholder="--Select customer type--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Input
                  placeholder="City"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#323992] placeholder:text-gray-500" />

              </div>
              <div className="space-y-1">
                <textarea
                  placeholder="Hello I am interested in Abhee Celestial City"
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:ring-0 focus:border-[#323992] placeholder:text-gray-500 resize-none h-12 bg-transparent outline-none text-sm" />

              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Button type="submit" className="w-full max-w-[300px] bg-[#323992] hover:bg-[#252a6d] text-white font-bold py-6 text-lg tracking-wide uppercase">
                Submit
              </Button>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mt-4">
              <Checkbox id="consent" className="mt-1 border-gray-400 data-[state=checked]:bg-[#323992] data-[state=checked]:border-[#323992]" />
              <label htmlFor="consent" className="text-[10px] leading-tight text-gray-600 cursor-pointer">
                I Consent to The Processing of Provided Data According To Privacy Policy | Terms & Conditions, 
                I Authorize Property Junction International Real Estate Broker LLC Private Limited and its 
                representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. 
                This Consent Overrides Any Registration For DNC/NDNC.
              </label>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>);

};

export default PopupForm;