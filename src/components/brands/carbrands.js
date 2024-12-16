import React from 'react'
import { useState } from 'react';
import './carbrands.css'
function Carbrands() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);



  return (
    <div className='brands'>
<div className="contanier-fluid m-5">
  <h5 className='text-red'>CAR Type</h5>  
    
<h1>What type of car are you looking for?</h1>
    
<div className="brand-box" > 
<div className="brand" data-aos="fade-right"
 onMouseEnter={() => setHover1(true)} 
 onMouseLeave={() => setHover1(false)}
>
<img src={hover1?'https://rently.pk/assets/category/Car-1.png':'https://rently.pk/assets/category/Car1.png'}  alt="" />
<h4>Budget</h4>
</div>
<div className="brand" data-aos="fade-right"
 onMouseEnter={() => setHover2(false)} 
 onMouseLeave={() => setHover2(true)}
>
<img src={hover2?'https://rently.pk/assets/category/Car2.png':'https://rently.pk/assets/category/Car-2.png'}  alt="" />
<h4>Stantard</h4>
</div>
<div className="brand" data-aos="fade-left"
 onMouseEnter={() => setHover3(true)} 
 onMouseLeave={() => setHover3(false)}
>
<img src={hover3?'https://rently.pk/assets/category/Car-3.png':'https://rently.pk/assets/category/Car3.png'}  alt="" />
<h4>Luxury</h4>
</div>

<div className="brand" data-aos="fade-left"
 onMouseEnter={() => setHover4(true)} 
 onMouseLeave={() => setHover4(false)}
>
<img src={hover4?'https://rently.pk/assets/category/Car-4.png':'https://rently.pk/assets/category/Car4.png'}  alt="" />
<h4>SUV</h4>
</div>




</div>


    
    </div>      





    </div>
  )
}

export default Carbrands
