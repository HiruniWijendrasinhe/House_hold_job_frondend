import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from './Header';
import Home from './Home';
import './SingUp.css';

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 const Back_End_URL=process.env.REACT_APP_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${Back_End_URL}/api/auth/register`, {
        username,
        password
      });
      console.log("User registered:", res.data);
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      console.error("Signup failed:", err.response ? err.response.data : err);
      alert("Signup failed. Try again.");
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
          <h3>SignUp</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
            <button type="submit" className="button">
              SignUp
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

export default SignUp;
