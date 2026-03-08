import React, { useState } from 'react';
import '../styles/dashboard.css';

const Quality = () => {
  const [issues, setIssues] = useState([
    { id: 1, defectType: 'Dimensional', rootCause: 'Tool wear', affectedLine: 'Line A', status: 'Open' },
    { id: 2, defectType: 'Surface Finish', rootCause: 'Material', affectedLine: 'Line B', status: 'Resolved' },
    { id: 3, defectType: 'Packaging', rootCause: 'Equipment', affectedLine: 'Line A', status: 'In Progress' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingIssue, setEditingIssue] = useState(null);
  const [formData, setFormData] = useState({
    defectType: '',
    rootCause: '',
    affectedLine: '',
    status: 'Open'
  });

  const qualityData = {
    passRate: "96.5%",
    defectRate: "3.5%",
    inspectionsToday: 45,
  };

  const handleAdd = () => {
    setEditingIssue(null);
    setFormData({ defectType: '', rootCause: '', affectedLine: '', status: 'Open' });
    setShowModal(true);
  };

  const handleEdit = (issue) => {
    setEditingIssue(issue);
    setFormData({ ...issue });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setIssues(issues.filter(i => i.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingIssue) {
      setIssues(issues.map(i => i.id === editingIssue.id ? { ...formData, id: editingIssue.id } : i));
    } else {
      setIssues([...issues, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const getStatusClass = (status) => {
    if (status === 'Open') return 'status-red';
    if (status === 'Resolved') return 'status-green';
    return 'status-yellow';
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1 className="dashboard-title">Quality</h1>
          <p className="dashboard-subtitle">Quality control and defect tracking</p>
        </div>
        <div className="dashboard-header-right">
          <button className="btn btn-primary" onClick={handleAdd}>+ Add Issue</button>
        </div>
      </div>

      <div className="status-summary">
        <div className="status-card green">
          <div className="status-icon">✓</div>
          <div className="status-info">
            <h3>{qualityData.passRate}</h3>
            <p>Pass Rate</p>
          </div>
        </div>

        <div className="status-card yellow">
          <div className="status-icon">⚠</div>
          <div className="status-info">
            <h3>{qualityData.defectRate}</h3>
            <p>Defect Rate</p>
          </div>
        </div>

        <div className="status-card blue">
          <div className="status-icon">📋</div>
          <div className="status-info">
            <h3>{qualityData.inspectionsToday}</h3>
            <p>Inspections Today</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Quality Issues</h3>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Defect Type</th>
                <th>Root Cause</th>
                <th>Affected Line</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td>{issue.defectType}</td>
                  <td>{issue.rootCause}</td>
                  <td>{issue.affectedLine}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(issue.status)}`}>
                      {issue.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(issue)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(issue.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{editingIssue ? 'Edit Quality Issue' : 'Add Quality Issue'}</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Defect Type</label>
                <input
                  type="text"
                  value={formData.defectType}
                  onChange={e => setFormData({ ...formData, defectType: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Root Cause</label>
                <input
                  type="text"
                  value={formData.rootCause}
                  onChange={e => setFormData({ ...formData, rootCause: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Affected Line</label>
                <input
                  type="text"
                  value={formData.affectedLine}
                  onChange={e => setFormData({ ...formData, affectedLine: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={e => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quality;

