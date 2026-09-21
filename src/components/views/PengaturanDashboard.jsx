import React from 'react';
import StatCard from '../common/statcard';
import { Settings, User} from 'lucide-react';

const PengaturanDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <StatCard className="lg:col-span-1">
        <div className="card-header">
          <h3 className="card-title"><User className="w-5 h-5 text-blue-500" /> Profil Sistem</h3>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-400">Admin Pusat</p>
            <p className="text-lg font-bold text-white">Security Dept.</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-400">Versi Sistem</p>
            <p className="text-lg font-bold text-white">v2.4.1 (Online)</p>
          </div>
        </div>
      </StatCard>

      <StatCard className="lg:col-span-2">
        <div className="card-header">
          <h3 className="card-title"><Settings className="w-5 h-5 text-blue-500" /> Konfigurasi Gate & Sensor</h3>
        </div>
        <div className="p-10 flex items-center justify-center text-slate-500">
          <p>Menu konfigurasi sedang dalam pengembangan...</p>
        </div>
      </StatCard>
    </div>
  );
};

export default PengaturanDashboard;