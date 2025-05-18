import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_66nfje7',         // ✅ Replace with your real EmailJS Service ID
      'template_ec5fnse',        // ✅ Replace with your real Template ID
      formRef.current,
      'BWwrcgX6fw3wdGi42'        // ✅ Replace with your real Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Check the console for details.');
      }
    );
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="contact-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a
              href="/"
              onClick={(e) => handleNavigation(e, '/')}
              className="nav-item"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={(e) => handleNavigation(e, '/about')}
              className="nav-item"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={(e) => e.preventDefault()}
              className="nav-item active"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below and we'll get back to you.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
