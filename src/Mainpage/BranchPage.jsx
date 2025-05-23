
import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchPage.css';

const allResources = {
  csm: [
     { title: '2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
  { title: '2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
  { title: '2-1 SEM Papers', file: '/files/sem.pdf' },
  { title: 'MATH NOTES', file: '/files/math.pdf' },
  { title: 'JAVA NOTES', file: '/files/java.pdf' },
  { title: 'UHV NOTES', file: '/files/uhv.pdf' },
  { title: 'ADSA NOTES', file: '/files/adsa.pdf' },
  { title: 'AI NOTES', file: '/files/ai.pdf' },
  { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
  cai: [
     { title: '2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
  { title: '2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
  { title: '2-1 SEM Papers', file: '/files/sem.pdf' },
  { title: 'MATH NOTES', file: '/files/math.pdf' },
  { title: 'JAVA NOTES', file: '/files/java.pdf' },
  { title: 'UHV NOTES', file: '/files/uhv.pdf' },
  { title: 'ADSA NOTES', file: '/files/adsa.pdf' },
  { title: 'AI NOTES', file: '/files/ai.pdf' },
  { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
  cse: [
   { title: '2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
  { title: '2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
  { title: '2-1 SEM Papers', file: '/files/sem.pdf' },
  { title: 'MATH NOTES', file: '/files/math.pdf' },
  { title: 'JAVA NOTES', file: '/files/java.pdf' },
  { title: 'UHV NOTES', file: '/files/uhv.pdf' },
  { title: 'ADSA NOTES', file: '/files/adsa.pdf' },
  { title: 'AI NOTES', file: '/files/ai.pdf' },
  { title: '2-2 Mid 1 Papers', file: '/files/csm2-2mid1.pdf' },
  ],
};

const BranchPage = () => {
  const { branchCode } = useParams();
  const branchName = branchCode.toUpperCase();

  const resources = allResources[branchCode] || [];

  return (
     <div>
        <header className="app-header">
       
        <ul className="nav-bar">
           <img src="examlogo.png" alt="logo" className="logo" />
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li><a href="/login" className="nav-link">Login</a></li>
        </ul>
      </header>
    <div className="branch-page">
      <h2>This is for {branchName} Department</h2>

      <a
        className="curriculum-btn"
        href={`/files/R23-${branchCode}.pdf`}
        download
      >
        Click Here to Download R23 {branchName} Curriculum
      </a>

      <div className="resource-grid">
        {resources.map((item, idx) => (
          <div className="resource-card" key={idx}>
            <h3>{item.title}</h3>
            <a
              className="download-btn"
              href={item.file}
              download
            >
              Download
            </a>
          </div>
        ))}
        {resources.length === 0 && <p>No resources available yet.</p>}
      </div>
    </div>
    </div>
  );
};

export default BranchPage;
