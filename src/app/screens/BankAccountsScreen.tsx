import { useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';
import { toast } from 'sonner';

export function BankAccountsScreen() {
  const navigate = useNavigate();

  const handleReviewSubmit = () => {
    toast.success('Submitted for review');
    navigate(-1);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-foreground font-normal tracking-tight text-sm">Bank Accounts</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-6 pb-32 space-y-6">
        <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-6 space-y-5 text-foreground">
          <div className="flex justify-between items-start border-b border-border pb-4">
            <div>
              <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium mb-1">Primary Account</p>
              <h3 className="text-[15px] font-medium">HDFC Bank</h3>
              <p className="text-[11px] text-muted-foreground mt-1">Acct ending in 1234</p>
            </div>
            <div className="px-3 py-1 bg-success/10 text-success rounded-full text-[9px] font-bold uppercase tracking-[0.15em] flex items-center gap-1">
              <CheckCircle2 size={10} strokeWidth={2} />
              Verified
            </div>
          </div>
          
          <div className="space-y-3">
             <label className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium ml-1">Account Holder</label>
             <input type="text" defaultValue="Suresh Kumar" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all" />
          </div>
          <div className="space-y-3">
             <label className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-medium ml-1">IFSC Code</label>
             <input type="text" defaultValue="HDFC0001234" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all" />
          </div>
          
          <button 
            onClick={handleReviewSubmit}
            className="w-full mt-4 bg-secondary text-white py-4 rounded-xl text-xs font-medium active:scale-95 transition-all"
          >
            Submit for Review
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
