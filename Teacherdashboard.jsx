import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import './TeacherDashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [showReportModal, setShowReportModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');
    if (role !== 'KIAS1') {
      navigate('/login');
    }
  }, [navigate]);

  const emotionData = {
    labels: ['Happy', 'Confused', 'Neutral', 'Disengaged'],
    datasets: [{
      data: [42, 18, 28, 12],
      backgroundColor: ['#51cf66', '#ffc107', '#00d4ff', '#ff6b6b'],
      borderColor: '#1a1f29',
      borderWidth: 2
    }]
  };

  const engagementData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Focus Level',
      data: [82, 85, 87, 89],
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: '#007bff',
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { labels: { color: '#aaa' } }
    }
  };

  const barChartOptions = {
    ...chartOptions,
    scales: {
      y: { ticks: { color: '#aaa' } },
      x: { ticks: { color: '#aaa' } }
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        setUploadStatus(`✅ File uploaded successfully! Processing ${Object.keys(data).length} records.`);
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadStatus('');
        }, 2000);
      } catch (err) {
        setUploadStatus('❌ Invalid JSON file. Please check the format.');
      }
    };
    reader.readAsText(file);
  };

  const logout = () => {
    sessionStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="teacher-dashboard">
      <nav>
        <div className="nav-left">
          <div className="logo">🎓 EduGaze</div>
        </div>
        <div className="nav-right">
          <div className="user-info">
            <span>👨‍🏫</span>
            <span>Teacher Dashboard</span>
          </div>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <h1>Class Engagement Overview</h1>
          <p>Real-time monitoring and detailed engagement analytics for your classroom</p>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <div className="card-icon">🎯</div>
            <div className="card-label">Average Focus</div>
            <div className="card-value">87%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">😊</div>
            <div className="card-label">Happiness Level</div>
            <div className="card-value">82%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">💬</div>
            <div className="card-label">Talking Time</div>
            <div className="card-value">64%</div>
          </div>
          <div className="summary-card">
            <div className="card-icon">💤</div>
            <div className="card-label">Avg Sleep Time</div>
            <div className="card-value">3%</div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => setShowReportModal(true)}>
            📊 Generate Class Report
          </button>
          <button className="btn btn-secondary" onClick={() => setShowUploadModal(true)}>
            📤 Upload AI Data (JSON)
          </button>
          <button className="btn btn-secondary" onClick={() => alert('📊 Class data exported as CSV')}>
            📥 Export as CSV
          </button>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Emotion Distribution</h3>
            <div className="chart-container">
              <Doughnut data={emotionData} options={chartOptions} />
            </div>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">Engagement Levels</h3>
            <div className="chart-container">
              <Bar data={engagementData} options={barChartOptions} />
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">📈 Top Students by Focus</h2>
          <table className="students-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Focus %</th>
                <th>Emotion</th>
                <th>Talking Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ahmed Hassan</td>
                <td>94%</td>
                <td>😊 Happy</td>
                <td>72%</td>
                <td><span className="badge badge-excellent">Excellent</span></td>
              </tr>
              <tr>
                <td>Fatima Al-Mansouri</td>
                <td>91%</td>
                <td>😊 Happy</td>
                <td>68%</td>
                <td><span className="badge badge-excellent">Excellent</span></td>
              </tr>
              <tr>
                <td>Omar Al-Mazrouei</td>
                <td>85%</td>
                <td>😐 Neutral</td>
                <td>55%</td>
                <td><span className="badge badge-good">Good</span></td>
              </tr>
              <tr>
                <td>Layla Al-Kaabi</td>
                <td>78%</td>
                <td>😕 Confused</td>
                <td>42%</td>
                <td><span className="badge badge-average">Average</span></td>
              </tr>
              <tr>
                <td>Mohammed Al-Qasimi</td>
                <td>62%</td>
                <td>😴 Disengaged</td>
                <td>28%</td>
                <td><span className="badge badge-needs-improvement">Needs Improvement</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Class Engagement Report</h2>
              <button className="close-btn" onClick={() => setShowReportModal(false)}>✕</button>
            </div>
            <div className="report-section">
              <h3>📊 Session Summary</h3>
              <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Duration:</strong> 45 minutes</p>
              <p><strong>Students Present:</strong> 28</p>
            </div>
            <div className="report-section">
              <h3>📈 Key Metrics</h3>
              <p><strong>Average Focus:</strong> 87% (Excellent)</p>
              <p><strong>Happiness Level:</strong> 82% (Very Good)</p>
              <p><strong>Participation:</strong> 64% of students actively engaged</p>
              <p><strong>Issues Detected:</strong> 3 students showed signs of disengagement</p>
            </div>
            <div className="action-buttons" style={{marginTop: '30px'}}>
              <button className="btn btn-primary" onClick={() => alert('📥 Report downloaded')}>
                📥 Download Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Upload AI Data (JSON)</h2>
              <button className="close-btn" onClick={() => setShowUploadModal(false)}>✕</button>
            </div>
            <p style={{color: '#aaa', marginBottom: '20px'}}>
              Upload the emotion detection JSON file to process student engagement data.
            </p>
            <div className="file-upload" onClick={() => document.getElementById('fileInput').click()}>
              <input 
                type="file" 
                id="fileInput" 
                accept=".json" 
                onChange={handleFileUpload}
                style={{display: 'none'}}
              />
              <p>📁 Click to select or drag-and-drop JSON file</p>
              <p style={{fontSize: '0.85rem', color: '#888', marginTop: '10px'}}>
                Expected: edugaze_emotion_blink.json
              </p>
            </div>
            {uploadStatus && (
              <div style={{marginTop: '20px', color: uploadStatus.includes('✅') ? '#51cf66' : '#ff6b6b'}}>
                {uploadStatus}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
