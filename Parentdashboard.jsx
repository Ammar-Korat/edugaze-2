import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';
import './ParentDashboard.css';

const ParentDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');
    if (role !== 'PKING') navigate('/login');
  }, [navigate]);

  const focusData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
      label: 'Focus Level %',
      data: [85, 88, 90, 92, 94],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  };

  const engagementData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Focus',
        data: [85, 88, 90, 92, 94],
        backgroundColor: 'rgba(0, 123, 255, 0.6)'
      },
      {
        label: 'Participation',
        data: [70, 68, 72, 74, 76],
        backgroundColor: 'rgba(81, 207, 102, 0.6)'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#aaa' } } },
    scales: {
      y: { ticks: { color: '#aaa' }, max: 100 },
      x: { ticks: { color: '#aaa' } }
    }
  };

  return (
    <div className="parent-dashboard">
      <nav>
        <div className="logo">🎓 EduGaze</div>
        <div className="nav-right">
          <div className="user-info">
            <span>👨‍👩‍👧</span>
            <span>Parent Dashboard</span>
          </div>
          <button className="logout-btn" onClick={() => {
            sessionStorage.removeItem('userRole');
            navigate('/login');
          }}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <h1>Your Child's Academic Progress</h1>
          <p>Monitor your child's engagement and performance throughout the week</p>
        </div>

        <div className="child-profile">
          <div className="child-avatar">👦</div>
          <div className="child-info">
            <h2>Ahmed Hassan</h2>
            <p><strong>Class:</strong> Grade 7 - Section A</p>
            <p><strong>School:</strong> Al-Noor International School</p>
            <div className="child-stats">
              <div className="stat-item">
                <div className="stat-value">92%</div>
                <div className="stat-label">Avg Focus</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">87%</div>
                <div className="stat-label">Avg Happiness</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">#2</div>
                <div className="stat-label">Class Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <div className="card-icon">🎯</div>
            <div className="card-label">This Week's Focus</div>
            <div className="card-value">90%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">😊</div>
            <div className="card-label">Happiness Level</div>
            <div className="card-value">85%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">💬</div>
            <div className="card-label">Participation</div>
            <div className="card-value">72%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">📚</div>
            <div className="card-label">Classes Attended</div>
            <div className="card-value">5/5</div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => alert('💬 Opening message interface...')}>
            💬 Message Teacher
          </button>
          <button className="btn btn-secondary" onClick={() => alert('📊 Generating report...')}>
            📊 Full Weekly Report
          </button>
          <button className="btn btn-secondary" onClick={() => alert('📞 Opening scheduler...')}>
            📞 Schedule Meeting
          </button>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Focus Level Over Week</h3>
            <div className="chart-container">
              <Line data={focusData} options={chartOptions} />
            </div>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">Daily Engagement Trends</h3>
            <div className="chart-container">
              <Bar data={engagementData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">⚠️ Alerts & Insights</h2>
          <div className="alerts-container">
            <div className="alert-item success">
              <div className="alert-icon">✅</div>
              <div className="alert-content">
                <h4>Great Performance This Week!</h4>
                <p>Ahmed achieved 90% focus level, showing consistent improvement.</p>
              </div>
            </div>
            <div className="alert-item success">
              <div className="alert-icon">🏆</div>
              <div className="alert-content">
                <h4>Ranked #2 in Class</h4>
                <p>Ahmed is among the top performers in his class.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
