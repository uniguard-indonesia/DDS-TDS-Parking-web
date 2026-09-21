import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const StatusBadge = ({ status }) => {
  if (status === 'GRANTED') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="w-3.5 h-3.5" /> ACCESS GRANTED
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
      <XCircle className="w-3.5 h-3.5" /> ACCESS DENIED
    </span>
  );
};

export default StatusBadge;