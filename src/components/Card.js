import React from "react";

export default function Card({ title, imgSrc, desc }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white shadow-sm h-100">
        <img
          src={imgSrc}
          className="card-img-top rounded-top"
          alt="Dish"
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>

          <div className="mb-3 d-flex">
            <select className="form-select me-2 bg-success text-white">
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select className="form-select bg-success text-white">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>

          <div className="fs-5 mt-auto">Total: ₹199</div>
        </div>
      </div>
    </div>
  );
}
