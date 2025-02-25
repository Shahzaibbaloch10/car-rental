import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { BiCar } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { MdAddLocationAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import './vehicles.css'
import { useState } from 'react';
function Vehicles() {
  // const carsArray = new Array(500).fill(0);
  const [cars, setcars] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [hover, setHover] = useState(true);

  useEffect(() => {

    const carfetch = async () => {
      try {
        const responce = await fetch('http://localhost:8080/car/all-cars', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          },
        })


        if (!responce.ok) {
          console.log('hhtp request error')

        }
        const data = await responce.json();
        console.log(data)
        setcars(data.car);

       
        setloading(false)
      } catch (error) {
        seterror(error)
        setloading(false)
      }
    }
    carfetch();
  }, [])

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='vehicles'>
      <div className="allcarhead">

        <h3>ALL Type of CAR is Here</h3>

      </div>

      <div className="all-car">
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
                  Book Now

                </NavLink>

              </div>
            </div>



          </div>






        ))
        }


      </div>


    </div>
  )
}

export default Vehicles
