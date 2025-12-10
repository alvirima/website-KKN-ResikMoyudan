import React from "react";
import "./Program.css";
import sedekahSampah from "../../Assets/sedekahSampah.svg";
import edukasi from "../../Assets/edukasi.svg";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="programs">
      <div className="program-card">
        <div className="card">
          <div className="icon-prog">
            <img src={edukasi} alt="" />
          </div>
          <h2>Edukasi</h2>
          <p>
            Temukan materi edukatif mengenai pemilahan, daur ulang, dan
            pengelolaan sampah yang bertanggung jawab untuk mendukung
            kelestarian lingkungan.
          </p>
          <Link to="/Edukasi">
            <button>Selengkapnya</button>
          </Link>
        </div>
        <div className="card">
          <div className="icon-prog">
            <img src={sedekahSampah} alt="" />
          </div>
          <h2>Sedekah Sampah</h2>
          <p>
            Akses statistik lengkap mengenai perkembangan <br /> program sedekah
            sampah, termasuk volume <br /> sampah terkelola dan penyaluran dana
            sosial.
          </p>
          <Link to="/SedekahSampah">
            <button>Selengkapnya</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Program;
