import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import Carbrands from '../../components/brands/carbrands';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Index() {
  const navigate= useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true, 
    });
  }, []);


const yourcar = ()=>{
navigate('/yourcar')

}



  return (
    <div className='home'>
<div className="container-fluid mainbackground bg-danger pt-5 pb-2">
  
<div className="container-fluid  pt-5  "> 
<div className="row ">

<div className="col-6 mt-5 mb-5" >
<h6  style={{color:"white"}} data-aos="fade-down">CAR RENTAL</h6>
<h1 style={{fontSize:"xxx-large"}} data-aos="fade-up">Find Affordable Dream Cars for Rental</h1>
{/* <h6  style={{color:"white"}}>Rent Your Car</h6> */}
<p data-aos="fade-down">Do you have a car you’re not using? Click here to rent out your car!</p>
<button className='btn  btn-warning' data-aos="fade-up" onClick={yourcar()}>Click Here!</button>
</div>
<div className="col-6 " data-aos="fade-left">
<div className="carbox">
<img src="https://july.finestwp.com/newwp/carola/wp-content/uploads/2024/07/car.png" alt="" />
</div>
</div>
</div>
</div>
  </div>      
<Carbrands/>






    </div>
  )
}

export default Index
