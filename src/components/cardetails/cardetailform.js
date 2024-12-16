import React, { useState } from 'react'
import './cardetails.css'

function Cardetailform() {
    const [imageSrc, setImageSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"); // Initial placeholder image

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result); // Update the state with the selected image
            };
            reader.readAsDataURL(file); // Read the selected file as base64
        }
    };


    return (
        <div className='container-fluid bgdetails '>

            <div className="container mt-5  justify-content-center">
                <form action="" className='cardetailsform '>
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















                        {/* 
                        </div>
<div className="car-brand">
<label>Carbrand*</label>
<input type="text" placeholder='type brand' required/>


</div>
<div className="car-brand">
<label>Model*</label>
<input type="text" className='form-control' placeholder='type Modal' required/>

</div>

<div className="car-title">
<label>title*</label>
<div class="form-outline" data-mdb-input-init>
  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
 
</div>


</div>

<div className="car-brand">
<label>price*</label>
<input type="text" placeholder='enter price' required/>


</div>

<div className="car-brand">
<label>phone Number*</label>
<input type="text" placeholder='Phone Number' required/>


</div>
<div className='mt-3 d-flex justify-content-center'>
<input type="submit" value="POST" className='btn btn-primary btn-lg m-2'/>
<input type="reset" value="restart" className='btn btn-outline-primary btn-lg m-2'/>
 */}
                    </div>
                </form>

            </div>





        </div>
    )
}

export default Cardetailform
