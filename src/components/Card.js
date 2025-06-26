import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Card({ title, imgSrc, desc, price = 100 }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authUser");

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("half");

  const handleQuantityChange = (type) => {
    setQuantity(prev => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const foodItem = {
      name : title,
      imgSrc,
      desc,
      price,
      quantity,
      size,
      total: price * quantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists (same title & size)
    const existingIndex = cart.findIndex(
      (item) => item.title === title && item.size === size
    );

    if (existingIndex !== -1) {
      // Update quantity & total
      cart[existingIndex].quantity += quantity;
      cart[existingIndex].total = cart[existingIndex].quantity * price;
    } else {
      cart.push(foodItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

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

          <div className="mb-3 d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-warning fw-bold" onClick={() => handleQuantityChange("decrement")}>−</button>
            <span className="fw-bold fs-5">{quantity}</span>
            <button className="btn btn-sm btn-warning fw-bold" onClick={() => handleQuantityChange("increment")}>+</button>
          </div>


          <div className="fs-5 mb-2">Total: ₹{price * quantity}</div>

          <button
            className="btn btn-warning fw-bold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
