import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ onLogout, user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const getPageTitle = (pathname) => {
    const titles = {
      '/dashboard': 'Dashboard',
      '/programs': 'Program Tracking',
      '/production': 'Production',
      '/quality': 'Quality',
      '/supply-chain': 'Supply Chain',
      '/service': 'Service',
      '/documents': 'Documents',
    };
    return titles[pathname] || 'Dashboard';
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login');
  };

  const getUserInitials = () => {
    if (user && user.username) {
      return user.username.substring(0, 2).toUpperCase();
    }
    return 'JC';
  };

  const getUserName = () => {
    if (user && user.username) {
      return user.username;
    }
    return 'John Customer';
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">
          {getPageTitle(location.pathname)}
        </h1>
        <div className="navbar-breadcrumb">
          Home <span>/</span> {getPageTitle(location.pathname)}
        </div>
      </div>

      <div className="navbar-right">
        <div 
          className="navbar-user"
          onClick={() => setShowDropdown(!showDropdown)}
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <div className="navbar-user-avatar">{getUserInitials()}</div>
          <div className="navbar-user-info">
            <div className="navbar-user-name">{getUserName()}</div>
            <div className="navbar-user-role">Administrator</div>
          </div>
          {showDropdown && (
            <div className="user-dropdown">
              <button 
                className="dropdown-item" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

