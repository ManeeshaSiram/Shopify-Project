import React from 'react'
import { useCart } from '../Context/CartContext'
import Navbar from '../components/Navbar'

const Wishlist = () => {
//destructuring the states from that custom hook
  const {wishItems,addToWishlist,removeFromWishlist}= useCart()
  
  return (
    <>
    <Navbar/>
    <div className='cart-heading'>
      <h2>Your Wishlist</h2>
    </div>
    <div>
      {wishItems.map((item)=>{
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
            <div>
            <button className='btn' onClick={()=>removeFromWishlist(item)}>Remove</button>
            
           </div>
          </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Wishlist
