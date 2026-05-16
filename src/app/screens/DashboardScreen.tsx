import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { 
  TrendingUp, 
  ArrowRight,
  Wallet,
  Users,
  Bell,
  IndianRupee,
  PieChart
} from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoIcon from "../../imports/Subtract_(1).png";

const mockRevenues = [4200, 3100, 5600, 4800, 6200, 8400, 7200];
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const sparklinePoints = [
  {x: 0, y: 60}, {x: 53.3, y: 76.8}, {x: 106.6, y: 43.1}, 
  {x: 160, y: 51.5}, {x: 213.3, y: 26.3}, {x: 266.6, y: 8}, {x: 320, y: 24.8}
];

function InteractiveChart() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currentPoint = selectedIndex !== null ? sparklinePoints[selectedIndex] : sparklinePoints[6];
  const currentValue = selectedIndex !== null ? mockRevenues[selectedIndex] : 0;

  return (
    <div className="bg-[#075056] rounded-3xl p-5 text-white shadow-xl shadow-[#075056]/20 relative overflow-hidden group">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/60 tracking-wider uppercase font-medium">Weekly Performance</span>
          <div className={`text-sm font-bold text-[#FF5B04] mt-1 transition-all duration-300 transform ${selectedIndex !== null ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
            ₹{currentValue.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#E4EEF0] rounded-full"></div>
          <span className="text-[10px] text-white/60 uppercase font-medium">Revenue</span>
        </div>
      </div>

      <div className="h-[112px] w-full relative">
        <svg viewBox="0 0 320 80" preserveAspectRatio="none" className="w-full h-full absolute inset-0">
          <path 
            d="M 0 60 C 26.6 60, 26.6 76.8, 53.3 76.8 C 80 76.8, 80 43.1, 106.6 43.1 C 133.3 43.1, 133.3 51.5, 160 51.5 C 186.6 51.5, 186.6 26.3, 213.3 26.3 C 240 26.3, 240 8, 266.6 8 C 293.3 8, 293.3 24.8, 320 24.8" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            className="opacity-20"
          />
          <path 
            d="M 0 60 C 26.6 60, 26.6 76.8, 53.3 76.8 C 80 76.8, 80 43.1, 106.6 43.1 C 133.3 43.1, 133.3 51.5, 160 51.5 C 186.6 51.5, 186.6 26.3, 213.3 26.3 C 240 26.3, 240 8, 266.6 8 C 293.3 8, 293.3 24.8, 320 24.8" 
            fill="none" 
            stroke="#FF5B04" 
            strokeWidth="2.5"
          />
          <circle 
            cx={currentPoint.x} 
            cy={currentPoint.y} 
            r="3" 
            fill="#FF5B04" 
            className="transition-all duration-300"
          />
        </svg>
        
        {/* Hit Zones */}
        <div className="absolute inset-0 flex">
          {mockRevenues.map((_, i) => (
            <div 
              key={i}
              className="flex-1 cursor-pointer relative group/zone"
              onMouseEnter={() => setSelectedIndex(i)}
              onMouseLeave={() => setSelectedIndex(null)}
            >
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white opacity-0 group-hover/zone:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 px-1">
        {days.map((day, i) => (
          <span 
            key={day}
            className={`text-[9px] font-bold tracking-widest transition-opacity duration-300 ${selectedIndex === i ? 'text-white opacity-100' : 'text-white/40'}`}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DashboardScreen() {
  const navigate = useNavigate();

  const Header = (
    <div className="flex items-center justify-between w-full px-1">
      <div className="flex items-center gap-3.5">
        <img src={logoIcon} className="w-5 h-5 text-[#FF5B04]" alt="Logo" />
        <span className="text-[#16232B] font-medium tracking-tight text-base">Hello!</span>
      </div>
      <div className="flex items-center bg-white rounded-full p-1 border border-[#16232B]/5 shadow-sm">
        <button 
          onClick={() => navigate('/updates')}
          className="relative w-8 h-8 flex items-center justify-center rounded-full text-[#16232B]"
        >
          <Bell size={18} strokeWidth={1.5} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#FF5B04] rounded-full border border-white" />
        </button>
        <button 
          onClick={() => navigate('/profile')}
          className="w-8 h-8 rounded-full overflow-hidden border border-[#16232B]/5"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-6 pb-32 flex flex-col gap-6">
        
        {/* Welcome Section */}
        <div>
          <p className="text-[10px] text-[#FF5B04] tracking-[0.2em] uppercase font-bold mb-1">Merchant Partner</p>
          <h1 className="text-3xl font-medium text-[#16232B] tracking-tight">Artisan Bakery</h1>
        </div>

        {/* Active Funding Stats Card */}
        <section className="bg-[#16232B] rounded-[32px] p-7 text-white shadow-2xl shadow-black/20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">Active Funding</span>
            <div className="flex items-center gap-1.5 text-[#FF5B04]">
              <TrendingUp size={14} strokeWidth={2.5} />
              <span className="text-xs font-bold">+12.4%</span>
            </div>
          </div>
          
          <p className="text-[44px] font-normal tracking-tighter leading-none mb-6 relative z-10">₹1,24,500</p>
          
          <div className="flex gap-10 pt-6 border-t border-white/10 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/50">
                <Users size={12} strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-widest font-medium">Investors</span>
              </div>
              <p className="text-xl font-normal">48</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/50">
                <Wallet size={12} strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-widest font-medium">Distributed</span>
              </div>
              <p className="text-xl font-normal">₹12,400</p>
            </div>
          </div>
        </section>

        {/* Weekly Chart Card */}
        <section>
          <InteractiveChart />
        </section>

        {/* Action Buttons Card */}
        <section className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-[#16232B]/5">
          <button 
            onClick={() => navigate('/revenue')}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-[#16232B]/5 active:bg-black/[0.02] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E4EEF0] flex items-center justify-center text-[#075056] shadow-sm">
                <IndianRupee size={22} strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-medium text-[#16232B]">Log Revenue</h3>
                <p className="text-xs text-[#16232B]/50 font-normal">Sync daily sales records</p>
              </div>
            </div>
            <ArrowRight size={18} strokeWidth={1.5} className="text-[#16232B]/20" />
          </button>

          <button 
            onClick={() => navigate('/create-request')}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-[#16232B]/5 active:bg-black/[0.02] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E4EEF0] flex items-center justify-center text-[#075056] shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
              </div>
              <div className="text-left">
                <h3 className="text-base font-medium text-[#16232B]">Request Funding</h3>
                <p className="text-xs text-[#16232B]/50 font-normal">Scale your business operations</p>
              </div>
            </div>
            <ArrowRight size={18} strokeWidth={1.5} className="text-[#16232B]/20" />
          </button>

          <button 
            onClick={() => navigate('/returns')}
            className="w-full flex items-center justify-between px-6 py-5 active:bg-black/[0.02] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E4EEF0] flex items-center justify-center text-[#075056] shadow-sm">
                <PieChart size={22} strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-medium text-[#16232B]">Distribute Returns</h3>
                <p className="text-xs text-[#16232B]/50 font-normal">Send profit shares to investors</p>
              </div>
            </div>
            <ArrowRight size={18} strokeWidth={1.5} className="text-[#16232B]/20" />
          </button>
        </section>

        {/* Live Campaign Card */}
        <section>
          <button 
            onClick={() => navigate('/active-funding')}
            className="relative h-[220px] w-full rounded-[40px] overflow-hidden shadow-xl shadow-black/10 text-left block group"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Diwali Sweets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/40 to-transparent"></div>
            
            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse"></div> LIVE
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-2xl font-medium tracking-tight mb-4">Diwali Sweets Expansion</p>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-[#FF5B04] rounded-full" style={{ width: '62.5%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-[10px] uppercase tracking-[0.15em] font-bold">62.5% Funded</span>
                <span className="text-white/60 text-[10px] uppercase tracking-[0.15em] font-bold">12 Days Left</span>
              </div>
            </div>
          </button>
        </section>

        {/* Footer Brand */}
        <div className="mt-12 mb-8 flex flex-col items-center gap-5 opacity-20">
          <img src={logoIcon} className="w-8 h-8 grayscale brightness-0" alt="NanoPie" />
          <p className="text-[8px] tracking-[0.4em] uppercase font-black text-[#16232B] text-center leading-loose max-w-[300px]">
            SMALL BITES, BIG GROWTH.<br />THAT’S THE NANOPIE WAY. 🥧
          </p>
        </div>

      </div>
    </MobileLayout>
  );
}
