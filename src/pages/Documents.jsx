import React, { useState, useRef } from 'react';
import '../styles/dashboard.css';

const Documents = () => {

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Production Report Q1.pdf', type: 'PDF', size: '2.4 MB', date: '2024-01-15' },
    { id: 2, name: 'Quality Standards.docx', type: 'Word', size: '1.1 MB', date: '2024-01-14' },
    { id: 3, name: 'Safety Guidelines.pdf', type: 'PDF', size: '3.2 MB', date: '2024-01-12' },
    { id: 4, name: 'Equipment Manual.pdf', type: 'PDF', size: '5.8 MB', date: '2024-01-10' },
  ]);

  const fileInputRef = useRef(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const newDoc = {
      id: Date.now(),
      name: file.name,
      type: file.type,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      date: new Date().toISOString().split("T")[0]
    };

    setDocuments([...documents, newDoc]);
    e.target.value = '';
  }

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1 className="dashboard-title">Documents</h1>
        <p className="dashboard-subtitle">Project documentation and files</p>
      </div>

      <div className="card">

        <div className="card-header">
          <h3 className="card-title">Recent Documents</h3>
          <button className="btn btn-primary" onClick={handleUploadClick}>
            Upload
          </button>
        </div>

        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>{doc.size}</td>
                  <td>{doc.date}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(doc.id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      {/* Hidden File Upload */}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleUpload}
      />

    </div>
  );
};

export default Documents;