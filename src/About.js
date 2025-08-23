import React from 'react';

import AboutBackground from './Pictures/AboutBackground.jpg'
import targetnew from './Pictures/targetnew.png'
import AboutPlan from './Pictures/AboutPlan.jpg'
import './About.css';
function About() {
  return (

        <main>
      <div className="BackgroundContainer">
      <div className="HomeQuote">

      <p> Homelance is your trusted platform to connect skilled household workers with people who need their services.
      Whether you are looking for a nanny, cleaner, electrician, cook, or driver, we help you find reliable service
       providers in your area quickly and easily.     </p>
      </div>
       </div>
         <div className="FlowFormat">

      <div className="GoNext">
      <img src={targetnew} alt="target"/>

      <h1>Our Mission </h1>
      </div>
      <p id="Second">To empower job seekers in the household sector by giving them a platform to showcase their skills,
       and to help clients find trustworthy, verified professionals for their home-related tasks.</p>


        <div className="GoNext">
        <img src={targetnew} alt="target"/>
        <h1>What We Offer </h1>
        </div>
           <ul className="Unorder">
           <li>Easy profile creation for job seekers  </li>
           <li>Simple search and filter options for clients  </li>
           <li>Location-based matching for nearby services  </li>
           <li>Safe and reliable user login & signup  </li>
           </ul>

       <div className="GoNext">
       <img src={targetnew} alt="target"/>
       <h1>Why Choose Homelance? </h1>
       </div>
      <p>We believe in community trust and opportunity. Homelance is designed to make hiring household help
      hassle-free, efficient, and safe — all from the comfort of your home.Our platform connects skilled, verified
       professionals with clients seeking reliable household assistance, ensuring quality and peace of mind. </p>


      </div>

    </main>





  );
}

export default About;
