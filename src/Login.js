import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:8084/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const data = await res.json();
        // Assuming backend returns { role: 'admin' | 'manager' | 'user', ... }
        if (data && data.role) {
          navigate(`/dashboard/${data.role}`);
        } else {
          setError('Login succeeded but role missing.');
        }
      } else {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setError(data.message || 'Invalid credentials');
        } catch (e) {
          setError(text || 'Invalid credentials');
        }
      }
    } catch (err) {
      setError('Error connecting to backend.');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="form-input" name="username" type="text" value={form.username} onChange={handleChange} placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>Login</button>
        </form>
        {error && <p className="text-error" style={{ textAlign: 'center' }}>{error}</p>}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <a href="/register" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
