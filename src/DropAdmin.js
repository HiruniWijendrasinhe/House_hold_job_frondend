import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "./DropAdmin.css";

function DropAdmin() {
  const [showDropdown, setShowDropdown] = useState(true);
   const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");
  const navigate = useNavigate();

  const isLoggedIn = ["admin", "admin-pending"].includes(localStorage.getItem("userRole"));

  const handleLogout = () => {
    localStorage.setItem("userRole", "user");
    setShowDropdown(false);
    setUserRole("user");
    navigate("/");
  };

  const handleLoginClick = () => {
    localStorage.setItem("userRole", "admin-pending");
    setShowDropdown(false);
    navigate("/adminlogin");
  };

  const handleCancel = () => {
  localStorage.setItem("userRole", "user");

   navigate("/");
    };


  return (
    <>
      <Home />

      {showDropdown && (
        <div className="dropdown-backdrop">
          <div className="dropdown-modal">
            <h3>Admin Options</h3>
            {!isLoggedIn ? (
              <div className="dropdown-item" onClick={handleLoginClick}>
                Login
              </div>
            ) : (
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            )}
            <div
              className="dropdown-cancel"
              onClick={handleCancel}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DropAdmin;
