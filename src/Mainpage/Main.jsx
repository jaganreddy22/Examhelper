
import React from 'react';



const resources = [
  { title: 'CSM 2-1 Mid 1 Papers', file: '/files/mid1.pdf' },
  { title: 'CSM 2-1 Mid 2 Papers', file: '/files/mid2.pdf' },
  { title: 'CSM 2-1 SEM Papers', file: '/files/sem.pdf' },
  { title: 'MATH NOTES', file: '/files/math.pdf' },
  { title: 'JAVA NOTES', file: '/files/java.pdf' },
  { title: 'UHV NOTES', file: '/files/uhv.pdf' },
  { title: 'ADSA NOTES', file: '/files/adsa.pdf' },
  { title: 'AI NOTES', file: '/files/ai.pdf' },
];

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
       
        <ul className="nav-bar">
           <img src="examlogo.png" alt="logo" className="logo" />
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li><a href="/login" className="nav-link">Login</a></li>
        </ul>
      </header>

      <section className="section">
        <h2>This is for CSM Department</h2>
        <a className="download-btn" href="/files/R23.pdf" download>Click Here to Download R23 CSM Curriculum</a>
      </section>

      <div className="card-grid">
        {resources.map((item, index) => (
          <div className="resource-card" key={index}>
            <h3>{item.title}</h3>
            <a href={item.file} className="resource-download" download>Download</a>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>This is for CAI Department</h2>
        <a className="download-btn" href="/files/R23.pdf" download>Click Here to Download R23 CAI Curriculum</a>
      </section>

      <div className="card-grid">
        {resources.map((item, index) => (
          <div className="resource-card" key={`cai-${index}`}> {/* unique key for CAI */}
            <h3>{item.title.replace('CSM', 'CAI')}</h3>
            <a href={item.file} className="resource-download" download>Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
