import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css'
function Signup() {
  return (
    <div className='signup'>
<form action="" className='form1'>

  <div className="formbox">
<h1>SIGNUP</h1>
<div>
  <div className='div2'>
<label htmlFor="">First Name*</label>
<input type="text"  required/></div>
<div className="div2">
<label htmlFor="">Last Name*</label>
<input type="text"  required/></div>
</div>
<div>
  <div className="div2">
<label htmlFor="">Mobile Number</label>
<input type="text"  required/>
</div>
<div className="div2">
<label htmlFor="">Email</label>
<input type="email" required /></div>
</div>
<div>
  <div className="div2">
<label htmlFor="">Password</label>
<input type="password" required/>
</div>
<div className="div2">
<label htmlFor="">Confirm Password</label>
<input type="password" required/>
</div>
</div>
<div>
<div className='div2'>
  <label htmlFor="">Gender</label>
  <div>
    <div>
<input type="radio"  name='gender'/>
  <label htmlFor="">Male</label>

<input type="radio"  name='gender'/>
<label htmlFor="">Female</label>
</div>
</div>
</div>

<div className='div2'>
<label htmlFor="">Date of Birth:</label>
<div>
  <label htmlFor="">Day</label>
<div>
  <select name="" id="">
<option value="">1</option>
<option value="">2</option>
<option value="">3</option>
<option value="">4</option>
<option value="">5</option>
<option value="">6</option>
<option value="">7</option>
<option value="">8</option>
<option value="">9</option>
<option value="">10</option>
<option value="">11</option>
<option value="">12</option>
<option value="">13</option>
<option value="">14</option>
<option value="">15</option>
<option value="">16</option>
<option value="">17</option>
<option value="">18</option>
<option value="">19</option>
<option value="">20</option>
<option value="">21</option>
<option value="">22</option>
<option value="">23</option>
<option value="">24</option>
<option value="">25</option>
<option value="">26</option>
<option value="">27</option>
<option value="">28</option>
<option value="">29</option>
<option value="">30</option>
<option value="">31</option>



  </select>
</div>

<label htmlFor="">month</label>
<div>
<select name="" id="">
<option value="">1</option>
<option value="">2</option>
<option value="">3</option>
<option value="">4</option>
<option value="">5</option>
<option value="">6</option>
<option value="">7</option>
<option value="">8</option>
<option value="">9</option>
<option value="">10</option>
<option value="">11</option>
<option value="">12</option>
</select>
</div>
</div>
</div>
</div>
<div className='d3' style={{display:"flex" ,justifyContent:"center", alignItems:"center" ,width:"100%"}}>
<input type="submit" name='signup'  value="signup" className='bg-danger simple'/>
</div>
</div>
 </form>
   </div>

  )
}

export default Signup
