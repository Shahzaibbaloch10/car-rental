import React from 'react'
import './account.css'
function login() {
  return (
    <div className='login'>
 <form action="">
<h1>LOGIN</h1>
<label htmlFor="" style={{marginLeft:"-88%", marginbutttom:"-10%" ,fontSize:"large"}}> EMAIL</label>
<input type="email"  placeholder='enter your email' name='email' className='form-control  pt-2 pb-2' required/>
<label htmlFor="" style={{marginLeft:"-77%", marginbutttom:"-10%" ,fontSize:"large"}}> PASSWORD</label>

<input type="password"  placeholder='enter your password' name='password' className='form-control pt-2 pb-2' required/>
<input type="submit" name='btn'  value="LOGIN" className='btn btn-primary '/>
<div className='formlast'> <p>you don't have a account/</p><a href="/signup">signup </a></div>
 </form>
    </div>
  )
}

export default login
