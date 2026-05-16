import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  TrendingUp, 
  ArrowUpRight,
  ArrowRight,
  Wallet,
  Users,
  Bell,
  IndianRupee,
  Sparkles,
  PieChart
} from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoIcon from "../../imports/Subtract_(1).png";

const mockRevenueData = [
  { day: 'Mon', val: 400 },
  { day: 'Tue', val: 300 },
  { day: 'Wed', val: 500 },
  { day: 'Thu', val: 450 },
  { day: 'Fri', val: 600 },
  { day: 'Sat', val: 800 },
  { day: 'Sun', val: 700 },
];

function Sparkline({ data }: { data: { day: string; val: number }[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const W = 320;
  const H = 80;
  const pad = { left: 20, right: 20, top: 10, bottom: 20 };
  const minVal = Math.min(...data.map(d => d.val));
  const maxVal = Math.max(...data.map(d => d.val));
  const range = maxVal - minVal || 1;

  const xs = data.map((_, i) =>
    pad.left + (i / (data.length - 1)) * (W - pad.left - pad.right)
  );
  const ys = data.map(d =>
    pad.top + (1 - (d.val - minVal) / range) * (H - pad.top - pad.bottom)
  );

  let path = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < xs.length; i++) {
    const cpx = (xs[i - 1] + xs[i]) / 2;
    path += ` C ${cpx} ${ys[i - 1]}, ${cpx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
  }

  return (
    <div className="relative w-full h-full group">
      {/* Selected Value Tooltip */}
      <div className={`absolute -top-8 left-0 right-0 flex justify-center transition-all duration-300 ${selectedIndex !== null ? 'opacity-100 transform -translate-y-2' : 'opacity-0'}`}>
        <div className="bg-[#FF5B04] text-white text-[10px] px-3 py-1.5 rounded-full font-bold shadow-lg shadow-[#FF5B04]/20">
          ₹{selectedIndex !== null ? data[selectedIndex].val.toLocaleString() : 0}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
        <path d={path} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
        <path d={path} fill="none" stroke="#FF5B04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Active Point Highlight */}
        {selectedIndex !== null && (
          <circle cx={xs[selectedIndex]} cy={ys[selectedIndex]} r="4" fill="#FF5B04" stroke="white" strokeWidth="2" />
        )}
        
        {/* Default End Dot */}
        {selectedIndex === null && (
          <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="#FF5B04" />
        )}

        {/* Day Labels */}
        {data.map((d, i) => (
          <text
            key={d.day}
            x={xs[i]}
            y={H - 4}
            textAnchor="middle"
            fontSize="8"
            fill="white"
            opacity={selectedIndex === i ? "1" : "0.4"}
            className="font-bold tracking-widest transition-opacity"
          >
            {d.day.toUpperCase()}
          </text>
        ))}
      </svg>

      {/* Hit Zones */}
      <div className="absolute inset-0 flex px-[20px]">
        {data.map((_, i) => (
          <div
            key={i}
            className="flex-1 cursor-pointer"
            onClick={() => setSelectedIndex(i)}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}

export function DashboardScreen() {
  const navigate = useNavigate();

  const Header = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={logoIcon} className="w-3.5 h-3.5" alt="Hello!" />
        </div>
        <span className="text-[#16232B] font-normal tracking-tight text-sm">Hello!</span>
      </div>
      <div className="flex items-center bg-white border border-[#16232B]/10 rounded-full p-1 shadow-sm gap-1">
        <button 
          onClick={() => navigate('/updates')}
          className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        >
          <Bell size={16} strokeWidth={1.5} className="text-[#16232B]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#FF5B04] rounded-full border-[1.5px] border-white" />
        </button>
        <button 
          onClick={() => navigate('/profile')}
          className="w-8 h-8 rounded-full overflow-hidden border border-[#16232B]/5"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwcG9ydHJhaXQlMjBzbWlsaW5nJTIwZnJpZW5kbHklMjBzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzc2ODQ4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-8 pb-4 space-y-6">

        {/* Welcome */}
        <section className="space-y-1">
          <p className="text-[10px] text-[#075056] tracking-[0.22em] uppercase font-normal">Merchant Partner</p>
          <h1 className="text-[28px] font-normal text-[#16232B] tracking-tight">Artisan Bakery</h1>
        </section>

        {/* Active Funding Hero Card */}
        <section>
          <div className="rounded-3xl bg-[#075056] px-6 py-6 space-y-6 text-white shadow-xl shadow-[#075056]/20">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#E4EEF0]/70 tracking-[0.2em] uppercase font-normal">Active Funding</span>
              <div className="flex items-center gap-1 text-[#FF5B04]">
                <TrendingUp size={12} strokeWidth={1.5} />
                <span className="text-[10px] font-normal">+12.4%</span>
              </div>
            </div>
            <p className="text-[36px] font-normal tracking-tighter leading-none">₹1,24,500</p>
            <div className="flex items-center gap-8 pt-2 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <Users size={11} strokeWidth={1.5} className="text-[#E4EEF0]/70" />
                  <span className="text-[10px] text-[#E4EEF0]/70 uppercase tracking-widest">Investors</span>
                </div>
                <p className="text-lg font-normal">48</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <Wallet size={11} strokeWidth={1.5} className="text-[#E4EEF0]/70" />
                  <span className="text-[10px] text-[#E4EEF0]/70 uppercase tracking-widest">Distributed</span>
                </div>
                <p className="text-lg font-normal">₹12,400</p>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Performance Chart */}
        <section className="bg-[#075056] rounded-3xl px-6 py-5 space-y-4 shadow-xl shadow-[#075056]/20 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#E4EEF0]/70 uppercase tracking-widest">Weekly Performance</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4EEF0]" />
              <span className="text-[10px] text-[#E4EEF0]/70 font-normal">Revenue</span>
            </div>
          </div>
          <div className="h-28 w-full">
            <Sparkline data={mockRevenueData} />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#16232B]/5 text-[#16232B]">
          <button 
            onClick={() => navigate('/revenue')}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-[#16232B]/5 active:bg-black/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E4EEF0] flex items-center justify-center flex-shrink-0 text-[#075056]">
                <IndianRupee size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 text-left">
                <h3 className="text-sm font-normal">Log Revenue</h3>
                <p className="text-[11px] text-[#16232B]/50 font-normal">Sync daily sales records</p>
              </div>
            </div>
            <ArrowRight size={16} strokeWidth={1} className="text-[#16232B]/20" />
          </button>

          <button 
            onClick={() => navigate('/create-request')}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-[#16232B]/5 active:bg-black/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E4EEF0] flex items-center justify-center flex-shrink-0 text-[#075056]">
                <Sparkles size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 text-left">
                <h3 className="text-sm font-normal">Request Funding</h3>
                <p className="text-[11px] text-[#16232B]/50 font-normal">Scale your business operations</p>
              </div>
            </div>
            <ArrowRight size={16} strokeWidth={1} className="text-[#16232B]/20" />
          </button>

          <button 
            onClick={() => navigate('/returns')}
            className="w-full flex items-center justify-between px-6 py-5 active:bg-black/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E4EEF0] flex items-center justify-center flex-shrink-0 text-[#075056]">
                <PieChart size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5 text-left">
                <h3 className="text-sm font-normal">Distribute Returns</h3>
                <p className="text-[11px] text-[#16232B]/50 font-normal">Send profit shares to investors</p>
              </div>
            </div>
            <ArrowRight size={16} strokeWidth={1} className="text-[#16232B]/20" />
          </button>
        </section>

        {/* Active Campaign Card */}
        <section>
          <button 
            onClick={() => navigate('/active-funding')}
            className="w-full p-5 rounded-3xl bg-white shadow-xl shadow-[#16232B]/5 flex items-center gap-5 active:bg-black/5 transition-all text-[#16232B]"
          >
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1770998312182-9bea1a43ba19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWtlcnklMjBzaG9wJTIwc3RvcmVmcm9udCUyMGludGVyaW9yJTIwbHV4dXJ5JTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NzY4NDg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bakery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-normal">Inventory Restock</span>
                <ArrowUpRight size={14} strokeWidth={1} className="text-[#16232B]/20" />
              </div>
              <div className="relative w-full h-[1.5px] bg-[#16232B]/10 rounded-full">
                <div className="absolute top-0 left-0 h-full bg-[#FF5B04] rounded-full" style={{ width: '75%' }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#16232B]/50 font-normal tracking-tight">75% Funded</span>
                <span className="text-[10px] text-[#16232B]/30 font-normal tracking-tight">₹25k left</span>
              </div>
            </div>
          </button>
        </section>

        {/* Footer Brand Message */}
        <div className="mt-20 mb-12 flex flex-col items-center gap-4 opacity-30">
          <img src={logoIcon} className="w-8 h-8 grayscale brightness-0" alt="NanoPie" />
          <p className="text-[8px] tracking-[0.3em] uppercase font-black text-[#16232B] text-center leading-loose max-w-[280px]">
            SMALL BITES, BIG GROWTH.<br />THAT’S THE NANOPIE WAY. 🥧
          </p>
        </div>

      </div>
    </MobileLayout>
  );
}
