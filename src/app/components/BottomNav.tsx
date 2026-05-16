import { useNavigate, useLocation } from 'react-router';
import { Home, IndianRupee, PieChart, Bell, User } from 'lucide-react';
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
    <nav className="absolute bottom-0 left-0 right-0 z-50 bg-[#E4EEF0] border-t border-[#16232B]/10 max-w-md mx-auto h-20">
      <div className="flex items-center justify-evenly h-full px-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300"
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
                  isActive ? 'text-white' : 'text-[#16232B]/40'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}