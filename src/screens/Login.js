import React from 'react';

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-success fw-bold">Login to BhojanBox</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        <p className="mt-3 mb-0 text-center">
          Don't have an account? <a href="/signup" className="text-decoration-none text-primary">Sign up</a>
        </p>
      </div>
    </div>
  );
}
