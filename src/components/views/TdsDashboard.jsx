import React from 'react';
import StatCard from '../common/statcard';
import StatusBadge from '../common/statusbadge';
import { Settings, Car } from 'lucide-react';

const TdsDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
      <StatCard className="lg:col-span-1 flex flex-col mb-6 lg:mb-0">
        <div className="card-header">
          <h3 className="card-title"><Settings className="w-5 h-5 text-blue-500" /> Gate Status</h3>
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
          {data.gateStatus?.map((gate) => (
            <div key={gate.id} className="card-base p-4 flex items-center justify-between">
              <div>
                <h4 className="text-slate-200 font-medium text-sm">{gate.name}</h4>
                <p className="text-xs text-slate-500 mt-1 capitalize">Mode: Otomatis (ANPR)</p>
              </div>
              <div>
                {gate.status === 'normal' && <span className="status-normal">Normal</span>}
                {gate.status === 'closed' && <span className="status-closed">Ditutup</span>}
                {gate.status === 'maintenance' && <span className="status-maint">Maint.</span>}
              </div>
            </div>
          ))}
        </div>
      </StatCard>

      <StatCard className="w-full lg:col-span-3">
        <div className="card-header">
          <h3 className="card-title"><Car className="w-5 h-5 text-blue-500" /> TDS - Live Access Log</h3>
          <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead className="data-table-head">
              <tr>
                <th className="data-table-cell font-medium">Waktu</th>
                <th className="data-table-cell font-medium">Plat Nomor</th>
                <th className="data-table-cell font-medium">Status Akses</th>
                <th className="data-table-cell font-medium">Gate</th>
                <th className="data-table-cell font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {data.tdsLogs?.map((log) => (
                <tr key={log.id} className="data-table-row">
                  <td className="data-table-cell text-slate-300 font-mono text-xs">{log.time}</td>
                  <td className="data-table-cell"><span className="badge-plate">{log.plate}</span></td>
                  <td className="data-table-cell"><StatusBadge status={log.status} /></td>
                  <td className="data-table-cell text-slate-300">{log.gate}</td>
                  <td className="data-table-cell text-right">
                    <button className="text-slate-400 hover:text-white transition-colors">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </StatCard>
    </div>
  );
};

export default TdsDashboard;