import React from "react";
import "./kknFullTeam.css";
import fotoTeam from "../../assets/kknFullTeam.png";

const kknFullTeam = () => {
  return (
    <div className="team">
      <img src={fotoTeam} alt="" className="img-kkn" />
    </div>
  );
};

export default kknFullTeam;
