import React from "react";
import "../assets/styles/Team.scss";
import rythm from "../assets/images/rythm.jpg";
import tushar from "../assets/images/tushar.jpg";
import meghna from "../assets/images/meghna.jpg";
import rishab from "../assets/images/rishab.jpg";

const Team = () => {
  return (
    <div className="teammain">
      <h1 className="heading text-center mb-5">Meet Our Team</h1>
      <div className="teamlist">
        <div className="teamcard">
          <img src={rythm} alt=""  className="mb-3"/>
          Rythm | React Developer
        </div>
        <div className="teamcard">
          <img src={tushar} alt="" className="mb-3" />
          Tushar | React Developer
        </div>
        <div className="teamcard">
          <img src={meghna} alt="" className="mb-3" />
          Meghna | React Developer
        </div>
        <div className="teamcard">
          <img src={rishab} alt="" className="mb-3" />
          Rishab | Data Scientist
        </div>
      </div>
    </div>
  );
};

export default Team;
