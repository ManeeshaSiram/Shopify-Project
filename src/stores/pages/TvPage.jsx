import React from 'react'
import Navbar from '../components/Navbar'
import {tvdata} from '../data.js/tv'
import { Link } from 'react-router-dom'

const TvPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        tvdata.map((item)=>{
          return(
            <div>
              <Link to={`/tv/${item.id}`}>
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

export default TvPage
