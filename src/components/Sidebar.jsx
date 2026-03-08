import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = ({ user }) => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/programs', label: 'Program Tracking', icon: '📋' },
    { path: '/production', label: 'Production', icon: '🏭' },
    { path: '/quality', label: 'Quality', icon: '✅' },
    { path: '/supply-chain', label: 'Supply Chain', icon: '📦' },
    { path: '/service', label: 'Service', icon: '🔧' },
    { path: '/documents', label: 'Documents', icon: '📄' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="sidebar-logo-text">
            <span className="logo-main">FactoryIQ</span>
            <span className="logo-subtitle">Manufacturing Excellence</span>
          </div>
        </div>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path} className="sidebar-menu-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'sidebar-link active' : 'sidebar-link'
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

    </aside>
  );
};

export default Sidebar;