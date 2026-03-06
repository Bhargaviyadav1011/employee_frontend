import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Attempting to fetch all users via the correct backend endpoint
    fetch('http://localhost:8084/api/users/all')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users. You may need Administrator privileges or a valid session.');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error loading users');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Administrator Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back, Admin! Manage your system users below.</p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href='/login'}>Logout</button>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Registered Users</h3>
        
        {loading && <p style={{ color: 'var(--text-muted)' }}>Loading system records...</p>}
        {error && <p className="text-error" style={{ marginBottom: '1rem' }}>{error}</p>}
        
        {!loading && !error && (
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role Context</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? users.map(u => (
                  <tr key={u.id}>
                    <td style={{ fontWeight: '500' }}>#{u.id}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`badge badge-${u.role.toLowerCase()}`}>
                        {u.role.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <button className="btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', marginRight: '0.5rem', background: '#E5E7EB', color: 'var(--text-main)' }}>Edit</button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                      No users found in the system.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
