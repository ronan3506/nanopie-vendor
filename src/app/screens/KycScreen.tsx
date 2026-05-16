import { useNavigate } from 'react-router';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';

export function KycScreen() {
  const navigate = useNavigate();

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-foreground font-normal tracking-tight text-sm">KYC Status</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-6 pb-32 space-y-6">
        <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-8 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-2">
            <ShieldCheck size={24} strokeWidth={2} />
          </div>
          <h2 className="text-lg font-medium text-foreground">KYC Verified</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your business identity and details have been successfully verified by our team. No further action is required.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
