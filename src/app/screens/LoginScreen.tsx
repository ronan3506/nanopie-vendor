import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import logo from "../../imports/pasted_text/logo.png";

export function LoginScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  // Skip the logo splash if arriving from the onboarding carousel
  const skipSplash = (location.state as { fromOnboarding?: boolean } | null)?.fromOnboarding === true;
  const [step, setStep] = useState(skipSplash ? 1 : 0);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    setStep(2);
    toast.success('OTP sent to ' + phone);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      toast.error('Please enter the 4-digit OTP');
      return;
    }
    toast.success('Login successful!');
    navigate('/register');
  };

  return (
    <div className={`h-full flex flex-col max-w-md mx-auto relative overflow-hidden transition-colors duration-500 ${step === 0 ? 'bg-[#16232B]' : 'bg-[#E4EEF0]'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="flex-1 flex flex-col px-8 pt-16 pb-8">
        
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="step0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img src={logo} className="h-16 w-auto brightness-0 invert" alt="Nanopie Logo" />
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-16">
                <div className="mb-12">
                  <img src={logo} className="h-24 w-auto" alt="Nanopie Logo" />
                </div>
                <h1 className="text-[44px] font-normal text-[#16232B] leading-[1.1] tracking-tight">
                  Scale your <br />
                  <span className="text-[#075056]">local dream.</span>
                </h1>
                <p className="text-[#16232B]/50 text-[16px] font-light mt-6 leading-relaxed max-w-[240px]">
                  The micro-investment platform<br/>for ambitious vendors.
                </p>
              </div>

              <div className="w-full space-y-10">
                <form onSubmit={handlePhoneSubmit} className="bg-[#075056] rounded-3xl px-6 py-6 shadow-xl shadow-[#075056]/20 relative z-10 text-white">
                  <div className="space-y-1.5 mb-8">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em]">Partner Phone</label>
                    <div className="flex items-center">
                      <span className="text-3xl font-light text-white border-b border-white/10 py-4 pr-3">+91</span>
                      <input
                        type="tel"
                        placeholder="00000 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-3xl font-light text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/20 tracking-tight"
                        autoFocus
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={phone.length < 10}
                    className={`w-full py-5 rounded-xl text-[15px] font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all ${phone.length === 10 ? 'bg-[#FF5B04] text-white' : 'bg-[#8CA3A5] text-[#075056] pointer-events-none'}`}
                  >
                    Send OTP
                    <ArrowRight size={16} strokeWidth={1} />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 w-full opacity-40 mt-10">
                  <div className="flex-1 h-[1px] bg-[#16232B]/20" />
                  <span className="text-[9px] font-normal text-[#16232B] uppercase tracking-[0.2em]">Verification</span>
                  <div className="flex-1 h-[1px] bg-[#16232B]/20" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col relative"
            >
              <button 
                onClick={() => setStep(1)} 
                className="absolute top-8 right-8 flex items-center gap-1.5 text-[#FF5B04] active:opacity-60 transition-opacity z-50 cursor-pointer font-bold text-[11px] tracking-[0.15em]"
              >
                <ArrowLeft size={14} strokeWidth={3} />
                BACK
              </button>
              <div className="mb-16">
                <div className="mb-12">
                  <img src={logo} className="h-24 w-auto" alt="Nanopie Logo" />
                </div>
                <h1 className="text-[44px] font-normal text-[#16232B] leading-[1.1] tracking-tight">
                  Verify your <br />
                  <span className="text-[#075056]">number.</span>
                </h1>
                <p className="text-[#16232B]/50 text-[16px] font-light mt-6 leading-relaxed max-w-[240px]">
                  We've sent a 4-digit code to <br />
                  <span className="text-[#16232B] font-medium">+91 {phone}</span>
                </p>
              </div>

              <div className="w-full space-y-10">
                <form onSubmit={handleOtpSubmit} className="bg-[#075056] rounded-3xl px-6 py-6 shadow-xl shadow-[#075056]/20 relative z-10 text-white">
                  <div className="mb-8">
                    <label className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] block mb-2">Secure OTP</label>
                    <input
                      type="text"
                      placeholder="• • • •"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-4xl font-normal text-center text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/20 tracking-[0.5em]"
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={otp.length < 4}
                    className={`w-full py-5 rounded-xl text-[15px] font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all ${otp.length === 4 ? 'bg-[#FF5B04] text-white' : 'bg-[#8CA3A5] text-[#075056] pointer-events-none'}`}
                  >
                    Verify & Proceed
                    <ArrowRight size={16} strokeWidth={1} />
                  </button>
                </form>

                <div className="text-center w-full mt-10">
                  <span className="text-[#16232B]/60 text-[10px] font-normal uppercase tracking-[0.1em]">
                    Didn't receive it?{' '}
                    <button 
                      onClick={() => toast.success('OTP RESENT TO +91 ' + phone)}
                      className="text-[#FF5B04] font-bold underline underline-offset-8 decoration-[#FF5B04] hover:text-[#075056] transition-colors tracking-[0.1em]"
                    >
                      RESEND CODE
                    </button>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step !== 0 && (
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 text-center"
          >
            <p className="text-[9px] font-black text-[#16232B]/30 uppercase tracking-[0.3em] leading-loose">
              SMALL BITES, BIG GROWTH.<br />THAT’S THE NANOPIE WAY. 🥧
            </p>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
