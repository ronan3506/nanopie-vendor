import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Search, Upload, CheckCircle2, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

export function RegistrationScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  // Form State
  const [businessType, setBusinessType] = useState('');
  const [revenueRange, setRevenueRange] = useState('');
  const [bankSearch, setBankSearch] = useState('');
  const [selectedBank, setSelectedBank] = useState<{ name: string; logo: string } | null>(null);
  
  // UI State
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [uploadedId, setUploadedId] = useState(false);
  const [uploadedBusinessProof, setUploadedBusinessProof] = useState(false);

  const banks = [
    { name: 'HDFC Bank', logo: 'H' },
    { name: 'State Bank of India', logo: 'S' },
    { name: 'ICICI Bank', logo: 'I' },
    { name: 'Axis Bank', logo: 'A' },
    { name: 'Kotak Mahindra', logo: 'K' },
    { name: 'Punjab National Bank', logo: 'P' },
  ];

  const filteredBanks = banks.filter(b => b.name.toLowerCase().includes(bankSearch.toLowerCase()));

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
    else navigate('/login');
  };

  const StepIndicators = () => (
    <div className="flex items-center gap-2 mb-10 w-full">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20">
          <motion.div 
            className="h-full bg-[#FF5B04]"
            initial={{ width: i < step ? '100%' : '0%' }}
            animate={{ width: i <= step ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-full flex flex-col max-w-md mx-auto relative overflow-hidden bg-[#075056] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      
      {/* Header */}
      {step < 4 && (
        <div className="flex items-center justify-between px-6 pt-12 pb-4">
          <button onClick={handleBack} className="p-2 -ml-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
            Step {step + 1} of 4
          </span>
          <div className="w-9" /> {/* Spacer */}
        </div>
      )}

      <div className="flex-1 flex flex-col px-6 overflow-y-auto pb-24 hide-scrollbar">
        <AnimatePresence mode="wait">
          
          {/* Step 2: Basic Business Details */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pt-4"
            >
              <StepIndicators />
              <div>
                <h1 className="text-4xl font-normal leading-[1.1] tracking-tight mb-3">
                  Let's get to know <span className="text-[#FF5B04]">your business.</span>
                </h1>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Basic details to help investors find you.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input type="text" placeholder="e.g. Suresh Kumar" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Name</label>
                  <input type="text" placeholder="e.g. Suresh Artisan Bakery" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Type</label>
                  <div className="relative">
                    <select 
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-black">Select Category</option>
                      <option value="bakery" className="text-black">Bakery & Sweets</option>
                      <option value="cafe" className="text-black">Cafe / QSR</option>
                      <option value="restaurant" className="text-black">Restaurant</option>
                      <option value="grocery" className="text-black">Grocery / Kirana</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Location</label>
                  <input type="text" placeholder="City + Area (e.g. Indiranagar, BLR)" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Business Info */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pt-4"
            >
              <StepIndicators />
              <div>
                <h1 className="text-4xl font-normal leading-[1.1] tracking-tight mb-3">
                  Build <span className="text-[#FF5B04]">trust</span> with investors.
                </h1>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Tell the community about your journey.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Short Description</label>
                  <textarea 
                    placeholder="What do you make? What makes it special?" 
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30 min-h-[120px] resize-none"
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="space-y-2 flex-1">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Years in Op.</label>
                    <input type="number" placeholder="e.g. 3" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30 text-center" />
                  </div>
                  <div className="space-y-2 flex-[2]">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Monthly Revenue</label>
                    <div className="relative">
                      <select 
                        value={revenueRange}
                        onChange={(e) => setRevenueRange(e.target.value)}
                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-black">Select Range</option>
                        <option value="0-50k" className="text-black">Under ₹50k</option>
                        <option value="50k-2l" className="text-black">₹50k - ₹2L</option>
                        <option value="2l-5l" className="text-black">₹2L - ₹5L</option>
                        <option value="5l+" className="text-black">₹5L+</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Financial Setup */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pt-4"
            >
              <StepIndicators />
              <div>
                <h1 className="text-4xl font-normal leading-[1.1] tracking-tight mb-3">
                  Where should we <span className="text-[#FF5B04]">send funds?</span>
                </h1>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Secure financial setup for receiving investments.
                </p>
              </div>

              <div className="space-y-5">
                
                {/* Bank Selection */}
                <div className="space-y-2 relative z-50">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Select Bank</label>
                  {!selectedBank ? (
                    <div className="relative">
                      <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input 
                        type="text" 
                        placeholder="Search for your bank..." 
                        value={bankSearch}
                        onChange={(e) => {
                          setBankSearch(e.target.value);
                          setShowBankDropdown(true);
                        }}
                        onFocus={() => setShowBankDropdown(true)}
                        className="w-full bg-white/10 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" 
                      />
                      
                      {showBankDropdown && (
                        <div className="absolute top-full mt-2 left-0 right-0 bg-[#16232B] rounded-2xl shadow-xl shadow-black/20 border border-white/5 overflow-hidden z-50">
                          {filteredBanks.slice(0, 4).map(b => (
                            <button
                              key={b.name}
                              onClick={() => {
                                setSelectedBank(b);
                                setShowBankDropdown(false);
                              }}
                              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-none"
                            >
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-[#FF5B04]">
                                {b.logo}
                              </div>
                              <span className="text-sm font-medium">{b.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full bg-white/10 border border-[#FF5B04]/30 rounded-2xl px-5 py-3 flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-[#FF5B04]">
                          {selectedBank.logo}
                        </div>
                        <span className="text-base font-medium">{selectedBank.name}</span>
                      </div>
                      <button onClick={() => setSelectedBank(null)} className="text-[10px] uppercase tracking-wider font-bold text-white/40 group-hover:text-[#FF5B04] transition-colors">
                        CHANGE
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <div className="space-y-2 flex-[2]">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Account Number</label>
                    <input type="text" placeholder="0000 0000 0000" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">IFSC Code</label>
                    <input type="text" placeholder="IFSC" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">UPI ID</label>
                  <input type="text" placeholder="yourbusiness@upi" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">
                    PAN / GST
                  </label>
                  <input type="text" placeholder="ABCDE1234F" className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30 uppercase" />
                </div>

              </div>
            </motion.div>
          )}

          {/* Step 5: Verification */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pt-4"
            >
              <StepIndicators />
              <div>
                <h1 className="text-4xl font-normal leading-[1.1] tracking-tight mb-3">
                  Final step: <span className="text-[#FF5B04]">Verification.</span>
                </h1>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  We need to verify your identity to comply with regulations.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="space-y-3">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">ID Proof (Aadhaar / PAN)</label>
                  <button 
                    onClick={() => {
                      toast.success('Simulated File Upload');
                      setUploadedId(true);
                    }}
                    className={`w-full h-32 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all ${uploadedId ? 'border-[#FF5B04] bg-[#FF5B04]/10' : 'border-white/20 bg-white/5 hover:border-white/40'}`}
                  >
                    {uploadedId ? (
                      <>
                        <CheckCircle2 size={28} className="text-[#FF5B04]" />
                        <span className="text-sm font-medium text-white">id_document_scan.pdf</span>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                          <Upload size={20} />
                        </div>
                        <span className="text-xs font-medium text-white/50">Tap to upload PDF or Image</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Proof (License / Shop Image)</label>
                  <button 
                    onClick={() => {
                      toast.success('Simulated File Upload');
                      setUploadedBusinessProof(true);
                    }}
                    className={`w-full h-32 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all ${uploadedBusinessProof ? 'border-[#FF5B04] bg-[#FF5B04]/10' : 'border-white/20 bg-white/5 hover:border-white/40'}`}
                  >
                    {uploadedBusinessProof ? (
                      <>
                        <CheckCircle2 size={28} className="text-[#FF5B04]" />
                        <span className="text-sm font-medium text-white">shop_front_license.jpg</span>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                          <Upload size={20} />
                        </div>
                        <span className="text-xs font-medium text-white/50">Tap to upload PDF or Image</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          )}

          {/* Step 6: Pending */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="flex-1 flex flex-col items-center justify-center pt-20 text-center gap-6"
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-white/20 animate-[spin_8s_linear_infinite_reverse]" />
                <div className="absolute inset-4 rounded-full border border-[#FF5B04]/50 animate-[spin_6s_linear_infinite]" />
                <div className="w-16 h-16 rounded-full bg-[#FF5B04] flex items-center justify-center shadow-xl shadow-[#FF5B04]/30">
                  <CheckCircle2 size={32} className="text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-normal leading-[1.1] tracking-tight mb-4">
                  Under <span className="text-[#FF5B04]">Review.</span>
                </h1>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
                  We're verifying your details. This usually takes less than 24 hours. You can explore the dashboard in the meantime.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer / Next Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#075056] via-[#075056] to-transparent z-40">
        <button
          onClick={() => {
            if (step === 4) navigate('/dashboard');
            else handleNext();
          }}
          className="w-full py-5 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] bg-[#FF5B04] text-white shadow-xl shadow-[#FF5B04]/20"
        >
          {step === 4 ? 'Continue to Dashboard' : 'Next Step'}
          {step !== 4 && <ArrowRight size={18} strokeWidth={2} />}
        </button>
      </div>

    </div>
  );
}
