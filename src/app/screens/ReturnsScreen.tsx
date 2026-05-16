import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Check, RefreshCw, ArrowUpRight, Info, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { MobileLayout } from '../components/MobileLayout';

const distributionList = [
  { id: 1, name: 'Anjali Sharma', amount: 520, percent: 10, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', verified: true },
  { id: 2, name: 'Rahul Verma', amount: 260, percent: 10, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', verified: true },
  { id: 3, name: 'Priya Patel', amount: 1040, percent: 10, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', verified: true },
  { id: 4, name: 'Amit Singh', amount: 312, percent: 10, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', verified: false },
];

export function ReturnsScreen() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [distributed, setDistributed] = useState(false);
  const [actionState, setActionState] = useState<Record<number, 'approved' | 'rejected' | null>>({});

  const handleDistribute = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setDistributed(true);
      toast.success('Returns distributed to 24 investors');
    }, 2000);
  };

  const handleApprove = (id: number, name: string) => {
    setActionState(prev => ({ ...prev, [id]: 'approved' }));
    toast.success(`Distribution approved for ${name}`);
  };
  const handleReject = (id: number, name: string) => {
    setActionState(prev => ({ ...prev, [id]: 'rejected' }));
    toast.error(`Distribution declined for ${name}`);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-normal tracking-tight text-sm">Returns & Distributions</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-8 pb-4 space-y-6">

        {/* Accrued Returns Hero */}
        <section>
          <div className="rounded-3xl bg-[#075056] shadow-xl shadow-[#075056]/20 px-6 py-6 space-y-4 text-white">
            <span className="text-[10px] text-[#E4EEF0]/70 tracking-[0.2em] uppercase font-normal">Accrued Returns</span>
            <p className="text-[40px] font-normal tracking-tighter leading-none">₹8,450</p>
            <div className="flex items-center gap-6 pt-2 border-t border-white/10">
              <div className="space-y-0.5">
                <p className="text-[9px] text-[#E4EEF0]/40 uppercase tracking-widest">Recipients</p>
                <p className="text-base font-normal">24</p>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="space-y-0.5">
                <p className="text-[9px] text-[#E4EEF0]/40 uppercase tracking-widest">Interval</p>
                <p className="text-base font-normal">Monthly</p>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="space-y-0.5">
                <p className="text-[9px] text-[#E4EEF0]/40 uppercase tracking-widest">Rate</p>
                <p className="text-base font-normal">10%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="flex gap-3 px-5 py-4 rounded-xl bg-[#075056]/50 border border-white/10 text-white">
          <Info className="text-[#FF5B04] flex-shrink-0 mt-0.5" size={14} strokeWidth={1.5} />
          <p className="text-[11px] text-[#E4EEF0]/70 leading-relaxed font-normal">
            Based on verified revenue of <span className="text-white">₹1,24,500</span>. Distributions are processed instantly via Nanopie Smart Contracts.
          </p>
        </section>

        {/* Breakdown */}
        <section className="bg-white rounded-3xl shadow-xl shadow-[#16232B]/5 overflow-hidden text-[#16232B]">
          <div className="px-6 pt-5 pb-1">
            <h3 className="text-[10px] text-[#16232B]/40 uppercase tracking-widest font-normal">Distribution Breakdown</h3>
          </div>
          <div className="space-y-0">
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#16232B]/5">
              <div className="space-y-0.5">
                <p className="text-sm font-normal text-[#16232B]">Profit Sharing</p>
                <p className="text-[10px] text-[#16232B]/50 font-normal">Direct cash distribution</p>
              </div>
              <p className="text-sm font-normal text-[#16232B]">₹6,200</p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#16232B]/5">
              <div className="space-y-0.5">
                <p className="text-sm font-normal text-[#16232B]/50">Merchant Rewards</p>
                <p className="text-[10px] text-[#16232B]/30 font-normal">Shop credit conversion</p>
              </div>
              <p className="text-sm font-normal text-[#16232B]/50">₹2,250</p>
            </div>
          </div>
        </section>

        {/* Per-Investor List */}
        <section className="bg-white rounded-3xl shadow-xl shadow-[#16232B]/5 overflow-hidden text-[#16232B]">
          <div className="px-6 pt-5 pb-1">
            <h3 className="text-[10px] text-[#16232B]/40 uppercase tracking-widest font-normal">Investor Payouts</h3>
          </div>
          <div className="space-y-0">
            {distributionList.map((investor) => {
              const status = actionState[investor.id];
              return (
                <div key={investor.id} className="flex items-center justify-between px-6 py-5 border-t border-[#16232B]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#16232B]/5 flex-shrink-0">
                      <img src={investor.avatar} alt={investor.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-normal text-[#16232B]">{investor.name}</p>
                        {investor.verified && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#16232B]/5 text-[#16232B]/60 text-[8px] tracking-wide uppercase font-normal">
                            <span className="w-1 h-1 rounded-full bg-[#FF5B04]" />
                            KYC
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[#16232B]/40 font-normal">₹{investor.amount.toLocaleString()} · {investor.percent}% yield</p>
                    </div>
                  </div>
                  <div>
                    {distributed || status === 'approved' ? (
                      <div className="flex items-center gap-1.5 text-[#22C55E]">
                        <CheckCircle2 size={14} strokeWidth={1.5} />
                        <span className="text-[10px] font-normal uppercase tracking-widest">Sent</span>
                      </div>
                    ) : status === 'rejected' ? (
                      <span className="text-[10px] text-[#FF5B04] font-normal uppercase tracking-widest">Declined</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(investor.id, investor.name)}
                          className="px-3.5 py-2 rounded-xl bg-[#075056] text-white text-[10px] font-normal uppercase tracking-widest active:scale-95 transition-all"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(investor.id, investor.name)}
                          className="px-3.5 py-2 rounded-xl border border-[#FF5B04] text-[#FF5B04] bg-transparent text-[10px] font-normal uppercase tracking-widest active:scale-95 transition-all"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-2 pb-4 space-y-4">
          {!distributed ? (
            <button
              disabled={isProcessing}
              onClick={handleDistribute}
              className="w-full bg-[#075056] text-white py-5 rounded-xl text-sm font-normal flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:bg-[#16232B]/10 disabled:text-[#16232B]/20"
            >
              {isProcessing ? (
                <RefreshCw size={16} strokeWidth={1.5} className="animate-spin" />
              ) : (
                <>
                  <Check size={16} strokeWidth={1.5} />
                  Confirm & Distribute All
                </>
              )}
            </button>
          ) : (
            <div className="w-full bg-white border border-[#16232B]/8 py-5 rounded-xl flex items-center justify-center gap-2">
              <CheckCircle2 size={16} strokeWidth={1.5} className="text-[#15803D]" />
              <span className="text-sm font-normal text-[#16232B]">All Returns Distributed</span>
            </div>
          )}
          <button className="w-full py-2 flex items-center justify-center gap-2 group">
            <span className="text-[10px] text-[#16232B]/30 uppercase tracking-widest font-normal">Investor Ledger</span>
            <ArrowUpRight size={12} strokeWidth={1} className="text-[#16232B]/20 group-hover:text-[#075056] transition-colors" />
          </button>
        </section>

      </div>
    </MobileLayout>
  );
}
