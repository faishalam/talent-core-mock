
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Trophy, 
  Target, 
  Users, 
  Star, 
  Zap, 
  Quote,
  ShieldCheck,
  Globe
} from 'lucide-react';

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
    <div className="text-3xl font-black text-white mb-1 tracking-tight">{value}</div>
    <div className="text-cyan-400 text-xs uppercase tracking-widest font-bold">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-all group">
    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function PublicHome() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-48 -left-24 w-72 h-72 bg-cyan-600/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Next Gen Esport Philanthropy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              EMPOWERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ESPORT TALENTS</span> FROM THE CORE
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              We provide professional-grade resources, structured coaching, and sustainable career paths for the next generation of competitive gaming champions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/career" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center space-x-2">
                <span>Join As Talent</span>
                <ChevronRight size={18} />
              </Link>
              <Link to="/foundation" className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center">
                Learn Our Mission
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/50">
              <StatCard value="250+" label="Talents Binaan" />
              <StatCard value="15+" label="Active Pro" />
              <StatCard value="5" label="Game Divisions" />
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
               <img 
                 src="https://picsum.photos/seed/esport/800/600" 
                 alt="Talent Training" 
                 className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center space-x-3 mb-2">
                    <Trophy className="text-cyan-400" size={24} />
                    <span className="text-white font-bold uppercase tracking-widest text-xs">Featured Moment</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Delta Force: National Invitational Winner 2024</h3>
               </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Users className="text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Active Members</p>
                <p className="text-lg font-black text-white">1,200+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">WHY TALENTCORE?</h2>
          <p className="text-slate-400 leading-relaxed">We don't just find players; we build professionals. Our ecosystem is designed to nurture talent from the ground up.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Target size={24} />} 
            title="Professional Curriculum" 
            desc="Structured training programs from Basic to Pro levels, led by industry veterans and ex-professionals." 
          />
          <FeatureCard 
            icon={<ShieldCheck size={24} />} 
            title="Talent Welfare" 
            desc="Priority on physical health, mental wellbeing, and sustainable career development for all our athletes." 
          />
          <FeatureCard 
            icon={<Globe size={24} />} 
            title="Global Pipeline" 
            desc="Direct pathways to top-tier organizations and professional leagues across Asia and beyond." 
          />
        </div>
      </section>

      {/* Quote / Founder Message */}
      <section className="bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 opacity-5">
           <Quote size={200} className="text-cyan-400" />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 rounded-full border-4 border-cyan-500/20 p-2 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/founder/200/200" alt="Founder" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex-grow">
                 <Quote size={48} className="text-cyan-400 mb-6 opacity-40" />
                 <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed mb-8 italic">
                   "Esports is no longer just a hobby; it's a future. Our mission is to ensure that every passionate gamer has the foundation they need to turn that dream into a reality."
                 </p>
                 <div>
                   <h4 className="text-white font-bold text-lg">Alex 'Core' Pratama</h4>
                   <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Founder & Chairman, TalentCore Foundation</p>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Partnerships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Trusted by Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {['RAZER', 'LOGITECH', 'NVIDIA', 'INTEL', 'ASUS'].map(brand => (
              <div key={brand} className="text-2xl font-black text-white italic tracking-tighter">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="bg-white/20 h-8 rounded-full w-1"></div>
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">READY TO START YOUR <br/> PROFESSIONAL JOURNEY?</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
            <Link to="/career" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Recruitment Open
            </Link>
            <Link to="/contact" className="px-12 py-5 bg-slate-900/40 text-white border border-white/20 backdrop-blur rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-slate-900/60 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
