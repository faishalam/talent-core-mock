
import React, { useState } from 'react';
import { Briefcase, UserPlus, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Career() {
  const [selectedType, setSelectedType] = useState<'Talent' | 'Staff' | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {!selectedType ? (
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tight mb-8">JOIN OUR ECOSYSTEM</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">We are looking for dedicated individuals to join our mission of professionalizing esports. Choose your pathway below.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={() => setSelectedType('Talent')}
              className="group relative bg-slate-900 border border-slate-800 p-12 rounded-[3rem] text-left hover:border-cyan-500/50 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                <UserPlus size={32} />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tight mb-4">Talent Recruitment</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">For aspiring players, streamers, and competitive gaming athletes looking for professional training and representation.</p>
              <ul className="space-y-3 mb-12">
                {['Direct Pro Pipeline', 'Full Scholarship Training', 'Premium Welfare Facilities'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-cyan-400 font-bold uppercase tracking-widest text-sm">
                Open Registration <ChevronRight size={16} className="ml-2" />
              </div>
            </button>

            <button 
              onClick={() => setSelectedType('Staff')}
              className="group relative bg-slate-900 border border-slate-800 p-12 rounded-[3rem] text-left hover:border-purple-500/50 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
              <div className="w-16 h-16 bg-purple-400/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tight mb-4">Staff & Volunteer</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">For coaches, analysts, content creators, event managers, and those passionate about building the esport industry.</p>
              <ul className="space-y-3 mb-12">
                {['Collaborative Environment', 'Industry Networking', 'Skill Development'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-purple-400 font-bold uppercase tracking-widest text-sm">
                View Open Positions <ChevronRight size={16} className="ml-2" />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-500">
          <button 
            onClick={() => setSelectedType(null)}
            className="text-slate-400 hover:text-white mb-8 flex items-center font-bold uppercase tracking-widest text-xs"
          >
            ← Back to Pathways
          </button>
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tight mb-2">
                {selectedType === 'Talent' ? 'Player Registration' : 'Job Application'}
              </h2>
              <p className="text-slate-400">Complete the form below to begin your application process.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {selectedType === 'Talent' ? 'In-Game Name (IGN)' : 'Email Address'}
                  </label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder={selectedType === 'Talent' ? 'Skywalker' : 'john@example.com'} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {selectedType === 'Talent' ? 'Main Game & Rank' : 'Applied Position'}
                </label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all">
                  {selectedType === 'Talent' ? (
                    <>
                      <option>Valorant (Radiant/Immortal)</option>
                      <option>Mobile Legends (Mythical Glory)</option>
                      <option>PUBG Mobile (Ace/Conqueror)</option>
                    </>
                  ) : (
                    <>
                      <option>Head Coach - Valorant</option>
                      <option>Esport Content Creator</option>
                      <option>Social Media Manager</option>
                    </>
                  )}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {selectedType === 'Talent' ? 'Experience / Achievements' : 'Why join TalentCore?'}
                </label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="Tell us more about yourself..."></textarea>
              </div>

              {selectedType === 'Staff' && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Upload CV (PDF)</label>
                  <div className="border-2 border-dashed border-slate-800 rounded-xl p-8 text-center hover:border-cyan-500/50 cursor-pointer transition-all">
                    <FileText className="mx-auto text-slate-600 mb-2" size={32} />
                    <p className="text-sm text-slate-500">Click or drag and drop your resume file</p>
                  </div>
                </div>
              )}

              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-[1.02] ${selectedType === 'Talent' ? 'bg-cyan-500 text-white shadow-cyan-500/20' : 'bg-purple-600 text-white shadow-purple-600/20'}`}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
