import React, { useState,useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import './header.css'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";
function Header() {
    
    const { isauth, user } = useAuth();

    useEffect(() => {
        console.log("Auth state changed", isauth);
    }, [isauth]); // ✅ UI ko forcefully re-render karega

const handllogout = async()=>{
try {
    const responce= await fetch('http://localhost:8080/user/logout',{
method:"POST",
credentials:'include',

    })
const data= responce.json();
if (data.success) {
   window.location.reload()
} else {
    console.error("Logout failed:", data.message);
    window.location.reload()
}



} catch (error) {
   
    console.error("Logout error:", error);
}



}



    return (
        <div className='header'>
            <div className="navbar">
                 <div className="navbarleft">
                    <img src="https://july.finestwp.com/newwp/carola/wp-content/uploads/2024/07/logo.png" alt="" />
                    <div>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">contact</a>
                        <a href="/allcars">Vehicles</a>
                    </div>
                </div>
                <div className="navbarright">

                    
                    {isauth ? (
                        <div className='profile' >
                            
                          <div style={{
                            fontSize:'30px',
                            
                          }}><CgProfile /></div>
                            <ul className='profile-dropdown'>
                                <li><NavLink to='/profile'>PROFILE</NavLink> </li>
                                <li onClick={handllogout}>LOGOUT</li>
                                
                                </ul>  
                        </div>
                    ):(
                    <div>
                        <a href="login" className=''>Login/</a>
                        <a href="signup" className=''>signup</a>
                    </div>)}
                    <a href="/yourcar" className='btn btn-outline-danger' >Rent Your car</a>
                </div>

            </div>



        </div>
    )
}

export default Header
