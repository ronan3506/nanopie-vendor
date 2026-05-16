import React from 'react';
import { motion } from 'motion/react';
import { BottomNav } from './BottomNav';

interface MobileLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  showNav?: boolean;
  className?: string;
}

export function MobileLayout({ 
  children, 
  header, 
  showNav = true,
  className = ""
}: MobileLayoutProps) {
  return (
    <div className={`h-full bg-[#E4EEF0] max-w-md mx-auto relative flex flex-col ${className}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      {header && (
        <header className="sticky top-0 bg-[#E4EEF0] z-50 px-6 py-4 border-b border-[#16232B]/10">
          {header}
        </header>
      )}
      
      <main className={`flex-1 overflow-y-auto ${showNav ? 'pb-24' : 'pb-6'}`}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>

      {showNav && <BottomNav />}
    </div>
  );
}