import React from 'react'
import { mendata } from '../data.js/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        mendata.map((item)=>{
          return(
            <div>
              <Link to={`/men/${item.id}`}>
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

export default MenPage
