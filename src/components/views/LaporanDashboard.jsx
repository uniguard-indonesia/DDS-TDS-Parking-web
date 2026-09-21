import React from 'react';
import StatCard from '../common/statcard';
import { FileText, Download } from 'lucide-react';

const LaporanDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <StatCard className="w-full">
        <div className="card-header">
          <h3 className="card-title"><FileText className="w-5 h-5 text-blue-500" /> Laporan & Analitik</h3>
          <button className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
        <div className="p-10 flex items-center justify-center text-slate-500">
          <p>Modul Laporan sedang dalam pengembangan...</p>
        </div>
      </StatCard>
    </div>
  );
};

export default LaporanDashboard;