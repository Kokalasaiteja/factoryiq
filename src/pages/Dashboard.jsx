import React from 'react';
import MetricCard from '../components/MetricCard';
import ProductionChart from '../components/ProductionChart';
import ShipmentChart from '../components/ShipmentChart';
import '../styles/dashboard.css';

const Dashboard = () => {
  const metrics = [
    {
      icon: '💼',
      iconBg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      value: '63%',
      subtitle: '8 active programs',
      trend: '+5%',
      trendUp: true,
    },
    {
      icon: '🚚',
      iconBg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
      value: '47%',
      subtitle: 'Last 30 days',
      trend: '-3%',
      trendUp: false,
    },
    {
      icon: '✅',
      iconBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      value: '98%',
      subtitle: '7 open NCRs',
      trend: '+1.2%',
      trendUp: true,
    },
    {
      icon: '⚡',
      iconBg: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
      value: '99%',
      subtitle: 'Current utilization',
      trend: '+8%',
      trendUp: true,
    },
    {
      icon: '🔧',
      iconBg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
      value: '3',
      subtitle: 'Active RMA repairs',
      trend: null,
      trendUp: true,
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">
            Manufacturing Excellence Overview
          </p>
        </div>
        <div className="dashboard-header-right">
          <span className="live-data-badge">
            <span className="live-dot"></span>
            Live Data
          </span>
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            iconBg={metric.iconBg}
            value={metric.value}
            subtitle={metric.subtitle}
            trend={metric.trend}
            trendUp={metric.trendUp}
          />
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card-wrapper">
          <ProductionChart />
        </div>
        <div className="chart-card-wrapper">
          <ShipmentChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

