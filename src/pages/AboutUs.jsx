import React from "react";
import HeroAboutUs from "../Components/HeroAboutUs/HeroAboutUs";
import KKNFullTeam from "../Components/kknFullTeam/kknFullTeam";
import AnggotaKKN from "../Components/AnggotaKKN/AnggotaKKN";
import Title from "../Components/Title/Title";
import DosenPembimbing from "../Components/DosenPembimbing/DosenPembimbing";

const AboutUs = () => {
  return (
    <div>
      <div>
        <Title title2="Resik Moyudan" />
        <HeroAboutUs />
      </div>
      <div>
        <Title title2="KKN Tematik UIN Sunan Kalijaga" />
        <KKNFullTeam />
      </div>
      <div>
        <Title title2="Dosen Pembimbing" />
        <DosenPembimbing />
      </div>
      <div>
        <Title title2="Anggota KKN Tematik UIN Sunan Kalijaga" />
        <AnggotaKKN />
      </div>
    </div>
  );
};

export default AboutUs;
