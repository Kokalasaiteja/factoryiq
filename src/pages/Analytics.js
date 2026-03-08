import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { analyticsData } from '../data/mockData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const efficiencyData = {
    labels: analyticsData.months,
    datasets: [
      {
        label: 'Production Efficiency %',
        data: analyticsData.productionEfficiency,
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const defectData = {
    labels: analyticsData.months,
    datasets: [
      {
        label: 'Quality Defect Trends %',
        data: analyticsData.qualityDefectTrends,
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const supplierData = {
    labels: analyticsData.months,
    datasets: [
      {
        label: 'Supplier Delivery Performance %',
        data: analyticsData.supplierDeliveryPerformance,
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: { y: { beginAtZero: false, min: 80 } },
  };

  return (
    <div className="page analytics-page">
      <h2>Analytics & Reporting</h2>
      <div className="analytics-grid">
        <div className="chart-container">
          <h3>Production Efficiency</h3>
          <Line data={efficiencyData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <h3>Quality Defect Trends</h3>
          <Line data={defectData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <h3>Supplier Delivery Performance</h3>
          <Line data={supplierData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

