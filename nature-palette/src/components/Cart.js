import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  console.log("Cart items:", cartItems);

  const handleRemoveFromCart = (productId) => {
    console.log("Removing from cart:", productId);
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    console.log("Updated cart items:", updatedCartItems);
  };

  const calculateTotalPrice = () => {
    // Calculate the total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
            <img className='cart-img' src={item.src} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <p>Total: ₱{calculateTotalPrice()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
