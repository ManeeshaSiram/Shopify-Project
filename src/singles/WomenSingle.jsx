import React from 'react'
import { womendata } from '../stores/data.js/women'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { useCart } from '../stores/Context/CartContext'
import Increement from '../stores/pages/Increement'

const WomenSingle = () => {
  const {id}= useParams()

  const{addToCart,addToWishlist} = useCart()
  
  const product=womendata.find((item)=>item.id===id)

  return (
    <>
    <Navbar/>
    <div className='ind-section'>
      <div className="ind-image">
        <img src={product.image} alt="" />
      </div>
      
      <div className="ind-details space">
        <div className="ind-company space">
          <h3>{product.company}</h3>
        </div>
        <div className="ind-price space">
          <h3>{product.price}</h3>
        </div>
        <div className="ind-desc space">
          <p>{product.description}</p>
        </div>
        <button className='btn space' onClick={()=>addToCart(product)}>Add to Cart</button>
        <button className='btn space' onClick={()=>addToWishlist(product)} >Add to Wishlist</button>
        <Increement/>
      </div>    
    </div>
    </>
  )
}

export default WomenSingle
