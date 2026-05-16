window.onerror = function(msg, url, lineNo, columnNo, error) {
  const d = document.createElement('div');
  d.style = "position:absolute;top:0;left:0;z-index:9999;background:red;color:white;padding:20px;font-size:16px;width:100%;";
  d.innerHTML = 'ERROR: ' + msg + '<br>Line: ' + lineNo;
  document.body.appendChild(d);
  return false;
};

// Lucide icons as SVG strings
const icons = {
  ArrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  ArrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  Home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  IndianRupee: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3c2.24 0 4-1.76 4-4s-1.76-4-4-4"/></svg>`,
  PieChart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  Bell: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  TrendingUp: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  Users: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Wallet: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>`,
  Sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  ArrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  MoreHorizontal: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
  Clock: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  CheckCircle2: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  Settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  Star: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  ShieldCheck: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  Store: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>`,
  Edit3: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  ChevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  LogOut: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  MessageCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`,
  User: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  MapPin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  Phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  Mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  Calendar: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  Plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  Check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  RefreshCw: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  Info: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  Send: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  ImageIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  ThumbsUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
  MessageSquare: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  Package: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  Wrench: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  Megaphone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  Percent: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  Gift: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  Camera: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  Paperclip: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  MoreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
  Lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  CreditCard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  Globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
  Moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  HelpCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  Shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  Search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  LogoIcon: `<img src="Logo.png?v=7" class="w-6 h-6 object-contain">`,
  Coins: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>`
};

// Global routing state
let routeHistory = [];
let currentScreenEl = null;

// Routing logic
function navigate(path) {
  window.location.hash = path;
}

function handleRoute() {
  const hash = window.location.hash || '#/';
  const appStack = document.getElementById('app');
  
  const isBack = routeHistory.length > 1 && routeHistory[routeHistory.length - 2] === hash;
  if (isBack) routeHistory.pop();
  else if (routeHistory[routeHistory.length - 1] !== hash) routeHistory.push(hash);

  const headerContainer = document.getElementById('app-header-container');
  const navContainer = document.getElementById('app-nav-container');

  const showShell = hash !== '#/' && hash !== '#/login' && hash !== '#/register';
  const showNav = ['#/dashboard', '#/revenue', '#/returns'].includes(hash);
  
  headerContainer.style.display = showShell ? 'block' : 'none';
  navContainer.style.display = showNav ? 'block' : 'none';

  if (showShell) {
    headerContainer.innerHTML = getHeaderHtml(hash);
  }
  if (showNav) {
    navContainer.innerHTML = getNavHtml(hash);
  }

  const getScreenHtml = (path) => {
    switch (path) {
      case '#/': return getOnboardingHtml();
      case '#/login': return getLoginHtml();
      case '#/register': return getRegistrationHtml();
      case '#/dashboard': return getDashboardHtml();
      case '#/active-funding': return getActiveFundingHtml();
      case '#/revenue': return getRevenueHtml();
      case '#/revenue-all': return getRevenueAllHtml();
      case '#/returns': return getReturnsHtml();
      case '#/investors': return getInvestorsHtml();
      case '#/updates': return getUpdatesHtml();
      case '#/profile': return getProfileHtml();
      case '#/settings': return getSettingsHtml();
      case '#/edit-profile': return getEditProfileHtml();
      case '#/bank-accounts': return getBankAccountsHtml();
      case '#/kyc': return getKycHtml();
      case '#/support': return getSupportHtml();
      case '#/create-request': return getCreateRequestHtml();
      default: return getDashboardHtml();
    }
  };

  const newScreenEl = document.createElement('div');
  newScreenEl.className = 'app-screen ' + (isBack ? 'screen-enter-back' : 'screen-enter');
  newScreenEl.innerHTML = getScreenHtml(hash);

  if (currentScreenEl) {
    currentScreenEl.className = 'app-screen ' + (isBack ? 'screen-exit-back' : 'screen-exit');
    const oldEl = currentScreenEl;
    setTimeout(() => { if(oldEl && oldEl.parentNode) oldEl.remove(); }, 400);
  }

  appStack.appendChild(newScreenEl);
  currentScreenEl = newScreenEl;

  // Cleanup classes after animation to prevent sticking
  setTimeout(() => {
    newScreenEl.classList.remove('screen-enter', 'screen-enter-back');
  }, 450);

  const attachListeners = (path, el) => {
    if (path === '#/') initOnboarding(el);
    if (path === '#/login') initLogin(el);
    if (path === '#/register') initRegistration(el);
    if (path === '#/dashboard') initDashboard(el);
    if (path === '#/active-funding') initActiveFunding(el);
    if (path === '#/revenue') initRevenue(el);
    if (path === '#/revenue-all') initRevenueAll(el);
    if (path === '#/returns') initReturns(el);
    if (path === '#/investors') initInvestors(el);
    if (path === '#/updates') initUpdates(el);
    if (path === '#/create-request') initCreateRequest(el);
  };

  attachListeners(hash, newScreenEl);
}

window.addEventListener('hashchange', handleRoute);

// Global UI helpers
function showToast(msg, isError = false) {
  const t = document.createElement('div');
  t.className = `absolute rounded-3xl text-sm font-normal text-white px-6 py-4 shadow-xl z-50 fade-in`;
  t.style.top = '20px'; t.style.left = '50%'; t.style.transform = 'translate(-50%, 0)';
  t.style.backgroundColor = isError ? '#ef4444' : '#22c55e';
  t.innerText = msg;
  document.querySelector('.device-wrapper').appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 2000);
}

function showModal(title, msg) {
  const m = document.createElement('div');
  m.className = `absolute inset-0 z-[2000] flex items-center justify-center p-6 fade-in`;
  m.innerHTML = `
    <div class="absolute inset-0 bg-dark bg-opacity-60 backdrop-blur-sm"></div>
    <div class="bg-white rounded-[40px] p-8 w-full max-w-[320px] shadow-2xl relative z-10 flex flex-col gap-4">
      <h3 class="text-xl text-foreground font-medium">${title}</h3>
      <p class="text-sm text-muted leading-relaxed">${msg}</p>
      <button onclick="this.closest('.fade-in').remove()" class="w-full bg-secondary text-white py-4 rounded-2xl text-sm uppercase tracking-widest mt-2 transition-transform active:scale-95">Got it</button>
    </div>
  `;
  document.querySelector('.device-wrapper').appendChild(m);
}

window.showPolicy = () => {
  showModal('Auto-Debit Policy', 'To ensure investor trust, returns are due by the 30th of each month. If not paid manually by then, the system will automatically process the distribution from your linked account.');
};

// Persistent Components HTML Generators
function getHeaderHtml(path) {
  const titles = {
    '#/dashboard': 'Hello!',
    '#/active-funding': 'Campaign Tracker',
    '#/updates': 'Investor Feed',
    '#/revenue': 'Revenue Tracker',
    '#/revenue-all': 'Revenue Tracker',
    '#/returns': 'Returns & Distributions',
    '#/investors': 'Investor Directory',
    '#/profile': 'Merchant Account',
    '#/settings': 'Settings',
    '#/edit-profile': 'Edit Profile',
    '#/bank-accounts': 'Bank Accounts',
    '#/kyc': 'KYC Status',
    '#/support': 'Nanopie Support',
    '#/create-request': 'Request Funding'
  };
  
  let leftBtn = `<button class="header-btn" onclick="window.history.back()">${icons.ArrowLeft}</button>`;
  let rightBtn = `<div style="width:20px"></div>`;
  
  if (path === '#/dashboard') {
    leftBtn = `<div class="flex items-center gap-4"><div class="text-primary">${icons.LogoIcon}</div><span class="header-title">Hello!</span></div>`;
    rightBtn = `
      <div class="flex items-center bg-white rounded-full p-1 border-b">
        <button onclick="navigate('#/updates')" class="relative w-8 h-8 flex items-center justify-center text-foreground">
          ${icons.Bell}
          <span class="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full border border-white"></span>
        </button>
        <button onclick="navigate('#/profile')" class="w-8 h-8 rounded-full overflow-hidden border-b">
          <img src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100" class="w-full h-full object-cover">
        </button>
      </div>`;
    return `<div class="app-header justify-between">${leftBtn}${rightBtn}</div>`;
  }
  
  if (path === '#/profile') {
    rightBtn = `<button class="header-btn text-primary" onclick="navigate('#/settings')">${icons.Settings}</button>`;
  } else if (['#/active-funding', '#/support'].includes(path)) {
    rightBtn = `<button class="header-btn text-muted">${icons.MoreHorizontal}</button>`;
  }
  
  if (path === '#/support') {
    leftBtn = `
      <div class="flex items-center gap-3">
        <button class="header-btn" onclick="window.history.back()">${icons.ArrowLeft}</button>
        <div class="w-8 h-8 bg-secondary rounded-full text-white flex items-center justify-center text-xs">NP</div>
        <div class="flex flex-col items-start"><span class="header-title">Nanopie Support</span><span class="text-xs text-muted">Typically replies in 5m</span></div>
      </div>
    `;
    return `<div class="app-header justify-between">${leftBtn}${rightBtn}</div>`;
  }
  
  return `<div class="app-header justify-between">${leftBtn}<span class="header-title">${titles[path] || ''}</span>${rightBtn}</div>`;
}

function getNavHtml(path) {
  return `
    <nav class="bottom-nav">
      <div class="nav-item ${path==='#/dashboard'?'active':''}" onclick="navigate('#/dashboard')">
        <div class="nav-active-bg"></div>${icons.Home}
      </div>
      <div class="nav-item ${path==='#/revenue'?'active':''}" onclick="navigate('#/revenue')">
        <div class="nav-active-bg"></div>${icons.IndianRupee}
      </div>
      <div class="nav-item ${path==='#/returns'?'active':''}" onclick="navigate('#/returns')">
        <div class="nav-active-bg"></div>${icons.PieChart}
      </div>
    </nav>
  `;
}

// Individual Screen Logic
function getOnboardingHtml() {
  return `
    <div class="h-full flex flex-col relative overflow-hidden" id="onboarding-root" style="background:#16232B;font-family:'Outfit',sans-serif;">
      <!-- Skip -->
      <button id="ob-skip" onclick="navigate('#/login')" class="absolute top-6 right-6 z-30 text-[10px] font-bold tracking-[0.2em] uppercase" style="color:rgba(228,238,240,0.4)">SKIP</button>
      <!-- Logo -->
      <div id="ob-logo-container" class="absolute top-6 left-6 z-30" style="display:none">
        <img src="Logo.png?v=7" style="height:32px;width:auto;filter:brightness(0) invert(1);">
      </div>
      <!-- Illustration Area -->
      <div class="flex-1 relative overflow-hidden flex items-center justify-center" id="ob-illustration">
      </div>
      <!-- Bottom content -->
      <div class="relative z-20 px-6 pb-8" id="ob-content"></div>
    </div>
  `;
}

