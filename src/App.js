import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AdminLogin from './AdminLogin';
import AdminAdd from './AdminAdd';
import Admincurd from './Admincurd';
import AdminUpdate from './AdminUpdate';
import Home from './Home';
import ClientDisplay  from './ClientDisplay';
import DropAdmin from './DropAdmin';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
 const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  return (
    <Router>
      <Header/>



      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home userRole={userRole} setUserRole={setUserRole} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/admin-crud" element={<Admincurd userRole={userRole} setUserRole={setUserRole} />} />
         <Route path="/add-admin" element={<AdminAdd userRole={userRole} setUserRole={setUserRole} />} />
         <Route path="/update-profile/:id" element={<AdminUpdate userRole={userRole} setUserRole={setUserRole} />} />
         <Route path="/see-profile" element={<ClientDisplay userRole={userRole} setUserRole={setUserRole} />} />
         <Route path="/dispaly-drop" element={<DropAdmin />} />
        <Route
                  path="/dashboard"
                  element={<Dashboard userRole={userRole} setUserRole={setUserRole}  />}
                />
        <Route
                  path="/adminlogin"
                  element={<AdminLogin userRole={userRole} setUserRole={setUserRole} />}
                />

      </Routes>




      <Footer />
    </Router>
  );
}

export default App;

