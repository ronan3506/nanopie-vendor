import { useNavigate } from 'react-router';
import { ArrowLeft, Send, Image as ImageIcon, MapPin, Clock, ThumbsUp, MessageSquare, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { MobileLayout } from '../components/MobileLayout';
import { useState, useEffect } from 'react';

const initialUpdates = [
  {
    id: 1,
    date: 'Today, 11:30 AM',
    text: 'Just received the first batch of premium organic flour for the Diwali special cookies!',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=200&fit=crop',
    likes: 12,
    comments: 2,
    liked: false
  },
  {
    id: 2,
    date: 'Apr 20, 2026',
    text: 'New oven installed! This will increase our cookie production capacity by 40%. Thanks to our investors!',
    likes: 24,
    comments: 5,
    liked: false
  },
  {
    id: 3,
    date: 'Apr 18, 2026',
    text: 'Finalized the packaging design for the festive gift hampers.',
    likes: 8,
    comments: 0,
    liked: false
  },
];

export function UpdatesScreen() {
  const navigate = useNavigate();
  const [broadcastText, setBroadcastText] = useState('');
  const [updates, setUpdates] = useState<any[]>(initialUpdates);
  const [hasActiveFunding, setHasActiveFunding] = useState(false);

  useEffect(() => {
    // Check if there is an active funding request
    const funding = localStorage.getItem('nanopie_active_funding');
    if (funding) {
      setHasActiveFunding(true);
    }
  }, []);

  const handleBroadcast = () => {
    if (!broadcastText.trim()) return;
    
    const newPost = {
      id: Date.now(),
      date: 'JUST NOW',
      text: broadcastText,
      likes: 0,
      comments: 0,
      liked: false
    };
    
    setUpdates([newPost, ...updates]);
    setBroadcastText('');
    toast.success('Update broadcasted to investors');
  };

  const toggleLike = (id: number) => {
    setUpdates(updates.map(u => {
      if (u.id === id) {
        return {
          ...u,
          liked: !u.liked,
          likes: u.liked ? u.likes - 1 : u.likes + 1
        };
      }
      return u;
    }));
  };

  const Header = (
    <div className="flex items-center justify-between w-full bg-[#E4EEF0] px-2 py-2">
      <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center text-[#16232B]/60 hover:text-[#16232B] transition-colors">
        <ArrowLeft size={20} strokeWidth={1.5} />
      </button>
      <span className="text-[#16232B] font-medium tracking-tight text-[15px]">Investor Feed</span>
      <div className="w-10" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-6 pb-4 space-y-6 bg-[#E4EEF0] min-h-full">

        {/* Composer */}
        <section className="bg-[#1D4F4F] rounded-[24px] shadow-xl shadow-[#1D4F4F]/10 px-6 py-6 space-y-4 text-white">
          <textarea
            value={broadcastText}
            onChange={(e) => setBroadcastText(e.target.value)}
            placeholder="Share an update with investors..."
            className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-normal text-sm min-h-[72px] placeholder:text-[#E4EEF0]/50 resize-none leading-relaxed focus:outline-none"
          />
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-5">
              <button className="text-[#E4EEF0]/50 hover:text-white transition-colors">
                <ImageIcon size={18} strokeWidth={1.5} />
              </button>
              <button className="text-[#E4EEF0]/50 hover:text-white transition-colors">
                <MapPin size={18} strokeWidth={1.5} />
              </button>
            </div>
            <button
              onClick={handleBroadcast}
              className="bg-white text-[#1D4F4F] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              Broadcast <Send size={12} strokeWidth={2} />
            </button>
          </div>
        </section>

        {/* Feed List */}
        <section className="space-y-5 pb-4">
          
          {/* Static System Update (Funding Request) */}
          {hasActiveFunding && (
            <div className="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B] px-6 py-5 space-y-3 border-l-4 border-[#FF6B35]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center">
                  <CheckCircle2 size={16} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-[#16232B]">Funding Request Initiated</h3>
                  <div className="flex items-center gap-1.5 text-[9px] text-[#FF6B35] uppercase tracking-widest font-bold mt-0.5">
                    <Clock size={10} strokeWidth={2.5} />
                    JUST NOW
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#16232B] font-medium leading-relaxed">
                Your request for ₹10,000 (Inventory Restock) is now under review.
              </p>
            </div>
          )}

          {/* All Updates */}
          {updates.map((update) => (
            <div key={update.id} className="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B]">
              {update.image && (
                <div className="h-48 overflow-hidden">
                  <img src={update.image} className="w-full h-full object-cover" alt="Update" />
                </div>
              )}
              <div className="px-6 py-5 space-y-4">
                <div className="flex items-center gap-1.5 text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold">
                  <Clock size={10} strokeWidth={2} />
                  {update.date}
                </div>
                <p className="text-[13px] text-[#16232B] font-medium leading-relaxed">
                  {update.text}
                </p>
                <div className="flex items-center gap-6 pt-3 border-t border-[#16232B]/5">
                  <button 
                    onClick={() => toggleLike(update.id)}
                    className={`flex items-center gap-2 transition-all ${update.liked ? 'text-[#1D4F4F]' : 'text-[#16232B]/30 hover:text-[#1D4F4F]'}`}
                  >
                    <ThumbsUp size={14} strokeWidth={2} className={update.liked ? 'fill-[#1D4F4F]' : ''} />
                    <span className="text-[11px] font-semibold">{update.likes}</span>
                  </button>
                  <button 
                    onClick={() => toast('Comments coming soon')}
                    className="flex items-center gap-2 text-[#16232B]/30 hover:text-[#1D4F4F] transition-all"
                  >
                    <MessageSquare size={14} strokeWidth={2} />
                    <span className="text-[11px] font-semibold">{update.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </section>
      </div>
    </MobileLayout>
  );
}
