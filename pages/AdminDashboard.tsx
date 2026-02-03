
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Gamepad2, 
  Trophy, 
  Newspaper, 
  Inbox, 
  Settings,
  Plus,
  MoreVertical,
  Check,
  X,
  Eye,
  Edit,
  Trash2,
  ExternalLink
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const sidebarItems = [
    { name: 'Overview', icon: <BarChart3 size={20} /> },
    { name: 'Talents', icon: <Users size={20} /> },
    { name: 'Matches', icon: <Trophy size={20} /> },
    { name: 'Games', icon: <Gamepad2 size={20} /> },
    { name: 'News', icon: <Newspaper size={20} /> },
    { name: 'Applicants', icon: <Plus size={20} />, badge: 12 },
    { name: 'Inquiries', icon: <Inbox size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 hidden lg:block p-6 space-y-2">
        <div className="mb-10 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] px-3">Admin Console</div>
        {sidebarItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all ${
              activeTab === item.name 
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="text-sm font-semibold">{item.name}</span>
            </div>
            {item.badge && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-white italic uppercase tracking-tight">{activeTab}</h1>
            <p className="text-slate-400 text-sm">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <button className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold flex items-center space-x-2 transition-all">
            <Plus size={18} />
            <span>Add New {activeTab}</span>
          </button>
        </div>

        {/* Dashboard Cards Overview */}
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Total Talents', value: '42', trend: '+3 this month', color: 'text-cyan-400' },
              { label: 'Open Positions', value: '8', trend: '2 ending soon', color: 'text-purple-400' },
              { label: 'Unread Applications', value: '12', trend: 'Needs review', color: 'text-yellow-400' },
              { label: 'Site Visits', value: '14.2k', trend: '+12% from last week', color: 'text-green-400' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                <p className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] text-slate-500 font-medium">{stat.trend}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tables Mockup */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white uppercase italic tracking-tight">Recent {activeTab}</h3>
            <div className="flex space-x-2">
              <div className="relative">
                <input type="text" placeholder="Search..." className="bg-slate-950 border border-slate-800 rounded-lg pl-3 pr-8 py-1.5 text-xs text-white focus:border-cyan-500 outline-none w-48" />
                <Eye size={14} className="absolute right-3 top-2 text-slate-500" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/50 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden">
                           <img src={`https://picsum.photos/seed/admin${i}/40/40`} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">Item Entry #{i}04{i}</p>
                          <p className="text-xs text-slate-500">System generated metadata for record</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-slate-400">Oct {12 + i}, 2024</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                        i % 2 === 0 ? 'bg-cyan-500/10 text-cyan-400' : 'bg-green-500/10 text-green-400'
                      }`}>
                        {i % 2 === 0 ? 'Pending' : 'Published'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"><Edit size={14} /></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-400 bg-slate-800 rounded-lg transition-colors"><Trash2 size={14} /></button>
                        <button className="p-1.5 text-slate-400 hover:text-cyan-400 bg-slate-800 rounded-lg transition-colors"><ExternalLink size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-950/30 border-t border-slate-800 flex items-center justify-between">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Showing 5 of 124 records</p>
            <div className="flex space-x-2">
               <button className="px-3 py-1 bg-slate-800 text-slate-400 rounded-md text-xs font-bold hover:text-white disabled:opacity-50" disabled>Previous</button>
               <button className="px-3 py-1 bg-slate-800 text-white rounded-md text-xs font-bold hover:bg-slate-700">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
