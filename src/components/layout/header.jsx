import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header = ({ activeTab, sidebarOpen, setSidebarOpen }) => {
  const getPageTitle = (tab) => {
    switch (tab) {
      case 'dashboard': return 'Command Center Dashboard';
      case 'dds': return 'DDS - Status Slot Parkir';
      case 'tds': return 'TDS - Live Access Log';
      case 'laporan': return 'Laporan & Analitik';
      case 'pengaturan': return 'Pengaturan Sistem';
      default: return 'Command Center';
    }
  };

  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 px-4 md:px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors interactive-btn"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-base md:text-xl font-bold text-white tracking-wide truncate">
          {getPageTitle(activeTab)}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block w-48 md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 interactive-btn" />
          <input
            type="text"
            placeholder="Cari plat nomor..."
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <button className="relative p-2 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 rounded-lg transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-white leading-none">Admin Pusat</p>
            <p className="text-[10px] text-slate-500 mt-1 leading-none">Security Dept.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;