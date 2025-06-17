import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-primary">Create an Account</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="9876543210" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Create Password</label>
            <input type="password" className="form-control" id="password" placeholder="••••••••" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success fw-bold">Sign Up</button>
          </div>

          <div className="text-center">
            <small>Already have an account? <Link to="/login">Login here</Link></small>
          </div>
        </form>
      </div>
    </div>
  );
}
