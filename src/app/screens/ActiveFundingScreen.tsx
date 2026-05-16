import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Clock, TrendingUp, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MobileLayout } from '../components/MobileLayout';

const investors = [
  { id: 1, name: 'Anjali Sharma', amount: 5000, date: '2 days ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', verified: true },
  { id: 2, name: 'Rahul Verma', amount: 2500, date: '4 days ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', verified: true },
  { id: 3, name: 'Priya Patel', amount: 10000, date: '1 week ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', verified: false },
  { id: 4, name: 'Amit Singh', amount: 3000, date: '1 week ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', verified: true },
];

export function ActiveFundingScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [actionState, setActionState] = useState<Record<number, 'approved' | 'rejected' | null>>({});

  const handleApprove = (id: number, name: string) => {
    setActionState(prev => ({ ...prev, [id]: 'approved' }));
    toast.success(`${name} approved`);
  };
  const handleReject = (id: number, name: string) => {
    setActionState(prev => ({ ...prev, [id]: 'rejected' }));
    toast.error(`${name} request declined`);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-normal tracking-tight text-sm">Campaign Tracker</span>
      <button className="w-8 h-8 flex items-center justify-center text-[#16232B]/20">
        <MoreHorizontal size={18} strokeWidth={1.5} />
      </button>
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-8 pb-4 space-y-6">

        {/* Campaign Banner */}
        <section className="space-y-5">
          <div className="h-52 relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770998312182-9bea1a43ba19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWtlcnklMjBzaG9wJTIwc3RvcmVmcm9udCUyMGludGVyaW9yJTIwbHV4dXJ5JTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NzY4NDg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bakery Campaign"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#16232B]/20" />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-[#075056] px-3 py-1.5 rounded-full text-[9px] font-normal uppercase tracking-[0.18em]">
                Live Campaign
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-normal text-[#16232B] tracking-tight">Diwali Sweets Expansion</h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5 text-[#16232B]/40">
                <Clock size={11} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-widest">12 days left</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#16232B]/40">
                <Users size={11} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-widest">24 Investors</span>
              </div>
            </div>
          </div>

          <div className="bg-[#075056] rounded-3xl px-6 py-5 shadow-xl shadow-[#075056]/20 space-y-3 text-white">
            <div className="relative w-full h-[1.5px] bg-white/10 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 left-0 h-full bg-[#FF5B04] rounded-full"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-normal tracking-tight">₹75,000</span>
              <span className="text-[10px] text-[#E4EEF0]/40 uppercase tracking-widest">of ₹1,20,000</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white rounded-3xl shadow-xl shadow-[#16232B]/5 overflow-hidden text-[#16232B]">
          <div className="flex gap-8 border-b border-[#16232B]/5 px-6">
            {['overview', 'investors', 'updates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-[10px] uppercase tracking-[0.2em] transition-all relative font-normal ${
                  activeTab === tab ? 'text-[#16232B]' : 'text-[#16232B]/40'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="campaign-active-tab"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FF5B04]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="px-6 py-6 min-h-[280px]">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#16232B]/50 uppercase tracking-widest">Projected Yield</p>
                    <p className="text-2xl font-normal text-[#FF5B04]">12%</p>
                  </div>
                  <div className="w-[1px] h-10 bg-[#16232B]/10" />
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] text-[#16232B]/50 uppercase tracking-widest">Lock Period</p>
                    <p className="text-2xl font-normal">6 Mo</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[10px] text-[#16232B]/40 uppercase tracking-widest">Executive Summary</h3>
                  <p className="text-sm text-[#16232B]/70 leading-relaxed font-normal">
                    Scaling production for the upcoming festival season. Funds will be used to procure premium ingredients and hire additional seasonal staff to meet the 3× demand expected in May. Our track record shows a consistent 20% MoM growth.
                  </p>
                </div>
                <button className="w-full py-4 rounded-2xl border border-[#16232B]/10 text-[#16232B]/60 text-[10px] uppercase tracking-widest font-normal active:bg-black/5 transition-all">
                  Review Full Proposal
                </button>
              </motion.div>
            )}

            {activeTab === 'investors' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0 -mx-6">
                {investors.map((investor) => {
                  const status = actionState[investor.id];
                  return (
                    <div key={investor.id} className="flex items-center justify-between px-6 py-5 border-b border-[#16232B]/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#16232B]/5 flex-shrink-0">
                          <img src={investor.avatar} alt={investor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-normal">{investor.name}</h4>
                            {investor.verified && (
                              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#16232B]/5 text-[#16232B]/60 text-[8px] tracking-wide uppercase font-normal">
                                <span className="w-1 h-1 rounded-full bg-[#FF5B04]" />
                                KYC
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-[10px] text-[#16232B]/40 font-normal">₹{investor.amount.toLocaleString()}</p>
                            <span className="text-[#16232B]/20">·</span>
                            <p className="text-[10px] text-[#16232B]/40 font-normal">{investor.date}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        {status === 'approved' ? (
                          <div className="flex items-center gap-1.5 text-[#22C55E]">
                            <CheckCircle2 size={14} strokeWidth={1.5} />
                            <span className="text-[10px] font-normal uppercase tracking-widest">Done</span>
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
              </motion.div>
            )}

            {activeTab === 'updates' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                <TrendingUp size={28} strokeWidth={1} className="text-[#16232B]/20 mb-6" />
                <p className="text-[10px] text-[#16232B]/40 uppercase tracking-widest mb-10">No current logs</p>
                <button
                  onClick={() => navigate('/updates')}
                  className="bg-[#075056] text-white px-10 py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] font-normal active:scale-95 transition-all"
                >
                  Create Log
                </button>
              </motion.div>
            )}
          </div>
        </section>

      </div>
    </MobileLayout>
  );
}
