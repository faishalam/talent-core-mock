
import React from 'react';
import { Target, Users, Heart, Zap, Shield, Rocket } from 'lucide-react';

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors">
    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProgramLevel = ({ level, duration, desc, features }: { level: string; duration: string; desc: string; features: string[] }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
      <h4 className="text-9xl font-black text-white leading-none italic uppercase">{level[0]}</h4>
    </div>
    <div className="relative z-10">
      <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">{duration}</div>
      <h3 className="text-3xl font-black text-white italic uppercase mb-4">{level}</h3>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-xs">{desc}</p>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center space-x-3 text-sm text-slate-300">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Foundation() {
  return (
    <div className="pb-20">
      <section className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase leading-none tracking-tighter mb-8">BUILDING THE FUTURE</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              TalentCore Foundation is a philanthropic initiative dedicated to professionalizing the esport ecosystem by providing structured education, financial aid, and career mentorship to deserving talents.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-black text-white italic mb-1">2021</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Founded</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white italic mb-1">Jakarta</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Headquarters</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white italic mb-1">5,000+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center italic uppercase mb-16 tracking-tight">OUR CORE VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Heart />} 
            title="Joyful Learning" 
            desc="We believe education is most effective when fueled by passion and enjoyment of the craft." 
          />
          <ValueCard 
            icon={<Shield />} 
            title="Community Spirit" 
            desc="Fostering a sense of belonging and mutual support within our diverse talent network." 
          />
          <ValueCard 
            icon={<Target />} 
            title="Excellence First" 
            desc="Upholding the highest standards of professional conduct and competitive performance." 
          />
        </div>
      </section>

      <section className="bg-slate-950 py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tight mb-4 text-center">TRAINING STRUCTURE</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto">A tiered progression system designed to take you from a casual enthusiast to a professional athlete.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramLevel 
              level="Basic" 
              duration="1-3 Months" 
              desc="Fundamentals of competitive play and team dynamics."
              features={['Mechanic refinement', 'Communication basics', 'Mental resilience intro']}
            />
            <ProgramLevel 
              level="Intermediate" 
              duration="3-6 Months" 
              desc="Advanced strategies and tournament preparation."
              features={['Strategic map play', 'Role specialization', 'Video analysis sessions']}
            />
            <ProgramLevel 
              level="Pro Development" 
              duration="6-12 Months" 
              desc="Elite performance and professional exposure."
              features={['High-stakes matches', 'Sponsorship training', 'Career management']}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
