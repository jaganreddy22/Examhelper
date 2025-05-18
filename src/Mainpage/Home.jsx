import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="H">Welcome to Our Home Page</h1>
      
      <div className="e">
        <p className="s">
          Our platform provides valuable resources and insights to help you succeed. 
          Whether you're a student looking for academic materials, a professional seeking 
          career advice, or an enthusiast exploring new knowledge, we have something for everyone.
        </p>
        <p className="t">
          Our mission is to deliver high-quality content, tutorials, and guidance to enhance 
          your learning journey. Stay connected with us and explore the vast world of opportunities!
        </p>
      </div>

      <div className="i">
        <h2>Key Features:</h2>
        <ul>
          <li>📚 Access to a wide range of study materials</li>
          <li>🎯 Career tips and interview preparation guides</li>
          <li>💡 Regularly updated content and tutorials</li>
          <li>📩 Stay connected through our contact section</li>
        </ul>
      </div>

      <div className="j">
        <h2>Why Choose Us?</h2>
        <p className="p">
          We are committed to providing you with the best learning experience, ensuring that you 
          stay ahead in your academic and professional journey.
        </p>
      </div>

      <div className="k">
        <h3 className="ab">Join Us Today!</h3>
        <p>Start exploring and make the most out of our resources. Happy learning! 🚀</p>
      </div>
    </div>
  );
};

export default Home;
