import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", credentials);

    const response = await fetch("http://localhost:2000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    });

    const json = await response.json();
    console.log("Server Response:", json);

    if (!response.ok || !json.success) {
      alert("Enter valid credentials!");
    } else {
      // ✅ Save authToken
      localStorage.setItem("authToken", json.authToken);

      // ✅ Save user info (REQUIRED for Navbar)
      localStorage.setItem("authUser", JSON.stringify({
        name: json.name,
        email: credentials.email
      }));

      // Optional: Toast or alert
      alert("Login successful!");

      // ✅ Redirect and reload to update Navbar
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-success fw-bold">Login to BhojanBox</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
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