function initOnboarding(el) {
  const slides = [
    {
      badge: 'WELCOME',
      headline: 'Your bakery,\nbacked by\nbelievers.',
      sub: 'Nanopie connects small food businesses with micro-investors who believe in your craft.',
      bg: '#16232B',
      accent: '#FF5B04',
      textColor: '#E4EEF0',
      illustrationFn: drawGrowthIllustration,
      logoFilter: 'brightness(0) invert(1)',
    },
    {
      badge: 'FUNDING',
      headline: 'Raise capital\nwithout the\nbank drama.',
      sub: 'Create a funding request in minutes. Your community funds your next batch.',
      bg: '#075056',
      accent: '#FF5B04',
      textColor: '#E4EEF0',
      illustrationFn: drawFundIllustration,
      logoFilter: 'brightness(0) invert(1)',
    },
    {
      badge: 'REVENUE',
      headline: 'Log daily sales.\nWatch your\nnumbers grow.',
      sub: 'Track every rupee you earn. Keep your investors updated with real-time performance.',
      bg: '#E4EEF0',
      accent: '#075056',
      textColor: '#16232B',
      illustrationFn: drawChartIllustration,
      logoFilter: 'none',
    },
    {
      badge: 'RETURNS',
      headline: 'Share the\nprofit. Keep\nthe loyalty.',
      sub: 'Distribute returns to investors with one tap. Build trust that compounds like interest.',
      bg: '#0A3D2E',
      accent: '#FF5B04',
      textColor: '#E4EEF0',
      illustrationFn: drawReturnsIllustration,
      logoFilter: 'brightness(0) invert(1)',
    },
  ];

  let current = 0;
  let splashDone = false;

  function drawGrowthIllustration(container) {
    container.innerHTML = `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:16px;">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(255,91,4,0.15)" stroke-width="18"/>
          <circle cx="70" cy="70" r="55" fill="none" stroke="#FF5B04" stroke-width="18"
            stroke-dasharray="208 346" stroke-dashoffset="86" stroke-linecap="round"
            style="transition:stroke-dasharray 1.5s ease"/>
          <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(228,238,240,0.15)" stroke-width="18"
            stroke-dasharray="104 346" stroke-dashoffset="-122" stroke-linecap="round"/>
          <text x="70" y="67" text-anchor="middle" font-size="22" font-weight="700" fill="#E4EEF0" font-family="Outfit,sans-serif">₹1.2L</text>
          <text x="70" y="84" text-anchor="middle" font-size="9" fill="rgba(228,238,240,0.5)" font-family="Outfit,sans-serif" letter-spacing="2">FUNDED</text>
        </svg>
        <div style="display:flex;gap:32px;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:28px;font-weight:700;color:white;">48</span>
            <span style="font-size:8px;letter-spacing:2px;color:rgba(255,255,255,0.4);">INVESTORS</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
            <span style="font-size:28px;font-weight:700;color:#FF5B04;">+12%</span>
            <span style="font-size:8px;letter-spacing:2px;color:rgba(255,255,255,0.4);">GROWTH</span>
          </div>
        </div>
      </div>`;
  }

  function drawFundIllustration(container) {
    container.innerHTML = `
      <div style="position:relative;width:220px;height:220px;">
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          <div style="width:80px;height:80px;border-radius:24px;background:#FF5B04;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 60px rgba(255,91,4,0.4);">
            <span style="font-size:38px;color:white;font-family:'Outfit',sans-serif;font-weight:300;line-height:1;">₹</span>
          </div>
        </div>
        ${[
          {t:'0%',l:'50%',tx:'-50%,-50%',a:'Priya',v:'₹5k'},
          {t:'50%',l:'100%',tx:'-50%,-50%',a:'Raj',v:'₹2k'},
          {t:'100%',l:'50%',tx:'-50%,-50%',a:'Meera',v:'₹8k'},
          {t:'50%',l:'0%',tx:'-50%,-50%',a:'Arjun',v:'₹3k'},
        ].map(p=>`
          <div style="position:absolute;top:${p.t};left:${p.l};transform:translate(${p.tx});display:flex;flex-direction:column;align-items:center;gap:4px;">
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:8px 12px;display:flex;flex-direction:column;align-items:center;">
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:12px;color:white;font-weight:700;margin-bottom:4px;">${p.a[0]}</div>
              <span style="color:white;font-size:12px;font-weight:700;">${p.v}</span>
            </div>
          </div>`).join('')}
      </div>`;
  }

  function drawChartIllustration(container) {
    const bars = [35,55,45,70,60,85,75];
    const days = ['M','T','W','T','F','S','S'];
    container.innerHTML = `
      <div style="width:100%;max-width:260px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:baseline;gap:8px;">
          <span style="font-size:40px;font-weight:700;color:#16232B;letter-spacing:-2px;">₹31,600</span>
          <span style="font-size:12px;font-weight:700;color:#075056;">+8%</span>
        </div>
        <span style="font-size:9px;letter-spacing:3px;color:rgba(22,35,43,0.4);text-transform:uppercase;">THIS WEEK</span>
        <div style="display:flex;align-items:flex-end;gap:8px;height:96px;">
          ${bars.map((h,i)=>`
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end;">
              <div style="width:100%;border-radius:8px;height:${h}%;background:${i===5?'#FF5B04':'rgba(7,80,86,0.12)'};transition:height 0.6s ease;"></div>
              <span style="font-size:8px;font-weight:700;color:rgba(22,35,43,0.4);">${days[i]}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  function drawReturnsIllustration(container) {
    container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:24px;">
        <div style="width:120px;height:120px;border-radius:50%;background:#FF5B04;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 20px 60px rgba(255,91,4,0.3);">
          <span style="font-size:28px;font-weight:700;color:white;">₹8.4K</span>
          <span style="font-size:8px;letter-spacing:3px;color:rgba(255,255,255,0.7);margin-top:4px;">RETURNS</span>
        </div>
        <div style="display:flex;gap:12px;">
          ${[{a:'A',v:'₹520'},{a:'R',v:'₹260'},{a:'D',v:'₹180'}].map(inv=>`
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
              <div style="width:56px;height:56px;border-radius:16px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;">
                <span style="color:#E4EEF0;font-size:20px;font-weight:700;">${inv.a}</span>
              </div>
              <span style="font-size:10px;font-weight:700;color:rgba(228,238,240,0.5);">${inv.v}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  function render() {
    const s = slides[current];
    const root = el.querySelector('#onboarding-root');
    const illustrationEl = el.querySelector('#ob-illustration');
    const contentEl = el.querySelector('#ob-content');
    const skipBtn = el.querySelector('#ob-skip');
    const logoContainer = el.querySelector('#ob-logo-container');
    const logoImg = logoContainer?.querySelector('img');
    const isLast = current === slides.length - 1;

    if (logoContainer) logoContainer.style.display = 'block';

    // Animate background
    root.style.background = s.bg;
    root.style.transition = 'background 0.5s ease';

    // Skip button
    if (skipBtn) {
      skipBtn.style.display = isLast ? 'none' : 'block';
      skipBtn.style.color = `${s.textColor}60`;
    }
    if (logoImg) {
      logoImg.style.filter = s.logoFilter;
    }

    // Draw illustration
    illustrationEl.style.opacity = '0';
    illustrationEl.style.transform = 'translateY(16px)';
    illustrationEl.style.transition = 'none';
    setTimeout(() => {
      s.illustrationFn(illustrationEl);
      illustrationEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      illustrationEl.style.opacity = '1';
      illustrationEl.style.transform = 'translateY(0)';
    }, 50);

    // Draw content
    contentEl.style.opacity = '0';
    contentEl.style.transform = 'translateY(24px)';
    contentEl.style.transition = 'none';
    contentEl.innerHTML = `
      <div style="margin-bottom:20px;">
        <div style="display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:6px 12px;margin-bottom:20px;background:${s.accent}22;border:1px solid ${s.accent}33;">
          ${current === slides.length - 1 ? `<span style="width:6px;height:6px;border-radius:50%;background:${s.accent};display:inline-block;"></span>` : ''}
          <span style="font-size:9px;font-weight:700;letter-spacing:4px;color:${s.accent};">${s.badge}</span>
        </div>
        <h1 style="font-size:36px;font-weight:400;line-height:1.1;letter-spacing:-1px;color:${s.textColor};margin-bottom:16px;white-space:pre-line;">${s.headline}</h1>
        <p style="font-size:14px;font-weight:300;line-height:1.7;color:${s.textColor};opacity:0.6;max-width:260px;">${s.sub}</p>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:6px;" id="ob-dots"></div>
        <button id="ob-next" style="display:flex;align-items:center;gap:12px;padding:14px 20px 14px 24px;border-radius:999px;font-weight:700;font-size:14px;background:${s.accent};color:#fff;border:none;cursor:pointer;box-shadow:0 16px 40px ${s.accent}40;font-family:inherit;letter-spacing:0.01em;">
          ${isLast ? 'Get Started' : 'Next'}
          <span style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </button>
      </div>
    `;

    // Render dots
    const dotsContainer = contentEl.querySelector('#ob-dots');
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.style.cssText = `width:${i===current?24:6}px;height:6px;border-radius:999px;background:${s.accent};opacity:${i===current?1:0.3};border:none;cursor:pointer;transition:all 0.3s ease;padding:0;`;
      dot.onclick = () => { current = i; render(); };
      dotsContainer.appendChild(dot);
    });

    // Animate content in
    setTimeout(() => {
      contentEl.style.transition = 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s';
      contentEl.style.opacity = '1';
      contentEl.style.transform = 'translateY(0)';
    }, 60);

    // Next button
    const nextBtn = contentEl.querySelector('#ob-next');
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (current < slides.length - 1) {
          current++;
          render();
        } else {
          window._skipLoginSplash = true;
          navigate('#/login');
        }
      };
    }

    // Swipe
    let startX = null;
    root.ontouchstart = e => { startX = e.touches[0].clientX; };
    root.ontouchend = e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        if (dx < 0 && current < slides.length - 1) { current++; render(); }
        if (dx > 0 && current > 0) { current--; render(); }
      }
      startX = null;
    };
  }

  function runSplash() {
    const root = el.querySelector('#onboarding-root');
    const illustrationEl = el.querySelector('#ob-illustration');
    const contentEl = el.querySelector('#ob-content');
    const skipBtn = el.querySelector('#ob-skip');
    if (skipBtn) skipBtn.style.display = 'none';
    root.style.background = '#16232B';
    illustrationEl.innerHTML = `<img src="Logo.png?v=7" id="splash-logo" style="height:64px;width:auto;filter:brightness(0) invert(1);opacity:0;transition:opacity 0.6s ease;">`;
    contentEl.innerHTML = '';
    setTimeout(() => { const l = el.querySelector('#splash-logo'); if(l) l.style.opacity='1'; }, 100);
    setTimeout(() => { splashDone = true; render(); }, 2200);
  }

  runSplash();
}

function getLoginHtml() {
  return `
    <div class="h-full flex flex-col relative transition-colors duration-500" style="background:#16232B;" id="login-container">
      <div class="flex-1 flex flex-col px-6 pt-16 pb-6 relative" id="login-content">
        <!-- Login Steps injected here -->
      </div>
      <footer class="pb-10 pt-2 text-center" id="login-footer" style="display:none;">
        <p class="text-[9px] font-black text-foreground opacity-30 uppercase tracking-[0.3em] leading-loose">SMALL BITES, BIG GROWTH.<br>THAT’S THE NANOPIE WAY. 🥧</p>
      </footer>
    </div>
  `;
}

function initLogin(el) {
  const content = el.querySelector('#login-content');
  let phoneValue = '';
  const skipSplash = window._skipLoginSplash === true;
  window._skipLoginSplash = false;

  function renderStep0() {
    content.innerHTML = `
      <div class="absolute inset-0 flex items-center justify-center fade-in">
        <img src="Logo.png?v=hq" style="width: 64px; height: 64px; object-fit: contain; filter: brightness(0) invert(1);">
      </div>
    `;
    setTimeout(() => {
        document.getElementById('login-container').style.background = '#E4EEF0';
        document.getElementById('login-footer').style.display = 'block';
        renderStep1();
    }, 2000);
  }

  function renderStep1() {
    content.innerHTML = `
      <div class="mb-12 fade-in" style="animation-delay: 0.1s;">
        <img src="Logo.png?v=hq" style="width: 96px; height: 96px; object-fit: contain;">
      </div>
      <div class="flex-1 flex flex-col fade-in" style="animation-delay: 0.2s;">
        <div class="mb-16">
          <h1 class="text-[44px] font-normal text-foreground leading-[1.1] tracking-tight">Scale your<br><span class="text-secondary">local dream.</span></h1>
          <p class="text-[16px] text-muted mt-6 leading-relaxed font-light" style="max-width:240px">The micro-investment platform<br>for ambitious vendors.</p>
        </div>
        <form id="phoneForm" class="bg-secondary rounded-3xl p-6 shadow-card relative z-10">
          <div class="mb-8">
            <label class="text-[10px] text-white opacity-50 uppercase tracking-widest">Partner Phone</label>
            <div class="flex items-center mt-2">
              <span class="text-3xl text-white font-light pr-3 py-4 border-b border-white border-opacity-10">+91</span>
              <input type="tel" id="phoneInput" placeholder="00000 00000" class="input-field font-light text-3xl" autofocus>
            </div>
          </div>
          <button type="submit" id="phoneSubmitBtn" class="w-full py-5 rounded-xl text-[15px] flex items-center justify-center gap-2 font-medium transition-colors" style="background: #8CA3A5; color: #075056; pointer-events: none;">Send OTP ${icons.ArrowRight}</button>
        </form>
        <div class="mt-10 flex items-center justify-center gap-4 w-full opacity-40">
           <div class="flex-1 h-[1px] bg-foreground opacity-20"></div>
           <span class="text-[9px] text-muted uppercase tracking-[0.2em]">Verification</span>
           <div class="flex-1 h-[1px] bg-foreground opacity-20"></div>
        </div>
      </div>
    `;
    const inp = content.querySelector('#phoneInput');
    const btn = content.querySelector('#phoneSubmitBtn');
    inp.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').slice(0, 10);
        e.target.value = val;
        phoneValue = val;
        if (val.length === 10) {
            btn.style.background = '#FF5B04';
            btn.style.color = 'white';
            btn.style.pointerEvents = 'auto';
        } else {
            btn.style.background = '#8CA3A5';
            btn.style.color = '#075056';
            btn.style.pointerEvents = 'none';
        }
    });
    content.querySelector('#phoneForm').addEventListener('submit', e => {
      e.preventDefault();
      renderStep2();
    });
  }

  window._renderStep1 = renderStep1;
  window._resendOTP = function(phone) {
    const container = document.getElementById('login-container');
    const msg = document.createElement('div');
    msg.innerHTML = 'OTP RESENT TO +91 ' + phone;
    msg.className = 'fade-in';
    msg.style = "position:absolute; bottom:40px; left:0; right:0; margin: 0 auto; width: fit-content; background:#FF5B04; color:white; padding:14px 28px; border-radius:12px; font-size:12px; font-weight:600; letter-spacing:0.05em; z-index:1000; box-shadow:0 15px 30px rgba(255,91,4,0.3); text-align:center;";
    container.appendChild(msg);
    setTimeout(() => {
        msg.style.opacity = '0';
        msg.style.transform = 'translateY(10px)';
        setTimeout(() => msg.remove(), 500);
    }, 2500);
  };

  function renderStep2() {
    content.innerHTML = `
        <div onclick="window._renderStep1()" class="absolute top-8 right-8 flex items-center gap-1.5 text-primary active:opacity-60 transition-opacity z-50 cursor-pointer font-bold text-[11px] tracking-[0.15em]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          BACK
        </div>
        <div class="mb-12 fade-in">
          <img src="Logo.png?v=hq" style="width: 96px; height: 96px; object-fit: contain;">
        </div>
        <div class="flex-1 flex flex-col fade-in">
          <div class="mb-16">
            <h1 class="text-[44px] font-normal text-foreground leading-[1.1] tracking-tight">Verify your<br><span class="text-secondary">number.</span></h1>
            <p class="text-[16px] text-muted mt-6 leading-relaxed font-light" style="max-width:240px">We've sent a 4-digit code to<br><span class="font-medium text-foreground">+91 ${phoneValue}</span></p>
          </div>
          <form id="otpForm" class="bg-secondary rounded-3xl p-6 shadow-card relative z-10">
            <div class="mb-8">
              <label class="text-[10px] text-white opacity-50 uppercase tracking-widest block mb-2">Secure OTP</label>
              <input type="tel" id="otpInput" placeholder="• • • •" class="w-full bg-transparent border-none border-b border-white border-opacity-10 py-4 text-center text-4xl text-white outline-none focus:border-primary transition-all tracking-[0.5em]" autofocus>
            </div>
            <button type="submit" id="otpSubmitBtn" class="w-full py-5 rounded-xl text-sm flex items-center justify-center gap-2 font-medium transition-colors" style="background: rgba(228, 238, 240, 0.4); color: #075056; pointer-events: none;">Verify & Proceed ${icons.ArrowRight}</button>
          </form>
          <div class="mt-10 text-center w-full">
             <span class="text-[10px] text-muted uppercase tracking-[0.1em] opacity-60">Didn't receive it? <button type="button" onclick="window._resendOTP('${phoneValue}')" class="bg-transparent border-none p-0 m-0 text-primary font-bold underline underline-offset-8 decoration-primary opacity-100 hover:text-secondary transition-colors cursor-pointer" style="font-family: inherit; letter-spacing: 0.1em;">RESEND CODE</button></span>
          </div>
        </div>
      `;
    const inp = content.querySelector('#otpInput');
    const btn = content.querySelector('#otpSubmitBtn');
    inp.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').slice(0, 4);
        e.target.value = val;
        if (val.length === 4) {
            btn.style.background = '#FF5B04';
            btn.style.color = 'white';
            btn.style.pointerEvents = 'auto';
        } else {
            btn.style.background = 'rgba(228, 238, 240, 0.4)';
            btn.style.color = '#075056';
            btn.style.pointerEvents = 'none';
        }
    });
    content.querySelector('#otpForm').addEventListener('submit', e => {
      e.preventDefault();
      navigate('#/register');
    });
  }

  if (skipSplash) {
    document.getElementById('login-container').style.background = '#E4EEF0';
    document.getElementById('login-footer').style.display = 'block';
    renderStep1();
  } else {
    renderStep0();
  }
}

function getRegistrationHtml() {
  return `
    <div class="h-full flex flex-col max-w-md mx-auto relative overflow-hidden bg-[#075056] text-white transition-colors duration-500" id="reg-container" style="font-family:'Outfit',sans-serif;">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 pt-12 pb-4" id="reg-header">
        <button id="reg-back" class="p-2 -ml-2 text-white/70 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="text-xs font-bold tracking-[0.2em] text-white/50 uppercase" id="reg-step-text">Step 1 of 4</span>
        <div class="w-9"></div>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col px-6 overflow-y-auto pb-24 hide-scrollbar relative" id="reg-content">
        <!-- Steps injected here -->
      </div>

      <!-- Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#075056] via-[#075056] to-transparent z-40">
        <button id="reg-next" class="w-full py-5 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] bg-[#FF5B04] text-white shadow-xl shadow-[#FF5B04]/20">
          <span id="reg-btn-text">Next Step</span>
          <svg id="reg-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;
}

function initRegistration(el) {
  let step = 0;
  const content = el.querySelector('#reg-content');
  const nextBtn = el.querySelector('#reg-next');
  const backBtn = el.querySelector('#reg-back');
  const stepText = el.querySelector('#reg-step-text');
  const btnText = el.querySelector('#reg-btn-text');
  const btnIcon = el.querySelector('#reg-btn-icon');
  const header = el.querySelector('#reg-header');

  let bankSearchStr = '';
  let selectedBank = null;
  const banks = [
    { name: 'HDFC Bank', logo: 'H' },
    { name: 'State Bank of India', logo: 'S' },
    { name: 'ICICI Bank', logo: 'I' },
    { name: 'Axis Bank', logo: 'A' },
    { name: 'Kotak Mahindra', logo: 'K' },
    { name: 'Punjab National Bank', logo: 'P' },
  ];

  let uploadedId = false;
  let uploadedProof = false;

  const indicatorsHtml = (s) => `
    <div class="flex items-center gap-2 mb-10 w-full">
      ${[0,1,2,3].map(i => `
        <div class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20">
          <div class="h-full bg-[#FF5B04] transition-all duration-300" style="width: ${i <= s ? '100%' : '0%'}"></div>
        </div>
      `).join('')}
    </div>
  `;

  function renderStep() {
    // Header updates
    if (step < 4) {
      header.style.display = 'flex';
      stepText.innerText = `Step ${step + 1} of 4`;
      btnText.innerText = 'Next Step';
      btnIcon.style.display = 'block';
    } else {
      header.style.display = 'none';
      btnText.innerText = 'Continue to Dashboard';
      btnIcon.style.display = 'none';
    }

    let html = '';
    if (step === 0) {
      html = `
        <div class="flex flex-col gap-8 pt-4 fade-in active">
          ${indicatorsHtml(step)}
          <div>
            <h1 class="text-4xl font-normal leading-[1.1] tracking-tight mb-3">Let's get to know <span class="text-[#FF5B04]">your business.</span></h1>
            <p class="text-white/60 text-sm font-light leading-relaxed">Basic details to help investors find you.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Full Name</label><input type="text" placeholder="e.g. Suresh Kumar" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Name</label><input type="text" placeholder="e.g. Suresh Artisan Bakery" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Type</label>
              <div class="relative">
                <select class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected class="text-black">Select Category</option><option value="bakery" class="text-black">Bakery & Sweets</option><option value="cafe" class="text-black">Cafe / QSR</option><option value="restaurant" class="text-black">Restaurant</option><option value="grocery" class="text-black">Grocery / Kirana</option>
                </select>
                <div class="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>
              </div>
            </div>
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Location</label><input type="text" placeholder="City + Area" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
          </div>
        </div>
      `;
      content.innerHTML = html;
    } else if (step === 1) {
      html = `
        <div class="flex flex-col gap-8 pt-4 fade-in active">
          ${indicatorsHtml(step)}
          <div>
            <h1 class="text-4xl font-normal leading-[1.1] tracking-tight mb-3">Build <span class="text-[#FF5B04]">trust</span> with investors.</h1>
            <p class="text-white/60 text-sm font-light leading-relaxed">Tell the community about your journey.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Short Description</label><textarea placeholder="What do you make? What makes it special?" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30 min-h-[120px] resize-none"></textarea></div>
            <div class="flex gap-4">
              <div class="space-y-2 flex-1"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Years in Op.</label><input type="number" placeholder="3" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white text-center focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
              <div class="space-y-2 flex-[2]"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Monthly Revenue</label>
                <div class="relative">
                  <select class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected class="text-black">Select Range</option><option value="0-50k" class="text-black">Under ₹50k</option><option value="50k-2l" class="text-black">₹50k - ₹2L</option><option value="2l-5l" class="text-black">₹2L - ₹5L</option><option value="5l+" class="text-black">₹5L+</option>
                  </select>
                  <div class="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      content.innerHTML = html;
    } else if (step === 2) {
      function renderBankUI() {
        const bankContainer = el.querySelector('#bank-container');
        if (!bankContainer) return;
        
        if (!selectedBank) {
          const filtered = banks.filter(b => b.name.toLowerCase().includes(bankSearchStr.toLowerCase()));
          bankContainer.innerHTML = `
            <div class="relative">
              <div class="absolute left-5 top-1/2 -translate-y-1/2 text-white/40"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
              <input type="text" id="bank-search" placeholder="Search for your bank..." value="${bankSearchStr}" class="w-full bg-white/10 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" />
              <div class="absolute top-full mt-2 left-0 right-0 bg-[#16232B] rounded-2xl shadow-xl shadow-black/20 border border-white/5 overflow-hidden z-50 ${bankSearchStr ? 'block' : 'hidden'}">
                ${filtered.slice(0, 4).map((b, i) => `
                  <button class="bank-item w-full flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-none" data-idx="${i}">
                    <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-[#FF5B04]">${b.logo}</div>
                    <span class="text-sm font-medium text-white">${b.name}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `;

          const searchInp = el.querySelector('#bank-search');
          searchInp.oninput = (e) => {
            bankSearchStr = e.target.value;
            renderBankUI();
            const newInp = el.querySelector('#bank-search');
            newInp.focus();
          };

          el.querySelectorAll('.bank-item').forEach(btn => {
            btn.onclick = () => {
              selectedBank = filtered[parseInt(btn.getAttribute('data-idx'))];
              renderBankUI();
            };
          });
        } else {
          bankContainer.innerHTML = `
            <div class="w-full bg-white/10 border border-[#FF5B04]/30 rounded-2xl px-5 py-3 flex items-center justify-between group">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-[#FF5B04]">${selectedBank.logo}</div>
                <span class="text-base font-medium text-white">${selectedBank.name}</span>
              </div>
              <button id="change-bank" class="text-[10px] uppercase tracking-wider font-bold text-white/40 group-hover:text-[#FF5B04] transition-colors">CHANGE</button>
            </div>
          `;
          el.querySelector('#change-bank').onclick = () => {
            selectedBank = null;
            bankSearchStr = '';
            renderBankUI();
          };
        }
      }

      html = `
        <div class="flex flex-col gap-8 pt-4 fade-in active">
          ${indicatorsHtml(step)}
          <div>
            <h1 class="text-4xl font-normal leading-[1.1] tracking-tight mb-3">Where should we <span class="text-[#FF5B04]">send funds?</span></h1>
            <p class="text-white/60 text-sm font-light leading-relaxed">Secure financial setup for receiving investments.</p>
          </div>
          <div class="space-y-5">
            <div class="space-y-2 relative z-50">
              <label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Select Bank</label>
              <div id="bank-container"></div>
            </div>
            <div class="flex gap-4">
              <div class="space-y-2 flex-[2]"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Account Number</label><input type="text" placeholder="0000 0000" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
              <div class="space-y-2 flex-1"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">IFSC Code</label><input type="text" placeholder="IFSC" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
            </div>
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">UPI ID</label><input type="text" placeholder="yourbusiness@upi" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30" /></div>
            <div class="space-y-2"><label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">PAN / GST</label><input type="text" placeholder="ABCDE1234F" class="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#FF5B04] transition-all placeholder:text-white/30 uppercase" /></div>
          </div>
        </div>
      `;
      content.innerHTML = html;
      renderBankUI();
    } else if (step === 3) {
      function renderUploads() {
        const idBtn = el.querySelector('#upload-id');
        const proofBtn = el.querySelector('#upload-proof');
        
        if (idBtn) {
          idBtn.className = `w-full h-32 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all ${uploadedId ? 'border-[#FF5B04] bg-[#FF5B04]/10' : 'border-white/20 bg-white/5 hover:border-white/40'}`;
          idBtn.innerHTML = uploadedId 
            ? `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF5B04" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg><span class="text-sm font-medium text-white">id_document_scan.pdf</span>`
            : `<div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg></div><span class="text-xs font-medium text-white/50">Tap to upload PDF or Image</span>`;
        }

        if (proofBtn) {
          proofBtn.className = `w-full h-32 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all ${uploadedProof ? 'border-[#FF5B04] bg-[#FF5B04]/10' : 'border-white/20 bg-white/5 hover:border-white/40'}`;
          proofBtn.innerHTML = uploadedProof
            ? `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF5B04" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg><span class="text-sm font-medium text-white">shop_front_license.jpg</span>`
            : `<div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg></div><span class="text-xs font-medium text-white/50">Tap to upload PDF or Image</span>`;
        }
      }

      html = `
        <div class="flex flex-col gap-8 pt-4 fade-in active">
          ${indicatorsHtml(step)}
          <div>
            <h1 class="text-4xl font-normal leading-[1.1] tracking-tight mb-3">Final step: <span class="text-[#FF5B04]">Verification.</span></h1>
            <p class="text-white/60 text-sm font-light leading-relaxed">We need to verify your identity to comply with regulations.</p>
          </div>
          <div class="space-y-6">
            <div class="space-y-3">
              <label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">ID Proof (Aadhaar / PAN)</label>
              <button id="upload-id"></button>
            </div>
            <div class="space-y-3">
              <label class="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-1">Business Proof (License / Shop Image)</label>
              <button id="upload-proof"></button>
            </div>
          </div>
        </div>
      `;
      content.innerHTML = html;
      renderUploads();
      
      el.querySelector('#upload-id').onclick = () => { showToast('Simulated File Upload'); uploadedId = true; renderUploads(); };
      el.querySelector('#upload-proof').onclick = () => { showToast('Simulated File Upload'); uploadedProof = true; renderUploads(); };

    } else if (step === 4) {
      html = `
        <div class="flex-1 flex flex-col items-center justify-center pt-20 text-center gap-6 fade-in active">
          <div class="relative w-32 h-32 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
            <div class="absolute inset-2 rounded-full border border-white/20 animate-[spin_8s_linear_infinite_reverse]"></div>
            <div class="absolute inset-4 rounded-full border border-[#FF5B04]/50 animate-[spin_6s_linear_infinite]"></div>
            <div class="w-16 h-16 rounded-full bg-[#FF5B04] flex items-center justify-center shadow-xl shadow-[#FF5B04]/30">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
          </div>
          <div>
            <h1 class="text-3xl font-normal leading-[1.1] tracking-tight mb-4">Under <span class="text-[#FF5B04]">Review.</span></h1>
            <p class="text-white/60 text-sm font-light leading-relaxed max-w-[280px] mx-auto">We're verifying your details. This usually takes less than 24 hours. You can explore the dashboard in the meantime.</p>
          </div>
        </div>
      `;
      content.innerHTML = html;
    }
  }

  nextBtn.onclick = () => {
    if (step < 4) {
      step++;
      renderStep();
    } else {
      navigate('#/dashboard');
    }
  };

  backBtn.onclick = () => {
    if (step > 0) {
      step--;
      renderStep();
    } else {
      navigate('#/login');
    }
  };

  renderStep();
}

function getDashboardHtml() {
  return `
    <div class="px-6 pt-6 pb-safe-extra flex flex-col gap-6 fade-in">
      <div>
        <p class="text-xs text-secondary tracking-widest uppercase mb-1">Merchant Partner</p>
        <h1 class="text-3xl text-foreground tracking-tight">Artisan Bakery</h1>
      </div>
      
      <div class="stat-card">
        <div class="flex justify-between items-center mb-6">
          <span class="text-xs text-white opacity-70 tracking-widest uppercase">Active Funding</span>
          <div class="flex items-center gap-1 text-primary">${icons.TrendingUp}<span class="text-xs">+12.4%</span></div>
        </div>
        <p class="text-4xl tracking-tight mb-2">₹1,24,500</p>
        <div class="flex gap-8 pt-2 border-t border-white border-opacity-10 mt-2">
          <div>
            <div class="flex items-center gap-2 text-white opacity-70 mb-1">${icons.Users}<span class="text-xs tracking-wider uppercase">Investors</span></div>
            <p class="text-lg">48</p>
          </div>
          <div class="w-[1px] bg-white bg-opacity-10"></div>
          <div>
            <div class="flex items-center gap-2 text-white opacity-70 mb-1">${icons.Wallet}<span class="text-xs tracking-wider uppercase">Distributed</span></div>
            <p class="text-lg">₹12,400</p>
          </div>
        </div>
      </div>
      
      <div class="bg-secondary rounded-3xl p-5 text-white shadow-card transition-all relative overflow-hidden group chart-section">
        <div class="flex justify-between mb-4">
          <div class="flex flex-col">
            <span class="text-xs text-white opacity-70 tracking-wider uppercase">Weekly Performance</span>
            <div id="chart-value-display" class="text-sm font-bold text-primary mt-1 opacity-0 transition-all duration-300 transform -translate-y-1">₹0</div>
          </div>
          <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-main rounded-full"></div><span class="text-xs text-white opacity-70">Revenue</span></div>
        </div>
        <div class="h-[112px] w-full relative">
          <svg viewBox="0 0 320 80" preserveAspectRatio="none" class="sparkline w-full h-full absolute inset-0">
            <path d="M 0 60 C 26.6 60, 26.6 76.8, 53.3 76.8 C 80 76.8, 80 43.1, 106.6 43.1 C 133.3 43.1, 133.3 51.5, 160 51.5 C 186.6 51.5, 186.6 26.3, 213.3 26.3 C 240 26.3, 240 8, 266.6 8 C 293.3 8, 293.3 24.8, 320 24.8" fill="none" stroke="white" stroke-width="2" class="opacity-20"/>
            <path d="M 0 60 C 26.6 60, 26.6 76.8, 53.3 76.8 C 80 76.8, 80 43.1, 106.6 43.1 C 133.3 43.1, 133.3 51.5, 160 51.5 C 186.6 51.5, 186.6 26.3, 213.3 26.3 C 240 26.3, 240 8, 266.6 8 C 293.3 8, 293.3 24.8, 320 24.8" fill="none" stroke="#FF5B04" stroke-width="2.5"/>
            <circle cx="320" cy="24.8" r="3" fill="#FF5B04" id="chart-dot"/>
          </svg>
          <div class="absolute inset-0 flex" id="chart-hit-zones"></div>
        </div>
        <div class="flex justify-between mt-4 px-1" id="chart-labels">
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">MON</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">TUE</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">WED</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">THU</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">FRI</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">SAT</span>
          <span class="text-[9px] text-white opacity-40 font-bold tracking-widest">SUN</span>
        </div>
      </div>
      
      <div class="bg-white rounded-3xl overflow-hidden shadow-card">
        <button onclick="navigate('#/revenue')" class="action-btn">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-2xl bg-main text-secondary flex items-center justify-center">${icons.IndianRupee}</div>
            <div class="text-left"><h3 class="text-base text-foreground mb-1">Log Revenue</h3><p class="text-xs text-muted">Sync daily sales records</p></div>
          </div>
          <div class="text-muted opacity-50">${icons.ArrowRight}</div>
        </button>
        <button onclick="navigate('#/create-request')" class="action-btn">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-2xl bg-main text-secondary flex items-center justify-center">${icons.Coins}</div>
            <div class="text-left"><h3 class="text-base text-foreground mb-1">Request Funding</h3><p class="text-xs text-muted">Scale your business operations</p></div>
          </div>
          <div class="text-muted opacity-50">${icons.ArrowRight}</div>
        </button>
        <button onclick="navigate('#/returns')" class="action-btn">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-2xl bg-main text-secondary flex items-center justify-center">${icons.PieChart}</div>
            <div class="text-left"><h3 class="text-base text-foreground mb-1">Distribute Returns</h3><p class="text-xs text-muted">Send profit shares to investors</p></div>
          </div>
          <div class="text-muted opacity-50">${icons.ArrowRight}</div>
        </button>
      </div>

      <button onclick="navigate('#/active-funding')" class="relative h-[200px] w-full rounded-[32px] overflow-hidden shadow-card text-left block">
        <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/40 to-black/10"></div>
        <div class="absolute top-5 left-5 bg-white/20 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border border-white/10 flex items-center gap-1.5">
          <div class="w-1.5 h-1.5 rounded-full bg-[#00C896]"></div> LIVE
        </div>
        <div class="absolute bottom-6 left-6 right-6">
          <p class="text-white text-[22px] font-medium tracking-tight mb-4">Diwali Sweets Expansion</p>
          <div class="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-2.5">
             <div class="h-full bg-[#FF6B35] rounded-full" style="width:62.5%"></div>
          </div>
          <div class="flex justify-between items-center">
             <span class="text-white/60 text-[9px] uppercase tracking-[0.15em] font-bold">62.5% Funded</span>
             <span class="text-white/60 text-[9px] uppercase tracking-[0.15em] font-bold">12 Days Left</span>
          </div>
        </div>
      </button>

      <div class="mt-20 mb-12 flex flex-col items-center gap-4 opacity-30">
        <div class="scale-110 grayscale brightness-0">${icons.LogoIcon}</div>
        <p class="text-[8px] tracking-[0.3em] uppercase font-black text-foreground text-center leading-loose max-w-[280px]">
          SMALL BITES, BIG GROWTH.<br>THAT’S THE NANOPIE WAY. 🥧
        </p>
      </div>
    </div>
  `;
}

function initDashboard(el) {
  setTimeout(() => el.querySelector('.fade-in')?.classList.add('active'), 10);
  
  const revenues = [4200, 3100, 5600, 4800, 6200, 8400, 7200];
  const hitZonesContainer = el.querySelector('#chart-hit-zones');
  const valueDisplay = el.querySelector('#chart-value-display');
  const labels = el.querySelectorAll('#chart-labels span');
  const dot = el.querySelector('#chart-dot');
  
  // SVG coordinates to match the path points roughly
  const points = [
    {x: 0, y: 60}, {x: 53.3, y: 76.8}, {x: 106.6, y: 43.1}, 
    {x: 160, y: 51.5}, {x: 213.3, y: 26.3}, {x: 266.6, y: 8}, {x: 320, y: 24.8}
  ];

  if (hitZonesContainer) {
    revenues.forEach((rev, i) => {
      const zone = document.createElement('div');
      zone.className = 'flex-1 cursor-pointer relative group/zone';
      zone.innerHTML = `<div class="absolute inset-y-0 left-1/2 w-[1px] bg-white opacity-0 group-hover/zone:opacity-20 transition-opacity"></div>`;
      
      const showValue = () => {
        valueDisplay.innerText = `₹${rev.toLocaleString()}`;
        valueDisplay.classList.remove('opacity-0', '-translate-y-1');
        valueDisplay.classList.add('opacity-100', 'translate-y-0');
        
        labels.forEach((l, idx) => {
          l.style.opacity = idx === i ? '1' : '0.4';
        });
        
        if (dot) {
          dot.setAttribute('cx', points[i].x);
          dot.setAttribute('cy', points[i].y);
        }
      };

      const hideValue = () => {
        valueDisplay.classList.add('opacity-0', '-translate-y-1');
        valueDisplay.classList.remove('opacity-100', 'translate-y-0');
        labels.forEach(l => l.style.opacity = '0.4');
        if (dot) {
          dot.setAttribute('cx', points[points.length-1].x);
          dot.setAttribute('cy', points[points.length-1].y);
        }
      };

      zone.addEventListener('mouseenter', showValue);
      zone.addEventListener('click', showValue);
      zone.addEventListener('mouseleave', hideValue);
      
      hitZonesContainer.appendChild(zone);
    });
  }
}


// ─── Revenue State ─────────────────────────────────────────────────────────
let revenueState = {
  logs: [
    { id: 1, date: 'Today, 22 April',     time: '18:42 PM', amount: 8500, status: 'VERIFIED' },
    { id: 2, date: 'Yesterday, 21 April', time: '17:30 PM', amount: 7200, status: 'VERIFIED' },
    { id: 3, date: '20 April',            time: '19:15 PM', amount: 6800, status: 'VERIFIED' },
    { id: 4, date: '19 April',            time: '18:10 PM', amount: 9100, status: 'PENDING'  },
  ],
  submitted: false,
  submittedAmount: 0,
};

function getWeeklyTotal() {
  return revenueState.logs.reduce((s, l) => s + l.amount, 0).toLocaleString('en-IN');
}

function getLogRowHtml(log, showBorder = true) {
  const borderClass = showBorder ? 'border-b border-[#e9eef0]' : '';
  const statusHtml = log.status === 'VERIFIED'
    ? `<span class="flex items-center gap-1 text-[10px] font-bold text-[#00C896]"><span class="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block"></span>VERIFIED</span>`
    : `<span class="flex items-center gap-1 text-[10px] font-bold text-[#FF6B35]"><span class="w-1.5 h-1.5 rounded-full bg-[#FF6B35] inline-block"></span>PENDING</span>`;
  return `
    <div class="flex items-center justify-between px-6 py-4 ${borderClass}">
      <div class="flex items-center gap-4">
        <div class="w-9 h-9 rounded-full bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <p class="text-[13px] font-medium text-foreground leading-tight">${log.date}</p>
          <p class="text-[10px] text-muted mt-0.5">${log.time}</p>
        </div>
      </div>
      <div class="text-right">
        <p class="text-[14px] font-semibold text-foreground">₹${log.amount.toLocaleString('en-IN')}</p>
        <div class="mt-1">${statusHtml}</div>
      </div>
    </div>`;
}

function getRevenueHtml() {
  const total = getWeeklyTotal();
  const logsPreview = revenueState.logs.slice(0, 4);
  const logRows = logsPreview.map((l, i) => getLogRowHtml(l, i < logsPreview.length - 1)).join('');

  const inputSection = revenueState.submitted
    ? `<div class="flex items-center justify-between mt-6">
        <p class="text-[20px] font-semibold text-secondary">Sale Addition Requested</p>
        <div class="w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
       </div>`
    : `<div class="flex items-center gap-4 mt-6">
        <span class="text-2xl text-muted flex-shrink-0">₹</span>
        <input
          type="number"
          id="rev-input"
          placeholder="0"
          class="flex-1 bg-transparent border-none text-3xl text-foreground outline-none font-light min-w-0"
          inputmode="numeric"
        />
        <button id="rev-btn"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
          style="background: #e0e8e9; opacity: 0.5;"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
       </div>`;

  return `
    <div class="px-5 pb-safe-extra flex flex-col gap-5 fade-in pt-2">

      <!-- Weekly Performance Card -->
      <div class="bg-secondary rounded-[28px] p-6 text-white shadow-xl shadow-secondary/20">
        <div class="flex justify-between items-center mb-4">
          <span class="text-[9px] text-white/60 uppercase tracking-[0.22em] font-medium">Weekly Performance</span>
          <div class="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span class="text-[10px] text-white/70">16 — 22 Apr</span>
          </div>
        </div>
        <div class="flex items-baseline gap-3">
          <p class="text-[38px] font-normal tracking-tight">₹${total}</p>
          <div class="flex items-center gap-1 text-[#FF6B35]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            <span class="text-[11px] font-semibold">+8%</span>
          </div>
        </div>
      </div>

      <!-- Log Daily Sales Card -->
      <div class="bg-white rounded-[28px] px-6 py-6 shadow-sm shadow-foreground/5">
        <h3 class="text-[15px] font-semibold text-foreground">Log Daily Sales</h3>
        <p class="text-[11px] text-muted mt-0.5">Report today's gross revenue to investors</p>
        ${inputSection}
      </div>

      <!-- Recent Logs -->
      <div>
        <div class="flex items-center justify-between mb-3 px-1">
          <span class="text-[9px] text-muted uppercase tracking-[0.22em] font-bold">Recent Logs</span>
          <button onclick="navigate('#/revenue-all')" class="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">View All</button>
        </div>
        <div class="bg-white rounded-[28px] shadow-sm shadow-foreground/5 overflow-hidden">
          ${logRows}
        </div>
      </div>

    </div>
  `;
}

function initRevenue(el) {
  const inp = el.querySelector('#rev-input');
  const btn = el.querySelector('#rev-btn');
  if (!inp || !btn) return;

  inp.oninput = () => {
    if (inp.value && parseFloat(inp.value) > 0) {
      btn.style.background = '#FF6B35';
      btn.style.opacity = '1';
    } else {
      btn.style.background = '#e0e8e9';
      btn.style.opacity = '0.5';
    }
  };

  btn.onclick = () => {
    const val = parseFloat(inp.value);
    if (!val || val <= 0) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'}) + ' PM';
    const newLog = {
      id: Date.now(),
      date: 'Today, 22 April',
      time: timeStr,
      amount: val,
      status: 'PENDING'
    };
    revenueState.logs.unshift(newLog);
    revenueState.submitted = true;
    revenueState.submittedAmount = val;

    // Re-render revenue screen
    const app = document.getElementById('app');
    app.innerHTML = getRevenueHtml();
    initRevenue(app);

    // Reset submitted flag after a few seconds so user can log again
    setTimeout(() => {
      revenueState.submitted = false;
    }, 4000);
  };
}

// ─── Revenue All Logs Screen ────────────────────────────────────────────────
function getRevenueAllHtml() {
  const allLogs = revenueState.logs;
  const logRows = allLogs.map((l, i) => getLogRowHtml(l, i < allLogs.length - 1)).join('');
  const total = allLogs.reduce((s, l) => s + l.amount, 0).toLocaleString('en-IN');
  const verified = allLogs.filter(l => l.status === 'VERIFIED').length;

  return `
    <div class="px-5 pb-safe-extra flex flex-col gap-5 fade-in pt-2">

      <!-- Summary Card -->
      <div class="bg-secondary rounded-[28px] p-6 text-white shadow-xl shadow-secondary/20">
        <p class="text-[9px] text-white/60 uppercase tracking-[0.22em] font-medium mb-3">All Revenue Logs</p>
        <p class="text-[38px] font-normal tracking-tight">₹${total}</p>
        <div class="flex gap-6 mt-4 pt-4 border-t border-white/10">
          <div>
            <p class="text-[9px] text-white/50 uppercase tracking-widest mb-1">Total Entries</p>
            <p class="text-xl font-normal">${allLogs.length}</p>
          </div>
          <div class="w-px bg-white/10"></div>
          <div>
            <p class="text-[9px] text-white/50 uppercase tracking-widest mb-1">Verified</p>
            <p class="text-xl font-normal text-[#00C896]">${verified}</p>
          </div>
          <div class="w-px bg-white/10"></div>
          <div>
            <p class="text-[9px] text-white/50 uppercase tracking-widest mb-1">Pending</p>
            <p class="text-xl font-normal text-[#FF6B35]">${allLogs.length - verified}</p>
          </div>
        </div>
      </div>

      <!-- All Logs List -->
      <div>
        <div class="flex items-center justify-between mb-3 px-1">
          <span class="text-[9px] text-muted uppercase tracking-[0.22em] font-bold">All Logs</span>
        </div>
        <div class="bg-white rounded-[28px] shadow-sm shadow-foreground/5 overflow-hidden">
          ${logRows || '<div class="p-10 text-center text-muted text-sm">No revenue logs yet</div>'}
        </div>
      </div>

    </div>
  `;
}

function initRevenueAll(el) { /* static view */ }



function getReturnsHtml() {
  return `<div class="px-6 pb-safe-extra flex flex-col gap-6 fade-in" id="returns-content"></div>`;
}

function initReturns(el) {
  const state = JSON.parse(localStorage.getItem('returns_state') || '{"distributed": false, "individual": {}}');
  function r() {
    const content = el.querySelector('#returns-content'); if(!content) return;
    content.innerHTML = `
      <div class="bg-secondary rounded-[32px] p-8 text-white shadow-card">
        <div class="flex justify-between mb-4"><div><p class="text-xs opacity-40 uppercase mb-1">Investor Shares</p><p class="text-5xl">₹8,450</p></div><button onclick="showPolicy()" class="opacity-40 p-2">${icons.Info}</button></div>
        <div class="flex gap-8 pt-4 border-t border-white border-opacity-10 mt-2"><div><p class="text-xs opacity-40 uppercase mb-1">Investors</p><p class="text-xl">48</p></div><div><p class="text-xs opacity-40 uppercase mb-1">Due Date</p><p class="text-xl text-primary">30 May</p></div></div>
      </div>
      <div class="bg-white rounded-3xl shadow-card overflow-hidden">
        <div class="p-6 pb-0 text-xs text-muted uppercase tracking-wider">Distribution Breakdown</div>
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between text-sm"><span>Vendor to Customer</span><span class="font-medium text-foreground">₹8,435</span></div>
          <div class="flex justify-between text-sm"><span>0.05% Platform Fee</span><span class="font-medium text-foreground">₹13</span></div>
          <div class="flex justify-between text-sm"><span>GST on Fee (18%)</span><span class="font-medium text-foreground">₹2</span></div>
          <div class="flex justify-between border-t border-muted pt-3 text-base"><span>Total Distribution</span><span class="text-primary font-bold">₹8,450</span></div>
        </div>
      </div>
      <div class="bg-white rounded-3xl shadow-card overflow-hidden">
        <div class="p-6 pb-0 text-xs text-muted uppercase tracking-wider">Recent Payouts</div>
        ${[{id:1,n:'Anjali Sharma',a:520},{id:2,n:'Rahul Verma',a:260}].map(i=>{
          const s = state.individual[i.id] || (state.distributed ? 'Sent' : 'Pending');
          const av = i.n === 'Anjali Sharma' ? 'https://loremflickr.com/100/100/indian,woman?lock=1' : 'https://loremflickr.com/100/100/indian,man?lock=2';
          return `<div class="flex justify-between items-center p-6 border-t border-muted"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full overflow-hidden border border-muted"><img src="${av}" class="w-full h-full object-cover"></div><div><p class="text-base text-foreground font-medium">${i.n}</p><p class="text-xs text-muted">₹${i.a}</p></div></div><div id="payout-${i.id}">${s==='Pending'?`<button onclick="processPayout(${i.id})" class="bg-secondary text-white px-5 py-2 rounded-xl text-xs uppercase tracking-widest font-bold">Pay</button>`:s==='Initiated'?`<div class="animate-pulse text-primary text-[10px] uppercase font-bold flex items-center gap-1">${icons.Clock} Initiated</div>`:`<div class="text-success text-[10px] uppercase font-bold flex items-center gap-1">${icons.CheckCircle2} Sent</div>`}</div></div>`;
        }).join('')}
        <button onclick="navigate('#/investors')" class="w-full p-5 text-[10px] text-primary uppercase font-bold tracking-[0.2em] border-t border-muted hover:bg-main transition-colors">See All 48 Investors</button>
      </div>
      <button onclick="processBulk()" class="primary-btn ${state.distributed?'opacity-50 pointer-events-none':''} ${state.bulkInitiated?'!bg-white !text-primary !border-2 !border-primary':''}">${state.distributed?'All Returns Distributed':state.bulkInitiated?'Initiated...':icons.Check+' Confirm & Distribute All'}</button>
    `;
  }
  window.processPayout = (id) => { state.individual[id]='Initiated'; localStorage.setItem('returns_state', JSON.stringify(state)); r(); setTimeout(()=>{ state.individual[id]='Sent'; localStorage.setItem('returns_state', JSON.stringify(state)); r(); }, 2000); };
  window.processBulk = () => { state.bulkInitiated=true; r(); setTimeout(()=>{ state.bulkInitiated=false; state.distributed=true; localStorage.setItem('returns_state', JSON.stringify(state)); r(); }, 2000); };
  r();
}

function getInvestorsHtml() { return `<div class="px-6 pb-safe-extra flex flex-col gap-6 fade-in" id="investors-content"></div>`; }

function initInvestors(el) {
  const data = [
    {n:"Aarav Patel", g:"m"}, {n:"Aditi Rao", g:"f"}, {n:"Amit Shah", g:"m"}, {n:"Ananya Singh", g:"f"}, {n:"Arjun Reddy", g:"m"}, {n:"Bhavna Joshi", g:"f"}, {n:"Chetan Kumar", g:"m"}, {n:"Deepak Gupta", g:"m"}, {n:"Esha Gupta", g:"f"}, {n:"Gaurav Sharma", g:"m"}, {n:"Hina Khan", g:"f"}, {n:"Ishaan Malhotra", g:"m"}, {n:"Jaya Bachchan", g:"f"}, {n:"Karan Johar", g:"m"}, {n:"Lata Mangeshkar", g:"f"}, {n:"Manoj Bajpayee", g:"m"}, {n:"Nandini Iyer", g:"f"}, {n:"Om Puri", g:"m"}, {n:"Priyanka Chopra", g:"f"}, {n:"Rajesh Khanna", g:"m"}, {n:"Sanjay Dutt", g:"m"}, {n:"Tanya Abrol", g:"f"}, {n:"Uday Chopra", g:"m"}, {n:"Vidya Balan", g:"f"}, {n:"Varun Dhawan", g:"m"}, {n:"Yami Gautam", g:"f"}, {n:"Zakir Hussain", g:"m"}, {n:"Abhishek Bachchan", g:"m"}, {n:"Bipasha Basu", g:"f"}, {n:"Hrithik Roshan", g:"m"}, {n:"Kareena Kapoor", g:"f"}, {n:"Ranbir Kapoor", g:"m"}, {n:"Saif Ali Khan", g:"m"}, {n:"Shah Rukh Khan", g:"m"}, {n:"Salman Khan", g:"m"}, {n:"Aamir Khan", g:"m"}, {n:"Akshay Kumar", g:"m"}, {n:"Ajay Devgn", g:"m"}, {n:"John Abraham", g:"m"}, {n:"Katrina Kaif", g:"f"}, {n:"Deepika Padukone", g:"f"}, {n:"Ranveer Singh", g:"m"}, {n:"Anushka Sharma", g:"f"}, {n:"Virat Kohli", g:"m"}, {n:"Mahendra Singh Dhoni", g:"m"}, {n:"Sachin Tendulkar", g:"m"}, {n:"Rohit Sharma", g:"m"}, {n:"Hardik Pandya", g:"m"}
  ];
  let mIdx = 1; let fIdx = 1;
  const investors = data.map((d, i) => {
    const av = d.g === 'm' ? `https://loremflickr.com/150/150/indian,man?lock=${mIdx++}` : `https://loremflickr.com/150/150/indian,woman?lock=${fIdx++}`;
    return { id: i+1, name: d.n, amount: Math.floor(Math.random()*500)+100, avatar: av };
  });
  let search = '';
  let sortBy = 'name-asc';

  function update() {
    const list = el.querySelector('#list'); if(!list) return;
    let filtered = investors.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
    
    filtered.sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'amt-desc') return b.amount - a.amount;
      if (sortBy === 'amt-asc') return a.amount - b.amount;
      return 0;
    });

    list.innerHTML = filtered.map(i => `<div class="flex justify-between items-center p-5 border-b border-muted last:border-none"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-2xl overflow-hidden border border-muted shadow-sm"><img src="${i.avatar}" class="w-full h-full object-cover"></div><div><p class="text-base text-foreground font-medium">${i.name}</p><p class="text-xs text-muted">Investor #${i.id}</p></div></div><p class="text-base font-semibold text-foreground">₹${i.amount}</p></div>`).join('') || `<div class="p-10 text-center text-muted">No results found</div>`;
  }
  
  const content = el.querySelector('#investors-content'); if(!content) return;
  content.innerHTML = `
    <div class="flex flex-col gap-6">
      <div class="flex gap-3">
        <div class="relative flex-1">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-muted z-20">${icons.Search}</span>
          <input type="text" id="search-inp" placeholder="Search by name..." class="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 shadow-card outline-none border-none relative z-10 text-foreground text-sm">
        </div>
        <div class="relative">
          <select id="sort-select" class="h-full bg-white rounded-2xl px-4 py-3.5 shadow-card outline-none border-none text-foreground text-[11px] font-bold uppercase tracking-widest appearance-none cursor-pointer pr-10">
            <option value="name-asc">Sort A-Z</option>
            <option value="name-desc">Sort Z-A</option>
            <option value="amt-desc">Highest ₹</option>
            <option value="amt-asc">Lowest ₹</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>
      <div id="list" class="bg-white rounded-[32px] shadow-card overflow-hidden"></div>
    </div>`;
    
  el.querySelector('#search-inp').oninput = e => { search = e.target.value; update(); };
  el.querySelector('#sort-select').onchange = e => { sortBy = e.target.value; update(); };
  update();
}

