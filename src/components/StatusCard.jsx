import React from 'react';

const StatusCard = ({ count, label, status }) => {
  return (
    <div className={`status-card ${status}`}>
      <div className="status-icon">
        {status === 'green' && '✓'}
        {status === 'yellow' && '⚠'}
        {status === 'red' && '✕'}
      </div>

      <div className="status-info">
        <h3>{count}</h3>
        <p>{label}</p>
      </div>
      
    </div>
  );
};

export default StatusCard;