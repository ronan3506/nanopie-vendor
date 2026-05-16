import { useNavigate, useLocation } from 'react-router';
import { Home, IndianRupee, PieChart } from 'lucide-react';
import { motion } from 'motion/react';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home },
    { path: '/revenue', icon: IndianRupee },
    { path: '/returns', icon: PieChart },
  ];

  return (
    <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] bg-[#16232B] rounded-[36px] h-[72px] z-50 flex items-center justify-around px-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.24)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="relative flex items-center justify-center w-12 h-12 rounded-[24px] transition-all duration-300 active:scale-90 group"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-bg"
                className="absolute inset-0 bg-[#FF5B04] rounded-[24px]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              className={`relative z-10 transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}