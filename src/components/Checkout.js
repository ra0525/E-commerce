import React, { useState } from 'react';
// import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/Checkout.css';

const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXXXXXXXXXXX'); // Replace with your Stripe public key

const CheckoutForm = () => {
//   const { cartItems, getTotalPrice } = useCart();
  const [billing, setBilling] = useState({ name: '', address: '', city: '', state: '', pin: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedBank, setSelectedBank] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(paymentMethod === 'card') {
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: { name: billing.name },
      });
    if (paymentMethod === 'netbanking') {
      console.log("Selected Bank:", selectedBank);
    }
      if(error) {
        alert(error.message);
      } else {
        alert('Card payment success simulated (since no backend)');
      }
    } else {
      alert(`Order placed via ${paymentMethod}`);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Billing Address</h2>
      <input type="text" placeholder="Name" value={billing.name} onChange={e => setBilling({...billing, name: e.target.value})} required />
      <input type="text" placeholder="Address" value={billing.address} onChange={e => setBilling({...billing, address: e.target.value})} required />
      <input type="text" placeholder="City" value={billing.city} onChange={e => setBilling({...billing, city: e.target.value})} required />
      <input type="text" placeholder="State" value={billing.state} onChange={e => setBilling({...billing, state: e.target.value})} required />
      <input type="text" placeholder="PIN Code" value={billing.pin} onChange={e => setBilling({...billing, pin: e.target.value})} required />

      <h2>Select Payment Method</h2>
      <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
        <option value="card">Credit/Debit Card</option>
        <option value="upi">UPI</option>
        <option value="netbanking">Net Banking</option>
        <option value="cod">Cash on Delivery</option>
      </select>

      {paymentMethod === 'card' && <CardElement />}
      {paymentMethod === 'netbanking' && (
          <div className="form-group">
            <label>Select Your Bank:</label>
            <select 
              value={selectedBank} 
              onChange={(e) => setSelectedBank(e.target.value)}
              required
            >
              <option value="">--Select Bank--</option>
              <option value="SBI">State Bank of India (SBI)</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="Axis">Axis Bank</option>
              <option value="PNB">Punjab National Bank (PNB)</option>
            </select>
          </div>
        )}

      <button type="submit">Place Order</button>
    </form>
    
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
