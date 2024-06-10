import React from 'react'
import Navbar from '../components/Navbar'
import {fridgedata} from '../data.js/fridges'
import { Link } from 'react-router-dom'

const FridgesPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        fridgedata.map((item)=>{
          return(
            <div>
             <Link to={`/fridges/${item.id}`}>
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

export default FridgesPage
