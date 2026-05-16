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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revenue) return;
    setIsSubmitted(true);
    toast.success(`₹${revenue} logged successfully`);
    setTimeout(() => {
      setIsSubmitted(false);
      setRevenue('');
    }, 4000);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-medium tracking-tight text-sm">Revenue Tracker</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-5 pt-4 pb-32 flex flex-col gap-5">

        {/* Weekly Summary Card */}
        <section>
          <div className="rounded-[28px] bg-[#075056] shadow-xl shadow-[#075056]/20 p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] text-white/60 uppercase tracking-[0.22em] font-medium">Weekly Performance</span>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <Calendar size={12} strokeWidth={1.5} className="opacity-60" />
                <span className="text-[10px] text-white/70">16 — 22 Apr</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="text-[38px] font-normal tracking-tight">₹31,600</p>
              <div className="flex items-center gap-1 text-[#FF6B35]">
                <TrendingUp size={13} strokeWidth={2.5} />
                <span className="text-[11px] font-semibold">+8%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Log Input Card */}
        <section className="bg-white rounded-[28px] px-6 py-6 shadow-sm shadow-black/[0.03] border border-[#16232B]/5">
          <h3 className="text-[15px] font-semibold text-[#16232B]">Log Daily Sales</h3>
          <p className="text-[11px] text-[#16232B]/50 mt-0.5">Report today's gross revenue to investors</p>
          
          {isSubmitted ? (
            <div className="flex items-center justify-between mt-6 animate-in fade-in slide-in-from-bottom-2">
              <p className="text-[20px] font-semibold text-[#075056]">Sale Addition Requested</p>
              <div className="w-9 h-9 rounded-full border-2 border-[#075056] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#075056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-4 mt-6">
              <span className="text-2xl text-[#16232B]/30 flex-shrink-0">₹</span>
              <input
                type="number"
                placeholder="0"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="flex-1 bg-transparent border-none text-3xl text-[#16232B] outline-none font-light min-w-0"
                autoFocus
              />
              <button
                type="submit"
                disabled={!revenue}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
                style={{ 
                  background: revenue ? '#FF6B35' : '#e0e8e9',
                  opacity: revenue ? 1 : 0.5,
                  boxShadow: revenue ? '0 10px 20px rgba(255, 107, 53, 0.3)' : 'none'
                }}
              >
                <Plus size={20} strokeWidth={2.5} className="text-white" />
              </button>
            </form>
          )}
        </section>

        {/* History List */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[9px] text-[#16232B]/40 uppercase tracking-[0.22em] font-bold">Recent Logs</span>
            <button className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">View All</button>
          </div>
          <div className="bg-white rounded-[28px] shadow-sm shadow-black/[0.03] border border-[#16232B]/5 overflow-hidden">
            {history.map((item, idx) => (
              <div key={item.id} className={`flex items-center justify-between px-6 py-4 ${idx !== history.length - 1 ? 'border-b border-[#16232B]/5' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
                    <Clock size={16} strokeWidth={1.5} className="text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#16232B] leading-tight">{item.date}</p>
                    <p className="text-[10px] text-[#16232B]/40 mt-0.5">{item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-semibold text-[#16232B]">₹{item.amount.toLocaleString()}</p>
                  <div className="mt-1">
                    {item.verified ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#00C896]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block"></span>
                        VERIFIED
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#FF6B35]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] inline-block"></span>
                        PENDING
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MobileLayout>
  );
}