function getActiveFundingHtml() {
  return `
    <div class="px-6 pt-4 pb-safe-extra flex flex-col fade-in bg-main min-h-full">
      <!-- Image Section -->
      <div class="relative h-[220px] rounded-[32px] overflow-hidden shadow-sm mb-8">
        <img src="https://images.unsplash.com/photo-1770998312182-9bea1a43ba19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
        <div class="absolute top-5 left-5 bg-white text-[#1D4F4F] px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm">Live Campaign</div>
      </div>
      
      <!-- Title & Meta -->
      <div class="px-1 mb-8">
        <h2 class="text-[28px] font-medium text-foreground tracking-tight mb-3">Diwali Sweets Expansion</h2>
        <div class="flex gap-6">
          <div class="flex items-center gap-2 text-muted opacity-70"><span class="w-3.5 h-3.5">${icons.Clock}</span><span class="text-[10px] uppercase tracking-widest font-bold">12 Days Left</span></div>
          <div class="flex items-center gap-2 text-muted opacity-70"><span class="w-3.5 h-3.5">${icons.Users}</span><span class="text-[10px] uppercase tracking-widest font-bold">24 Investors</span></div>
        </div>
      </div>
      
      <!-- Dark Green Progress Card -->
      <div class="bg-[#1D4F4F] rounded-[28px] p-7 text-white shadow-xl shadow-[#1D4F4F]/20 mb-5 relative z-10">
        <div class="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-5"><div class="h-full bg-[#FF6B35] rounded-full" style="width:62.5%"></div></div>
        <div class="flex justify-between items-baseline">
          <span class="text-[36px] font-normal tracking-tight">₹75,000</span>
          <span class="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">of ₹1,20,000</span>
        </div>
      </div>
      
      <!-- White Content Card -->
      <div class="bg-white rounded-[32px] shadow-sm shadow-foreground/5 p-8 relative z-0">
        <!-- Tabs -->
        <div class="flex gap-8 border-b border-[#e9eef0] mb-8">
          <button class="text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF6B35] border-b-[2.5px] border-[#FF6B35] pb-4 -mb-[1.5px]">Overview</button>
          <button class="text-[11px] font-bold uppercase tracking-[0.15em] text-muted opacity-60 pb-4 -mb-[1.5px]">Investors</button>
          <button class="text-[11px] font-bold uppercase tracking-[0.15em] text-muted opacity-60 pb-4 -mb-[1.5px]">Updates</button>
        </div>
        
        <!-- Yield & Lock -->
        <div class="flex justify-between items-center mb-10">
           <div class="flex-1">
             <p class="text-[10px] text-muted opacity-60 font-bold uppercase tracking-[0.2em] mb-2.5">Projected Yield</p>
             <p class="text-[28px] text-[#FF6B35] font-normal tracking-tight">12%</p>
           </div>
           <div class="w-[1px] bg-[#e9eef0] h-12"></div>
           <div class="flex-1 text-right">
             <p class="text-[10px] text-muted opacity-60 font-bold uppercase tracking-[0.2em] mb-2.5">Lock Period</p>
             <p class="text-[28px] text-foreground font-normal tracking-tight">6 Mo</p>
           </div>
        </div>
        
        <!-- Summary -->
        <div class="mb-12">
          <p class="text-[10px] text-muted opacity-60 font-bold uppercase tracking-[0.2em] mb-4">Executive Summary</p>
          <p class="text-[14px] text-foreground/80 font-medium leading-[1.8]">Scaling production for the upcoming festival season. Funds will be used to procure premium ingredients and hire additional seasonal staff to meet the 3x demand expected in May. Our track record shows a consistent 20% MoM growth.</p>
        </div>
        
        <!-- Button -->
        <button class="w-full text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted opacity-70 py-5 border border-[#e9eef0] rounded-[24px] active:bg-[#f5f7f8] transition-colors">Review Full Proposal</button>
      </div>
    </div>
  `;
}

