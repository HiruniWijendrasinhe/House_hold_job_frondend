import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import babysitters from './Pictures/babysitters.jpg';
import Babaysittting from './Pictures/Babaysittting.jpeg';
import Cleaning from './Pictures/Cleaning.jpeg';
import electrian from './Pictures/electrian.jpg';
import housekeeping from './Pictures/housekeeping.jpg';
import Plumber from './Pictures/Plumber.jpg';
import superiorcleaning from './Pictures/superiorcleaning.png';
import sucessicon from './Pictures/sucessicon.png';
import network from './Pictures/network.png';

import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));




  const handleServiceClick = (service) => {

    if (userRole === "admin") {
      navigate("/admin-crud");
    } else {
      navigate("/see-profile");
    }
  };

  return (
    <main>
      <div className="Container">
        <h1>Choose Your Path</h1>

        <div className="FlowFormat1">
          <div>
            <img src={Cleaning} alt="Cleaning Service" onClick={() => handleServiceClick("Cleaning")} />
            <p id="ABC">Cleaning Services</p>
          </div>

          <div>
            <img src={Babaysittting} alt="Baby Sitting Service" onClick={() => handleServiceClick("Babysitting")} />
            <p id="ABC">Baby Sitting Services</p>
          </div>

          <div>
            <img src={Plumber} alt="Plumbing Service" onClick={() => handleServiceClick("Plumbing")} />
            <p id="ABC">Plumbing Services</p>
          </div>

          <div>
            <img src={electrian} alt="Electrical Service" onClick={() => handleServiceClick("Electrical")} />
            <p id="ABC">Electrical Services</p>
          </div>
        </div>

        <div className="Container">
        <div className="FlowFormatNext">
          <img id="IMG1" src={sucessicon} alt="120+ icon" />
          <h3>Our Achievements</h3>
          </div>
          <p id="Normal">
            We are proud to have helped over 120 people in Sri Lanka find reliable household jobs.
            Our platform connects skilled workers with families and businesses, making it easier
            for everyone to get the right help at the right time.
          </p>
        </div>

        <div className="Container">
        <div className="FlowFormatNext">
        <img id="IMG1" src={network} alt="network icon" />
          <h3>Collaborate with Us</h3>
         </div>
          <div className="FlowFormatNext">
            <img id="IMG2" src={babysitters} alt="company icon" />
            <img id="IMG2" src={housekeeping} alt="company icon" />
            <img id="IMG2" src={superiorcleaning} alt="company icon" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
