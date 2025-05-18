import React from 'react';

function Dashboard() {
  const email = localStorage.getItem('userEmail');
  const token = localStorage.getItem('token');

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Welcome to your Dashboard</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Token:</strong> {token?.slice(0, 25)}... (truncated)</p>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = '/Login'; // force redirect
        }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
