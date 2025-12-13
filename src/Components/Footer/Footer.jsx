import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/logo-footer.svg";
import Phone from "../../assets/phone.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={logoFooter}
            alt=""
            className="footer-logo"
          />
          <div className="footer-text">
            <h3>Resik Moyudan</h3>
            <p>
              Jl. Klangon - Tempel No.KM 2, RW.4,
              Barepan, Sumberrahayu, Kec. Moyudan,
              Kabupaten Sleman, Daerah Istimewa
              Yogyakarta 55563
            </p>
          </div>
        </div>
        <div className="footer-content-center">
          <div className="footer-text">
            <h3>Hubungi Kami</h3>
          </div>
          <div className="contact">
            <img
              src={Phone}
              alt=""
              className="phone-icon"
            />
            <span>082338798647</span>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="footer-text">
            <h3>Tautan Cepat</h3>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/SedekahSampah">
                Sedekah Sampah
              </Link>
              <Link to="/Edukasi">Edukasi</Link>
              <Link to="/AboutUs">About Us</Link>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © 2025 Resik Moyudan
      </p>
    </div>
  );
};

export default Footer;
