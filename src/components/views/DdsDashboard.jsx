import React from 'react';
import StatCard from '../common/statcard';
import { Activity, Minus, ArrowRight } from 'lucide-react';

const DdsDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <StatCard className="lg:col-span-2 flex flex-col">
      <div className="card-header">
        <div className="card-title">
          <Activity className="w-5 h-5 text-blue-500" /> DDS - Status Slot Parkir
        </div>
        <span className="badge-live">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Update
        </span>
      </div>
      
      <div className="p-6 flex flex-col md:flex-row gap-8 flex-1">
        {/* Digital Signage */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="signage-box">
            <div className="bg-blue-600 p-3 text-center">
              <div className="text-white font-bold text-lg flex items-center justify-center gap-2 tracking-wide">
                <span className="bg-white text-blue-600 px-2 rounded">P</span> PARKING AVAILABLE
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center space-y-4 font-mono">
              {data.ddsLevels?.map((level) => (
                <div key={level.id} className="flex justify-between items-center text-xl border-b border-slate-800/50 pb-2 last:border-0">
                  <span className="text-slate-300 font-semibold">{level.level}</span>
                  <div className={`flex items-center gap-3 font-bold text-2xl ${level.status === 'full' ? 'text-rose-500' : 'text-emerald-500'}`}>
                    {level.status === 'full' ? 'FULL' : level.available}
                    {level.status === 'full' ? <Minus className="w-6 h-6 stroke-[3]" /> : <ArrowRight className="w-6 h-6 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 p-2 text-center text-xs text-slate-500 border-t border-slate-800">
              UNIGUARD SMART PARKING
            </div>
          </div>
        </div>

        {/* Sensor Grid */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider flex items-center justify-between">
            Sensor View (Lantai 1)
            <div className="flex gap-3 text-xs normal-case tracking-normal">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>Kosong</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>Terisi</span>
            </div>
          </h4>
          <div className="card-base p-4 flex-1 flex items-center justify-center relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-slate-900/50 border-y border-dashed border-slate-700 w-full z-0"></div>
            <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-8 gap-3 z-10 w-full relative">
              {data.sensorGrid?.map((slot) => (
                <div key={slot.id} className="relative flex justify-center">
                  <div className="sensor-slot">
                    <div className={`sensor-dot ${slot.isOccupied ? 'bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)]' : 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StatCard>
  );
};

export default DdsDashboard;