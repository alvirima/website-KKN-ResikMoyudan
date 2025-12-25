import React, { useState, useEffect } from "react";
import "./SampahDiterima.css";
import SampahKaleng from "../../assets/SampahKaleng.png";
import SampahPlastik from "../../assets/SampahPlastik.png";
import SampahKardus from "../../assets/SampahKardus.png";
import SampahBesi from "../../assets/SampahBesi.png";
import SampahMinyak from "../../assets/SampahMinyak.png";
import SampahKaca from "../../assets/SampahKaca.png";
import SampahGalon from "../../assets/SampahGalon.png";

const data = [
  {
    img: SampahKaleng,
    title: "Kaleng",
    desc: "Semua jenis kaleng bekas dapat disedekahkan",
    contoh: ["Kaleng rokok", "Kaleng susu"],
    syarat: "Bersih, tidak ada isi dalam kaleng",
  },
  {
    img: SampahPlastik,
    title: "Botol Plastik",
    desc: "Semua jenis botol plastik bekas dapat disedekahkan",
    contoh: ["Botol aqua", "Botol teh pucuk"],
    syarat: "Bersih, tidak ada isi dalam botol",
  },
  {
    img: SampahKardus,
    title: "Kardus & Koran",
    desc: "Semua jenis kardus dan koran bekas dapat disedekahkan",
    contoh: ["Kardus aqua", "Kardus roti", "Majalah bekas"],
    syarat: "Bersih, tidak ada isi dalam kardus",
  },
  {
    img: SampahBesi,
    title: "Besi",
    desc: "Semua jenis besi bekas dapat disedekahkan",
    contoh: ["kompor", "Panci & Wajan"],
    syarat: "Berish, tidak ada isi",
  },
  {
    img: SampahMinyak,
    title: "Minyak Jelantah",
    desc: "Semua minyak jelantah dapat disedekahkan",
    contoh: ["minyak bekas memasak"],
    syarat: "Tidak ada syarat khusus",
  },
  {
    img: SampahKaca,
    title: "Botol Kaca",
    desc: "Semua jenis botol kaca bekas dapat disedekahkan",
    contoh: ["botol marjan", "botol minuman"],
    syarat: "Berish, tidak ada isi",
  },
  {
    img: SampahGalon,
    title: "Galon",
    desc: "Semua jenis galon bekas dapat disedekahkan",
    contoh: ["galon aqua", "galon leminerale"],
    syarat: "Berish, tidak ada isi",
  },
];

const SampahDiterima = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1000) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setIndex(0); // Reset index when screen size changes
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < data.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel">
      <button className="btn left" onClick={prev} disabled={index === 0}>
        ❮
      </button>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${(index * 100) / cardsPerView}%)` }}
        >
          {data.map((item, i) => (
            <div className="ss-card" key={i}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <div className="contoh">
                <span className="label">Contoh:</span>
                <div className="badge-wrapper">
                  {item.contoh.map((c, idx) => (
                    <span key={idx} className="badge">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="syarat">
                <span className="label">Syarat Penerimaan:</span>
                <p>{item.syarat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn right"
        onClick={next}
        disabled={index >= data.length - cardsPerView}
      >
        ❯
      </button>
    </div>
  );
};

export default SampahDiterima;
