import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className='thank-you'>
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to='/'>
        <button className='btn'>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ThankYou;
