import React from 'react';

const MetricCard = ({ 
  icon, 
  iconBg, 
  value, 
  subtitle, 
  trend, 
  trendUp = true 
}) => {
  return (
    <div className="metric-card">
      <div className="metric-card-header">
        <div className="metric-icon" style={{ background: iconBg }}>
          {icon}
        </div>
        {trend && (
          <div className={`metric-trend ${trendUp ? 'up' : 'down'}`}>
            {trendUp ? '↑' : '↓'} {trend}
          </div>
        )}
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-subtitle">{subtitle}</div>
    </div>
  );
};

export default MetricCard;

