import React, { useEffect, useState } from 'react'
import './carbooking.css'
import { useParams } from 'react-router-dom';
import CustomCarousel from '../../components/custom.slider'
function Details() {
  const images = [
    { imgURL: "https://www.shutterstock.com/image-photo/rahim-yar-khanpunjab-pakistan-21st-260nw-2505939607.jpg", imgAlt: "Image 1" },
    { imgURL: "https://deinfa.com/wp-content/uploads/2024/06/Best-Sedan-Cars-for-Rent-in-Pakistan-Featured-Image.jpg", imgAlt: "Image 2" },
    { imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6RAuDgtc8_bJ2twigP6EpORiOqYk9_NvD9NFFm9KSXHlzOyONyp7sO_kSaj1S76o4Y4&usqp=CAU", imgAlt: "Image 3" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { id } = useParams()
  const [car, setcar] = useState()
  
  useEffect(() => {
    const cardata = async () => {
      try {
        const responce = await fetch(`http://localhost:8080/car/car/${id}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        const data = await responce.json();
        setcar(data.car)
        console.log(data)
      } catch (error) {

        console.log(error)

      }


    }

    cardata()

  }, [id]);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null && car.images) {
      setSelectedIndex((prev) => (prev + 1) % car.images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null && car.images) {
      setSelectedIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
    }
  };


  return (
    <div>
      <div className="car-img-box">
        <CustomCarousel>
          {car && car.images ? (
            car.images.map((image, index) => (
              <img key={index} src={image} alt={`Car ${index}`}
              onClick={() => openModal(index)} />
            ))
          ) : (
            []
          )}
        </CustomCarousel>

      </div>

      {car ? (
        <div>
          <h2>{car.brand} - {car.carmodel}</h2>
          <p><strong>Price per day:</strong> PKR{car.price}</p>
          <p><strong>YEAR:</strong> {car.year}</p>
          <p><strong>type:</strong> {car.type}</p>
          <p><strong>address:</strong> {car.address}</p>
          
        </div>
      ) : (
        <p>Loading car details...</p>
      )}

{selectedIndex !== null && car?.images && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeModal}>✕</button>
          <button className="prev-btn" onClick={prevImage}>❮</button>
          <img src={car.images[selectedIndex]} alt="Zoomed Car" className="lightbox-image" />
          <button className="next-btn" onClick={nextImage}>❯</button>
        </div>
      )}




    </div>
  )
}

export default Details
