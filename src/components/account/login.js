import { useState } from 'react'
import React from 'react'

import './account.css'
import { errormessage, successmessage } from '../../utils'

import { useNavigate } from 'react-router-dom'
function Login() {
  const [login, setlogin] = useState({
    email: '',
    password: '',

  })
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    const signupinfo = { ...login };
    signupinfo[name] = value;
    setlogin(signupinfo)
    console.log(signupinfo);

  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const {email,password}= login;
    if(!email || !password){
return errormessage('email and password requird');}
try{
const responce = await fetch('http://localhost:8080/user/login',{
method:'post',
credentials: "include",
headers:{
  'content-Type':'application/json'
},
body: JSON.stringify(login)
})
const result = await responce.json()
console.log(result)
if(!result.success){

successmessage(result.message)
setTimeout(()=>{

  navigate('/')
  window.location.reload() 
},2000)

}
}catch(error){

 errormessage(error)

}
   


  }

  return (
    <div className='login'>
      <form action="" onSubmit={handlesubmit}>
        <h1>LOGIN</h1>
        <label htmlFor="" style={{ marginLeft: "-88%", marginbutttom: "-10%", fontSize: "large" }}> EMAIL</label>
        <input type="email" onChange={handlechange} value={login.email} placeholder='enter your email' name='email' className='form-control  pt-2 pb-2'  />
        <label htmlFor="" style={{ marginLeft: "-77%", marginbutttom: "-10%", fontSize: "large" }}> PASSWORD</label>

        <input type="password" onChange={handlechange} value={login.password} placeholder='enter your password' name='password' className='form-control pt-2 pb-2' />
       
        <button type='submit'   className='btn btn-primary'>LOGIN</button>
        <div className='formlast'> <p>you don't have a account/</p><a href="/signup">signup </a></div>
      </form>
    </div>
  )
}

export default Login
