import React from 'react'
import './profile.css'
import Booking from './booking'
import Usercars from './usercars'
function profile() {
  return (
    <div className='profile-container container-fluid'>
      <div className='header-profile'>
      <div className='profile-box container'>
        <div className='text-center profile-header '>
          <p>
          PROFILE

          </p>
        </div>

        <div className='profile-text-box'>
          <label htmlFor="">NAME:</label>
          <p>Shahzaib</p>
        </div>
        <div className='profile-text-box'>
          <label htmlFor="">EMAIL:</label>
          <p>Shahzaib@gmail.com</p>
        </div>
        <div className='profile-text-box'>
          <label htmlFor="">AGE:</label>
          <p>10/1/2005</p>
        </div>
        <div className='profile-text-box'>
          <label htmlFor="">MOBILE:</label>
          <p>03232774012</p>
        </div>
      </div>
    <Booking/>
      </div>
      <div className='user-car-head'>
        <h1>YOUR CAR POST</h1>
      </div>
      <Usercars/>
    </div>
  )
}

export default profile
