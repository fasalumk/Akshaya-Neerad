import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage"; 
import User from "./components/User";
import Admin from "./components/Admin";
import ServicePage from "./components/User/ServicePage";
import About from "./components/User/About";
import LocationPage from "./components/User/LocationPage";
import ContactPage from "./components/User/ContactPage/ContactPage";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" />} />


        <Route
          path="/admin"
          element={isLoggedIn ? <Navigate to="/admin/dashboard" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/admin/dashboard"
          element={isLoggedIn ? <Admin /> : <Navigate to="/admin" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
