import { useNavigate } from 'react-router';
import { ArrowLeft, Settings, MapPin, Store, Phone, Mail, ShieldCheck, ChevronRight, LogOut, User, Star, Edit3, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MobileLayout } from '../components/MobileLayout';

export function ProfileScreen() {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-foreground font-normal tracking-tight text-sm">Merchant Account</span>
      <button 
        onClick={handleSettingsClick}
        className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-secondary/10 rounded-full transition-colors"
      >
        <Settings size={18} strokeWidth={1.5} />
      </button>
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-8 pb-4 space-y-6">

        {/* Profile Hero */}
        <section className="bg-primary rounded-[32px] shadow-xl px-6 py-8 flex flex-col items-center text-center space-y-6 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full border-2 border-primary flex items-center justify-center w-7 h-7">
              <Star size={12} fill="currentColor" />
            </div>
          </div>

          <div className="space-y-1 z-10">
            <h2 className="text-[22px] font-medium tracking-tight">Artisan Bakery</h2>
            <p className="text-white/40 text-[9px] font-medium uppercase tracking-[0.2em]">Partner since 2026</p>
          </div>

          <div className="flex gap-3 z-10">
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-medium uppercase tracking-[0.15em] flex items-center gap-1.5 bg-white/5">
              <ShieldCheck size={12} strokeWidth={2} className="text-white/70" />
              Verified
            </div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-medium uppercase tracking-[0.15em] flex items-center gap-1.5 bg-white/5">
              <Store size={12} strokeWidth={2} className="text-secondary" />
              Premium
            </div>
          </div>

          <button 
            onClick={() => navigate('/edit-profile')}
            className="w-full mt-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/10 transition-colors z-10 active:scale-[0.98]"
          >
            <Edit3 size={14} strokeWidth={2} />
            Edit Profile
          </button>
        </section>

        {/* Performance Metrics */}
        <section className="bg-secondary rounded-[32px] shadow-xl shadow-secondary/20 px-6 py-6 text-white flex justify-between items-center">
          <div className="space-y-1 text-center flex-1">
            <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Rating</span>
            <p className="text-2xl font-normal">4.9</p>
          </div>
          <div className="w-[1px] h-8 bg-white/20" />
          <div className="space-y-1 text-center flex-1">
            <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Rank</span>
            <p className="text-2xl font-normal">#12</p>
          </div>
          <div className="w-[1px] h-8 bg-white/20" />
          <div className="space-y-1 text-center flex-1">
            <span className="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Growth</span>
            <p className="text-2xl font-normal">98%</p>
          </div>
        </section>

        {/* Details List */}
        <section className="bg-card rounded-[32px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
          {[
            { icon: User, label: 'Owner Details', value: 'Suresh Kumar' },
            { icon: MapPin, label: 'Location', value: 'Bandra West, Mumbai' },
            { icon: Phone, label: 'Contact', value: '+91 98765 43210' },
            { icon: Mail, label: 'Support', value: 'suresh@bakery.com' },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-background text-left"
            >
              <div className="flex items-center gap-5">
                <item.icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <div>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
              <ChevronRight size={16} strokeWidth={2} className="text-border" />
            </button>
          ))}
          
          <button
            onClick={() => navigate('/bank-accounts')}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-background text-left"
          >
            <div className="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <div>
                <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium mb-0.5">Bank Accounts</p>
                <p className="text-sm font-medium">HDFC Bank ****1234</p>
              </div>
            </div>
            <ChevronRight size={16} strokeWidth={2} className="text-border" />
          </button>

          <button
            onClick={() => navigate('/kyc')}
            className="w-full flex items-center justify-between px-6 py-5 transition-all active:bg-background text-left"
          >
            <div className="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <div>
                <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium mb-0.5">KYC Status</p>
                <p className="text-sm font-medium text-success">Verified</p>
              </div>
            </div>
            <ChevronRight size={16} strokeWidth={2} className="text-border" />
          </button>
        </section>

        {/* Customer Support */}
        <section className="bg-primary rounded-[32px] shadow-xl p-6 flex items-center justify-between text-white relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
          <div className="space-y-1 z-10">
            <h3 className="font-medium text-[17px] tracking-tight">Need Help?</h3>
            <p className="text-white/60 text-[11px] font-normal">Our team is available 24/7</p>
          </div>
          <button 
            onClick={() => navigate('/support')}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg active:scale-95 transition-all z-10 hover:brightness-110"
          >
            <MessageCircle size={20} strokeWidth={1.5} />
          </button>
        </section>

        {/* Logout */}
        <div className="pt-2 pb-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground text-[10px] uppercase tracking-[0.2em] font-bold transition-colors inline-flex items-center gap-2"
          >
            <LogOut size={14} strokeWidth={1.5} />
            LOG OUT
          </button>
        </div>

      </div>
    </MobileLayout>
  );
}
