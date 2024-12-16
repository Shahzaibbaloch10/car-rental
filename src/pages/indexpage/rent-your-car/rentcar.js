import React, {useEffect}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './rentcar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Rentcar() {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true, 
    });
  }, []);

  return (
    <div className='rent-your-car'>
        
        <div className="container bg-pick mt-5 p-5 " data-aos="fade-down" >
          <h2>Rent Your Car</h2>
    <p>Do you have a car that you’re not using? Rent it out and earn extra income!</p>
    <p>Follow these simple steps:</p>
    <ul>
        <li>Fill out the registration form.</li>
        <li>Your car details will be verified.</li>
        <li>Your car will be listed on our website for customers to rent.</li>
    </ul>
    <a href="/cardetailsform" class="btn btn-success mt-3">Click Here to Get Started!</a>

    </div>



    </div>
  )
}

export default Rentcar
