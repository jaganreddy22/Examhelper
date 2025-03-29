import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Login Successful!' : 'Sign Up Successful!');
    setFormData({ email: '', password: '', name: '' });
  };

  return (
    <div className="auth-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a onClick={() => navigate('/')} className="nav-item">Home</a></li>
          <li><a onClick={() => navigate('/about')} className="nav-item">About</a></li>
          <li><a onClick={() => navigate('/contact')} className="nav-item">Contact</a></li>
        </ul>
      </nav>

      <div className="auth-box">
        <div className="auth-tabs">
          <span className={isLogin ? 'auth-tab active' : 'auth-tab'} onClick={() => setIsLogin(true)}>Login</span>
          <span className={!isLogin ? 'auth-tab active' : 'auth-tab'} onClick={() => setIsLogin(false)}>Sign Up</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required={!isLogin} />}
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Your Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="auth-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <div className="social-login">
          <button className="social-btn google-btn">Sign in with Google</button>
          <button className="social-btn">Sign in with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;