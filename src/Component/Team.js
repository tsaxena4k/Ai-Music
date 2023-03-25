import React from 'react'
import '../assets/styles/Team.scss'
import rythm from '../assets/img/rythm.jpg'
import tushar from '../assets/img/tushar.jpg'
import meghna from '../assets/img/meghna.jpg'
import rishab from '../assets/img/rishab.jpg'
import rohan from '../assets/img/rohan.jpg'

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
  )
}

export default Team