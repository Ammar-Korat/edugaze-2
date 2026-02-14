import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');
    if (role !== 'AKIAS') navigate('/login');
  }, [navigate]);

  const performanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Platform Performance',
      data: [82, 85, 87, 89],
      borderColor: '#007bff',
      tension: 0.4
    }]
  };

  const usersData = {
    labels: ['Teachers', 'Students', 'Parents', 'Admins'],
    datasets: [{
      data: [45, 320, 75, 10],
      backgroundColor: ['#007bff', '#51cf66', '#ffc107', '#ff6b6b']
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#aaa' } } }
  };

  return (
    <div className="admin-dashboard">
      <nav>
        <div className="nav-left">
          <div className="logo">🎓 EduGaze</div>
          <ul className="nav-links">
            <li><a className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</a></li>
            <li><a className={activeTab === 'classes' ? 'active' : ''} onClick={() => setActiveTab('classes')}>Classes</a></li>
            <li><a className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>Users</a></li>
            <li><a className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>Reports</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="user-info">
            <span>🔐</span>
            <span>Admin Panel</span>
          </div>
          <button className="logout-btn" onClick={() => {
            sessionStorage.removeItem('userRole');
            navigate('/login');
          }}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <h1>System Administration Dashboard</h1>
          <p>Monitor platform performance and manage all school resources</p>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon">👥</div>
            <div className="kpi-label">Total Users</div>
            <div className="kpi-value">450</div>
            <div className="kpi-change">↑ 12% from last month</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">🏫</div>
            <div className="kpi-label">Active Classes</div>
            <div className="kpi-value">28</div>
            <div className="kpi-change">↑ 2 new classes</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">📊</div>
            <div className="kpi-label">Avg Focus Rate</div>
            <div className="kpi-value">87%</div>
            <div className="kpi-change">↑ 5% improvement</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">✅</div>
            <div className="kpi-label">System Uptime</div>
            <div className="kpi-value">99.9%</div>
            <div className="kpi-change">Excellent</div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Platform Performance</h3>
            <div className="chart-container">
              <Line data={performanceData} options={chartOptions} />
            </div>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">User Distribution</h3>
            <div className="chart-container">
              <Doughnut data={usersData} options={chartOptions} />
            </div>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="section">
            <h2 className="section-title">📊 School Performance Overview</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>School Name</th>
                  <th>Classes</th>
                  <th>Students</th>
                  <th>Avg Focus</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Al-Noor International</strong></td>
                  <td>12</td>
                  <td>180</td>
                  <td><span className="badge badge-excellent">89%</span></td>
                  <td><span className="status-online"></span>Active</td>
                </tr>
                <tr>
                  <td><strong>Emirates Academy</strong></td>
                  <td>8</td>
                  <td>120</td>
                  <td><span className="badge badge-good">87%</span></td>
                  <td><span className="status-online"></span>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="action-buttons" style={{marginTop: '40px'}}>
          <button className="btn btn-primary" onClick={() => alert('📥 Exporting report...')}>
            📥 Export Full Report
          </button>
          <button className="btn btn-secondary" onClick={() => alert('🤖 Generating insights...')}>
            🤖 Generate AI Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
