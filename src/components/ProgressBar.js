import React from 'react';

const ProgressBar = ({ completion }) => {
  const getColor = () => {
    if (completion >= 70) return '#22c55e';
    if (completion >= 40) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${completion}%`, backgroundColor: getColor() }}
        ></div>
      </div>
      <span className="progress-text">{completion}%</span>
    </div>
  );
};

export default ProgressBar;
