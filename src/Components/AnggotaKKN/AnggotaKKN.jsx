import { memo } from "react";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "./AnggotaKKN.css";

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
    <div className="card-content">
      <div className="image-container">
        <img
          src={profile.image}
          alt={profile.name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="profile-name">
        {profile.name}
      </h3>
      <p className="profile-major">
        {profile.major}
      </p>
      <p className="profile-uni">{profile.uni}</p>
    </div>
  );
});

export default function ProfileSlider() {
  return (
    <div className="profile-slider-container">
      <div className="slider-wrapper">
        <div className="slider-arrow custom-prev swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div className="slider-arrow custom-next swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>

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
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
          ]}
          className="mySwiper"
        >
          {profiles.map((profile) => (
            <SwiperSlide
              key={profile.id}
              className="profile-slide"
            >
              <ProfileCard profile={profile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
