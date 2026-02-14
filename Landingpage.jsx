import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* Navigation */}
      <nav>
        <div className="nav-logo">🎓 EduGaze</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="nav-btn primary" onClick={() => navigate('/login')}>Try Demo</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Understand Student Engagement — Instantly.</h1>
        <p>EduGaze uses AI to analyze emotions, focus, and participation in real-time — giving schools powerful insights into classroom engagement.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/login')}>Try Demo</button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Learn More</button>
        </div>
        <div className="hero-visual">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#007bff', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#00c6ff', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <rect x="40" y="30" width="120" height="100" rx="20" fill="url(#grad)" opacity="0.2" stroke="url(#grad)" strokeWidth="2"/>
            <circle cx="70" cy="65" r="8" fill="url(#grad)"/>
            <circle cx="130" cy="65" r="8" fill="url(#grad)"/>
            <path d="M 80 90 Q 100 100 120 90" stroke="url(#grad)" strokeWidth="2" fill="none"/>
            <g opacity="0.5">
              <circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad)" strokeWidth="1" strokeDasharray="5,5"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad)" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
            </g>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Powerful Features for Real Insights</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Focus Detection</h3>
            <p>Detects when students lose attention and provides real-time alerts to keep the class engaged.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">😊</div>
            <h3>Emotion Tracking</h3>
            <p>Monitors happiness, confusion, and participation levels throughout the class session.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Talking Time</h3>
            <p>Measures active speaking and engagement, ensuring balanced class participation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💤</div>
            <h3>Sleep Detection</h3>
            <p>Alerts if a student is inactive or appears to be disengaged for extended periods.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <h2 className="section-title">How EduGaze Works</h2>
        <div className="steps-container">
          <div className="step" data-step="1">
            <h3>📷 Camera Capture</h3>
            <p>High-quality classroom camera captures student behavior and facial expressions in real-time.</p>
          </div>
          <div className="step" data-step="2">
            <h3>🤖 AI Analysis</h3>
            <p>Advanced AI algorithms analyze focus, emotions, and activity patterns from video data.</p>
          </div>
          <div className="step" data-step="3">
            <h3>📊 Report Generation</h3>
            <p>Detailed engagement reports are automatically generated and sent to all stakeholders.</p>
          </div>
        </div>
        <div className="cta-section" id="contact">
          <h2>Bring Real Data Into Classroom Engagement</h2>
          <p>Start your pilot with EduGaze today and transform how you understand student engagement.</p>
          <button className="btn btn-primary" onClick={() => navigate('/login')}>Request Demo</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>🎓 EduGaze</h4>
            <p style={{color: '#aaa', lineHeight: 1.6}}>AI-powered student engagement monitoring system for modern classrooms.</p>
            <div className="social-icons" style={{marginTop: '20px'}}>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="GitHub">🐙</a>
              <a href="#" title="YouTube">▶️</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EduGaze. All rights reserved. | Empowering Education Through AI</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
