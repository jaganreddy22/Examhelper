import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a onClick={() => navigate('/')} className="nav-item">Home</a></li>
          <li><a onClick={() => navigate('/about')} className="nav-item">About</a></li>
          <li><a className="nav-item active">Contact</a></li>
        </ul>
      </nav>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below and we'll get back to you.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
