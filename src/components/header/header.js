import React, { useState,useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Header() {
    // const navigate= useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    // const selling=()=>{
    //     navigate("/yourcar")
    // }
    const { isauth, user } = useAuth();

    useEffect(() => {
        console.log("Auth state changed", isauth);
    }, [isauth]); // ✅ UI ko forcefully re-render karega





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

                    <div className="iconbox" onClick={() => setShowSearch(!showSearch)} style={{ cursor: 'pointer' }}>

                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></div>
                    {showSearch && (
                        <input type="text" className='searchbox' placeholder='search ' />
                    )}
                    {isauth ? (
                        <div>
                            profile
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
