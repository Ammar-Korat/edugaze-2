import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const roles = {
    "KIAS1": { name: "Teacher Dashboard", icon: "👨‍🏫", route: "/teacher" },
    "KING1": { name: "Student Dashboard", icon: "👨‍🎓", route: "/student" },
    "PKING": { name: "Parent Dashboard", icon: "👨‍👩‍👧", route: "/parent" },
    "AKIAS": { name: "Administration Panel", icon: "🔐", route: "/admin" }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const upperCode = code.trim().toUpperCase();

    if (!upperCode) {
      setMessage({ text: "❌ Please enter an access code", type: "error" });
      return;
    }

    if (roles[upperCode]) {
      setIsLoading(true);
      setMessage({ 
        text: `✅ ${roles[upperCode].icon} Welcome! Redirecting...`, 
        type: "success" 
      });
      
      sessionStorage.setItem('userRole', upperCode);
      
      setTimeout(() => {
        navigate(roles[upperCode].route);
      }, 1200);
    } else {
      setMessage({ text: "❌ Invalid access code. Please try again.", type: "error" });
    }
  };

  const quickLogin = (accessCode) => {
    setCode(accessCode);
    setTimeout(() => {
      const event = new Event('submit', { cancelable: true, bubbles: true });
      document.getElementById('loginForm').dispatchEvent(event);
    }, 100);
  };

  return (
    <div className="login-container-wrapper">
      <div className="glow blue"></div>
      <div className="glow purple"></div>

      <div className="login-container">
        <h2>🎓 EduGaze</h2>
        <p className="subtitle">Educational Management Portal</p>
        
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="codeInput">Access Code</label>
            <input 
              type="text" 
              id="codeInput" 
              placeholder="Enter your access code..."
              autoComplete="off"
              maxLength="20"
              required
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setMessage({ text: '', type: '' });
              }}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="demo-codes">
          <div className="demo-title">Demo Codes</div>
          <div className="code-grid">
            <button type="button" className="code-btn" onClick={() => quickLogin('KIAS1')}>
              👨‍🏫 KIAS1
            </button>
            <button type="button" className="code-btn" onClick={() => quickLogin('KING1')}>
              👨‍🎓 KING1
            </button>
            <button type="button" className="code-btn" onClick={() => quickLogin('PKING')}>
              👨‍👩‍👧 PKING
            </button>
            <button type="button" className="code-btn" onClick={() => quickLogin('AKIAS')}>
              🔐 AKIAS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
