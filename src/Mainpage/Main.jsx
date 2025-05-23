import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const branches = [
  { name: 'CSM', code: 'csm' },
  { name: 'CAI', code: 'cai' },
  { name: 'CSE', code: 'cse' },
];

function Branches() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="app-header">
        <ul className="nav-bar">
          <img src="/examlogo.png" alt="logo" className="logo" />
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li><a href="/login" className="nav-link">Login</a></li>
        </ul>
      </header>

      <div className="branch-container">
        <h2 className="title">Select Your Branch</h2>
        <div className="branch-grid">
          {branches.map(branch => (
            <div
              key={branch.code}
              className={`branch-card ${branch.code}`}  // Add dynamic class
              onClick={() => navigate(`/branch/${branch.code}`)}
            >
              {branch.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Branches;
