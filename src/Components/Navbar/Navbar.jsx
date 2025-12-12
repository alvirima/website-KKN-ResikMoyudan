import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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

          <NavLink className="signin-btn desktop-signin" to="/">
            Sign In
          </NavLink>

          <button className="hamburger-btn" onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li>
              <NavLink
                to="/"
                className={activePage === "Home" ? "button" : ""}
                onClick={() => setActivePage("Home")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/sedekahSampah"
                className={activePage === "Sedekah Sampah" ? "button" : ""}
                onClick={() => setActivePage("Sedekah Sampah")}
              >
                Sedekah Sampah
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/edukasi"
                className={activePage === "Edukasi" ? "button" : ""}
                onClick={() => setActivePage("Edukasi")}
              >
                Edukasi
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/aboutUs"
                className={activePage === "About Us" ? "button" : ""}
                onClick={() => setActivePage("About Us")}
              >
                About Us
              </NavLink>
            </li>
          </ul>

          <NavLink className="mobile-join-btn" to="/">
            Sign In
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
