import React from 'react';
import { LayoutDashboard, Activity, Car, FileText, Settings, X } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'dds', label: 'DDS (Slot Parkir)', icon: Activity },
    { id: 'tds', label: 'TDS (Akses)', icon: Car },
    { id: 'laporan', label: 'Laporan', icon: FileText },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full bg-slate-950 border-r border-slate-800 w-64 shrink-0">
      <div>
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white font-bold w-9 h-9 flex items-center justify-center rounded-lg shadow-lg shadow-blue-600/30 transition-transform duration-300 hover:rotate-6">
              U
            </span>
            <span className="font-bold text-white text-lg tracking-wider">UNIGUARD</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-slate-400 hover:text-white p-1 rounded-lg transition-colors interactive-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 interactive-btn ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/80 text-xs text-slate-400 space-y-1">
          <p className="text-slate-300 font-medium">Sistem v2.4.1</p>
          <p className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Status: Online
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar with Smooth Width Transition */}
      <aside
        className={`hidden md:flex shrink-0 h-full transition-all duration-300 ease-in-out overflow-hidden ${
          sidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 border-r-0'
        }`}
      >
        <div className="w-64 shrink-0 h-full">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer Backdrop & Slide-out */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative h-full z-20 flex shadow-2xl animate-fade-in-up">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;