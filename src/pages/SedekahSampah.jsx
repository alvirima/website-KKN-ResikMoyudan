import React from "react";
import HeroSedekahSampah from "../Components/HeroSedekahSampah/HeroSedekahSampah";
import SampahDiterima from "../Components/SampahDiterima/SampahDiterima";
import Pendapatan from "../Components/Pendapatan/Pendapatan";
import Pengumpulan from "../Components/Pengumpulan/Pengumpulan";
import JenisSampah from "../Components/JenisSampah/JenisSampahHome";
import Title from "../Components/Title/Title";

const SedekahSampah = () => {
  return (
    <>
      <div>
        <Title title2="Sedekah Sampah" />
        <HeroSedekahSampah />
      </div>
      <div>
        <Title
          title2="Jenis Sampah yang Disedekahkan"
          subTitle="Berikut merupakan panduan jenis sampah yang diterima di Kegiatan Sedekah Sampah  "
        />
        <SampahDiterima />
      </div>
      <div>
        <Title
          title2="Pendapatan Sedekah Sampah"
          subTitle={
            <>
              Grafik ini memberikan informasi mengenai total uang atau
              pendapatan yang dikumpulkan dari
              <br /> penjualan semua sampah yang disedekahkan oleh warga setiap
              bulannya.
            </>
          }
        />
        <Pendapatan />
      </div>
      <div>
        <Title
          title2="Total Pengumpulan Sedekah Sampah"
          subTitle={
            <>
              Grafik ini memberikan informasi mengenai keseluruhan total
              kilogram pengumpulan sedekah
              <br /> sampah setiap bulannya.
            </>
          }
        />
        <Pengumpulan />
      </div>
      <div>
        <Title
          title="Komposisi Jenis Sampah"
          subTitle={
            <>
              Grafik ini memberikan informasi mengenai jumlah keseluruhan
              pengumpulan sedekah sampah yang <br />
              dikategorikan berdasarkan jenis sampah selama kegiatan sedekah
              sampah ini berlangsung.
            </>
          }
        />
        <JenisSampah />
      </div>
    </>
  );
};

export default SedekahSampah;
