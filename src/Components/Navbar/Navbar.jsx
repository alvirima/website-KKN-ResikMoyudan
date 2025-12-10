import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${sticky ? "scrolled" : ""}`}>
      <div className="navbar-pill">
        <div className="nav-left">
          <img src={logo} alt="" className="logo" />

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "button" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sedekahSampah"
                className={({ isActive }) => (isActive ? "button" : "")}
              >
                Sedekah Sampah
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edukasi"
                className={({ isActive }) => (isActive ? "button" : "")}
              >
                Edukasi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) => (isActive ? "button" : "")}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="signin-btn" to="/">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
