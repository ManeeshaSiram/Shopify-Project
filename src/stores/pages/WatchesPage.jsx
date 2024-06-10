import React from 'react'
import Navbar from '../components/Navbar'
import { watchdata } from '../data.js/watches'
import { Link } from 'react-router-dom'

const WatchesPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        watchdata.map((item)=>{
          return(
            <div>
             <Link to={`/watches/${item.id}`}>
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

export default WatchesPage
