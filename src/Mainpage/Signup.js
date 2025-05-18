import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ Reusing same CSS as login

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Server error. Invalid response.');
      }

      if (!res.ok) throw new Error(data.message || 'Signup failed');

      // ✅ Show success message
      setMessage({ text: data.message, type: 'success' });
      setFormData({ name: '', email: '', password: '' });

      // ✅ Redirect after short delay
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      setMessage({ text: error.message || 'Something went wrong', type: 'error' });
    }
  };

  return (
    <div className="auth-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><span onClick={() => navigate('/')} className="nav-item">Home</span></li>
          <li><span onClick={() => navigate('/about')} className="nav-item">About</span></li>
          <li><span onClick={() => navigate('/contact')} className="nav-item">Contact</span></li>
        </ul>
      </nav>

      <div className="auth-box">
        <form onSubmit={handleSignup} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        {/* ✅ Display error/success message */}
        {message.text && (
          <p style={{
            color: message.type === 'success' ? 'green' : 'red',
            textAlign: 'center',
            marginTop: '10px',
            fontWeight: 'bold'
          }}>
            {message.text}
          </p>
        )}

        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} style={{ color: 'blue', cursor: 'pointer' }}>
            Login
          </span>
        </p>

        <div className="social-login">
          <button className="social-btn google-btn">Sign up with Google</button>
          <button className="social-btn">Sign up with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
