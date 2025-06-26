import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) {
      navigate("/login"); // Redirect if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null; // Optional: loading state

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center fw-bold text-success mb-4">👤 Your Profile</h2>

        <div className="mb-3">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {user.email}
        </div>

        <div className="mt-4">
          <button className="btn btn-warning fw-bold" onClick={() => alert("Coming Soon!")}>
            🔒 Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
