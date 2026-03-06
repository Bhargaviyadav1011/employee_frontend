import React from 'react';

function ManagerDashboard() {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Manager Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back! Here is your team overview.</p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href='/login'}>Logout</button>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Team Status</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>14</p>
          <p style={{ color: 'var(--text-muted)' }}>Active Members Online</p>
        </div>
        
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Pending Approvals</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', color: '#D97706', marginBottom: '0.5rem' }}>5</p>
          <p style={{ color: 'var(--text-muted)' }}>Leave requests require attention</p>
          <button className="btn btn-block" style={{ marginTop: '1rem', background: '#FEF3C7', color: '#92400E' }}>Review Now</button>
        </div>

        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Monthly Goal</h3>
          <div style={{ background: 'var(--border)', height: '8px', borderRadius: '4px', marginTop: '1.5rem', marginBottom: '0.5rem', overflow: 'hidden' }}>
            <div style={{ background: 'var(--success)', height: '100%', width: '75%' }}></div>
          </div>
          <p style={{ color: 'var(--text-muted)', textAlign: 'right', fontSize: '0.9rem' }}>75% Completed</p>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
