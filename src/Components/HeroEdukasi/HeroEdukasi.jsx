import React, { useState } from "react";
import "./HeroEdukasi.css";
import TabsEdukasi from "../TabsEdukasi/TabsEdukasi";
import Pemilahan from "../E-PemilahanSampah/E-PemilahanSampah";
import Pengomposan from "../E-Pengomposan/E-Pengomposan";

const HeroEdukasi = () => {
  const [activeTab, setActiveTab] = useState("pemilahan");

  return (
    <div className="hero-edukasi">
      <TabsEdukasi activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "pemilahan" && <Pemilahan />}
      {activeTab === "kompos" && <Pengomposan />}
    </div>
  );
};

export default HeroEdukasi;
