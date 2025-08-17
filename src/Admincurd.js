import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefauProfile from './Pictures/DefauProfile.png';
import axios from "axios";
import './Admincurd.css';

function Admincurd() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
   const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProfiles();
  }, []);
const Back_End_URL=process.env.REACT_APP_BACKEND_URL;
  const fetchProfiles = async () => {
    try {
      const res = await axios.get(`${Back_End_URL}/api/auth/admin-display`);
      console.log("API response:", res.data);


      const data = Array.isArray(res.data.records) ? res.data.records : [];
      setProfiles(data);
    } catch (err) {
      console.error("Error fetching profiles:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Back_End_URL}/api/auth/admin-delete/${id}`);
      setProfiles(profiles.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-profile/${id}`);
  };

  const handleAdd = () => {
    navigate("/add-admin");
  };
const filteredProfiles = profiles.filter((profile) => {
  return (
    profile.Name.toLowerCase().includes(search.toLowerCase()) ||
    profile.Age.toString().includes(search) ||
    profile.Address.toLowerCase().includes(search.toLowerCase()) ||
    profile.PhoneNo.includes(search)
  );
});



  return (
    <div className="profiles-container">
    <button onClick={handleAdd} className="button">Add Profile</button>
      <input
              type="text"
              placeholder="Search by Name or Address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />

      <div className="profile-grid">
        {Array.isArray(profiles) && profiles.map((profile) => (
          <div key={profile._id} className="profile-card">
            <div className="profile-set">
            <img src={DefauProfile} alt="Profile" className="profile-img" />
            <div className="profile-info">
              <label>Name:</label> <span>{profile.Name}</span>
              <label>Age:</label> <span>{profile.Age}</span>
              <label>Address:</label> <span>{profile.Address}</span>
              <label>Phone:</label> <span>{profile.PhoneNo}</span>
            </div>
            </div>
            <div className="profile-actions">
              <button onClick={() => handleUpdate(profile._id)} className="button">Update</button>
              <button onClick={() => handleDelete(profile._id)} className="button">Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Admincurd;
