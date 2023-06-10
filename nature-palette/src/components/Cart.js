import React from 'react';

const Cart = ({ cartItems, onClose }) => {
  return (
    <div className="">
      <div >
        <h2>Cart</h2>
        <p>
          Total Items: <span>{cartItems.length}</span>
        </p>
        <button onClick={onClose}>close</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;