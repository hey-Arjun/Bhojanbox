import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Redirect if not logged in
  const isLoggedIn = localStorage.getItem("authUser");
  useEffect(() => {
    if (!isLoggedIn) {
        alert("please login first")
    } else {
      const stored = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(stored);
    }
  }, [isLoggedIn, navigate]);

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold text-success">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <table className="table table-bordered shadow-sm">
            <thead className="table-success">
              <tr>
                <th>Dish</th>
                <th>Quantity</th>
                <th>Price (each)</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger me-1"
                      onClick={() => handleQuantityChange(index, -1)}
                    >−</button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-outline-success ms-1"
                      onClick={() => handleQuantityChange(index, 1)}
                    >+</button>
                  </td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveItem(index)}
                    >Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="text-end fw-bold">Total: ₹{getTotalPrice()}</h4>

          <div className="text-end mt-3">
            <button className="btn btn-danger me-3" onClick={handleClearCart}>Clear Cart</button>
            <button className="btn btn-warning me-2">Checkout</button>
            <button className="btn btn-success">Pay Now</button>
          </div>
        </>
      )}
    </div>
  );
}
