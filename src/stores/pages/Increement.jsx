import React, { useState } from 'react'

const Increement = () => {
   
  const[quantity,setQuantity]=useState(1)

  const handleDecreement=()=>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  const handleIncreement=()=>{
    if(quantity<10){
      setQuantity(quantity+1)
    }
  }

  return (
    <div className='incree-section'>
      <button className='btn1' onClick={handleDecreement}>-</button>
      <div className='qty'>{quantity}</div>
      <button className='btn1' onClick={handleIncreement}>+</button>
    </div>
  )
}

export default Increement
