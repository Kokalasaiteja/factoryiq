import React, { useState } from 'react';
import { projects } from '../data/mockData';

const ProjectTracking = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.stage === filter);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Green': return 'status-green';
      case 'Yellow': return 'status-yellow';
      case 'Red': return 'status-red';
      default: return '';
    }
  };

  return (
    <div className="page project-tracking-page">
      <h2>Project Tracking</h2>
      <div className="filter-container">
        <label>Filter by Stage: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="R&D">R&D</option>
          <option value="NPI">NPI</option>
          <option value="Production">Production</option>
        </select>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Stage</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.stage}</td>
              <td>
                <span className={`status-badge ${getStatusClass(project.status)}`}>
                  {project.status}
                </span>
              </td>
              <td>{project.owner}</td>
              <td>{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTracking;

