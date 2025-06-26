import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
    setAuthUser(null);
    navigate("/"); // Redirect to home
    window.location.reload(); // Refresh to update navbar
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ background: 'linear-gradient(90deg, #1e3c72, #2a5298)' }}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand fs-2 fw-bold fst-italic text-warning" to="/">
          <i className="fas fa-utensils me-2"></i>BhojanBox
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          {/* Left nav links */}
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Stores
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Delhi</Link></li>
                <li><Link className="dropdown-item" to="#">Mumbai</Link></li>
                <li><Link className="dropdown-item" to="#">Bangalore</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
          </ul>

          {/* Right section */}
          <div className="d-flex align-items-center gap-3">
            {/* Search */}
            <div className="input-group">
              <input type="text" className="form-control border-0 rounded-start" placeholder="Search for food..." />
              <button className="btn btn-warning text-dark">
                <i className="fas fa-search"></i>
              </button>
            </div>

            {/* Cart */}
            <Link to="/cart" className="btn btn-outline-light position-relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {/* You can update dynamically later */}
              </span>
            </Link>

            {/* Account / Profile Section */}
            {authUser ? (
              <>
                {/* Profile Dropdown */}
                <div className="dropdown">
                  <button className="btn btn-warning dropdown-toggle fw-bold text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {authUser.name || "My Account"}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/Your Orders">Your Orders</Link></li>
                    <li><Link className="dropdown-item" to="/Sendfeedback">Send feedback</Link></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              </>
            ) : (
              // Not logged in
              <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle fw-bold text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
