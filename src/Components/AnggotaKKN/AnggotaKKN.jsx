import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Hannah from "../../assets/anggota-compressed/Hannah.webp";
import Vinka from "../../assets/anggota-compressed/Vinka.webp";
import Rofi from "../../assets/anggota-compressed/Rofi.webp";
import Della from "../../assets/anggota-compressed/Della.webp";
import Ida from "../../assets/anggota-compressed/Ida.webp";
import Alex from "../../assets/anggota-compressed/Alex.webp";
import Oji from "../../assets/anggota-compressed/Oji.webp";
import Fasa from "../../assets/anggota-compressed/Fasa.webp";
import Alfi from "../../assets/anggota-compressed/Alfi.webp";
import Addin from "../../assets/anggota-compressed/Addin.webp";
import Rima from "../../assets/anggota-compressed/Rima.webp";
import Fatma from "../../assets/anggota-compressed/Fatma.webp";

const profiles = [
  {
    id: 1,
    name: "Fatimah Khoirun Nisa",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Fatma,
  },
  {
    id: 2,
    name: "Dinar Alvi Karima",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Rima,
  },
  {
    id: 3,
    name: "Azzahra Nur Addin Afeeanti",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Addin,
  },
  {
    id: 4,
    name: "Alfi Humaidi",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Alfi,
  },
  {
    id: 5,
    name: "Muhammad Andian Fasha",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Fasa,
  },
  {
    id: 6,
    name: "Ahmad Fauji",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Oji,
  },
  {
    id: 7,
    name: "Alex Tajudin Pane",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Alex,
  },
  {
    id: 8,
    name: "Ida Laelatul Kasanah",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Ida,
  },
  {
    id: 9,
    name: "Della Dana Ayu Lestari",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Della,
  },
  {
    id: 10,
    name: "Rofi Rusetyo",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Rofi,
  },
  {
    id: 11,
    name: "Vinka Diaz Rivea",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Vinka,
  },
  {
    id: 12,
    name: "Hannah Khairunnisa F.",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Hannah,
  },
];

const ProfileCard = memo(({ profile }) => {
  return (
    <div style={styles.cardContent}>
      <div style={styles.imageContainer}>
        <img
          src={profile.image}
          alt={profile.name}
          style={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 style={styles.name}>{profile.name}</h3>
      <p style={styles.major}>{profile.major}</p>
      <p style={styles.uni}>{profile.uni}</p>
    </div>
  );
});

export default function ProfileSlider() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.sliderWrapper}>
        <style>
          {`
            .mySwiper {
              width: 100%;
              padding-top: 20px;
              padding-bottom: 60px;
            }
            .swiper-slide {
              opacity: 1;
              transition: opacity 0.3s;
              will-change: transform; 
              transform-style: preserve-3d;
            }
            .swiper-pagination-bullet-active {
              background-color: #1b4d3e !important;
            }
            .slider-arrow {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 20;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              color: #1b4d3e;
            }
            .slider-arrow::after {
              font-size: 20px !important;
              font-weight: bold;
            }
            .custom-prev { left: -60px; }
            .custom-next { right: -60px; }
            @media (max-width: 768px) {
               .custom-prev { left: 0px; }
               .custom-next { right: 0px; }
            }
          `}
        </style>

        <div className="slider-arrow custom-prev swiper-button-prev"></div>
        <div className="slider-arrow custom-next swiper-button-next"></div>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={80}
          speed={500}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
            clickable: true,
          }}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id} style={styles.slideCard}>
              <ProfileCard profile={profile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  },
  sliderWrapper: {
    width: "100%",
    maxWidth: "878px", // Adjusted maxWidth for better responsiveness
    padding: "0 20px",
    position: "relative",
  },
  slideCard: {
    width: "300px",
    height: "500px",
  },
  cardContent: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid #eaeaea",
    height: "100%",
    transform: "translateZ(0)",
    willChange: "transform",
  },
  imageContainer: {
    width: "100%",
    height: "300px",
    marginBottom: "15px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    //height: "110%"
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "21px",
    fontWeight: "700",
    color: "#1F4529",
    margin: "10px 0 5px 0",
  },
  major: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#4F7355",
    margin: "0",
  },
  uni: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4F7355",
    marginTop: "4px",
  },
};
