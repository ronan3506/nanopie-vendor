import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';

export function ActiveFundingScreen() {
  const navigate = useNavigate();

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-medium tracking-tight text-sm">Campaign Tracker</span>
      <button className="w-8 h-8 flex items-center justify-center text-[#16232B]/20">
        <MoreHorizontal size={18} strokeWidth={1.5} />
      </button>
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-4 pb-32 flex flex-col gap-8 bg-[#E4EEF0] min-h-full">
        
        {/* Image Section */}
        <section className="relative h-[220px] rounded-[32px] overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1770998312182-9bea1a43ba19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
            className="w-full h-full object-cover"
            alt="Live Campaign"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
          <div className="absolute top-5 left-5 bg-white text-[#075056] px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm">Live Campaign</div>
        </section>

        {/* Funding Stats Card */}
        <section className="bg-[#075056] rounded-[32px] p-8 text-white shadow-xl shadow-[#075056]/20">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Total Funding</span>
            <div className="bg-[#FF5B04] px-2.5 py-1 rounded-md text-[9px] font-bold">LOCKED</div>
          </div>
          <p className="text-[48px] font-normal tracking-tighter leading-none mb-6">₹1,20,000</p>
          <div className="flex gap-10 pt-6 border-t border-white/10">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Recipients</p>
              <p className="text-xl font-normal">48</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Payout Date</p>
              <p className="text-xl font-normal text-[#FF5B04]">30 May</p>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#16232B]/5">
            <p className="text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold mb-2">Raised So Far</p>
            <p className="text-xl font-medium text-[#16232B]">₹75,000</p>
            <div className="w-full h-1 bg-[#16232B]/5 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-[#FF5B04]" style={{ width: '62.5%' }}></div>
            </div>
          </div>
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#16232B]/5">
            <p className="text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold mb-2">Target</p>
            <p className="text-xl font-medium text-[#16232B]">₹1,20,000</p>
            <p className="text-[10px] text-[#00C896] font-bold mt-2">62.5% REACHED</p>
          </div>
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#16232B]/5">
            <p className="text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold mb-2">Days Remaining</p>
            <p className="text-xl font-medium text-[#16232B]">12 Days</p>
            <p className="text-[10px] text-[#16232B]/30 font-bold mt-2">ENDS 24 MAY</p>
          </div>
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#16232B]/5">
            <p className="text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold mb-2">Investors</p>
            <p className="text-xl font-medium text-[#16232B]">48 Active</p>
            <p className="text-[10px] text-[#075056] font-bold mt-2 hover:underline cursor-pointer" onClick={() => navigate('/investors')}>VIEW LIST</p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-[32px] p-8 shadow-sm border border-[#16232B]/5">
          <h3 className="text-[10px] text-[#16232B]/40 uppercase tracking-[0.2em] font-bold mb-6">Campaign Milestone</h3>
          <div className="space-y-6">
            {[
              { title: 'Campaign Published', date: '12 Apr', done: true },
              { title: '25% Funding reached', date: '15 Apr', done: true },
              { title: '50% Funding reached', date: '20 Apr', done: true },
              { title: 'Target ₹1.2L Completion', date: 'EST 24 APR', done: false },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${step.done ? 'bg-[#FF5B04]' : 'bg-[#16232B]/10'} relative z-10`} />
                  {i < 3 && <div className={`w-[1px] h-10 ${step.done ? 'bg-[#FF5B04]' : 'bg-[#16232B]/10'}`} />}
                </div>
                <div className="flex-1 -mt-1">
                  <p className={`text-sm font-medium ${step.done ? 'text-[#16232B]' : 'text-[#16232B]/30'}`}>{step.title}</p>
                  <p className="text-[10px] text-[#16232B]/40 font-bold mt-0.5">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </MobileLayout>
  );
}
