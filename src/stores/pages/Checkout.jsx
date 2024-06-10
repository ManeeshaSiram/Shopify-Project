import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {

  const { clearCart } = useCart();
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    state: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic (e.g., send data to your backend)
    console.log('Shipping Details:', shippingDetails);
    clearCart();
    navigate('/thankyou');
  };

  return (
    <>
      <Navbar />
      
      <div className='checkout-heading'>
        <h2>Checkout Page</h2>
      </div>

      <div className='shipping-form'>
        <h3>Shipping Details</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={shippingDetails.name} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div>
            <label>Address</label>
            <input 
              type="text" 
              name="address" 
              value={shippingDetails.address} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div>
            <label>City</label>
            <input 
              type="text" 
              name="city" 
              value={shippingDetails.city} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div>
            <label>Pin-Code</label>
            <input 
              type="text" 
              name="postalCode" 
              value={shippingDetails.postalCode} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div>
            <label>State</label>
            <input 
              type="text" 
              name="state" 
              value={shippingDetails.state} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button type="submit" className='btn2'>Proceed to Payment</button>
         <Link to='/cart'> <button className='btn2'>Cancel</button> </Link>

        </form>
      </div>
    </>
  );
}

export default Checkout;
           
