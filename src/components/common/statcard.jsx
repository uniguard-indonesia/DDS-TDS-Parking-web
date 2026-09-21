import React from 'react';
import { Car, Activity, ShieldAlert } from 'lucide-react';

const StatCard = ({ title, value, iconName, trend, children, className = '' }) => {
  if (children) {
    return (
      <div className={`card-base ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`card-base p-5 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        </div>
        <div className="icon-box text-blue-500">
          {iconName === 'car' && <Car className="w-5 h-5" />}
          {iconName === 'activity' && <Activity className="w-5 h-5" />}
          {iconName === 'alert' && <ShieldAlert className="w-5 h-5" />}
        </div>
      </div>
      {trend && <div className="mt-4 text-xs font-medium text-slate-500">{trend}</div>}
    </div>
  );
};

export default StatCard;  