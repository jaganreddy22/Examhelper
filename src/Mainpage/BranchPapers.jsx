import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchPage.css';

const papers = {
  csm: [
    { title: '2-1 Mid 1 Papers', file: '/files/csmmid1.pdf' },
    { title: '2-1 Mid 2 Papers', file: '/files/csmmid1.pdf' },
    { title: '2-1 SEM Papers', file: '/files/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
  cai: [
    { title: '2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
    { title: '2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
    { title: '2-1 SEM Papers', file: '/files/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
  cse: [
    { title: '2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
    { title: '2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
    { title: '2-1 SEM Papers', file: '/files/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
};

const BranchPapers = () => {
  const { branchCode } = useParams();
  const branchName = branchCode.toUpperCase();
  const branchPapers = papers[branchCode] || [];

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
        <h2>{branchName} – Question Papers Section</h2>

        <div className="resource-grid">
          {branchPapers.map((item, idx) => (
            <div className="resource-card" key={idx}>
              <h3>{item.title}</h3>
              <a className="download-btn" href={item.file} download>Download</a>
            </div>
          ))}
          {branchPapers.length === 0 && <p>No question papers available for this branch.</p>}
        </div>
      </div>
    </div>
  );
};

export default BranchPapers;
