import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logo from '../../imports/pasted_text/logo.png';

const slides = [
  {
    id: 0,
    badge: 'WELCOME',
    headline: 'Your bakery,\nbacked by\nbelievers.',
    sub: 'Nanopie connects small food businesses with micro-investors who believe in your craft.',
    bg: '#16232B',
    accent: '#FF5B04',
    textColor: '#E4EEF0',
    illustration: 'growth',
  },
  {
    id: 1,
    badge: 'FUNDING',
    headline: 'Raise capital\nwithout the\nbank drama.',
    sub: 'Create a funding request in minutes. Your community funds your next batch.',
    bg: '#075056',
    accent: '#FF5B04',
    textColor: '#E4EEF0',
    illustration: 'fund',
  },
  {
    id: 2,
    badge: 'REVENUE',
    headline: 'Log daily sales.\nWatch your\nnumbers grow.',
    sub: 'Track every rupee you earn. Keep your investors updated with real-time performance.',
    bg: '#E4EEF0',
    accent: '#075056',
    textColor: '#16232B',
    illustration: 'chart',
  },
  {
    id: 3,
    badge: 'RETURNS',
    headline: 'Share the\nprofit. Keep\nthe loyalty.',
    sub: 'Distribute returns to investors with one tap. Build trust that compounds like interest.',
    bg: '#FF5B04',
    accent: '#16232B',
    textColor: '#fff',
    illustration: 'returns',
  },
];

// --- Illustration Components ---

function GrowthIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-48 h-48 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute w-32 h-32 rounded-full border border-white/8 animate-[spin_10s_linear_infinite]" />
      </div>
      {/* Pie chart mockup */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(255,91,4,0.15)" strokeWidth="18"/>
          <circle cx="70" cy="70" r="55" fill="none" stroke="#FF5B04" strokeWidth="18"
            strokeDasharray="208 346" strokeDashoffset="86" strokeLinecap="round"
            style={{transition:'stroke-dasharray 1.5s ease'}}/>
          <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(228,238,240,0.2)" strokeWidth="18"
            strokeDasharray="104 346" strokeDashoffset="-122" strokeLinecap="round"/>
          <text x="70" y="65" textAnchor="middle" fontSize="24" fontWeight="700" fill="#E4EEF0" fontFamily="Outfit,sans-serif">₹1.2L</text>
          <text x="70" y="84" textAnchor="middle" fontSize="9" fill="rgba(228,238,240,0.5)" fontFamily="Outfit,sans-serif" letterSpacing="2">FUNDED</text>
        </svg>
        {/* Stats row */}
        <div className="flex gap-6">
          {[{label:'INVESTORS',val:'48'},{label:'GROWTH',val:'+12%'}].map(s=>(
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{s.val}</span>
              <span className="text-[8px] tracking-[0.2em] text-white/40">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FundIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbiting avatars */}
      <div className="relative w-56 h-56">
        {/* Center item */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-[#FF5B04] flex items-center justify-center shadow-2xl shadow-[#FF5B04]/30">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12M6 8h12m-6 5 8.5 8M6 13h3c2.24 0 4-1.76 4-4s-1.76-4-4-4"/>
            </svg>
          </div>
        </div>
        {/* Orbiting investor cards */}
        {[
          {top:'0%',left:'50%',transform:'translate(-50%,-50%)',amount:'₹5k',name:'Priya'},
          {top:'50%',left:'100%',transform:'translate(-50%,-50%)',amount:'₹2k',name:'Raj'},
          {top:'100%',left:'50%',transform:'translate(-50%,-50%)',amount:'₹8k',name:'Meera'},
          {top:'50%',left:'0%',transform:'translate(-50%,-50%)',amount:'₹3k',name:'Arjun'},
        ].map((pos,i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200 }}
            className="absolute flex flex-col items-center gap-1"
            style={{ top: pos.top, left: pos.left, transform: pos.transform }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-3 py-2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white font-bold mb-1">
                {pos.name[0]}
              </div>
              <span className="text-white text-xs font-bold">{pos.amount}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChartIllustration() {
  const bars = [35,55,45,70,60,85,75];
  const days = ['M','T','W','T','F','S','S'];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[260px] flex flex-col gap-4">
        {/* Big number */}
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-[#16232B] tracking-tighter">₹31,600</span>
          <div className="flex items-center gap-1 text-[#075056]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="text-xs font-bold">+8%</span>
          </div>
        </div>
        <span className="text-[10px] tracking-[0.2em] text-[#16232B]/50 uppercase -mt-2">This Week</span>
        {/* Bar chart */}
        <div className="flex items-end gap-2 h-24">
          {bars.map((h,i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className={`w-full rounded-lg ${i === 5 ? 'bg-[#FF5B04]' : 'bg-[#075056]/15'}`}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22,1,0.36,1] }}
                style={{ minHeight: '4px' }}
              />
              <span className="text-[8px] text-[#16232B]/40 font-bold">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReturnsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Central amount */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-32 h-32 rounded-full bg-[#16232B] flex flex-col items-center justify-center shadow-2xl shadow-black/20"
        >
          <span className="text-3xl font-bold text-white">₹8.4K</span>
          <span className="text-[8px] tracking-widest text-white/50 uppercase mt-1">Returns</span>
        </motion.div>
        {/* Distribution cards */}
        <div className="flex gap-3">
          {[
            {name:'Anjali',amount:'₹520',delay:0.2,avatar:'A'},
            {name:'Rahul',amount:'₹260',delay:0.3,avatar:'R'},
            {name:'Deepa',amount:'₹180',delay:0.4,avatar:'D'},
          ].map((inv) => (
            <motion.div
              key={inv.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: inv.delay, type: 'spring', stiffness: 200 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#16232B] flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">{inv.avatar}</span>
              </div>
              <span className="text-[10px] font-bold text-[#16232B]/70">{inv.amount}</span>
            </motion.div>
          ))}
        </div>
        {/* Arrow lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="opacity-20">
            <path d="M100 0 L30 60" stroke="#16232B" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M100 0 L100 60" stroke="#16232B" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M100 0 L170 60" stroke="#16232B" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

const IllustrationMap: Record<string, JSX.Element> = {
  growth: <GrowthIllustration />,
  fund: <FundIllustration />,
  chart: <ChartIllustration />,
  returns: <ReturnsIllustration />,
};

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const slide = slides[current];
  const isLast = current === slides.length - 1;

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const goNext = () => {
    if (isLast) {
      navigate('/');
    } else {
      goTo(current + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0 && current < slides.length - 1) goTo(current + 1);
      if (dx > 0 && current > 0) goTo(current - 1);
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: '0%', opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div
      className="h-full flex flex-col relative overflow-hidden select-none"
      style={{ fontFamily: "'Outfit', sans-serif", background: slide.bg, transition: 'background 0.6s ease' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Skip button */}
      <div className="absolute top-0 right-0 z-30 px-6 pt-6">
        {!isLast && (
          <motion.button
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate('/')}
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: slide.textColor, opacity: 0.4 }}
          >
            SKIP
          </motion.button>
        )}
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-0 z-30 px-6 pt-6">
        <img
          src={logo}
          className="h-8 w-auto"
          alt="Nanopie"
          style={{ filter: slide.bg === '#E4EEF0' ? 'none' : 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Illustration Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="absolute inset-0"
          >
            {IllustrationMap[slide.illustration]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Content Card */}
      <div className="relative z-20 px-6 pb-8 pt-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
              style={{ background: `${slide.accent}20`, border: `1px solid ${slide.accent}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: slide.accent }} />
              <span className="text-[9px] font-bold tracking-[0.25em]" style={{ color: slide.accent }}>
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[38px] font-normal leading-[1.1] tracking-tight mb-4 whitespace-pre-line"
              style={{ color: slide.textColor }}
            >
              {slide.headline}
            </h1>

            {/* Sub */}
            <p
              className="text-[14px] font-light leading-relaxed mb-8 max-w-[280px]"
              style={{ color: slide.textColor, opacity: 0.6 }}
            >
              {slide.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls Row */}
        <div className="flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="p-1">
                <motion.div
                  animate={{
                    width: i === current ? 24 : 6,
                    opacity: i === current ? 1 : 0.3,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="h-1.5 rounded-full"
                  style={{ background: slide.accent }}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goNext}
            className="flex items-center gap-3 pl-6 pr-5 py-4 rounded-full font-bold text-sm shadow-xl transition-all"
            style={{
              background: slide.accent,
              color: slide.bg === '#FF5B04' ? '#16232B' : '#fff',
              boxShadow: `0 16px 40px ${slide.accent}40`,
            }}
          >
            {isLast ? 'Get Started' : 'Next'}
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <ArrowRight size={14} strokeWidth={2.5} />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
