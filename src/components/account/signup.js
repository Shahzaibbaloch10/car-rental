
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './account.css'
import { errormessage, successmessage  } from '../../utils';
import { useNavigate } from 'react-router-dom';


function Signup() {
const [signup ,setsignup]=useState(
{
fname:'',
lname:'',
mobile:'',
email:'',
age:'',
password:'',


});
const navigate = useNavigate();
const handlechange = (e)=>{
  const {name, value}= e.target;
  console.log(name,value)
const signupinfo=  {...signup};
 signupinfo[name]=value;
 setsignup(signupinfo)


 
}
const handlesubmit = async (e)=>{
e.preventDefault();
const {fname,lname,email,password,age,mobile}= signup;


if(!fname || !lname||!email||!password || !age || !mobile){
return errormessage('allfiald are requird ');
}


  // Convert date of birth to age
  const birthDate = new Date(age);
  const today = new Date();
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has passed this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    calculatedAge--; // Reduce age if birthday hasn't occurred yet this year
  }

  if (calculatedAge < 18) {
    return errormessage("You must be at least 18 years old to sign up.");
  }

try{
 const responce = await fetch('http://localhost:8080/user/signup',{
method:"post",
credentials: "include",
headers:{
  'content-Type':'application/json'

},
body: JSON.stringify(signup),
 })
 if (!responce.ok) {
  errormessage("Signup failed. Please try again.");
}
 const resulth = await responce.json()
 const {success ,message}= resulth;
 if(success){
 successmessage(message)
setTimeout(()=>{
  navigate('/')
},1000)

 }
}catch(error){
  errormessage(error)

}





}






  return (
    <div className='signup'>
<form action="" className='form1'  onSubmit={handlesubmit}>

  <div className="formbox">
<h1>SIGNUP</h1>
<div>
  <div className='div2'>
<label htmlFor="">First Name*</label>
<input type="text" onChange={handlechange} name='fname' value={signup.fname} /></div>
<div className="div2">
<label htmlFor="">Last Name*</label>
<input type="text" onChange={handlechange} name='lname' value={signup.lname} /></div>
</div>
<div>
  <div className="div2">
<label htmlFor="">Mobile Number</label>
<input type="text" onChange={handlechange} name='mobile' value={signup.mobile} />
</div>
<div className="div2">
<label htmlFor="">Email</label>
<input type="email" onChange={handlechange} name='email'  value={signup.email}  /></div>
</div>
<div>
  <div className="div2">
<label htmlFor="">Password</label>
<input type="password" onChange={handlechange} name='password' id='pass' value={signup.password} />
</div>
<div className='div2'>
<label htmlFor="">Date of Birth:</label>
<div>
 
<div>
   <input type="date"  onChange={handlechange} value={signup.age} name='age'  />
</div>


</div>
</div>

</div>

<div className='d3' style={{display:"flex" ,justifyContent:"center", alignItems:"center" ,width:"100%"}}>

<button type='submit' onSubmit={handlesubmit} className='bg-danger simple'>signup</button>
</div>
</div>
 </form>
   </div>

  )
}

export default Signup
