import React from "react";
import "./Hero.css";
import heroImage from "../../Assets/herofix.png";
import totalSampah from "../../Assets/totalSampah.svg";
import pendapatanBulanan from "../../Assets/pendapatanBulanan.svg";
import wargaAktif from "../../Assets/wargaAktif.svg";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="img-container">
        <img src={heroImage} alt="" className="hero-image" />
        <div className="hero-card">
          <button className="stat-card">
            <img src={totalSampah} alt="" />
            <div className="card-text">
              <h3>112 kg</h3>
              <p>Total Sampah</p>
            </div>
          </button>

          <button className="stat-card">
            <img src={pendapatanBulanan} alt="" />
            <div className="card-text">
              <h3>Rp 1.256.000</h3>
              <p>Pendapatan Bulan Ini</p>
            </div>
          </button>

          <button className="stat-card">
            <img src={wargaAktif} alt="" />
            <div className="card-text">
              <h3>54</h3>
              <p>Warga Aktif</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
