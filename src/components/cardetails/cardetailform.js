import React, { useState, useEffect } from 'react';

import './cardetails.css';

import useAuth from '../../hooks/useAuth';
import { errormessage, successmessage } from '../../utils';
import { useNavigate } from 'react-router-dom';
function Cardetailform() {
    // const [imageSrcs, setImageSrcs] = useState([]);
    const [imageFiles, setImageFiles] = useState([]); // New state for File objects
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const { user } = useAuth();
    const [alldata, setdata] = useState({
        ownerid: '',
        brand: '',
        model: '',
        year: '',
        address: '',
        price: '',
    })
    // Car models for each brand
    const carModels = {
        Suzuki: ['Alto', 'Swift', 'WagonR', 'Vitara Brezza', 'Ertiga', 'Celerio', 'S-Presso', 'Baleno', 'Dzire', 'Jimny', 'Ciaz'],
        Toyota: ['Corolla', 'Camry', 'Hilux', 'Fortuner', 'Innova'],
        Honda: ['Civic', 'Accord', 'City', 'CR-V', 'Jazz'],
        Daihatsu: ['Sirion', 'Terios', 'Luxio'],
        Nissan: ['Altima', 'Maxima', '370Z', 'Leaf', 'Rogue'],
        BMW: ['X1', 'X3', 'X5', 'M3', 'M4'],
        Audi: ['A3', 'A4', 'Q5', 'Q7', 'A6'],
        Mercedes: ['A-Class', 'C-Class', 'E-Class', 'GLA', 'S-Class'],
        Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y'],
    };
    const Navigate = useNavigate();
    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        setSelectedCar('');

    };

    const handleCarChange = (e) => {
        setSelectedCar(e.target.value);
    };


    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const newFiles = Array.from(files);
            const newUrls = newFiles.map(file => URL.createObjectURL(file));
            setImageUrls(prev => [...prev, ...newUrls]);
            setImageFiles(prev => [...prev, ...newFiles]);
        }
    };

    const handlechange = (e) => {

        setdata({
            ...alldata,
            [e.target.name]: e.target.value
        });
    }


    const handsubmit = async (e) => {

        e.preventDefault();

        const formdata = new FormData();
        formdata.append('ownerid', user._id);
        formdata.append('brand', selectedBrand);
        formdata.append('carmodel', selectedCar);
        formdata.append('year', alldata.year);
        formdata.append('address', alldata.address);
        formdata.append('type', alldata.type);
        formdata.append('price', alldata.price);
        imageFiles.forEach((file) => {
            formdata.append('images', file);
        });

        if (imageFiles.length < 2) {
            errormessage("Please upload at least 2 images!");

        }
        if (!selectedBrand || !selectedCar || !alldata.year || !alldata.address || !alldata.type || !alldata.price) {

            errormessage("plz fill all faild")



        }

        try {

            const responce = await fetch('http://localhost:8080/car/add-car', {
                method: "post",
               
                body: formdata
            })
            const resulth = await responce.json();
            if (resulth.message) {
                successmessage('your car is posted')
                Navigate('/');
            }
            if (!resulth.message) {
                errormessage(resulth.message)

            }




        } catch (error) {

            errormessage("your car can't post ");
            console.log("error", error)


        }








    }


    return (
        <div className='container-fluid' style={{ backgroundColor: "rgba(220,53,69,1)" }}>
            <div className="container bgdetails pt-5">
                <form action="" onSubmit={handsubmit} className='cardetailsform' style={{ backgroundColor: "white" }} >

                    {/* Image Upload Section */}
                    <div className="upload-img">
                        <label htmlFor="customFile">Upload Images*</label>
                        <div className="mb-2 d-flex flex-wrap">
                            {imageUrls.length > 0 ? (
                                imageUrls.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Selected ${index}`}
                                        style={{ width: "100px", height: "100px", margin: "5px", objectFit: "cover", borderRadius: "5px" }}
                                    />
                                ))
                            ) : (
                                <p>No images selected</p>
                            )}
                        </div>
                        <div className="d-flex">
                            <div data-mdb-ripple-init className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" htmlFor="customFile">
                                    Choose files
                                </label>
                                <input
                                    type="file"
                                    className="form-control d-none"
                                    id="customFile"
                                    multiple // 🔥 Allow multiple image selection
                                    onChange={handleImageChange}
                                // Only accept image files
                                />
                            </div>
                        </div>
                    </div>

                    {/* Car Brand & Model Selection */}
                    <div className="car-brand">
                        <div className='car-company'>
                            <label>Select a Car Brand</label>
                            <select className="form-control" value={selectedBrand} onChange={handleBrandChange} name='brand'>
                                <option value="">Select a brand</option>
                                {Object.keys(carModels).map((brand, index) => (
                                    <option key={index} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Car Model Select - Only display when brand is selected */}
                        {selectedBrand && (
                            <div>
                                <label>Select a Car Model</label>
                                <select className="form-control" value={selectedCar} onChange={handleCarChange} name='model'>
                                    <option value="">Select a car model</option>
                                    {carModels[selectedBrand]?.map((car, index) => (
                                        <option key={index} value={car}>{car}</option>
                                    ))}
                                </select>
                            </div>
                        )}


                    </div>

                    {/* Other Car Details */}
                    <div>
                        <div className="car-title">
                            <label>model-year*</label>
                            <input type="text" className='form-control' value={alldata.year} onChange={handlechange} placeholder='Type your car year' name='year' />
                        </div>

                        <div className="car-address">
                            <label>Address*</label>
                            <input type="text" placeholder='Enter your Address' onChange={handlechange} value={alldata.address} className='form-control' name='address' />
                        </div>

                        <div className="car-brand">
                            <label>Price*</label>
                            <input type="text" placeholder='Enter price' onChange={handlechange} value={alldata.price} className='form-control' name='price' />
                        </div>

                        <div className="car-brand">
                            <label>type*</label>
                            <select name="type" class="form-select" value={alldata.type} onChange={handlechange} aria-label="Default select example" >
                                <option selected>auto/manual</option>
                                <option value="auto">auto</option>
                                <option value="manual">manual</option>
                            </select>
                        </div>

                        <div className='mt-3 d-flex justify-content-center'>
                            <button className='btn btn-primary btn-lg m-2' type='submit'>POST</button>
                            <input type="reset" value="Restart" className='btn btn-outline-primary btn-lg m-2' />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Cardetailform;
