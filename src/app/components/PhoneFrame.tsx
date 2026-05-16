import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF5B04]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#075056]/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Device Frame */}
      <div className="relative mx-auto border-[12px] border-[#2B3544] bg-[#1e293b] rounded-[48px] h-[90vh] max-h-[920px] w-[420px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">


        {/* Inner Content Container */}
        <div className="flex-1 bg-[#E4EEF0] relative overflow-hidden">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-black/10 rounded-full z-[100]"></div>
      </div>
    </div>
  );
}
