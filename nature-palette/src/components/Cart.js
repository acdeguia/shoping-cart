import React from 'react';
import Navbar from './Navbar';

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubTotalPrice = () => {
    const subTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subTotalPrice.toFixed(2);
  };

  const calculateTotalItems = () => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return totalItems;
  };

  return (
    <div className="cart">
      <Navbar logotypeColor="logo__1" />
      <h1>
        <span>My</span> Bag
      </h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mycart-summary">
          <div className='cart-grp-list'>
            {cartItems.map((item) => (
              <div className="cart-list" key={item.id}>
                <img className="cart-img" src={item.src} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <h3>Qty:</h3>
                  <div>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>Price: {item.price}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <p>{calculateTotalItems()} item{calculateTotalItems() > 1 ? 's' : ''}</p>
            <p>Subtotal: ₱{calculateSubTotalPrice()}</p>
            <p>Shipping: ₱150.00</p>
            <hr />
            <p>
              Total: ₱{(
                parseFloat(calculateSubTotalPrice()) + 150
              ).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
