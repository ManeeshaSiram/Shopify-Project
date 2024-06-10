import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../pages/Footer'
import Banner from '../pages/Banner'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Products/>
      <Footer/>
     
    </div>
  )
}

export default LandingPage
