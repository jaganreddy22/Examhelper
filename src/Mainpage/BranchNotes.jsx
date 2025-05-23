import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchNotes.css';
 // contains both navbar and resource grid styling

const notes = {
  csm: [
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
    { title: 'AI NOTES', file: '/files/AI.pdf' },
  ],
  cai: [
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
    { title: 'AI NOTES', file: '/files/AI.pdf' },
  ],
  cse: [
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
    { title: 'AI NOTES', file: '/files/AI.pdf' },
  ],
};

const BranchNotes = () => {
  const { branchCode } = useParams();
  const branchName = branchCode.toUpperCase();
  const branchNotes = notes[branchCode] || [];

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

      <div className="branch-page">
        <h2>{branchName} – Notes Section</h2>

        <div className="resource-grid">
          {branchNotes.map((item, idx) => (
            <div className="resource-card" key={idx}>
              <h3>{item.title}</h3>
              <a className="download-btn" href={item.file} download>Download</a>
            </div>
          ))}
          {branchNotes.length === 0 && <p>No notes available for this branch.</p>}
        </div>
      </div>
    </div>
  );
};

export default BranchNotes;
