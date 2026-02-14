import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import './StudentDashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

const StudentDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');
    if (role !== 'KING1') navigate('/login');
  }, [navigate]);

  const engagementData = {
    labels: ['Focused', 'Confused', 'Neutral', 'Disengaged'],
    datasets: [{
      data: [92, 5, 2, 1],
      backgroundColor: ['#51cf66', '#ffc107', '#00d4ff', '#ff6b6b'],
      borderColor: '#1a1f29',
      borderWidth: 2
    }]
  };

  const timelineData = {
    labels: ['9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM', '10:00 AM', '10:15 AM'],
    datasets: [{
      label: 'Focus Level %',
      data: [80, 85, 90, 88, 92, 94],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#00d4ff'
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#aaa' } } }
  };

  const lineOptions = {
    ...chartOptions,
    scales: {
      y: { ticks: { color: '#aaa' }, max: 100 },
      x: { ticks: { color: '#aaa' } }
    }
  };

  return (
    <div className="student-dashboard">
      <nav>
        <div className="logo">🎓 EduGaze</div>
        <div className="nav-right">
          <div className="user-info">
            <span>👨‍🎓</span>
            <span>Student Dashboard</span>
          </div>
          <button className="logout-btn" onClick={() => {
            sessionStorage.removeItem('userRole');
            navigate('/login');
          }}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <h1>Your Engagement Report</h1>
          <p>Track your focus, emotions, and participation in class sessions</p>
        </div>

        <div className="welcome-card">
          <h2>Great job today, Ahmed! 🌟</h2>
          <p>You maintained excellent focus during today's class. Keep up the great work and stay engaged!</p>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => alert('📊 Opening detailed report...')}>
            📊 View Detailed Report
          </button>
          <button className="btn btn-secondary" onClick={() => alert('📈 Viewing weekly stats...')}>
            📈 Weekly Statistics
          </button>
          <button className="btn btn-secondary" onClick={() => alert('📥 Downloading report...')}>
            📥 Download Report
          </button>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-label">Focus Level</div>
            <div className="metric-value">92%</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">😊</div>
            <div className="metric-label">Emotion</div>
            <div className="metric-value">Happy</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💬</div>
            <div className="metric-label">Participation</div>
            <div className="metric-value">76%</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">⏱️</div>
            <div className="metric-label">Session Duration</div>
            <div className="metric-value">45 min</div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Today's Engagement Breakdown</h3>
            <div className="chart-container">
              <Doughnut data={engagementData} options={chartOptions} />
            </div>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">Emotion Timeline</h3>
            <div className="chart-container">
              <Line data={timelineData} options={lineOptions} />
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">📈 Your Progress This Week</h2>
          <div className="progress-section">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => {
              const value = 85 + (i * 2);
              return (
                <div key={day} className="progress-item">
                  <div className="progress-label">
                    <span>{day} - Focus Level</span>
                    <span>{value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${value}%`}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">📊 Your Performance vs Class Average</h2>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Your Focus</h4>
              <div className="comparison-stat">92%</div>
              <div className="comparison-label">vs 87% class avg</div>
            </div>
            <div className="comparison-card">
              <h4>Your Participation</h4>
              <div className="comparison-stat">76%</div>
              <div className="comparison-label">vs 64% class avg</div>
            </div>
            <div className="comparison-card">
              <h4>Your Happiness</h4>
              <div className="comparison-stat">95%</div>
              <div className="comparison-label">vs 82% class avg</div>
            </div>
            <div className="comparison-card">
              <h4>Rank in Class</h4>
              <div className="comparison-stat">#2</div>
              <div className="comparison-label">out of 28 students</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🤖 AI Recommendations for You</h2>
          <div className="recommendations-list">
            <div className="recommendation-item">
              <div className="recommendation-icon">✅</div>
              <div className="recommendation-content">
                <h3>Maintain Your Focus Streak</h3>
                <p>You've shown consistent improvement throughout the week! Keep maintaining your excellent focus levels.</p>
              </div>
            </div>
            <div className="recommendation-item">
              <div className="recommendation-icon">💡</div>
              <div className="recommendation-content">
                <h3>Increase Participation Slightly</h3>
                <p>Try to engage in more group discussions to reach 85%+ engagement levels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