function initActiveFunding() {}

// ─── Create Request (Request Funds) Multi-Step Flow ───────────────────────
function getCreateRequestHtml() {
  return `<div id="cr-root" class="px-5 pt-2 pb-safe-extra flex flex-col gap-5 fade-in"></div>`;
}

function initCreateRequest(el) {
  let step = 0;
  const formData = { name: '', amount: '', purpose: '', duration: '3' };
  const root = el.querySelector('#cr-root');
  const purposes = ['Inventory Restock', 'Equipment Purchase', 'Marketing Campaign', 'Working Capital', 'Store Expansion', 'Other'];

  function render() {
    if (step === 0) renderStep0();
    else if (step === 1) renderStep1();
    else if (step === 2) renderStep2();
    else renderStep3();
  }

  function renderStep0() {
    root.innerHTML = `
      <div class="relative h-[180px] rounded-[28px] overflow-hidden shadow-xl">
        <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#16232B] via-[#16232B]/50 to-transparent"></div>
        <div class="absolute bottom-5 left-5 right-5">
          <p class="text-white/60 text-[9px] uppercase tracking-[0.22em] mb-1">Nanopie Capital</p>
          <p class="text-white text-[22px] font-medium tracking-tight">Request Business Funding</p>
        </div>
      </div>
      <div class="bg-secondary rounded-[28px] p-5 text-white">
        <div class="flex divide-x divide-white/10">
          <div class="flex-1 text-center px-3"><p class="text-[9px] text-white/50 uppercase tracking-widest mb-1.5">Max Amount</p><p class="text-[17px] font-normal">&#8377;5,00,000</p></div>
          <div class="flex-1 text-center px-3"><p class="text-[9px] text-white/50 uppercase tracking-widest mb-1.5">Approval</p><p class="text-[17px] font-normal text-[#00C896]">24 hrs</p></div>
          <div class="flex-1 text-center px-3"><p class="text-[9px] text-white/50 uppercase tracking-widest mb-1.5">Rate</p><p class="text-[17px] font-normal text-[#FF6B35]">8%</p></div>
        </div>
      </div>
      <div class="bg-white rounded-[28px] p-6 shadow-sm shadow-foreground/5 space-y-4">
        <p class="text-[13px] font-semibold text-foreground">How it works</p>
        ${[['Submit Request','Fill in your funding details and purpose'],['Review & Match','We match you with investors in 24 hrs'],['Funds Disbursed','Approved funds hit your account directly']].map(([t,d],i)=>`
          <div class="flex items-start gap-4">
            <div class="w-7 h-7 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">${i+1}</div>
            <div><p class="text-[13px] font-medium text-foreground">${t}</p><p class="text-[11px] text-muted mt-0.5">${d}</p></div>
          </div>`).join('')}
      </div>
      <button id="cr-start" class="w-full bg-secondary text-white rounded-[28px] py-4 text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-secondary/30 active:scale-[0.98] transition-all">Request Funding &#8594;</button>
    `;
    root.querySelector('#cr-start').onclick = () => { step = 1; render(); };
  }

  function renderStep1() {
    root.innerHTML = `
      <div class="flex items-center gap-3 mb-1">
        <div class="flex gap-1.5"><div class="h-1 w-8 rounded-full bg-secondary"></div><div class="h-1 w-8 rounded-full bg-foreground/10"></div></div>
        <span class="text-[10px] text-muted uppercase tracking-widest">Step 1 of 2</span>
      </div>
      <div class="bg-white rounded-[28px] px-6 py-6 shadow-sm shadow-foreground/5 space-y-5">
        <div><p class="text-[16px] font-semibold text-foreground">Campaign Details</p><p class="text-[11px] text-muted mt-0.5">Tell us about your funding need</p></div>
        <div class="space-y-1.5">
          <label class="text-[9px] uppercase tracking-[0.2em] font-bold text-muted">Campaign Name</label>
          <input id="cr-name" type="text" value="${formData.name}" placeholder="e.g. Diwali Inventory Restock"
            class="w-full bg-[#f5f7f8] rounded-2xl px-4 py-3.5 text-[13px] text-foreground outline-none border-2 border-transparent focus:border-secondary transition-colors">
        </div>
        <div class="space-y-1.5">
          <label class="text-[9px] uppercase tracking-[0.2em] font-bold text-muted">Amount Requested</label>
          <div class="flex items-center bg-[#f5f7f8] rounded-2xl px-4 py-3 border-2 border-transparent focus-within:border-secondary transition-colors">
            <span class="text-[18px] text-muted mr-2">&#8377;</span>
            <input id="cr-amount" type="number" value="${formData.amount}" placeholder="0"
              class="flex-1 bg-transparent text-[22px] text-foreground outline-none font-light" inputmode="numeric">
          </div>
          <p class="text-[10px] text-muted">Max: &#8377;5,00,000</p>
        </div>
        <div class="space-y-2">
          <label class="text-[9px] uppercase tracking-[0.2em] font-bold text-muted">Purpose</label>
          <div class="grid grid-cols-2 gap-2" id="cr-purposes">
            ${purposes.map(p=>`<button data-p="${p}" class="purpose-chip text-[11px] px-4 py-2.5 rounded-2xl border-2 transition-all text-left font-medium ${formData.purpose===p?'bg-secondary text-white border-secondary':'bg-[#f5f7f8] text-foreground border-transparent'}">${p}</button>`).join('')}
          </div>
        </div>
        <div class="space-y-2">
          <label class="text-[9px] uppercase tracking-[0.2em] font-bold text-muted">Repayment Duration</label>
          <div class="flex gap-2" id="cr-durations">
            ${['3','6','12'].map(d=>`<button data-d="${d}" class="dur-chip flex-1 py-3 rounded-2xl border-2 text-[12px] font-bold transition-all ${formData.duration===d?'bg-secondary text-white border-secondary':'bg-[#f5f7f8] text-foreground border-transparent'}">${d}M</button>`).join('')}
          </div>
        </div>
      </div>
      <button id="cr-next1" class="w-full bg-secondary text-white rounded-[28px] py-4 text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-secondary/30 active:scale-[0.98] transition-all">Continue &#8594;</button>
    `;
    root.querySelectorAll('.purpose-chip').forEach(b => {
      b.onclick = () => {
        formData.purpose = b.dataset.p;
        root.querySelectorAll('.purpose-chip').forEach(x => {
          const a = x.dataset.p === formData.purpose;
          x.className = `purpose-chip text-[11px] px-4 py-2.5 rounded-2xl border-2 transition-all text-left font-medium ${a?'bg-secondary text-white border-secondary':'bg-[#f5f7f8] text-foreground border-transparent'}`;
        });
      };
    });
    root.querySelectorAll('.dur-chip').forEach(b => {
      b.onclick = () => {
        formData.duration = b.dataset.d;
        root.querySelectorAll('.dur-chip').forEach(x => {
          const a = x.dataset.d === formData.duration;
          x.className = `dur-chip flex-1 py-3 rounded-2xl border-2 text-[12px] font-bold transition-all ${a?'bg-secondary text-white border-secondary':'bg-[#f5f7f8] text-foreground border-transparent'}`;
        });
      };
    });
    root.querySelector('#cr-next1').onclick = () => {
      formData.name = root.querySelector('#cr-name').value.trim();
      formData.amount = root.querySelector('#cr-amount').value;
      if (!formData.name || !formData.amount || !formData.purpose) { showToast('Please fill all fields', true); return; }
      step = 2; render();
    };
  }

  function renderStep2() {
    const amt = parseInt(formData.amount)||0;
    const fee = Math.round(amt*0.02);
    const net = amt-fee;
    const monthly = Math.round((amt*0.08)/parseInt(formData.duration));
    root.innerHTML = `
      <div class="flex items-center gap-3 mb-1">
        <div class="flex gap-1.5"><div class="h-1 w-8 rounded-full bg-secondary"></div><div class="h-1 w-8 rounded-full bg-secondary"></div></div>
        <span class="text-[10px] text-muted uppercase tracking-widest">Step 2 of 2</span>
      </div>
      <div class="bg-secondary rounded-[28px] p-6 text-white">
        <p class="text-[9px] text-white/50 uppercase tracking-[0.22em] mb-2">You are requesting</p>
        <p class="text-[40px] font-normal tracking-tight">&#8377;${amt.toLocaleString('en-IN')}</p>
        <div class="mt-4 pt-4 border-t border-white/10 flex gap-6">
          <div><p class="text-[9px] text-white/50 uppercase tracking-widest mb-1">Purpose</p><p class="text-sm font-medium">${formData.purpose}</p></div>
          <div><p class="text-[9px] text-white/50 uppercase tracking-widest mb-1">Duration</p><p class="text-sm font-medium">${formData.duration} Months</p></div>
        </div>
      </div>
      <div class="bg-white rounded-[28px] p-6 shadow-sm shadow-foreground/5 space-y-3">
        <p class="text-[13px] font-semibold text-foreground mb-4">Cost Breakdown</p>
        <div class="flex justify-between text-[13px]"><span class="text-muted">Amount Requested</span><span class="font-medium text-foreground">&#8377;${amt.toLocaleString('en-IN')}</span></div>
        <div class="flex justify-between text-[13px]"><span class="text-muted">Platform Fee (2%)</span><span class="font-medium text-foreground">&#8377;${fee.toLocaleString('en-IN')}</span></div>
        <div class="flex justify-between text-[13px]"><span class="text-muted">Profit Share Rate</span><span class="font-medium text-foreground">8% / month</span></div>
        <div class="flex justify-between text-[13px] pt-3 border-t border-[#e9eef0]"><span class="text-muted">Est. Monthly Return</span><span class="font-medium text-[#FF6B35]">&#8377;${monthly.toLocaleString('en-IN')}</span></div>
        <div class="flex justify-between text-[14px] pt-3 border-t border-[#e9eef0]"><span class="font-semibold text-foreground">Net Receivable</span><span class="font-bold text-secondary">&#8377;${net.toLocaleString('en-IN')}</span></div>
      </div>
      <div class="bg-white rounded-[28px] px-6 py-5 shadow-sm shadow-foreground/5 flex items-start gap-3">
        <input type="checkbox" id="cr-terms" class="mt-0.5 w-4 h-4 accent-[#1D4F4F]">
        <label for="cr-terms" class="text-[11px] text-muted leading-relaxed">I agree to Nanopie's <span class="text-secondary font-semibold">Terms of Service</span> and <span class="text-secondary font-semibold">Funding Agreement</span>. I confirm this information is accurate.</label>
      </div>
      <button id="cr-submit" class="w-full bg-secondary text-white rounded-[28px] py-4 text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-secondary/30 active:scale-[0.98] transition-all">Submit Request</button>
      <button id="cr-back" class="w-full text-center text-[11px] text-muted py-2">&#8592; Go Back</button>
    `;
    root.querySelector('#cr-submit').onclick = () => {
      if (!root.querySelector('#cr-terms').checked) { showToast('Please accept terms to continue', true); return; }
      step = 3; render();
    };
    root.querySelector('#cr-back').onclick = () => { step = 1; render(); };
  }

  function renderStep3() {
    root.innerHTML = `
      <div class="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6 fade-in">
        <div class="relative w-32 h-32 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-2 border-secondary/20 animate-[spin_10s_linear_infinite]"></div>
          <div class="absolute inset-3 rounded-full border border-[#FF6B35]/30 animate-[spin_6s_linear_infinite_reverse]"></div>
          <div class="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-xl shadow-secondary/30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-[11px] text-muted uppercase tracking-[0.25em]">Request Submitted</p>
          <h2 class="text-[28px] font-normal text-foreground tracking-tight leading-tight">Your funding is<br><span class="text-secondary">under review.</span></h2>
          <p class="text-[12px] text-muted max-w-[240px] mx-auto leading-relaxed mt-2">We'll match you with investors within 24 hours and notify you once approved.</p>
        </div>
        <div class="bg-white rounded-[28px] px-6 py-5 shadow-sm w-full max-w-[300px] space-y-3">
          <div class="flex justify-between text-[12px]"><span class="text-muted">Campaign</span><span class="font-semibold text-foreground truncate max-w-[140px]">${formData.name}</span></div>
          <div class="flex justify-between text-[12px]"><span class="text-muted">Amount</span><span class="font-semibold text-foreground">&#8377;${parseInt(formData.amount).toLocaleString('en-IN')}</span></div>
          <div class="flex justify-between text-[12px]"><span class="text-muted">Status</span><span class="flex items-center gap-1 text-[#FF6B35] font-bold text-[10px]"><span class="w-1.5 h-1.5 rounded-full bg-[#FF6B35] inline-block"></span>PENDING REVIEW</span></div>
        </div>
        <button onclick="navigate('#/dashboard')" class="w-full max-w-[300px] bg-secondary text-white rounded-[28px] py-4 text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-secondary/30 active:scale-[0.98] transition-all">Back to Dashboard</button>
      </div>
    `;
  }

  render();
}



