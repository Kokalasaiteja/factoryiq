import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Register = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('User');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Store user in localStorage
    const user = { name: username, email, role };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('registeredUsers', JSON.stringify([
      ...JSON.parse(localStorage.getItem('registeredUsers') || '[]'),
      { username, email, password, role }
    ]));

    if (onLogin) {
      onLogin(user);
    }
    navigate('/dashboard');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <div className="login-logo-icon">M</div>
            <span className="login-logo-text">ManufacturingIQ</span>
          </div>
          <h1>Create Account</h1>
          <p>Register for your dashboard</p>
        </div>

        <form className="login-form" onSubmit={handleRegister}>
          {error && <div className="login-error">{error}</div>}

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="User">User</option>
              <option value="Administrator">Administrator</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <div className="login-footer">
          <p>
            Already have an account?{' '}
            <button 
              type="button" 
              className="register-link"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
