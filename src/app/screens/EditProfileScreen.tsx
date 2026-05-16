import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Camera, CheckCircle2 } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export function EditProfileScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    storeName: 'Artisan Bakery',
    ownerName: 'Suresh Kumar',
    email: 'suresh@bakery.com',
    phone: '+91 98765 43210',
    location: 'Bandra West, Mumbai'
  });

  const handleSave = () => {
    toast.success('Profile updated successfully');
    navigate(-1);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-foreground font-normal tracking-tight text-sm">Edit Profile</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-8 pb-32 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-background">
              <Camera size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-6 space-y-5">
          {[
            { label: 'Store Name', key: 'storeName' },
            { label: 'Owner Name', key: 'ownerName' },
            { label: 'Email Address', key: 'email', type: 'email' },
            { label: 'Phone Number', key: 'phone', type: 'tel' },
            { label: 'Store Location', key: 'location' }
          ].map((field) => (
            <div key={field.key} className="space-y-1.5">
              <label className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium ml-1">{field.label}</label>
              <input
                type={field.type || 'text'}
                value={(formData as any)[field.key]}
                onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-4 bg-background max-w-md mx-auto z-50">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-white py-4 rounded-[16px] text-[13px] font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          Save Changes
          <CheckCircle2 size={16} strokeWidth={2} />
        </button>
      </div>
    </MobileLayout>
  );
}