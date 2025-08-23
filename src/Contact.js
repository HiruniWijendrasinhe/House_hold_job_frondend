import React from 'react';

import LinkedinContactNew  from './Pictures/LinkedinContactNew.png';
import FaceBookContactx from './Pictures/FaceBookContactx.png';
import TwitterLogox from './Pictures/TwitterLogox.png';
import AddressLogox from './Pictures/AddressLogox.png';
import PhoneLogox from './Pictures/PhoneLogox.png';
import Websitex from './Pictures/Websitex.png';
import EmailContactx from './Pictures/EmailContactx.png';
import  './Contact.css';

function Contact() {
  return (


           <main>
         <div className="Container">
         <h1>Get Touch With US</h1>

         <div className="FlowFormat1">
         <div className="Container">
         <h2>Homelance Pvt(Ldt)</h2>
         <div className="IMAGEFormate">
         <img id="IMG2" src={LinkedinContactNew} alt ="Linkdin icon"/>
         <img id="IMG2" src={FaceBookContactx} alt ="Facebook icon"/>
         <img id="IMG2" src={TwitterLogox} alt ="Twitter icon"/>
          </div>
          </div>



          <div className="Container">
          <div className="Details">
            <img id="IMG1" src={AddressLogox} alt ="Address icon"/>
            <p>No.25,<br/>Samanala Mawatha,<br/>Colombo 14</p>
           </div>
           <div className="Details">
           <img id="IMG1" src={EmailContactx} alt ="Email icon"/>
           <p>Homelance@info.com</p>
           </div>
           <div className="Details">
           <img id="IMG1" src={PhoneLogox} alt ="Phone icon"/>
           <p>94113456789</p>
           </div>
           <div className="Details">
           <img id="IMG1" src={Websitex} alt ="Website icon"/>
           <p>www.Homelance.com</p>
           </div>
           </div>

          <div className="Container">
          <form>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email"  required/>
          <textarea name="message"  placeholder="Your Message"  required></textarea>
          <button type="submit">Submit</button>
          </form>

          </div>
          </div>
          </div>


       </main>








  );
}

export default Contact;