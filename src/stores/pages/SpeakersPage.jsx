import React from 'react'
import Navbar from '../components/Navbar'
import {speakerdata} from '../data.js/speakers'
import { Link } from 'react-router-dom'

const SpeakersPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'> 
      {
        speakerdata.map((item)=>{
          return(
            <div>
              <Link to={`/speakers/${item.id}`}>
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

export default SpeakersPage
