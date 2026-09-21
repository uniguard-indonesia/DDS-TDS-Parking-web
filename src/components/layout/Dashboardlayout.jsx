import React, { useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';

const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-900 text-white font-sans overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-slate-950/40">
        <Header 
          activeTab={activeTab} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        {/* Keyed container or animation wrapper */}
        <main key={activeTab} className="flex-1 overflow-y-auto px-4 md:px-6 py-4 pb-20 md:pb-6 relative z-10 space-y-6 animate-fade-in-up">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;