import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import HomeBackground from './Pictures/HomeBackground.jpg'
import './Home.css';
function Home() {
const navigate=useNavigate();
const handleAdd = () => {

    navigate("/dashboard");}
  return (

  <div className="HomeContainer">
  <div className="HomeQuote">
  <div className="HomeQuote">
  <h1>Welcome to HomeLance</h1>
   <p>Your trusted platform to find reliable household job seekers.</p>
  </div>

  <button type ="button" onClick={handleAdd}>Get Started</button>



  </div>
  </div>


  );
}

export default Home;