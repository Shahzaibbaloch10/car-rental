import React from 'react'
import Details from './details'
import './carbooking.css'
import Bookform from './bookform'
function carsdetails() {
  return (
    <div className='cars'>
     
  <div className="left">
    <Details/>
  </div>
  <div className="right">
    <Bookform/>
  </div>


    </div>
  )
}

export default carsdetails
