import React from "react";
import "./HeroSedekahSampah.css";
import fotoSedekahSampah from "../../Assets/fotoSedekahSampah.png";

const HeroSedekahSampah = () => {
  return (
    <div className="ss-container">
      <div>
        <div className="ss-content">
          <p>
            Kegiatan Sedekah Sampah di Dusun Moyudan merupakan program rutin
            yang dilaksanakan setiap Sabtu awal bulan sebagai bentuk sedekah
            melalui sampah yang bernilai ekonomi seperti plastik, kertas, dan
            botol bekas. Sampah tersebut dijual kepada pengepul, dari hasil
            penjualan sampah tersebut disalurkan ke kas desa atau masjid untuk
            mendukung kegiatan sosial dan pembangunan lingkungan, sekaligus
            kontribusi dalam pengurangan sampah melalui pemilahan dan daur
            ulang, serta menciptakan dampak positif bagi pelestarian lingkungan.
          </p>
          <img src={fotoSedekahSampah} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSedekahSampah;
