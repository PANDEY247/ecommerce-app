// import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 9.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 14.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 4.99, quantity: 3 },
  ];

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id}>
        <h4>
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button>Remove</button>
      </div>
    ));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      {renderCartItems()}
      <h3>Total: ${calculateTotalPrice()}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
