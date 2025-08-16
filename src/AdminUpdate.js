import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DefauProfile from './Pictures/DefauProfile.png';
import Admincurd from './Admincurd';
import './AdminUpdate.css';

function AdminUpdate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
const Back_End_URL=process.env.REACT_APP_BACKEND_URL||'http://localhost:8000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${Back_End_URL}/api/auth/admin-display/${id}`);
        const user = res.data.record || res.data.records[0];
        setName(user.Name);
        setAge(user.Age);
        setAddress(user.Address);
        setPhoneNo(user.PhoneNo);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
    fetchData();
  }, [id]);

  // Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Back_End_URL}/api/auth/admin-update/${id}`, {
        name,
        age,
        address,
        phoneNo
      });
      navigate("/admin-crud");
    } catch (err) {
      console.error("Update failed:", err.response ? err.response.data : err);
      alert("Update failed. Try again.");
    }
  };

  // Cancel button
  const handleCancel = () => {
    navigate("/admin-crud");
  };

  return (
    <>
      <Admincurd/>
      <div className="backdrop">
        <div className="modal">
          <h3>Update Profile</h3>
          <div className="NewClz">
            <img id="IMG1" src={DefauProfile} alt="profile icon" />
            <form onSubmit={handleSubmit}>
              <label>Name
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input"
                />
              </label>

              <label>Age
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="input"
                />
              </label>

              <label>Address
                <textarea
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="input"
                />
              </label>

              <label>Phone No
                <input
                  type="tel"
                  placeholder="PhoneNo"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                  className="input"
                />
              </label>

              <button type="submit" className="button">
                Update
              </button>
              <button type="button" onClick={handleCancel} className="button">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpdate;
