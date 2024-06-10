import React from 'react'
import Navbar from '../components/Navbar'
import { womendata } from '../data.js/women'
import { Link } from 'react-router-dom'

const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        womendata.map((item)=>{
          return(
            <div>
             <Link to={`/women/${item.id}`}>
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

export default WomenPage
