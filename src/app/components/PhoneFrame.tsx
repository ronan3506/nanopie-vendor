import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Device Frame */}
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[800px] w-[380px] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="h-[32px] w-[30%] bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-50"></div>
        
        {/* Speaker/Sensors */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 flex gap-1 z-50">
          <div className="h-[4px] w-[40px] bg-gray-900 rounded-full"></div>
          <div className="h-[4px] w-[4px] bg-gray-900 rounded-full"></div>
        </div>

        {/* Inner Content Container */}
        <div className="h-full w-full bg-white relative overflow-hidden">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="h-[5px] w-[120px] bg-gray-800 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full z-50 opacity-20 hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
