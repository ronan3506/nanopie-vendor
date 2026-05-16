import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send, Paperclip, MoreVertical } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';

export function SupportScreen() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [chats, setChats] = useState([
    { id: 1, sender: 'agent', text: 'Hi Artisan Bakery! I\'m your Nanopie success manager. How can I help you today?', time: '10:00 AM' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const handleSend = () => {
    if (!msg.trim()) return;
    
    const userMsg = { id: Date.now(), sender: 'user', text: msg, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    setChats(p => [...p, userMsg]);
    setMsg('');
    
    // AI Response Logic
    setTimeout(() => {
      let reply = "Thanks for reaching out! I've logged your query and an agent will be with you shortly.";
      const low = msg.toLowerCase();
      if (low.includes('loan') || low.includes('funding')) reply = "I see you're asking about funding. Your current request for ₹10,000 is under review and typically takes 24 hours.";
      else if (low.includes('bank') || low.includes('account')) reply = "You can manage your linked accounts in the 'Bank Accounts' section of your profile.";
      else if (low.includes('hello') || low.includes('hi')) reply = "Hi there! I'm the Nanopie AI assistant. How can I help your bakery today?";
      else if (low.includes('revenue')) reply = "Logging your revenue consistently helps improve your credit score for future funding!";
      
      setChats(p => [...p, { id: Date.now() + 1, sender: 'agent', text: reply, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }, 1200);
  };

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-foreground">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-normal">NP</div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-background rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-foreground font-normal tracking-tight text-sm leading-none">Nanopie Support</span>
          <span className="text-muted-foreground font-normal text-[10px]">Typically replies in 5m</span>
        </div>
      </div>
      <button className="w-8 h-8 flex items-center justify-center text-muted-foreground">
        <MoreVertical size={18} strokeWidth={1.5} />
      </button>
    </div>
  );

  return (
    <MobileLayout header={Header} showNav={false}>
      <div className="px-6 pt-6 pb-40 space-y-6">
        <div className="text-center mt-2">
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">Today</span>
        </div>
        {chats.map(c => (
          <div key={c.id} className={`flex flex-col ${c.sender === 'user' ? 'items-end' : 'items-start'} max-w-full`}>
            <div className={`px-5 py-3.5 max-w-[85%] text-[13px] font-medium leading-relaxed ${c.sender === 'user' ? 'bg-primary text-white rounded-3xl rounded-br-sm' : 'bg-card shadow-sm shadow-foreground/5 text-foreground rounded-[24px] rounded-tl-sm border border-border'}`}>
              {c.text}
            </div>
            <span className="text-[9px] text-muted-foreground mt-1.5 px-2">{c.time}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-background border-t border-border p-4 z-50">
        <div className="flex items-center gap-3 bg-card rounded-full p-2 pr-3 shadow-sm shadow-foreground/5">
          <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors rounded-full">
            <Paperclip size={20} strokeWidth={1.5} />
          </button>
          <input
            type="text"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Message support..."
            className="flex-1 bg-transparent border-none focus:outline-none text-[13px] font-medium text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={handleSend}
            disabled={!msg.trim()}
            className="w-10 h-10 flex items-center justify-center bg-secondary text-white rounded-full disabled:opacity-50 disabled:bg-muted-foreground transition-all active:scale-95"
          >
            <Send size={16} strokeWidth={1.5} className="ml-1" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}