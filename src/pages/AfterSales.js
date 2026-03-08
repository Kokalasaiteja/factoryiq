import React from 'react';
import { serviceCases } from '../data/mockData';

const AfterSales = () => {
  return (
    <div className="page after-sales-page">
      <h2>After Sales Service</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Product</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {serviceCases.map((serviceCase) => (
            <tr key={serviceCase.id}>
              <td>{serviceCase.id}</td>
              <td>{serviceCase.product}</td>
              <td>{serviceCase.issue}</td>
              <td>
                <span className={`status-badge status-${serviceCase.status.toLowerCase().replace(' ', '-')}`}>
                  {serviceCase.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AfterSales;

