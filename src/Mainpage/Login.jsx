import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Login failed');

      setMessage(data.message);
      setError('');
      localStorage.setItem('token', data.token);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div className="auth-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><span className="nav-item" onClick={() => navigate('/')}>Home</span></li>
          <li><span className="nav-item" onClick={() => navigate('/about')}>About</span></li>
          <li><span className="nav-item" onClick={() => navigate('/contact')}>Contact</span></li>
        </ul>
      </nav>

      <div className="auth-box">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">Login</button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <p>
          Forgot your password?{' '}
          <span onClick={() => navigate('/forgot')} style={{ color: 'blue', cursor: 'pointer' }}>
            Reset here
          </span>
        </p>
        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/signup')} style={{ color: 'blue', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>

        <div className="social-login">
          <button className="social-btn google-btn">Sign in with Google</button>
          <button className="social-btn">Sign in with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