let newBroadcasts = [];

// Global like state for past updates
window.pastUpdatesState = window.pastUpdatesState || [
  { id: 1, likes: 12, liked: false },
  { id: 2, likes: 24, liked: false },
  { id: 3, likes: 8, liked: false }
];

window.toggleLike = (btn, type, id) => {
  if (type === 'past') {
    const update = window.pastUpdatesState.find(u => u.id === id);
    if (update) {
      update.liked = !update.liked;
      update.likes += update.liked ? 1 : -1;
      
      const svg = btn.querySelector('svg');
      const span = btn.querySelector('span');
      
      if (update.liked) {
        btn.classList.add('text-[#1D4F4F]');
        btn.classList.remove('text-[#16232B]/30');
        svg.style.fill = '#1D4F4F';
      } else {
        btn.classList.remove('text-[#1D4F4F]');
        btn.classList.add('text-[#16232B]/30');
        svg.style.fill = 'none';
      }
      span.innerText = update.likes;
    }
  } else if (type === 'new') {
    const update = newBroadcasts.find(u => u.id === id);
    if (update) {
      update.liked = !update.liked;
      update.likes += update.liked ? 1 : -1;
      
      const svg = btn.querySelector('svg');
      const span = btn.querySelector('span');
      
      if (update.liked) {
        btn.classList.add('text-[#1D4F4F]');
        btn.classList.remove('text-[#16232B]/30');
        svg.style.fill = '#1D4F4F';
      } else {
        btn.classList.remove('text-[#1D4F4F]');
        btn.classList.add('text-[#16232B]/30');
        svg.style.fill = 'none';
      }
      span.innerText = update.likes;
    }
  }
};

