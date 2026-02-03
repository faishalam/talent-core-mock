
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Gamepad2, 
  Trophy, 
  Briefcase, 
  Newspaper, 
  MapPin, 
  Phone, 
  LayoutDashboard, 
  Settings, 
  Inbox,
  LogOut,
  Menu,
  X,
  ChevronRight,
  UserPlus
} from 'lucide-react';

// Pages
import PublicHome from './pages/PublicHome';
import Roster from './pages/Roster';
import Matches from './pages/Matches';
import Career from './pages/Career';
import AdminDashboard from './pages/AdminDashboard';
import GamesCatalog from './pages/GamesCatalog';
import Foundation from './pages/Foundation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Foundation', path: '/foundation', icon: <Users size={18} /> },
    { name: 'Games', path: '/games', icon: <Gamepad2 size={18} /> },
    { name: 'Roster', path: '/roster', icon: <Users size={18} /> },
    { name: 'Matches', path: '/matches', icon: <Trophy size={18} /> },
    { name: 'Career', path: '/career', icon: <Briefcase size={18} /> },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={18} /> },
    { name: 'Content', path: '/admin/content', icon: <Newspaper size={18} /> },
    { name: 'Matches', path: '/admin/matches', icon: <Trophy size={18} /> },
    { name: 'Recruitment', path: '/admin/recruitment', icon: <UserPlus size={18} /> },
    { name: 'Inbox', path: '/admin/inbox', icon: <Inbox size={18} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
  ];

  const activeLinks = isAdmin ? adminLinks : navLinks;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isAdmin ? 'bg-slate-900 border-b border-slate-800' : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-cyan-500/20">
                TC
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">TALENTCORE</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">Foundation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {activeLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  location.pathname === link.path 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            
            <div className="ml-4 pl-4 border-l border-slate-800 flex items-center space-x-3">
              {isAdmin ? (
                <Link to="/" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                  <LogOut size={16} />
                  <span>Exit CMS</span>
                </Link>
              ) : (
                <Link to="/admin" className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-lg text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5">
                  Admin Portal
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-20 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {activeLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-3 py-4 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800">
             <Link
                to={isAdmin ? "/" : "/admin"}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-cyan-600 text-white rounded-md font-bold"
              >
                {isAdmin ? "Exit CMS" : "Admin Portal"}
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded flex items-center justify-center font-black text-sm italic text-white">TC</div>
            <span className="text-lg font-bold tracking-tight text-white uppercase">TalentCore</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering the next generation of esport athletes through structured training, elite facilities, and professional career pathways.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Foundation</h4>
          <ul className="space-y-4">
            <li><Link to="/foundation" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">About Us</Link></li>
            <li><Link to="/foundation" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Our Programs</Link></li>
            <li><Link to="/foundation" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Core Values</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center space-x-2"><span>Instagram</span></a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center space-x-2"><span>Twitter</span></a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center space-x-2"><span>YouTube</span></a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">FAQ</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-slate-500 text-xs">
          &copy; 2024 TalentCore Foundation. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <p className="text-slate-500 text-xs flex items-center">
            <MapPin size={12} className="mr-1" /> Jakarta, Indonesia
          </p>
          <p className="text-slate-500 text-xs flex items-center">
            <Phone size={12} className="mr-1" /> +62 21 555 0123
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicHome />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/games" element={<GamesCatalog />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/career" element={<Career />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/:tab" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
