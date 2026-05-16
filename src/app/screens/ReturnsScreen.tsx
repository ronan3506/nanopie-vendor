import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Check, RefreshCw, Info, CheckCircle2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { MobileLayout } from '../components/MobileLayout';

const initialInvestors = [
  { id: 1, name: 'Anjali Sharma', amount: 520, avatar: 'https://loremflickr.com/100/100/indian,woman?lock=1' },
  { id: 2, name: 'Rahul Verma', amount: 260, avatar: 'https://loremflickr.com/100/100/indian,man?lock=2' },
];

export function ReturnsScreen() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [distributed, setDistributed] = useState(false);
  const [payoutStates, setPayoutStates] = useState<Record<number, 'Pending' | 'Initiated' | 'Sent'>>({
    1: 'Pending',
    2: 'Pending'
  });

  const handleDistributeAll = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setDistributed(true);
      setPayoutStates({ 1: 'Sent', 2: 'Sent' });
      toast.success('All returns distributed successfully');
    }, 2000);
  };

  const processPayout = (id: number) => {
    setPayoutStates(prev => ({ ...prev, [id]: 'Initiated' }));
    setTimeout(() => {
      setPayoutStates(prev => ({ ...prev, [id]: 'Sent' }));
    }, 2000);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-medium tracking-tight text-sm">Returns & Distributions</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-2 pb-32 flex flex-col gap-6">

        {/* Hero Card */}
        <section>
          <div className="bg-[#16232B] rounded-[32px] p-8 text-white shadow-2xl shadow-black/20">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2 font-bold">Investor Shares</p>
                <p className="text-[48px] font-normal tracking-tighter leading-none">₹8,450</p>
              </div>
              <button className="text-white/40 p-2 hover:text-white transition-colors">
                <Info size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex gap-10 pt-6 border-t border-white/10 mt-2">
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Investors</p>
                <p className="text-xl font-normal">48</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Due Date</p>
                <p className="text-xl font-normal text-[#FF5B04]">30 May</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breakdown Card */}
        <section className="bg-white rounded-[32px] shadow-sm border border-[#16232B]/5 overflow-hidden">
          <div className="p-6 pb-0 text-[10px] text-[#16232B]/40 uppercase tracking-[0.2em] font-bold">Distribution Breakdown</div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#16232B]/60">Vendor to Customer</span>
              <span className="font-medium text-[#16232B]">₹8,435</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#16232B]/60">0.05% Platform Fee</span>
              <span className="font-medium text-[#16232B]">₹13</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#16232B]/60">GST on Fee (18%)</span>
              <span className="font-medium text-[#16232B]">₹2</span>
            </div>
            <div className="flex justify-between border-t border-[#16232B]/5 pt-4 text-base">
              <span className="text-[#16232B]">Total Distribution</span>
              <span className="text-[#FF5B04] font-bold">₹8,450</span>
            </div>
          </div>
        </section>

        {/* Recent Payouts */}
        <section className="bg-white rounded-[32px] shadow-sm border border-[#16232B]/5 overflow-hidden">
          <div className="p-6 pb-0 text-[10px] text-[#16232B]/40 uppercase tracking-[0.2em] font-bold">Recent Payouts</div>
          <div className="mt-4">
            {initialInvestors.map((investor) => {
              const status = payoutStates[investor.id];
              return (
                <div key={investor.id} className="flex justify-between items-center p-6 border-t border-[#16232B]/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#16232B]/10 shadow-sm">
                      <img src={investor.avatar} className="w-full h-full object-cover" alt={investor.name} />
                    </div>
                    <div>
                      <p className="text-base text-[#16232B] font-medium leading-tight">{investor.name}</p>
                      <p className="text-xs text-[#16232B]/40 mt-0.5">₹{investor.amount}</p>
                    </div>
                  </div>
                  <div>
                    {status === 'Pending' ? (
                      <button 
                        onClick={() => processPayout(investor.id)}
                        className="bg-[#16232B] text-white px-5 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold active:scale-95 transition-all shadow-lg shadow-black/10"
                      >
                        Pay
                      </button>
                    ) : status === 'Initiated' ? (
                      <div className="animate-pulse text-[#FF5B04] text-[10px] uppercase font-bold flex items-center gap-1.5 tracking-widest">
                        <Clock size={12} strokeWidth={2.5} /> Initiated
                      </div>
                    ) : (
                      <div className="text-[#00C896] text-[10px] uppercase font-bold flex items-center gap-1.5 tracking-widest">
                        <CheckCircle2 size={12} strokeWidth={2.5} /> Sent
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button 
            onClick={() => navigate('/investors')} 
            className="w-full p-5 text-[10px] text-[#075056] uppercase font-black tracking-[0.3em] border-t border-[#16232B]/5 hover:bg-[#E4EEF0]/30 transition-colors"
          >
            See All 48 Investors
          </button>
        </section>

        {/* Main CTA */}
        <section className="mt-2">
          {!distributed ? (
            <button
              disabled={isProcessing}
              onClick={handleDistributeAll}
              className={`w-full py-5 rounded-[24px] text-sm font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl ${isProcessing ? 'bg-white text-[#FF5B04] border-2 border-[#FF5B04]' : 'bg-[#FF5B04] text-white shadow-[#FF5B04]/30'}`}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={18} strokeWidth={2.5} className="animate-spin" />
                  Initiating...
                </>
              ) : (
                <>
                  <Check size={18} strokeWidth={2.5} />
                  Confirm & Distribute All
                </>
              )}
            </button>
          ) : (
            <div className="w-full bg-white border border-[#16232B]/10 py-5 rounded-[24px] flex items-center justify-center gap-2 text-[#16232B]/40">
              <CheckCircle2 size={18} strokeWidth={2.5} className="text-[#00C896]" />
              <span className="text-sm font-bold tracking-tight">All Returns Distributed</span>
            </div>
          )}
        </section>

      </div>
    </MobileLayout>
  );
}
