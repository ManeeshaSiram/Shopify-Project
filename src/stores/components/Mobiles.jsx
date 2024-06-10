import React, { useState } from 'react'
import { mobiledata } from '../data.js/mobiles'

const Mobiles = () => {

//visibility of only 4 images on home page, here we use slice method
  const firstFourImages= mobiledata.slice(0,4)
   
 /* when we click on particular item on home screen we will get that 
 item seperately*/
  
  const[showImage,setShowImage]=useState(null)

  const imageHandler=(boximage)=>{
      setShowImage(boximage)
  }
  const closeHandler=()=> {
    setShowImage(null)
  }

  return (
    <>
    <div className='protitle'>
    <h2>Mobiles</h2>
    </div>
    <div className='productsection'>
      {
        firstFourImages.map((item)=>{
            return(
              <div className='imagebox'>
                <img className='pro-image' src={item.image} alt="mobile" onClick={()=>imageHandler(item.image)}/>
              </div>
            )
        })
      }
    </div>
    {
    showImage &&
    <div className='container'>
      <div className='model'>
        <img src={showImage} alt="" />
        <button className='btn' onClick={closeHandler}>close</button>
      </div>
    </div>
   }
    </>
  )
}

export default Mobiles
