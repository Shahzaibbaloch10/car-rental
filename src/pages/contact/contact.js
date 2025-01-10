import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import emailjs from 'emailjs-com'
function Contact() {
const [name , setname]= useState('');
const [email , setemail]= useState('');
const [message , setmessage]= useState('');
const [status , setstatus]= useState('');

const handlesubmit=(e)=>{
e.preventDefault();
const templeteparams={
from_name:name,
from_email:email,
to_name:"shahzaibbaloch",
message:message
};


emailjs.send("service_cge74q8","template_i67by4o",templeteparams,"sqWFsPf_JufO3Kg0u")
.then((Response)=>{
console.log(Response)
setstatus('your messsage is success fully send')
setemail('')
setname('')
setmessage('')

})
.catch((error)=>{
console.log(error);
setstatus('your message not send')


})







}



  return (
    <div className='contact'>
      <div className="container-fluid">
        <div className="alert mt-2">
          <h1 className='text-center'>Contact</h1>
        </div>
        <div className="contact-box">
          <div className="contact-box-left">
            <div className="c1">
              <div className="i-box"><FontAwesomeIcon icon={faHouse} /></div>
              <div className="c1-text">
                <h4>Address</h4>
                <p>Sharafi Goth, Landhi, Korangi Industrial Area</p>
              </div>
            </div>
            <div className="c1">
              <div className="i-box"><FontAwesomeIcon icon={faPhone} /></div>
              <div className="c1-text">
                <h4>Phone</h4>
                <p>0323-2774012</p>
              </div>
            </div>
            <div className="c1">
              <div className="i-box"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="c1-text">
                <h4>Email</h4>
                <p>shahzaibbalochjk7@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-box-right">
            <form onSubmit={handlesubmit}>
              <h2>Send Message</h2>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Type Your Message..."
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
                required
              />

          {status && <p>{status}</p>}   
            

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
