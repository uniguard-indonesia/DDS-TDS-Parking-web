import React, { useState, useEffect, useMemo } from 'react';
import UniguardDataService from './services/UniguardDataService';
import DashboardLayout from './components/layout/Dashboardlayout';
import DdsDashboard from './components/views/DdsDashboard';
import TdsDashboard from './components/views/TdsDashboard';
// 1. Import the new pages here:
import LaporanDashboard from './components/views/LaporanDashboard';
import PengaturanDashboard from './components/views/PengaturanDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [ddsData, setDdsData] = useState(null);
  const [tdsData, setTdsData] = useState(null);

  const dataService = useMemo(() => new UniguardDataService(), []);

  useEffect(() => {
    setDdsData(dataService.getDdsData());
    setTdsData(dataService.getTdsData());

    const interval = setInterval(() => {
      setDdsData(dataService.getDdsData());
      setTdsData(dataService.getTdsData());
    }, 5000);

    return () => clearInterval(interval);
  }, [dataService]);

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      
      {activeTab === 'dashboard' && (
        <div className="flex flex-col gap-6">
          {ddsData && <DdsDashboard data={ddsData} />}
          {tdsData && <TdsDashboard data={tdsData} />}
        </div>
      )}

      {activeTab === 'dds' && ddsData && <DdsDashboard data={ddsData} />}
      {activeTab === 'tds' && tdsData && <TdsDashboard data={tdsData} />}
      
      {/* 2. Add the conditions for the new tabs here: */}
      {activeTab === 'laporan' && <LaporanDashboard />}
      {activeTab === 'pengaturan' && <PengaturanDashboard />}

    </DashboardLayout>
  );
}