import React, { useState } from 'react';
import './cardetails.css';

function Cardetailform() {
    const [imageSrc, setImageSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder.jpg");
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCar, setSelectedCar] = useState('');

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

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        setSelectedCar(''); 
    };

    
    const handleCarChange = (e) => {
        setSelectedCar(e.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='container-fluid ' style={ {backgroundColor:"rgba(220,53,69,1)"}}>
            <div className="container bgdetails  pt-5">
                <form action="" className='cardetailsform ' style={{backgroundColor:"white"}}>
                    <div className="upload-img">
                        <label htmlFor="">Upload image*</label>
                        <div>
                            <div className="mb-2 d-flex">
                                <img
                                    id="selectedImage"
                                    src={imageSrc}
                                    alt="Selected placeholder"
                                    style={{ width: "150px" }}
                                />
                            </div>
                            <div className="d-flex">
                                <div data-mdb-ripple-init className="btn btn-primary btn-rounded">
                                    <label className="form-label text-white m-1" htmlFor="customFile1">
                                        Choose file
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control d-none"
                                        id="customFile1"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="car-brand">
                        <div>
                            <div className='car-company'>
                            <label>Select a Car Brand</label>

                            {/* Brand Select */}
                            <select
                                className="form-control"
                                value={selectedBrand}
                                onChange={handleBrandChange}
                                required
                            >
                                <option value="">Select a brand</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Daihatsu">Daihatsu</option>
                                <option value="Nissan">Nissan</option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                            </div>
                            {/* Car Select - Only display options for the selected brand */}
                            {selectedBrand && (
                                <div>
                                    <label>Select a Car Model</label>
                                    <select
                                        className="form-control"
                                        value={selectedCar}
                                        onChange={handleCarChange}
                                        required
                                    >
                                        <option value="">Select a car model</option>
                                        {carModels[selectedBrand]?.map((car, index) => (
                                            <option key={index} value={car}>{car}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                        <div className="car-model">
                            <label>Model*</label>
                            <input type="text" className='form-control' placeholder='Type Model' required />
                        </div>
                        </div>

                        <div>
                            <div className="car-title">
                                <label>Title*</label>
                                <div className="form-outline" data-mdb-input-init>
                                    <textarea className="form-control" id="textAreaExample" rows="4" required></textarea>
                                </div>
                            </div>
                            
                            <div className="car-address">
                                <label>Address*</label>
                                <input type="text" placeholder='Enter your Address' className='form-control' required />
                            </div>

                            <div className="car-brand">
                                <label>Price*</label>
                                <input type="text" placeholder='Enter price' className='form-control' required />
                            </div>

                            <div className="car-brand">
                                <label>Phone Number*</label>
                                <input type="text" placeholder='Phone Number' className='form-control' required />
                            </div>

                            <div className='mt-3 d-flex justify-content-center'>
                                <input type="submit" value="POST" className='btn btn-primary btn-lg m-2' />
                                <input type="reset" value="Restart" className='btn btn-outline-primary btn-lg m-2' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cardetailform;
