import React, { useState } from 'react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setError("");
      } else {
        setError("❌ Failed to submit feedback. Try again.");
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("❌ Server error. Please try later.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center text-success fw-bold mb-4">We'd love your feedback!</h2>

      {submitted && (
        <div className="alert alert-success" role="alert">
          🎉 Thank you for your feedback!
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            placeholder="Tell us what you think..."
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">Submit Feedback</button>
      </form>
    </div>
  );
}
