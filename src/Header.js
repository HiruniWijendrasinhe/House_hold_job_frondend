import React from "react";

import { Link, useNavigate } from "react-router-dom";
import cleanhouse from "./Pictures/cleanhouse.png";
import Admin from "./Pictures/Admin.png";
import './Header.css';

function Header() {
const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/dispaly-drop");
  };

  return (
    <div className="NaviBack">
      <div className="TopBar">
        <img src={cleanhouse} alt="Logo" className="Logo" />
        <div className="NewBar">
        <p>Admin</p>
        <img src={Admin} alt="Admin" className="AdminIcon"  onClick={handleAdminClick}/>
      </div>
       </div>
      <ul className="NaviBar">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">ContactUs</Link></li>
      </ul>
    </div>
  );
}

export default Header;

