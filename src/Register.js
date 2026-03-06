import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'user' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('https://employeemanagementbackend-1-aqr6.onrender.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setMessage('Registration successful! You can now log in.');
        setForm({ username: '', email: '', password: '', role: 'user' });
      } else {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setMessage(data.message || 'Registration failed.');
        } catch (e) {
          setMessage(text || 'Registration failed.');
        }
      }
    } catch (err) {
      setMessage('Error connecting to backend.');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="form-input" name="username" value={form.username} onChange={handleChange} placeholder="Choose a username" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label className="form-label">Role</label>
            <select className="form-input" name="role" value={form.role} onChange={handleChange} required>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>Register</button>
        </form>
        {message && <p className={message.includes('successful') ? 'text-success' : 'text-error'} style={{ textAlign: 'center' }}>{message}</p>}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <a href="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
