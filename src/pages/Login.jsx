import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'john' && password === 'john') {
      if (onLogin) {
        onLogin({ name: username, role: 'Administrator' });
      }
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use username: john, password: john');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <div className="login-logo-icon">M</div>
            <span className="login-logo-text">ManufacturingIQ</span>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your dashboard</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {error && <div className="login-error">{error}</div>}

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username (john)"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (john)"
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{' '}
            <button 
              type="button" 
              className="register-link"
              onClick={handleRegisterClick}
            >
              Register here
            </button>
          </p>
          <p className="demo-credentials">
            Demo: Use username <strong>john</strong> and password <strong>john</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
