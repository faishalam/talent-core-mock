
import React, { useState } from 'react';
import { GameDivision, Player } from '../types';
import { Search, Filter, Trophy, Star, ChevronRight, X } from 'lucide-react';

const MOCK_PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Andi Wijaya',
    ign: 'Skywalker',
    division: GameDivision.VALORANT,
    role: 'Duelist',
    image: 'https://picsum.photos/seed/p1/400/500',
    stats: { kda: '1.45', winrate: '68%', matches: 142 },
    achievements: ['MVP Valorant Masters 2023', 'Top 5 APAC Challenger']
  },
  {
    id: '2',
    name: 'Sarah Kim',
    ign: 'Luna',
    division: GameDivision.VALORANT,
    role: 'Controller',
    image: 'https://picsum.photos/seed/p2/400/500',
    stats: { kda: '1.20', winrate: '62%', matches: 98 },
    achievements: ['Rising Star Award 2024']
  },
  {
    id: '3',
    name: 'Budi Santoso',
    ign: 'IronFist',
    division: GameDivision.MOBILE_LEGENDS,
    role: 'Jungler',
    image: 'https://picsum.photos/seed/p3/400/500',
    stats: { kda: '4.80', winrate: '74%', matches: 310 },
    achievements: ['MPL S12 Grand Finalist']
  },
  {
    id: '4',
    name: 'Rina Putri',
    ign: 'Valkyrie',
    division: GameDivision.PUBG_MOBILE,
    role: 'Sniper',
    image: 'https://picsum.photos/seed/p4/400/500',
    stats: { kda: '2.40', winrate: '45%', matches: 204 },
    achievements: ['PMPL Indonesia Top Fragger']
  }
];

const PlayerCard = ({ player, onClick }: { player: Player; onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-all hover:-translate-y-1"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img src={player.image} alt={player.ign} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <div className="flex justify-between items-end">
        <div>
          <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{player.division}</div>
          <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{player.ign}</h3>
          <p className="text-slate-400 text-xs font-medium">{player.name}</p>
        </div>
        <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  </div>
);

const PlayerModal = ({ player, onClose }: { player: Player; onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-slate-900 border border-slate-800 rounded-[2rem] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row">
      <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white z-10">
        <X size={20} />
      </button>
      
      <div className="w-full md:w-2/5 h-[400px] md:h-auto">
        <img src={player.image} alt={player.ign} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-8 md:p-12 w-full md:w-3/5 overflow-y-auto max-h-[70vh] md:max-h-none">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            {player.division} • {player.role}
          </div>
          <h2 className="text-4xl font-black text-white italic uppercase mb-1">{player.ign}</h2>
          <p className="text-slate-400 text-lg font-medium">{player.name}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">KDA Ratio</p>
            <p className="text-2xl font-black text-white">{player.stats.kda}</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Win Rate</p>
            <p className="text-2xl font-black text-cyan-400">{player.stats.winrate}</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Total Games</p>
            <p className="text-2xl font-black text-white">{player.stats.matches}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center">
            <Trophy size={16} className="text-cyan-400 mr-2" />
            Major Achievements
          </h4>
          <ul className="space-y-3">
            {player.achievements.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm">
                <Star size={14} className="mt-1 text-cyan-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default function Roster() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filters = ['All', ...Object.values(GameDivision)];
  const filteredPlayers = activeFilter === 'All' 
    ? MOCK_PLAYERS 
    : MOCK_PLAYERS.filter(p => p.division === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">DIGITAL ROSTER</h1>
          <p className="text-slate-400 max-w-xl">Meet the elite athletes of TalentCore Foundation. Filter through our divisions to find your favorite players.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === f 
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPlayers.map(player => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            onClick={() => setSelectedPlayer(player)}
          />
        ))}
      </div>

      {selectedPlayer && (
        <PlayerModal 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}
    </div>
  );
}
