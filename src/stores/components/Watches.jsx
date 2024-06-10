import React,{useState} from 'react'
import { watchdata } from '../data.js/watches'

const Watches = () => {
  const firstFourImages= watchdata.slice(0,4)

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
    <h2>Watches</h2>
    </div>
      <div className='productsection'>{
    
      firstFourImages.map ((item)=>{
        return(
           <div className='imagebox'>
            <img className='pro-image' src={item.image} alt="Watches" onClick={()=>imageHandler(item.image)} />
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

export default Watches
