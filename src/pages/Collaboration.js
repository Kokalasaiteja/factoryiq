import React from 'react';
import { documents } from '../data/mockData';

const Collaboration = () => {
  const handleView = (docName) => {
    alert('Viewing: ' + docName);
  };

  const handleDownload = (docName) => {
    alert('Downloading: ' + docName);
  };

  return (
    <div className="page collaboration-page">
      <h2>Collaboration & Documents</h2>
      <div className="documents-list">
        <table className="data-table">
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.type.toUpperCase()}</td>
                <td>{doc.size}</td>
                <td>{doc.date}</td>
                <td>
                  <button className="btn btn-view" onClick={() => handleView(doc.name)}>View</button>
                  <button className="btn btn-download" onClick={() => handleDownload(doc.name)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Collaboration;

