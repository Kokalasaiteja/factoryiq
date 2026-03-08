import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ShipmentChart = () => {
  const data = {
    labels: ['Solar Inv', 'Medical', 'Robot', 'Charger'],
    datasets: [
      {
        label: 'Shipped',
        data: [45, 32, 28, 18],
        backgroundColor: '#22c55e',
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 24,
        hoverBackgroundColor: '#16a34a',
        hoverBorderColor: '#15803d',
        hoverBorderWidth: 2,
      },
      {
        label: 'Pending',
        data: [12, 8, 15, 6],
        backgroundColor: '#f59e0b',
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 24,
        hoverBackgroundColor: '#d97706',
        hoverBorderColor: '#b45309',
        hoverBorderWidth: 2,
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
          pointStyle: 'rect',
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
        hoverBorderColor: '#fff',
        hoverBorderWidth: 2,
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
        beginAtZero: true,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <div className="chart-card">
      <h3 className="chart-title">Shipment Status</h3>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ShipmentChart;

