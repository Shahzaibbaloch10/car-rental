import React from 'react'
import './about.css'
function about() {
  return (
    <div className='about' style={{backgroundColor:"rgba(220,53,69,1)", height:"100vh"}}>
        <h1 style={{textAlign:"center", paddingTop:'30px'}}>ABOUT Us</h1>
      <div className="container-fluid about-text">     

        <p>Welcome to <strong> [carola]</strong>, your trusted partner for reliable and affordable car rentals. Whether you're planning a road trip, need a car for business, or simply require a vehicle for a special occasion, we have a wide selection of cars to suit all your needs.</p>
        {/* <p>At <strong> [carola]</strong>, we pride ourselves on providing top-quality service and hassle-free experiences. Our fleet includes a variety of cars, from compact city vehicles to luxurious sedans and spacious SUVs, all maintained to the highest standards for your comfort and safety. We are committed to offering flexible rental plans, transparent pricing, and excellent customer support.</p> */}
        <p>Our mission is to make car rentals simple, convenient, and accessible for everyone. With easy online booking, competitive rates, and a user-friendly interface, you can reserve your vehicle in just a few clicks. We strive to ensure that your journey is smooth, whether it's a short trip or an extended rental.</p>
        <p style={{textAlign:'center'}}>We value our customers and work hard to exceed your expectations. Thank you for choosing <strong> [carola]</strong>—we look forward to being a part of your next adventure!</p>
      </div>

    </div>
  )
}

export default about
