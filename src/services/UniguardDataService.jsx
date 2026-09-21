class UniguardDataService {
  constructor() {
    this.summaryStats = [
      { id: 'stat-1', title: 'Total Kendaraan Masuk', value: '1,248', iconName: 'car', trend: '+12% hari ini' },
      { id: 'stat-2', title: 'Total Slot Kosong', value: '95', iconName: 'activity', trend: 'Dari total 500 slot' },
      { id: 'stat-3', title: 'Total Akses Ditolak', value: '7', iconName: 'alert', trend: '-2% dari kemarin' },
    ];

    this.ddsLevels = [
      { id: 'lvl-bs', level: 'BASEMENT', available: 35, status: 'available', total: 100 },
      { id: 'lvl-1', level: 'LANTAI 1', available: 12, status: 'available', total: 100 },
      { id: 'lvl-2', level: 'LANTAI 2', available: 0, status: 'full', total: 100 },
      { id: 'lvl-3', level: 'LANTAI 3', available: 48, status: 'available', total: 100 },
    ];

    this.tdsLogs = [
      { id: 1, time: '10:45:22', plate: 'B 1234 XYZ', status: 'GRANTED', gate: 'Gate 1 Masuk' },
      { id: 2, time: '10:44:10', plate: 'D 5678 AB', status: 'GRANTED', gate: 'Gate 2 Keluar' },
      { id: 3, time: '10:42:15', plate: 'B 9876 ABC', status: 'DENIED', gate: 'Gate 1 Masuk' },
      { id: 4, time: '10:39:05', plate: 'F 1111 DD', status: 'GRANTED', gate: 'Gate 3 VIP' },
      { id: 5, time: '10:35:50', plate: 'Z 9999 ZZ', status: 'DENIED', gate: 'Gate 2 Keluar' },
    ];

    this.gateStatus = [
      { id: 1, name: 'Gate 1 (Utama Masuk)', status: 'normal' },
      { id: 2, name: 'Gate 2 (Utama Keluar)', status: 'normal' },
      { id: 3, name: 'Gate 3 (VIP)', status: 'closed' },
      { id: 4, name: 'Gate 4 (Loading Dock)', status: 'maintenance' },
    ];
  }

  getSummaryStats() {
    return this.summaryStats;
  }

  getDdsLevels() {
    return this.ddsLevels;
  }

  getSensorGrid(count = 48) {
    // Generate simulated sensor data
    return Array.from({ length: count }, (_, i) => ({
      id: `slot-${i}`,
      isOccupied: Math.random() > 0.3 // 70% chance occupied for simulation
    }));
  }

  getTdsLogs() {
    return this.tdsLogs;
  }

  getGateStatus() {
    return this.gateStatus;
  }

  // Tambahkan fungsi ini di bawah getGateStatus()
  getDdsData() {
    const statsData = this.getSummaryStats();
    const levelsData = this.getDdsLevels();

    return {
      stats: statsData,             // Alias 1
      summaryStats: statsData,      // Alias 2
      levels: levelsData,           // Alias 1
      ddsLevels: levelsData,        // Alias 2
      sensorGrid: this.getSensorGrid(48)
    };
  }

  getTdsData() {
    const statsData = this.getSummaryStats();
    const logsData = this.getTdsLogs();

    return {
      stats: statsData,             // Alias 1
      summaryStats: statsData,      // Alias 2
      logs: logsData,               // Alias 1
      tdsLogs: logsData,            // Alias 2
      gateStatus: this.getGateStatus()
    };
  }
}

export default UniguardDataService;

// Instantiate singleton data service
//const dataService = new UniguardDataService();


