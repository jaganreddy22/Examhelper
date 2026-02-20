import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchNotes.css';
 // contains both navbar and resource grid styling

const notes = {
  csm: [
    { title: 'CSM SYLLABUS', file: '/files/CSM_Syllabus.pdf' },
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
     { title: 'AI NOTES', file: '/files/AI.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
    {title: 'DBMS NOTES', file: '/files/2-2notes/DBMS_Notes.pdf' },
    {title: 'DLCO NOTES', file: '/files/2-2notes/DLCO_Notes.pdf' },
    {title: 'Design Thinking', file: '/files/2-2notes/DTI_Notes.pdf' },
    {title: 'Natural Language processing', file: window.location.origin + '/files/NLPNotes.pdf' },
    {title: 'Operating system&SP', file: '/files/OS&SPNotes.pdf' },
    {title: 'Data Analysis', file: '/files/DataanalysisNotes.pdf' },
    {title: 'Quantum Notes', file: '/files/QuantumNotes.pdf' },
    {title: 'CVIP NOTES', file: '/files/CVIP Notes.pdf' },

  ],
  cai: [
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
     { title: 'AI NOTES', file: '/files/AI.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
   
    {title: 'DBMS NOTES', file: '/files/2-2notes/DBMS_Notes.pdf' },
    {title: 'DLCO NOTES', file: '/files/2-2notes/DLCO_Notes.pdf' },
    {title: 'Design Thinking', file: '/files/2-2notes/DTI_Notes.pdf' },
    {title: 'Natural Language processing', file: window.location.origin + '/files/NLPNotes.pdf' },
    {title: 'Operating system&SP', file: '/files/OS&SPNotes.pdf' },
    {title: 'Data Analysis', file: '/files/DataanalysisNotes.pdf' },
    {title: 'Quantum Notes', file: '/files/QuantumNotes.pdf' },
    {title: 'CVIP NOTES', file: '/files/CVIP Notes.pdf' },
  ],
  cse: [
    {title: 'DBMS NOTES', file: '/files/2-2notes/DBMS_Notes.pdf' },
    { title: 'MATH NOTES', file: '/files/MathNotes.pdf' },
    { title: 'JAVA NOTES', file: '/files/Java.pdf' },
    { title: 'UHV NOTES', file: '/files/Uhv.pdf' },
    { title: 'ADSA NOTES', file: '/files/Adsanotes.pdf' },
    {title: 'Quantum Notes', file: '/files/QuantumNotes.pdf' },
    {title: 'DLCO NOTES', file: '/files/2-2notes/DLCO_Notes.pdf' },
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
