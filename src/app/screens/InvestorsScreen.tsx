import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Search, ChevronDown } from 'lucide-react';
import { MobileLayout } from '../components/MobileLayout';

const investorsData = [
  { id: 1, name: "Aarav Patel", amount: 450, avatar: "https://loremflickr.com/150/150/indian,man?lock=1" },
  { id: 2, name: "Aditi Rao", amount: 320, avatar: "https://loremflickr.com/150/150/indian,woman?lock=1" },
  { id: 3, name: "Amit Shah", amount: 580, avatar: "https://loremflickr.com/150/150/indian,man?lock=2" },
  { id: 4, name: "Ananya Singh", amount: 210, avatar: "https://loremflickr.com/150/150/indian,woman?lock=2" },
  { id: 5, name: "Arjun Reddy", amount: 890, avatar: "https://loremflickr.com/150/150/indian,man?lock=3" },
  { id: 6, name: "Bhavna Joshi", amount: 150, avatar: "https://loremflickr.com/150/150/indian,woman?lock=3" },
  { id: 7, name: "Chetan Kumar", amount: 420, avatar: "https://loremflickr.com/150/150/indian,man?lock=4" },
  { id: 8, name: "Deepak Gupta", amount: 630, avatar: "https://loremflickr.com/150/150/indian,man?lock=5" },
];

export function InvestorsScreen() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  const filteredInvestors = investorsData
    .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'amt-desc') return b.amount - a.amount;
      if (sortBy === 'amt-asc') return a.amount - b.amount;
      return 0;
    });

  const Header = (
    <div className="flex items-center justify-between w-full">
      <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center text-[#16232B]">
        <ArrowLeft size={20} strokeWidth={1} />
      </button>
      <span className="text-[#16232B] font-medium tracking-tight text-sm">Investor Directory</span>
      <div className="w-8" />
    </div>
  );

  return (
    <MobileLayout header={Header}>
      <div className="px-6 pt-4 pb-32 flex flex-col gap-6">
        
        {/* Search and Sort */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16232B]/30" size={18} strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 shadow-sm border border-[#16232B]/5 outline-none text-[#16232B] text-sm focus:border-[#FF5B04] transition-colors"
            />
          </div>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-full bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-[#16232B]/5 outline-none text-[#16232B] text-[11px] font-bold uppercase tracking-widest appearance-none cursor-pointer pr-10"
            >
              <option value="name-asc">Sort A-Z</option>
              <option value="name-desc">Sort Z-A</option>
              <option value="amt-desc">Highest ₹</option>
              <option value="amt-asc">Lowest ₹</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#16232B]/40" size={12} strokeWidth={3} />
          </div>
        </div>

        {/* List */}
        <div className="bg-white rounded-[32px] shadow-sm border border-[#16232B]/5 overflow-hidden">
          {filteredInvestors.length > 0 ? (
            filteredInvestors.map((investor, idx) => (
              <div 
                key={investor.id} 
                className={`flex justify-between items-center p-5 ${idx !== filteredInvestors.length - 1 ? 'border-b border-[#16232B]/5' : ''} hover:bg-black/[0.01] transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#16232B]/10 shadow-sm">
                    <img src={investor.avatar} className="w-full h-full object-cover" alt={investor.name} />
                  </div>
                  <div>
                    <p className="text-base text-[#16232B] font-medium leading-tight">{investor.name}</p>
                    <p className="text-xs text-[#16232B]/40 mt-0.5">Investor #{investor.id}</p>
                  </div>
                </div>
                <p className="text-base font-semibold text-[#16232B]">₹{investor.amount}</p>
              </div>
            ))
          ) : (
            <div className="p-10 text-center text-[#16232B]/40 text-sm">No results found</div>
          )}
        </div>

      </div>
    </MobileLayout>
  );
}
