import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import './BranchUi.css'

const branches = [
  { name: '🖥️ CSM', code: 'csm' },
  { name: '🖥️ CAI', code: 'cai' },
  { name: '🖥️ CSE', code: 'cse' },
  { name: '🖥️ CSD', code: 'csd' },
  { name: '🖥️ CSC', code: 'csc' },
  { name: '🖥️ CSBS', code: 'csbs' },
  { name: '🖥️ IT', code: 'it' },
  { name: '📡 ECE', code: 'ece' },
  { name: '⚡ EEE', code: 'eee' },
  { name: '🏗️ CIVIL', code: 'civil' },
   { name: '🔧 MECH', code: 'mech' },
]

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
              className={`branch-card ${branch.code.toLowerCase()}`}
              onClick={() => navigate(`/branch/${branch.code.toLowerCase()}`)}
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
