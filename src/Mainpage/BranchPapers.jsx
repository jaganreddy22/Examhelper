import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchPage.css';

const papers = {
  csm: [
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' }
,    { title: '2-1 Mid 1 Papers 2024', file: window.location.origin + '/questionpaper/csmmid1.pdf' },
    { title: '2-1 Mid 2 Papers 2024', file: window.location.origin + '/questionpaper/csmmid2.pdf' },
    { title: '2-1 SEM Papers 2024 Nov/Dec(2024)', file: window.location.origin + '/questionpaper/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/csm2-2mid1.pdf' },
    { title: '2-2 Mid 2 Papers 2025', file: window.location.origin + '/questionpaper/csm2-2mid2.pdf' },
    { title: '2-2 Sem Papers May/June(2025)', file: window.location.origin + '/questionpaper/csm2-2sem.pdf' },
    { title: '2-2 mid 1 (2026)', file: window.location.origin + '/questionpaper/2026mid1.pdf' },
    { title: '3-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/3-1mid1.pdf' },
    { title: '3-1 Mid 2 Papers 2025', file: window.location.origin + '/questionpaper/3-1mid2.pdf' },
    { title: '3-1 Sem Papers Nov/Dec(2025)', file: window.location.origin + '/questionpaper/3-1sem.pdf' },
    { title: '3-2 Mid 1 Papers', file: window.location.origin + '/questionpaper/3-2mid1.pdf' },
  ],

  cai: [
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
    { title: '2-1 Mid 1 Papers 2024', file: window.location.origin + '/questionpaper/csmmid1.pdf' },
    { title: '2-1 Mid 2 Papers 2024', file: window.location.origin + '/questionpaper/csmmid2.pdf' },
    { title: '2-1 SEM Papers 2024 Nov/Dec(2024)', file: window.location.origin + '/questionpaper/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/csm2-2mid1.pdf' },
    { title: '2-2 Mid 2 Papers 2025', file: window.location.origin + '/questionpaper/csm2-2mid2.pdf' },
    { title: '2-2 Sem Papers May/June(2025)', file: window.location.origin + '/questionpaper/csm2-2sem.pdf' },
    { title: '2-2 mid 1 (2026)', file: window.location.origin + '/questionpaper/2026mid1.pdf' },
    { title: '3-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/3-1mid1.pdf' },
    { title: '3-1 Mid 2 Papers 2025', file: window.location.origin + '/questionpaper/3-1mid2.pdf' },
    { title: '3-1 Sem Papers Nov/Dec(2025)', file: window.location.origin + '/questionpaper/3-1sem.pdf' }
  ],

  cse: [
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
    { title: '2-1 Mid 1 Papers 2024', file: window.location.origin + '/questionpaper/csmmid1.pdf' },
    { title: '2-1 Mid 2 Papers 2024', file: window.location.origin + '/questionpaper/csmmid2.pdf' },
    { title: '2-1 SEM Papers 2024 Nov/Dec(2024)', file: window.location.origin + '/questionpaper/csmsem.pdf' },
    { title: '2-2 Mid 1 Papers 2025 ', file: window.location.origin + '/questionpaper/csm2-2mid1.pdf' }
  ],
  csd:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },

  ],
  csc:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  csbs:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  it:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  ece:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  eee:
  [
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  civil:[
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
  mech:
  [
    { title: '1-1 Mid 1 Papers 2025', file: window.location.origin + '/questionpaper/1styearmid-12026.pdf' },
    { title: '1-1 Sem Papers Dec(2025)/Jan(2026)', file: window.location.origin + '/questionpaper/1styearsem2026.pdf' },
  ],
    
};

const BranchPapers = () => {
  const { branchCode } = useParams();
  const branchName = branchCode?.toUpperCase();
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

              <a
                className="download-btn"
                href={item.file}
                download={item.title + ".pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>

            </div>
          ))}
          {branchPapers.length === 0 && <p>No question papers available for this branch.</p>}
        </div>
      </div>
    </div>
  );
};

export default BranchPapers;