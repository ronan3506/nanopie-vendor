import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, Plus, Package, Wrench, Megaphone, Percent, Gift, Info, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { MobileLayout } from '../components/MobileLayout';

const STEPS = [
  { id: 1, title: 'Funding Goal', description: 'Enter the amount you wish to raise' },
  { id: 2, title: 'Intended Use', description: 'Select the primary purpose for funds' },
  { id: 3, title: 'Investor Yield', description: 'Define the profit share rate' },
  { id: 4, title: 'Platform Verification', description: 'Pay listing fee to initiate campaign' },
];

export function CreateRequestScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ amount: '', purpose: '', returnType: 'profit', returnVal: '10' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(5); // Success step
        
        // Save mock update to localStorage to show in Updates page
        const newUpdate = {
          id: Date.now(),
          type: 'success',
          title: 'Funding Request Initiated',
          description: `Your request for ₹${parseInt(formData.amount).toLocaleString()} (${formData.purpose}) is now under review.`,
          time: 'Just now'
        };
        const existingUpdates = JSON.parse(localStorage.getItem('nanopie_updates') || '[]');
        localStorage.setItem('nanopie_updates', JSON.stringify([newUpdate, ...existingUpdates]));
        
      }, 2000);
    }
  };
  
  const handleBack = () => {
    if (step === 5) navigate('/dashboard');
    else if (step > 1) setStep(step - 1);
    else navigate(-1);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={handleBack} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <div className="flex gap-1.5 items-center">
        {step < 5 && STEPS.map((s) => (
          <div
            key={s.id}
            className={`h-[3px] rounded-full transition-all duration-500 ${step >= s.id ? 'w-6 bg-[#075056]' : 'w-3 bg-[#16232B]/15'}`}
          />
        ))}
      </div>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-8 pb-36 space-y-8">

        {/* Step Header */}
        {step < 5 && (
          <section className="space-y-1">
            <p className="text-[10px] text-[#075056] tracking-[0.22em] uppercase font-normal">Step {step} of 4</p>
            <h1 className="text-[28px] font-normal text-[#16232B] tracking-tight">{STEPS[step - 1].title}</h1>
            <p className="text-[12px] text-[#16232B]/40 font-normal">{STEPS[step - 1].description}</p>
          </section>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="bg-[#075056] rounded-3xl px-6 py-4 shadow-xl shadow-[#075056]/20 text-white">
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-normal text-[#E4EEF0]/40">₹</div>
                    <input
                      type="number"
                      placeholder="0"
                      autoFocus
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-5 pl-8 text-5xl font-normal text-white focus:outline-none focus:border-[#FF5B04] transition-colors placeholder:text-[#E4EEF0]/20 tracking-tighter"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['10000', '25000', '50000', '100000'].map(val => (
                    <button
                      key={val}
                      onClick={() => setFormData({ ...formData, amount: val })}
                      className={`py-4 rounded-xl border font-normal text-xs tracking-tight transition-all duration-300 ${
                        formData.amount === val
                          ? 'border-[#075056] bg-[#075056]/8 text-[#075056]'
                          : 'border-[#16232B]/10 bg-white text-[#16232B]/50 active:bg-[#E4EEF0]'
                      }`}
                    >
                      ₹{parseInt(val).toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-3">
                {[
                  { id: 'inventory', label: 'Inventory Restock', icon: Package },
                  { id: 'equipment', label: 'Kitchen Upgrade', icon: Wrench },
                  { id: 'marketing', label: 'Local Promotion', icon: Megaphone },
                  { id: 'other', label: 'Store Expansion', icon: Plus },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFormData({ ...formData, purpose: item.label })}
                    className={`w-full p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                      formData.purpose === item.label
                        ? 'border-[#075056] bg-[#075056]/5'
                        : 'border-[#16232B]/10 bg-white active:bg-[#E4EEF0]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon size={16} strokeWidth={1.5} className={formData.purpose === item.label ? 'text-[#075056]' : 'text-[#16232B]/25'} />
                      <span className={`text-sm font-normal tracking-tight ${formData.purpose === item.label ? 'text-[#16232B]' : 'text-[#16232B]/40'}`}>
                        {item.label}
                      </span>
                    </div>
                    {formData.purpose === item.label && <div className="w-2 h-2 rounded-full bg-[#075056]" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'profit', label: 'Profit Share', icon: Percent },
                    { id: 'credit', label: 'Store Credit', icon: Gift },
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, returnType: type.id })}
                      className={`p-5 rounded-2xl border text-left space-y-4 transition-all duration-300 ${
                        formData.returnType === type.id
                          ? 'border-[#075056] bg-[#075056]/5'
                          : 'border-[#16232B]/10 bg-white'
                      }`}
                    >
                      <type.icon size={18} strokeWidth={1.5} className={formData.returnType === type.id ? 'text-[#075056]' : 'text-[#16232B]/25'} />
                      <p className={`text-sm font-normal tracking-tight ${formData.returnType === type.id ? 'text-[#16232B]' : 'text-[#16232B]/40'}`}>
                        {type.label}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="bg-white rounded-3xl px-6 py-5 shadow-xl shadow-[#16232B]/5 space-y-5 text-[#16232B]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-normal text-[#16232B]/50 uppercase tracking-widest">Yield Rate</span>
                    <span className="text-3xl font-normal text-[#16232B] tracking-tight">{formData.returnVal}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={formData.returnVal}
                    onChange={(e) => setFormData({ ...formData, returnVal: e.target.value })}
                    className="w-full h-[2px] bg-[#16232B]/10 rounded-full appearance-none cursor-pointer accent-[#FF5B04]"
                  />
                  <div className="flex items-start gap-3 px-4 py-4 rounded-xl bg-[#16232B]/5 border border-[#16232B]/10">
                    <Info size={14} strokeWidth={1.5} className="text-[#FF5B04] mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] text-[#16232B]/60 leading-relaxed font-normal">
                      A rate of <span className="text-[#16232B]">10–12%</span> is recommended for retail category to ensure rapid funding.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Step 4: Verification/Payment */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-[#16232B]/5 space-y-6 text-[#16232B]">
                  <div className="flex items-center gap-3 border-b border-[#16232B]/10 pb-6">
                    <div className="w-12 h-12 bg-[#075056]/5 rounded-full flex items-center justify-center text-[#075056]">
                      <ShieldCheck size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-normal">Listing Verification Fee</p>
                      <p className="text-[11px] text-[#16232B]/50 font-normal">One-time processing charge</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-normal">
                      <span className="text-[#16232B]/60">Funding Goal</span>
                      <span>₹{parseInt(formData.amount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-normal">
                      <span className="text-[#16232B]/60">Platform Fee (1.5%)</span>
                      <span>₹{Math.round(parseInt(formData.amount) * 0.015).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-normal">
                      <span className="text-[#16232B]/60">GST (18%)</span>
                      <span>₹{Math.round(parseInt(formData.amount) * 0.015 * 0.18).toLocaleString()}</span>
                    </div>
                    <div className="pt-4 border-t border-[#16232B]/10 flex justify-between items-end">
                      <span className="text-sm font-normal">Total to Pay</span>
                      <span className="text-2xl font-normal text-[#FF5B04]">
                        ₹{Math.round(parseInt(formData.amount) * 0.015 * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <p className="text-[10px] text-center text-[#16232B]/40 font-normal">
                    By proceeding, you agree to Nanopie's Terms of Service and Campaign Guidelines.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="flex flex-col items-center justify-center pt-10 pb-8 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                  className="w-24 h-24 bg-[#075056] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#075056]/20"
                >
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-normal text-[#16232B] tracking-tight">Campaign Live!</h2>
                  <p className="text-[#16232B]/60 text-sm font-normal max-w-[240px] mx-auto">
                    Your funding request has been successfully initiated. Investors can now view and fund your campaign.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Absolute CTA pinned to phone frame bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 pt-6 bg-[#E4EEF0] z-40 border-t border-[#16232B]/5">


        {step < 5 ? (
          <button
            onClick={handleNext}
            disabled={(step === 1 && !formData.amount) || (step === 2 && !formData.purpose) || isProcessing}
            className="w-full bg-[#075056] text-white py-5 rounded-xl text-sm font-normal flex items-center justify-center gap-2 active:scale-[0.98] transition-all disabled:bg-[#16232B]/10 disabled:text-[#16232B]/20"
          >
            {isProcessing ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{step === 4 ? 'Pay & Launch Campaign' : 'Continue'}</span>
                <ChevronRight size={16} strokeWidth={1} />
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() => navigate('/updates')}
            className="w-full bg-[#075056] text-white py-5 rounded-xl text-sm font-normal flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            View Updates
            <ChevronRight size={16} strokeWidth={1} />
          </button>
        )}
      </div>
    </MobileLayout>
  );
}
