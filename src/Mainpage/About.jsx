import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a onClick={() => navigate("/")} className="nav-item">Home</a></li>
          <li><a className="nav-item active">About</a></li>
          <li><a onClick={() => navigate("/contact")} className="nav-item">Contact</a></li>
        </ul>
      </nav>

      <div className="about-content">
        <h1>About Exam Helper</h1>
        <p>
          Exam Helper is a platform designed to provide students with essential study materials,
          previous exam papers, and subject notes to help them excel in their academics.
          Whether you're preparing for mid-term exams, semester-end assessments, or looking for
          additional resources, our website has got you covered.
        </p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Access a collection of previous exam papers.</li>
          <li>Download subject notes prepared by experts.</li>
          <li>Simple and easy-to-navigate interface.</li>
          <li>Completely free resources for students.</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our goal is to assist students by providing quality educational content in an organized and
          accessible manner. We believe that with the right study materials, every student can achieve academic excellence.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Have questions or suggestions? Feel free to <a href="/contact" className="contact-link">contact us</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
