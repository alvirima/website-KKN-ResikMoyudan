import React from "react";
import Hero from "../Components/Hero/Hero";
import Program from "../Components/Program/Program";
import Pendapatan from "../Components/Pendapatan/Pendapatan";
import JenisSampah from "../Components/JenisSampah/JenisSampahHome";
import Pengumpulan from "../Components/Pengumpulan/Pengumpulan";
import Title from "../Components/Title/Title";

const Home = () => {
  return (
    <>
      <div>
        <Title
          title={
            <>
              Sampah Terkelola,
              <br />
              Desa Sejahtera
            </>
          }
          subTitle={
            <>
              Yuk, warga Sumberrahayu! Mari kita wujudkan lingkungan bersih
              bersama-sama. Sedekahkan <br /> sampah Anda, raih manfaatnya, dan
              jadilah pahlawan lingkungan untuk desa kita.
            </>
          }
        />
        <Hero />
      </div>
      <div>
        <Title
          title2={
            <>
              Kenali Sedekah Sampah <br />
              Resik Moyudan
            </>
          }
        />
        <Program />
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
          title2="Komposisi Jenis Sampah"
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
    </>
  );
};

export default Home;
