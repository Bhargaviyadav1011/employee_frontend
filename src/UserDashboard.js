import React from 'react';

function UserDashboard() {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Employee Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back! Have a productive day.</p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href='/login'}>Logout</button>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Your Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Role</p>
            <p style={{ fontWeight: '500' }}>Standard User</p>
          </div>
          <div>
            <p className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Department</p>
            <p style={{ fontWeight: '500' }}>Engineering</p>
          </div>
          <div>
            <p className="form-label" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Join Date</p>
            <p style={{ fontWeight: '500' }}>March 06, 2026</p>
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', marginTop: '2rem' }}>My Tasks</h3>
      <div className="dashboard-grid" style={{ marginTop: '0' }}>
        <div className="card" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
          <h4 style={{ color: '#166534', marginBottom: '0.5rem' }}>Complete Quarter Review</h4>
          <p style={{ fontSize: '0.9rem', color: '#15803D' }}>Due by End of Day</p>
        </div>
        <div className="card" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
          <h4 style={{ color: '#1E40AF', marginBottom: '0.5rem' }}>Attend Standup Meeting</h4>
          <p style={{ fontSize: '0.9rem', color: '#1D4ED8' }}>Starts at 10:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