function getUpdatesHtml() {
  const hasFunding = !!localStorage.getItem('nanopie_active_funding');

  const fundingHtml = hasFunding ? `
    <!-- Static System Update (Funding Request) -->
    <div class="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B] px-6 py-5 space-y-3 border-l-4 border-[#FF6B35]">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        </div>
        <div>
          <h3 class="text-[13px] font-semibold text-[#16232B]">Funding Request Initiated</h3>
          <div class="flex items-center gap-1.5 text-[9px] text-[#FF6B35] uppercase tracking-widest font-bold mt-0.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            JUST NOW
          </div>
        </div>
      </div>
      <p class="text-[13px] text-[#16232B] font-medium leading-relaxed">
        Your request for ₹10,000 (Inventory Restock) is now under review.
      </p>
    </div>
  ` : '';

  const getLikeClass = (liked) => liked ? 'text-[#1D4F4F]' : 'text-[#16232B]/30 hover:text-[#1D4F4F]';
  const getLikeFill = (liked) => liked ? 'fill:#1D4F4F' : 'fill:none';

  const pastUpdatesHtml = `
    <!-- Past Updates -->
    <div class="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B]">
      <div class="h-48 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=200&fit=crop" class="w-full h-full object-cover" alt="Update" />
      </div>
      <div class="px-6 py-5 space-y-4">
        <div class="flex items-center gap-1.5 text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Today, 11:30 AM
        </div>
        <p class="text-[13px] text-[#16232B] font-medium leading-relaxed">
          Just received the first batch of premium organic flour for the Diwali special cookies!
        </p>
        <div class="flex items-center gap-6 pt-3 border-t border-[#16232B]/5">
          <button onclick="toggleLike(this, 'past', 1)" class="flex items-center gap-2 transition-all ${getLikeClass(window.pastUpdatesState[0].liked)}">
            <svg style="${getLikeFill(window.pastUpdatesState[0].liked)}" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <span class="text-[11px] font-semibold">${window.pastUpdatesState[0].likes}</span>
          </button>
          <button onclick="showToast('Comments coming soon')" class="flex items-center gap-2 text-[#16232B]/30 hover:text-[#1D4F4F] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            <span class="text-[11px] font-semibold">2</span>
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B]">
      <div class="px-6 py-5 space-y-4">
        <div class="flex items-center gap-1.5 text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Apr 20, 2026
        </div>
        <p class="text-[13px] text-[#16232B] font-medium leading-relaxed">
          New oven installed! This will increase our cookie production capacity by 40%. Thanks to our investors!
        </p>
        <div class="flex items-center gap-6 pt-3 border-t border-[#16232B]/5">
          <button onclick="toggleLike(this, 'past', 2)" class="flex items-center gap-2 transition-all ${getLikeClass(window.pastUpdatesState[1].liked)}">
            <svg style="${getLikeFill(window.pastUpdatesState[1].liked)}" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <span class="text-[11px] font-semibold">${window.pastUpdatesState[1].likes}</span>
          </button>
          <button onclick="showToast('Comments coming soon')" class="flex items-center gap-2 text-[#16232B]/30 hover:text-[#1D4F4F] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            <span class="text-[11px] font-semibold">5</span>
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B]">
      <div class="px-6 py-5 space-y-4">
        <div class="flex items-center gap-1.5 text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Apr 18, 2026
        </div>
        <p class="text-[13px] text-[#16232B] font-medium leading-relaxed">
          Finalized the packaging design for the festive gift hampers.
        </p>
        <div class="flex items-center gap-6 pt-3 border-t border-[#16232B]/5">
          <button onclick="toggleLike(this, 'past', 3)" class="flex items-center gap-2 transition-all ${getLikeClass(window.pastUpdatesState[2].liked)}">
            <svg style="${getLikeFill(window.pastUpdatesState[2].liked)}" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <span class="text-[11px] font-semibold">${window.pastUpdatesState[2].likes}</span>
          </button>
          <button onclick="showToast('Comments coming soon')" class="flex items-center gap-2 text-[#16232B]/30 hover:text-[#1D4F4F] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            <span class="text-[11px] font-semibold">0</span>
          </button>
        </div>
      </div>
    </div>
  `;

  return `
    <div class="h-full flex flex-col bg-[#E4EEF0] fade-in pb-20 overflow-y-auto hide-scrollbar">
      <div class="px-6 py-6 space-y-6">
        <!-- Composer -->
        <section class="bg-[#1D4F4F] rounded-[24px] shadow-xl shadow-[#1D4F4F]/10 px-6 py-6 space-y-4 text-white">
          <textarea id="broadcast-input" placeholder="Share an update with investors..." class="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-normal text-sm min-h-[72px] placeholder:text-[#E4EEF0]/50 resize-none leading-relaxed focus:outline-none"></textarea>
          <div class="flex items-center justify-between pt-4 border-t border-white/10">
            <div class="flex gap-5">
              <button class="text-[#E4EEF0]/50 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </button>
              <button class="text-[#E4EEF0]/50 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </button>
            </div>
            <button id="broadcast-btn" class="bg-white text-[#1D4F4F] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] active:scale-[0.98] transition-all flex items-center gap-2">
              Broadcast <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </section>

        <!-- Feed List -->
        <section class="space-y-5" id="feed-list">
          ${fundingHtml}
          <div id="new-broadcasts-container"></div>
          ${pastUpdatesHtml}
        </section>
      </div>
    </div>
  `;
}

