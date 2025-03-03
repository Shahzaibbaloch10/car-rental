import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { BiCar } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { MdAddLocationAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
function Usercars() {
const [cars ,setcars]= useState([])
const [error,seterror]=useState(null)
const [loading,setloading]=useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null);
useEffect(()=>{
const usercarfetch=async()=>{
try {
    const responce = await fetch('http://localhost:8080/car/deshboard',{
        method:'GET',
        headers:{
        'content-type':'application/json'
        }, 
        credentials: "include",
    })
    if(!responce.ok){

        console.log('http requsit issue')
    }
    const  data = await responce.json();
    console.log(data)
    setcars(data.usercar)
    setloading(false)
} catch (error) {
   seterror(error)
   setloading(false)
}


}

usercarfetch();


},[])

if(loading)return <h1>laoding...car</h1>;
if (error) return <p>Error: {error.message}</p>;


    return (
        <div className='usercars'>
 {cars.map((car, index) => (
          <div className="car-info-box" key={index}>
            <div className="car-img"
              onMouseEnter={() => setHoveredIndex(index)}  
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === index ? car.images[0] : car.images[1]} alt="" />

            </div>
            <div>
              <div className='star-box'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='car-name'>
                <h3> {car.brand} {car.carmodel}</h3>
              </div>
              <div className="car-info-list">
                <span><BiCar /></span>
                <p>

                  MODEL YEAR : {car.year}
                </p>
              </div>
              <div className="car-info-list">
                <span><GiAutoRepair /></span>
                <p>

                  CAR Type : {car.type}
                </p>
              </div>
              <div className="car-info-list">
                <span><MdAddLocationAlt /></span>
                <p>

                  CAR ADDRESS : {car.address}
                </p>
              </div>
              <div className="car-info-list">
                <span><GrMoney /></span>
                <p>

                  PRICE : {car.price}
                </p>
              </div>
              <div className="car-info-list">
                <NavLink>
             EDIT DETAILS

                </NavLink>

              </div>
            </div>



          </div>






        ))
        }

            



        </div>
    )
}

export default Usercars
