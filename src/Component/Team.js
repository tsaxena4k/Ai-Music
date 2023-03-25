import React from 'react'
import '../assets/styles/Team.scss'
import rythm from '../assets/images/rythm.jpg'
import tushar from '../assets/images/tushar.jpg'
import meghna from '../assets/images/meghna.jpg'
import rishab from '../assets/images/rishab.jpg'
import rohan from '../assets/images/rohan.jpg'

const Team = () => {
  return (
    <div className='teammain'>
      <h1 className='heading'>Meet Our Team : </h1>
      <div className="teamlist">
        <div className="teamcard">
          <img src={rythm} alt="" />
          Rythm | React Developer
        </div>
        <div className="teamcard">
          <img src={tushar} alt="" />
          Tushar | React Developer
        </div>
        <div className="teamcard">
          <img src={meghna} alt="" />
          Meghna | Team Lead
        </div>
        <div className="teamcard">
          <img src={rishab} alt="" />
          Rishab | Data Scientist
        </div>
        <div className="teamcard">
          <img src={rohan} alt="" />
          Rohan | Data Scientist
        </div>
      </div>
    </div>
  );
};

export default Team;
