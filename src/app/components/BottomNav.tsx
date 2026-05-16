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
    <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] bg-[#16232B]/95 backdrop-blur-xl rounded-[100px] h-[72px] z-50 flex items-center justify-center gap-10 shadow-[0_20px_40px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 active:scale-90"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-bg"
                className="absolute inset-0 bg-[#075056] rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              className={`relative z-10 transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-white/40'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}