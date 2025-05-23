import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BranchPage.css'; // Use same CSS for consistency

const BranchSelect = () => {
  const { branchCode } = useParams();
  const branchName = branchCode.toUpperCase();
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <header className="app-header">
        <ul className="nav-bar">
          <img src="/examlogo.png" alt="logo" className="logo" />
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li><a href="/login" className="nav-link">Login</a></li>
        </ul>
      </header>

      {/* Page Content */}
      <div className="branch-page">
        <h2>{branchName} Department</h2>
        <p>Select a section:</p>

        <div className="select-buttons">
          <button onClick={() => navigate(`/branch/${branchCode}/notes`)}>
            📘 Notes
          </button>
          <button onClick={() => navigate(`/branch/${branchCode}/papers`)}>
            📄 Question Papers
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchSelect;
