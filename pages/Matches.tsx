
import React, { useState } from 'react';
import { Match } from '../types';
import { Trophy, Calendar, Clock, ChevronRight, Activity } from 'lucide-react';

const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    game: 'Valorant',
    opponent: 'Team Secret',
    opponentLogo: 'https://picsum.photos/seed/ts/100/100',
    tournament: 'APAC Challengers 2024',
    date: 'Today',
    time: '19:00 WIB',
    status: 'Live',
    result: { ourScore: 12, theirScore: 9, won: false }
  },
  {
    id: '2',
    game: 'Mobile Legends',
    opponent: 'EVOS Glory',
    opponentLogo: 'https://picsum.photos/seed/evos/100/100',
    tournament: 'MPL Indonesia S14',
    date: 'Aug 24, 2024',
    time: '15:30 WIB',
    status: 'Upcoming'
  },
  {
    id: '3',
    game: 'Valorant',
    opponent: 'Rex Regum Qeon',
    opponentLogo: 'https://picsum.photos/seed/rrq/100/100',
    tournament: 'VCT ID Open Qualifier',
    date: 'Aug 20, 2024',
    time: '10:00 WIB',
    status: 'Finished',
    result: { ourScore: 2, theirScore: 0, won: true }
  }
];

const MatchCard = ({ match }: { match: Match }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all group">
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex items-center space-x-3">
        <div className="px-3 py-1 bg-slate-800 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-widest">
          {match.game}
        </div>
        <span className="text-slate-500 text-xs font-medium tracking-tight">• {match.tournament}</span>
      </div>
      <div className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-widest ${
        match.status === 'Live' ? 'text-red-500' : match.status === 'Upcoming' ? 'text-cyan-400' : 'text-slate-500'
      }`}>
        {match.status === 'Live' && <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>}
        <span>{match.status}</span>
      </div>
    </div>

    <div className="flex items-center justify-between mb-8 px-4">
      <div className="flex flex-col items-center space-y-3 w-1/3">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-cyan-500/10">TC</div>
        <span className="text-sm font-bold text-white uppercase tracking-tighter">TalentCore</span>
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        {match.status === 'Upcoming' ? (
          <div className="text-center">
             <div className="text-slate-500 text-xs font-bold uppercase mb-1">VS</div>
             <div className="text-white text-lg font-black tracking-tight">{match.time}</div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <span className={`text-4xl md:text-5xl font-black ${match.result?.won ? 'text-cyan-400' : 'text-white'}`}>{match.result?.ourScore}</span>
            <span className="text-slate-600 text-2xl font-black">:</span>
            <span className={`text-4xl md:text-5xl font-black ${!match.result?.won && match.status === 'Finished' ? 'text-cyan-400' : 'text-white'}`}>{match.result?.theirScore}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center space-y-3 w-1/3">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
          <img src={match.opponentLogo} alt={match.opponent} className="w-full h-full object-contain" />
        </div>
        <span className="text-sm font-bold text-white uppercase tracking-tighter text-center">{match.opponent}</span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-6 border-t border-slate-800">
      <div className="flex items-center space-x-6 text-slate-400">
        <div className="flex items-center space-x-2">
          <Calendar size={14} className="text-slate-500" />
          <span className="text-xs font-medium">{match.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-slate-500" />
          <span className="text-xs font-medium">{match.time}</span>
        </div>
      </div>
      <button className="text-cyan-400 hover:text-cyan-300 text-xs font-bold uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
        Match Details
        <ChevronRight size={14} className="ml-1" />
      </button>
    </div>
  </div>
);

export default function Matches() {
  const liveMatch = MOCK_MATCHES.find(m => m.status === 'Live');
  const others = MOCK_MATCHES.filter(m => m.status !== 'Live');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-4">MATCH RESULTS & SCHEDULE</h1>
        <p className="text-slate-400 max-w-xl">Keep track of our professional teams as they compete in major tournaments around the world.</p>
      </div>

      {liveMatch && (
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="text-red-500 animate-pulse" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Ongoing Battles</h2>
          </div>
          <MatchCard match={liveMatch} />
        </div>
      )}

      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="text-cyan-400" />
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">Upcoming & Past Results</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {others.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}
