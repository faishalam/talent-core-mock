
import React from 'react';
import { Gamepad2, Users, BookOpen, Target } from 'lucide-react';

const GAME_CATALOG = [
  {
    title: 'Valorant',
    description: 'A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.',
    roles: ['Duelist', 'Initiator', 'Controller', 'Sentinel'],
    curriculum: 'Focus on crosshair placement, utility usage, and site execution strategies.',
    image: 'https://picsum.photos/seed/valorant-art/600/400'
  },
  {
    title: 'Mobile Legends',
    description: 'The premier mobile MOBA experience requiring lightning-fast reflexes and macro intelligence.',
    roles: ['Jungler', 'Roamer', 'Gold Lane', 'Mid Lane', 'Exp Lane'],
    curriculum: 'Rotation patterns, draft analysis, and objective-based teamfighting.',
    image: 'https://picsum.photos/seed/mlbb-art/600/400'
  },
  {
    title: 'PUBG Mobile',
    description: 'Strategic battle royale survival where position and tactical movement are key to the dinner.',
    roles: ['IGL', 'Scout', 'Fragger', 'Support'],
    curriculum: 'Circle prediction, terrain exploitation, and vehicle-based rotations.',
    image: 'https://picsum.photos/seed/pubg-art/600/400'
  }
];

export default function GamesCatalog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">GAME CATALOG</h1>
        <p className="text-slate-400 max-w-xl">Explore our supported game divisions and the specialized training curriculum we provide for each.</p>
      </div>

      <div className="space-y-32">
        {GAME_CATALOG.map((game, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
                 <img src={game.image} alt={game.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-4xl font-black text-white italic uppercase mb-4 tracking-tight">{game.title}</h2>
                <p className="text-slate-400 leading-relaxed text-lg">{game.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                    <Users size={16} />
                    <span>Roles We Train</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {game.roles.map(role => (
                      <span key={role} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-purple-400 font-bold uppercase tracking-widest text-xs">
                    <BookOpen size={16} />
                    <span>Curriculum Focus</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{game.curriculum}</p>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-2">
                <Target size={16} className="text-cyan-400" />
                <span>View Full Curriculum</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
