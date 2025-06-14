import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} className="cart-image"/>
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
