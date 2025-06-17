import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Bhojan Box</h5>
            <p>
              Delicious food delivered to your door in minutes. Fresh, fast, and made with love. Your hunger, our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p><Link to="/menu" className="text-white text-decoration-none">Menu</Link></p>
            <p><Link to="/about" className="text-white text-decoration-none">About Us</Link></p>
            <p><Link to="/contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

          {/* Support */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Support</h5>
            <p><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></p>
            <p><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></p>
            <p><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> New Delhi, India</p>
            <p><i className="fas fa-envelope mr-3"></i> support@bhojanbox.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 XXXXX XXXXX</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Social Icons */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} Bhojan Box — All Rights Reserved</p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="https://facebook.com" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="text-white me-4"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-white me-4"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

