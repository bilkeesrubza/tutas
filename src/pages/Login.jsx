import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();


  return (
    <div className="login-page">
  <div className="login-card">
    <h2>Login to Tutas LMS</h2>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/${role}-dashboard`);
      }}
    >
      <div className="login-field">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="login-field">
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="login-field">
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</div>
    
  );
}

export default Login;
