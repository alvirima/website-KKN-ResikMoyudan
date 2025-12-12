import React from "react";
import BuArifah from "../../assets/BuArifah.png";
import "./DosenPembimbing.css";

const DosenPembimbing = () => {
  return (
    <div className="dosen-wrapper">
      <div className="dosen-card">
        <div className="dosen-image-wrapper">
          <img
            src={BuArifah}
            alt="Dr. Arifah Khusnuryani"
            className="dosen-image"
          />
        </div>

        <p className="dosen-name">Dr.</p>
        <p className="dosen-name">Arifah Khusnuryani,</p>
        <p className="dosen-title">M.Si.</p>
        <p className="dosen-uni">UIN Sunan Kalijaga</p>
      </div>
    </div>
  );
};

export default DosenPembimbing;
