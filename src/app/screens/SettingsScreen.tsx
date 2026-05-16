import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Bell, Shield, Lock, CreditCard, Globe, ChevronRight, Moon, HelpCircle } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';

export function SettingsScreen() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const handleToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nanopie_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nanopie_dark_mode', 'false');
    }
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-foreground font-normal tracking-tight text-sm">Settings</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-8 pb-40 space-y-8">
        
        {/* Account */}
        <div className="space-y-3">
          <h3 className="text-[10px] text-primary tracking-[0.22em] uppercase font-bold ml-2">Account</h3>
          <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button className="w-full flex items-center justify-between px-5 py-4 transition-all active:bg-background text-left">
              <div className="flex items-center gap-4">
                <Shield size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Security & Privacy</span>
              </div>
              <ChevronRight size={16} strokeWidth={2} className="text-border" />
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-3">
          <h3 className="text-[10px] text-primary tracking-[0.22em] uppercase font-bold ml-2">Preferences</h3>
          <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button className="w-full flex items-center justify-between px-5 py-4 border-b border-border transition-all active:bg-background text-left">
              <div className="flex items-center gap-4">
                <Bell size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Notifications</span>
              </div>
              <ChevronRight size={16} strokeWidth={2} className="text-border" />
            </button>
            <button className="w-full flex items-center justify-between px-5 py-4 border-b border-border transition-all active:bg-background text-left">
              <div className="flex items-center gap-4">
                <Globe size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-normal text-muted-foreground">English</span>
                <ChevronRight size={16} strokeWidth={2} className="text-border" />
              </div>
            </button>
            <div className="w-full flex items-center justify-between px-5 py-4 transition-all text-left">
              <div className="flex items-center gap-4">
                <Moon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Dark Mode</span>
              </div>
              <button 
                onClick={handleToggleTheme}
                className={\`w-[42px] h-6 rounded-full flex items-center p-1 transition-colors relative cursor-pointer active:scale-95 \${isDark ? 'bg-secondary' : 'bg-muted'}\`}
              >
                <div className={\`w-[18px] h-[18px] bg-white rounded-full shadow-sm absolute transition-all duration-300 \${isDark ? 'right-1' : 'left-1'}\`} />
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="text-[10px] text-primary tracking-[0.22em] uppercase font-bold ml-2">Support</h3>
          <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button className="w-full flex items-center justify-between px-5 py-4 border-b border-border transition-all active:bg-background text-left">
              <div className="flex items-center gap-4">
                <HelpCircle size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Help Center</span>
              </div>
              <ChevronRight size={16} strokeWidth={2} className="text-border" />
            </button>
            <button className="w-full flex items-center justify-between px-5 py-4 transition-all active:bg-background text-left">
              <div className="flex items-center gap-4">
                <Shield size={18} strokeWidth={1.5} className="text-muted-foreground" />
                <span className="text-sm font-medium">Terms of Service</span>
              </div>
              <ChevronRight size={16} strokeWidth={2} className="text-border" />
            </button>
          </div>
        </div>

      </div>
    </MobileLayout>
  );
}