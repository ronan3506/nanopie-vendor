import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Calendar, Plus, TrendingUp, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { MobileLayout } from '../components/MobileLayout';

const history = [
  { id: 1, date: 'Today, 22 April', amount: 8500, time: '18:42 PM', verified: true },
  { id: 2, date: 'Yesterday, 21 April', amount: 7200, time: '17:30 PM', verified: true },
  { id: 3, date: '20 April', amount: 6800, time: '19:15 PM', verified: true },
  { id: 4, date: '19 April', amount: 9100, time: '18:10 PM', verified: false },
];

export function RevenueScreen() {
  const navigate = useNavigate();
  const [revenue, setRevenue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revenue) return;
    toast.success(`₹${revenue} logged successfully`);
    setRevenue('');
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-normal tracking-tight text-sm">Revenue Tracker</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-8 pb-4 space-y-6">

        {/* Weekly Summary Card */}
        <section>
          <div className="rounded-3xl bg-[#075056] shadow-xl shadow-[#075056]/20 px-6 py-6 space-y-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#E4EEF0]/70 tracking-[0.2em] uppercase font-normal">Weekly Performance</span>
              <div className="flex items-center gap-1.5 text-[#E4EEF0]">
                <Calendar size={11} strokeWidth={1.5} />
                <span className="text-[10px] font-normal">16 — 22 Apr</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="text-[36px] font-normal tracking-tighter leading-none">₹31,600</p>
              <div className="flex items-center gap-1 text-[#FF5B04]">
                <TrendingUp size={12} strokeWidth={1.5} />
                <span className="text-[10px] font-normal">+8%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Log Input Card */}
        <section className="bg-white rounded-3xl shadow-xl shadow-[#16232B]/5 px-6 py-6 space-y-5 text-[#16232B]">
          <div className="space-y-0.5">
            <h3 className="text-sm font-normal">Log Daily Sales</h3>
            <p className="text-[11px] text-[#16232B]/50 font-normal">Report today's gross revenue to investors</p>
          </div>
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-normal text-[#16232B]/30">₹</div>
            <input
              type="number"
              placeholder="0"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="w-full bg-transparent border-b border-[#16232B]/10 py-4 pl-7 pr-14 text-3xl font-normal text-[#16232B] focus:outline-none focus:border-[#FF5B04] transition-colors placeholder:text-[#16232B]/20"
            />
            <button
              type="submit"
              disabled={!revenue}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#075056] text-white rounded-full flex items-center justify-center disabled:bg-[#16232B]/5 disabled:text-[#16232B]/20 transition-all active:scale-95"
            >
              <Plus size={18} strokeWidth={1.5} />
            </button>
          </form>
        </section>

        {/* History List */}
        <section className="bg-white rounded-3xl shadow-xl shadow-[#16232B]/5 overflow-hidden pb-2 text-[#16232B]">
          <div className="flex items-center justify-between px-6 pt-5 pb-3">
            <span className="text-[10px] text-[#16232B]/40 uppercase tracking-widest font-normal">Recent Logs</span>
            <button className="text-[10px] text-[#FF5B04] uppercase tracking-widest font-normal">View All</button>
          </div>
          <div className="space-y-0">
            {history.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-6 py-4 border-t border-[#16232B]/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#16232B]/5 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} strokeWidth={1.5} className="text-[#FF5B04]" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-normal text-[#16232B]">{item.date}</p>
                    <p className="text-[10px] text-[#16232B]/40 font-normal">{item.time}</p>
                  </div>
                </div>
                <div className="text-right space-y-1.5">
                  <p className="text-sm font-normal text-[#16232B]">₹{item.amount.toLocaleString()}</p>
                  {item.verified ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-[9px] tracking-wide uppercase font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF5B04]/10 text-[#FF5B04] text-[9px] tracking-wide uppercase font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B04]" />
                      Pending
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </MobileLayout>
  );
}
