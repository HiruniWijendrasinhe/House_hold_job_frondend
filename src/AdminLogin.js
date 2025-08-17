import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import './AdminLogin.css';

function AdminLogin({ setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Back_End_URL=process.env.REACT_APP_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${Back_End_URL}/api/auth/admin-login`, {
        username,
        password
      });

      if (res.data.role === "admin") {
          setUserRole("admin");
          localStorage.setItem("userRole", "admin");
          navigate("/dashboard");
      } else {
          setUserRole("user");
          localStorage.setItem("userRole", "user");
          navigate("/");
      }

    } catch (err) {
      alert("Login failed. Try again.");
    }
  };
const handleCancel = () => {
    navigate("/");
  };
  return (
  <>
        <Home />
    <div className="backdrop">
      <div className="modal">

        <h3>Login As Admin</h3>

        <form onSubmit={handleSubmit}>
        <div className="Boxalign">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        <button type="submit" className="button">
                      Login
                    </button>
       <button type="button" onClick={handleCancel} className="button">
                      Cancel
        </button>
        </form>
      </div>
    </div>

    </>
  );
}
export default AdminLogin;