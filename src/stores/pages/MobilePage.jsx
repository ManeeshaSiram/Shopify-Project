import React, { useState } from 'react'
import { mobiledata } from '../data.js/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

/* for filtering the products */
  const [selectedProduct,setSelectedProduct]= useState([])

   const companyHandler =(mp)=>{
    if (selectedProduct.includes(mp))
      {
        setSelectedProduct(selectedProduct.filter(item => item!== mp))
      }
      else{
        setSelectedProduct([...selectedProduct,mp])
      }
   }

   const filteredProduct= selectedProduct.length === 0 ?
   mobiledata : mobiledata.filter((o)=>selectedProduct.includes(o.company) )
  
  return (
    <>
      <Navbar/>

      <div className="fullpage">
        <div className="pro-selected">
             {mobiledata.map((phone)=>{
              return(
                <div className='pro-input'>
                  <label>
                    <input type="checkbox"
                    checked ={selectedProduct.includes(phone.company)}
                    onChange={()=>companyHandler(phone.company)}
                    />
                    {phone.company}
                  </label>
                </div>
              )
             })
            }
        </div>
      </div>

    <div className='pagesection'>
      { filteredProduct.map((item)=>{
         return(
          <div>
            <Link to={`/mobiles/${item.id}`} >
            <div className="pageimg">
              <img src={item.image} alt="" />
            </div>
            </Link>
            <div className='promodel'>
              {item.company}
            </div>
          </div>
         )
      })
    }
    </div>
  
  </>
  )
}

export default MobilePage
