import React from 'react'
import { useCart } from './Context/CartContext'
import Navbar from './components/Navbar'
import {Link} from 'react-router-dom'

const UserCart = () => {
//destructuring the states from that custom hook
const{id}=useCart()
  const {cartItems,addToCart,removeFromCart,addToWishlist}= useCart()
  
  return (
    <>
    <Navbar/>
    <div className='cart-heading'>
            <h2>Your Cart</h2>
    </div>

<div className="cart-msg">
  {cartItems.length === 0 ? (
    <>
      Cart is empty !!!!! 
      <br/><br/>
      <Link to='/'>
        <button className='btn'>Continue Shopping</button>
      </Link>
    </>
  ) : (
    cartItems.length
  )}  
</div>

    <div>
      {cartItems.map((item)=>{
        return(
          <div>
          <div className='cart-section' >
           <div className="cart-img">
            <img src={item.image} alt="" />
           </div>
           <div className="cart-details">
            <h4> {item.product}</h4>
            <h4> {item.company}</h4>
            <h4> {item.price}</h4>
            </div>
            
            <div className='card-btn'>
            <button className='btn' onClick={()=>removeFromCart(item)}>Remove from Cart</button> 
            <button className='btn' onClick={() => addToWishlist(item)}>Add to Wishlist</button>
           <Link to='/checkout'> <button className='btn2'>Proceed to Checkout</button>  </Link>
           </div>
          </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default UserCart
