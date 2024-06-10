import React from 'react'
import Navbar from '../components/Navbar'
import {acData} from '../data.js/ac'
import { Link } from 'react-router-dom'

const AcPage = () => {

  return (
    <>
    <Navbar />
    <div className='pagesection'> 
      {
        acData.map((item)=>{
          return(
            <div>
           <Link to={`/ac/${item.id}`}>
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

export default AcPage
