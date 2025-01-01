import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState(""); 
  
  useEffect(() => {
    const calculateTotal = cart.reduce((sum, item) => sum + parseFloat(item.amt), 0);
    setTotal(calculateTotal);
  }, [cart]);

 
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  
  const handleOrderConfirmation = () => {
    if (cart.length > 0) {
     
      setCart([]);

      
      setConfirmationMessage("Your order has been placed successfully!");

      setTimeout(() => setConfirmationMessage(""), 5000);
    } else {
      
      setConfirmationMessage("Your cart is empty! Add some products before placing an order.");
      setTimeout(() => setConfirmationMessage(""), 3000);
    }
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      {confirmationMessage && <p className="success-message">{confirmationMessage}</p>} 
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.pic} alt={product.name} />
              </div>
              <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
              </div>
              <button onClick={() => handleRemove(product.id)} className="remove-button">
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is currently empty.</p>
        )}
      </div>
      {cart.length > 0 && <h2 className="cart-amount">Total Amount Rs: {total.toFixed(2)}</h2>}
      <div className="order-confirm">
        <button onClick={handleOrderConfirmation} className="order-button">
          OK
        </button>
      </div>
    </>
  );
};
