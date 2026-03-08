import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ProductionChart = () => {
  const data = {
    labels: ['2026-03-01', '2026-03-02', '2026-03-03', '2026-03-04', '2026-03-05', '2026-03-06'],
    datasets: [
      {
        label: 'Actual',
        data: [120, 135, 128, 142, 155, 148],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Target',
        data: [130, 130, 130, 130, 130, 130],
        borderColor: '#94a3b8',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0.4,
        pointBackgroundColor: '#94a3b8',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
            weight: '500',
          },
        },
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: { size: 13, weight: '600' },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 11 },
          color: '#64748b',
        },
      },
      y: {
        grid: {
          color: '#f1f5f9',
        },
        ticks: {
          font: { size: 11 },
          color: '#64748b',
        },
        beginAtZero: false,
        min: 100,
        max: 180,
      },
    },
  };

  return (
    <div className="chart-card">
      <h3 className="chart-title">Production Output</h3>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProductionChart;

