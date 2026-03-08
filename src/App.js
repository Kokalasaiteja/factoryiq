import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProgramTracking from './pages/ProgramTracking';
import Production from './pages/Production';
import Quality from './pages/Quality';
import SupplyChain from './pages/SupplyChain';
import Service from './pages/Service';
import Documents from './pages/Documents';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/dashboard.css';
import './styles/table.css';

const Layout = ({ children, onLogout, user }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} />
      <div style={{ flex: 1, marginLeft: '260px' }}>
        <Navbar onLogout={onLogout} user={user} />
        <main style={{ marginTop: '70px', padding: '24px', background: '#f8fafc', minHeight: 'calc(100vh - 70px)' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Login onLogin={handleLogin} />
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Register onLogin={handleLogin} />
          }
        />

        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <Dashboard />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/programs"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <ProgramTracking />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/production"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <Production />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/quality"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <Quality />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/supply-chain"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <SupplyChain />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/service"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <Service />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />

        <Route
          path="/documents"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} user={user}>
                <Documents />
              </Layout>
            ) : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

