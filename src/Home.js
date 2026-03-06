import React from 'react';

function Home() {
  return (
    <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Employee Management System</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Welcome to the new and improved platform. Please register or login to access your dashboard.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/login" className="btn btn-primary">Login Now</a>
          <a href="/register" className="btn" style={{ background: '#E5E7EB', color: 'var(--text-main)' }}>Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