function initUpdates(el) {
  setTimeout(() => el.querySelector('.fade-in')?.classList.add('active'), 10);
  
  const input = el.querySelector('#broadcast-input');
  const btn = el.querySelector('#broadcast-btn');
  const container = el.querySelector('#new-broadcasts-container');

  const getLikeClass = (liked) => liked ? 'text-[#1D4F4F]' : 'text-[#16232B]/30 hover:text-[#1D4F4F]';
  const getLikeFill = (liked) => liked ? 'fill:#1D4F4F' : 'fill:none';

  const renderBroadcasts = () => {
    container.innerHTML = newBroadcasts.map(b => `
      <div class="bg-white rounded-[24px] shadow-sm overflow-hidden text-[#16232B] mb-5">
        <div class="px-6 py-5 space-y-4">
          <div class="flex items-center gap-1.5 text-[9px] text-[#16232B]/40 uppercase tracking-widest font-bold">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${b.date}
          </div>
          <p class="text-[13px] text-[#16232B] font-medium leading-relaxed">
            ${b.text}
          </p>
          <div class="flex items-center gap-6 pt-3 border-t border-[#16232B]/5">
            <button onclick="toggleLike(this, 'new', ${b.id})" class="flex items-center gap-2 transition-all ${getLikeClass(b.liked)}">
              <svg style="${getLikeFill(b.liked)}" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
              <span class="text-[11px] font-semibold">${b.likes}</span>
            </button>
            <button onclick="showToast('Comments coming soon')" class="flex items-center gap-2 text-[#16232B]/30 hover:text-[#1D4F4F] transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              <span class="text-[11px] font-semibold">0</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  };

  if (container) renderBroadcasts();

  if (btn && input) {
    btn.onclick = () => {
      const text = input.value.trim();
      if (!text) return;
      
      newBroadcasts.unshift({ id: Date.now(), date: 'JUST NOW', text, likes: 0, liked: false });
      input.value = '';
      renderBroadcasts();
      showToast('Update broadcasted to investors');
    };
  }
}

function getProfileHtml() {
  return `
    <div class="h-full flex flex-col bg-main fade-in pb-safe-extra overflow-y-auto hide-scrollbar">
      <div class="px-6 py-6 space-y-6 mt-4">
        
        <!-- Profile Hero -->
        <section class="bg-secondary rounded-[32px] shadow-xl px-6 py-8 flex flex-col items-center text-center space-y-6 text-white relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <div class="relative z-10">
            <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10">
              <img src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100" class="w-full h-full object-cover">
            </div>
            <div class="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full border-2 border-secondary flex items-center justify-center w-6 h-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
          </div>

          <div class="space-y-1 z-10">
            <h2 class="text-[22px] font-medium tracking-tight">Artisan Bakery</h2>
            <p class="text-white/40 text-[9px] font-medium uppercase tracking-[0.2em]">Partner since 2026</p>
          </div>

          <div class="flex gap-3 z-10">
            <div class="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-medium uppercase tracking-[0.15em] flex items-center gap-1.5 bg-white/5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              Verified
            </div>
            <div class="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-medium uppercase tracking-[0.15em] flex items-center gap-1.5 bg-white/5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>
              Premium
            </div>
          </div>

          <button onclick="navigate('#/edit-profile')" class="w-full mt-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/10 transition-colors z-10 active:scale-[0.98]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            Edit Profile
          </button>
        </section>

        <!-- Performance Metrics -->
        <section class="bg-primary rounded-[32px] shadow-xl shadow-primary/20 px-6 py-6 text-white flex justify-between items-center">
          <div class="space-y-1 text-center flex-1">
            <span class="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Rating</span>
            <p class="text-2xl font-normal">4.9</p>
          </div>
          <div class="w-[1px] h-8 bg-white/20"></div>
          <div class="space-y-1 text-center flex-1">
            <span class="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Rank</span>
            <p class="text-2xl font-normal">#12</p>
          </div>
          <div class="w-[1px] h-8 bg-white/20"></div>
          <div class="space-y-1 text-center flex-1">
            <span class="text-[9px] text-white/60 uppercase tracking-[0.2em] font-medium">Growth</span>
            <p class="text-2xl font-normal">98%</p>
          </div>
        </section>

        <!-- Details List -->
        <section class="bg-card rounded-[32px] shadow-xl shadow-foreground/5 overflow-hidden text-foreground">
          <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">Owner Details</p>
                <p class="text-sm font-medium">Suresh Kumar</p>
              </div>
            </div>

          </button>
          
          <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">Location</p>
                <p class="text-sm font-medium">Bandra West, Mumbai</p>
              </div>
            </div>

          </button>
          
          <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">Contact</p>
                <p class="text-sm font-medium">+91 98765 43210</p>
              </div>
            </div>

          </button>
          
          <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">Support</p>
                <p class="text-sm font-medium">suresh@bakery.com</p>
              </div>
            </div>

          </button>

          <button onclick="navigate('#/bank-accounts')" class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">Bank Accounts</p>
                <p class="text-sm font-medium">HDFC Bank ****1234</p>
              </div>
            </div>
            <div class="text-muted/40 group-hover:text-foreground transition-colors">${icons.ChevronRight}</div>
          </button>

          <button onclick="navigate('#/kyc')" class="w-full flex items-center justify-between px-6 py-5 transition-all active:bg-main text-left">
            <div class="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <div>
                <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-0.5">KYC Status</p>
                <p class="text-sm font-medium text-success">Verified</p>
              </div>
            </div>
            <div class="text-muted/40 group-hover:text-foreground transition-colors">${icons.ChevronRight}</div>
          </button>
        </section>

        <!-- Customer Support -->
        <section class="bg-secondary rounded-[32px] shadow-xl p-6 flex items-center justify-between text-white relative overflow-hidden group">
          <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
          <div class="space-y-1 z-10">
            <h3 class="font-medium text-[17px] tracking-tight">Need Help?</h3>
            <p class="text-white/60 text-[11px] font-normal">Our team is available 24/7</p>
          </div>
          <button onclick="navigate('#/support')" class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg active:scale-95 transition-all z-10 hover:brightness-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </button>
        </section>

        <!-- Logout -->
        <div class="pt-2 pb-6 text-center">
          <button onclick="navigate('#/')" class="text-muted/60 hover:text-foreground text-[10px] uppercase tracking-[0.2em] font-bold transition-colors inline-flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            LOG OUT
          </button>
        </div>

      </div>
    </div>
  `;
}

function getSettingsHtml() {
  const isDark = document.body.classList.contains('dark');
  
  return `
    <div class="h-full flex flex-col bg-main fade-in pb-20 overflow-y-auto hide-scrollbar">
      <div class="px-6 py-6 space-y-8 mt-2">
        
        <!-- Account -->
        <div class="space-y-3">
          <h3 class="text-[9px] text-secondary tracking-[0.2em] uppercase font-bold ml-2">Account</h3>
          <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button class="w-full flex items-center justify-between px-6 py-5 transition-all active:bg-main text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span class="text-[13px] font-medium">Security & Privacy</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-border"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Preferences -->
        <div class="space-y-3">
          <h3 class="text-[9px] text-secondary tracking-[0.2em] uppercase font-bold ml-2">Preferences</h3>
          <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                <span class="text-[13px] font-medium">Notifications</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-border"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <button class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                <span class="text-[13px] font-medium">Language</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-normal text-muted">English</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-border"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
            <div class="w-full flex items-center justify-between px-6 py-5 transition-all text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                <span class="text-[13px] font-medium">Dark Mode</span>
              </div>
              <div onclick="toggleDarkMode(this)" class="toggle-track">
                <div class="toggle-knob"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Support -->
        <div class="space-y-3">
          <h3 class="text-[9px] text-secondary tracking-[0.2em] uppercase font-bold ml-2">Support</h3>
          <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 overflow-hidden text-foreground">
            <button onclick="navigate('#/support')" class="w-full flex items-center justify-between px-6 py-5 border-b border-border transition-all active:bg-main text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                <span class="text-[13px] font-medium">Help Center</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-border"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <button class="w-full flex items-center justify-between px-6 py-5 transition-all active:bg-main text-left">
              <div class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span class="text-[13px] font-medium">Terms of Service</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-border"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

// Global Dark Mode Toggle Logic for Vanilla JS
window.toggleDarkMode = (btn) => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('nanopie_dark_mode', isDark);
};

function getEditProfileHtml() {
  return `
    <div class="h-full flex flex-col bg-main fade-in pb-safe-extra overflow-y-auto hide-scrollbar">
      <div class="px-6 pt-6 pb-6 space-y-8">
        
        <!-- Avatar Edit -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-foreground/10">
              <img src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100" class="w-full h-full object-cover">
            </div>
            <button class="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-main active:scale-95 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            </button>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-6 space-y-5">
          
          <div class="space-y-1.5">
            <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Store Name</label>
            <input type="text" value="Artisan Bakery" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>

          <div class="space-y-1.5">
            <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Owner Name</label>
            <input type="text" value="Suresh Kumar" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>

          <div class="space-y-1.5">
            <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Email Address</label>
            <input type="email" value="suresh@bakery.com" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>

          <div class="space-y-1.5">
            <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Phone Number</label>
            <input type="tel" value="+91 98765 43210" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>

          <div class="space-y-1.5">
            <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Store Location</label>
            <input type="text" value="Bandra West, Mumbai" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>

        </div>
      </div>

      <!-- Save Button -->
      <div class="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-4 bg-main max-w-md mx-auto z-50">
        <button onclick="showToast('Profile saved!'); navigate(-1)" class="w-full bg-secondary text-white py-[18px] rounded-2xl text-[13px] font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-xl shadow-secondary/20 hover:brightness-110">
          Save Changes
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </button>
      </div>
    </div>
  `;
}

function getBankAccountsHtml() {
  return `
    <div class="h-full flex flex-col bg-main fade-in pb-32 overflow-y-auto hide-scrollbar">
      <div class="px-6 pt-6 pb-6 space-y-6">
        <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-6 space-y-5">
          <div class="flex justify-between items-start border-b border-border pb-4">
            <div>
              <p class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium mb-1">Primary Account</p>
              <h3 class="text-[15px] font-medium text-foreground">HDFC Bank</h3>
              <p class="text-[11px] text-muted mt-1">Acct ending in 1234</p>
            </div>
            <div class="px-3 py-1 bg-success/10 text-success rounded-full text-[9px] font-bold uppercase tracking-[0.15em] flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              Verified
            </div>
          </div>
          
          <div class="space-y-3">
             <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">Account Holder</label>
             <input type="text" value="Suresh Kumar" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>
          <div class="space-y-3">
             <label class="text-[9px] text-muted uppercase tracking-[0.2em] font-medium ml-1">IFSC Code</label>
             <input type="text" value="HDFC0001234" class="w-full bg-main/50 border border-border rounded-xl px-4 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:border-secondary transition-all">
          </div>
          
          <button onclick="showToast('Submitted for Review'); navigate(-1)" class="w-full mt-4 bg-secondary text-white py-4 rounded-xl text-xs font-medium active:scale-95 transition-all">Submit for Review</button>
        </div>
      </div>
    </div>
  `;
}

function getKycHtml() {
  return `
    <div class="h-full flex flex-col bg-main fade-in pb-32 overflow-y-auto hide-scrollbar">
      <div class="px-6 pt-6 pb-6 space-y-6">
        <div class="bg-card rounded-[24px] shadow-sm shadow-foreground/5 p-8 flex flex-col items-center text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h2 class="text-lg font-medium text-foreground">KYC Verified</h2>
          <p class="text-xs text-muted leading-relaxed">Your business identity and details have been successfully verified by our team. No further action is required.</p>
        </div>
      </div>
    </div>
  `;
}

let supportMessages = [
  { sender: 'agent', text: 'Hi Artisan Bakery! I\'m your Nanopie success manager. How can I help you today?', time: '10:00 AM' }
];

function getSupportHtml() {
  const chatHtml = supportMessages.map(m => `
    <div class="flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} max-w-full">
      <div class="px-5 py-3.5 max-w-[85%] text-sm font-normal leading-relaxed ${m.sender === 'user' ? 'bg-secondary text-white rounded-3xl rounded-br-sm shadow-lg shadow-secondary/10' : 'bg-card shadow-sm text-foreground rounded-3xl rounded-bl-sm border border-border'}">
        ${m.text}
      </div>
      <span class="text-[9px] text-muted mt-1.5 px-2">${m.time}</span>
    </div>
  `).join('');

  return `
    <div class="h-full flex flex-col bg-main fade-in relative overflow-hidden">
      <div id="chat-scroll-area" class="px-6 pt-6 pb-40 space-y-6 overflow-y-auto hide-scrollbar flex-1">
        <div class="text-center mt-2">
          <span class="text-[9px] text-muted uppercase tracking-[0.2em] font-bold">Today</span>
        </div>
        ${chatHtml}
        <div id="chat-end"></div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-main border-t border-border p-4 z-50">
        <div class="flex items-center gap-3 bg-card rounded-full p-2 pr-3 shadow-xl shadow-foreground/5">
          <button class="w-10 h-10 flex items-center justify-center text-muted hover:text-secondary transition-colors rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
          </button>
          <input
            type="text"
            id="support-input"
            placeholder="Message support..."
            class="flex-1 bg-transparent border-none focus:outline-none text-[13px] font-medium text-foreground placeholder:text-muted/40"
          />
          <button
            id="support-send-btn"
            class="w-10 h-10 flex items-center justify-center bg-secondary text-white rounded-full transition-all active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function initSupport(el) {
  const input = el.querySelector('#support-input');
  const btn = el.querySelector('#support-send-btn');
  const scrollArea = el.querySelector('#chat-scroll-area');
  
  if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;

  const handleSend = () => {
    const text = input.value.trim();
    if (!text) return;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    supportMessages.push({ sender: 'user', text, time });
    input.value = '';
    
    // Refresh UI
    const app = document.getElementById('app');
    app.innerHTML = getSupportHtml();
    initSupport(app);
    
    // AI Mock Response
    setTimeout(() => {
      let reply = "Thanks for reaching out! I've logged your query and an agent will be with you shortly.";
      const low = text.toLowerCase();
      if (low.includes('loan') || low.includes('funding')) reply = "I see you're asking about funding. Your current request for ₹10,000 is under review and typically takes 24 hours.";
      else if (low.includes('bank') || low.includes('account')) reply = "You can manage your linked accounts in the 'Bank Accounts' section of your profile.";
      else if (low.includes('hello') || low.includes('hi')) reply = "Hi there! I'm the Nanopie AI assistant. How can I help your bakery today?";
      else if (low.includes('revenue')) reply = "Logging your revenue consistently helps improve your credit score for future funding!";
      
      supportMessages.push({ sender: 'agent', text: reply, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
      app.innerHTML = getSupportHtml();
      initSupport(app);
    }, 1200);
  };

  if (btn) btn.onclick = handleSend;
  if (input) input.onkeydown = (e) => { if(e.key === 'Enter') handleSend(); };
}



handleRoute();
