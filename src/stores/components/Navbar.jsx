import React, { useState } from 'react'
import { Link} from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { FaShopware } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { useCart } from '../Context/CartContext'

const Navbar = () => {

  const {cartItems,wishItems}=useCart()

    /*for toggling the matter on home screen, when we click on that e-mart 
  then we will get some text, if we click again then it will go back to 
  normal state*/

  const [show,setShow]=useState(false)

  const showHandler=()=>{
    setShow(!show)
  }

  return (
    <>
    <div className='nav-section'>
      
      <div className='toggle-section'>
      <div className="title" onClick={showHandler}>
       <h1> <FaShopware /> Shopify</h1>
      </div>

    {show && <div className='toggle'>
        <p>
           * Shop Outside the Box <br/>
           * Where Trends Are Born <br/>
           * Curate Your Own Happiness
        </p>
      </div>
    } 
     </div>  
        
      <div className="search" >
        <input type="text" placeholder='search....' />
      </div>
      
      <div className='user'>
        <div className='home'>
          <Link to='/'><FcShop />
          </Link>
        </div>
        <Link to='/signin'>
        <div className="user-detail">
          sign-in/sign-up
        </div>
        </Link>
      
        <Link to='/wishlist'>
        <div className="cart "> 
        <FaRegHeart />
        <span>{wishItems.length}</span>
        </div>
        </Link>

        <Link to='/cart'>
        <div className="cart "> 
        <FaShoppingCart />
        <span>{cartItems.length}</span>
        </div>
        </Link>
        
      </div>
    </div>
    <div className="submenu">
        <ul>
          <Link to ='/mobiles'> <li>Mobiles</li> </Link>
          <Link to ='/ac'> <li>Ac</li> </Link>
          <Link to ='/watches'> <li>Watches</li> </Link>
          <Link to ='/men'> <li>Men Clothing</li> </Link>
          <Link to ='/women'> <li>Women Clothing</li> </Link>
          <Link to ='/fridges'> <li>Fridges</li> </Link>
          <Link to ='/tv'> <li>Tv</li> </Link>
          <Link to ='/speakers'> <li>Speakers</li> </Link>
        </ul>
    </div>
   
    </>
  )
}

export default Navbar
