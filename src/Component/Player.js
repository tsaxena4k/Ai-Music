import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Player.css";
import musicIcon from "../assets/img/music-icon.gif";
import { Howl, Howler } from "howler";
import Slider from "react-slick";
import { FaPlayCircle } from "react-icons/fa";
import happyObject from "../data/happy.json";
import angryObject from "../data/angry.json";
import joyObject from "../data/joy.json";
import fearObject from "../data/fear.json";
import surpriseObject from "../data/surprise.json";
import disgustObject from "../data/disgust.json";
import neutralObject from "../data/neutral.json";

import { useSelector } from 'react-redux'
const Player = () => {
  const [mood, setMood] = useState("happy");
  const [playlist, setPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    if (mood == "happy") setPlaylist(happyObject);
    if (mood == "angry") setPlaylist(angryObject);
    if (mood == "fear") setPlaylist(fearObject);
    if (mood == "surprise") setPlaylist(surpriseObject);
    if (mood == "disgust") setPlaylist(disgustObject);
    if (mood == "joy") setPlaylist(joyObject);
    if (mood == "neutral") setPlaylist(neutralObject);
  }, []);



  const sound = new Howl({
    src: playlist[songIndex]?.song_uri,
    html5: true,
    onend: () => {
      setSongIndex((prevIndex) =>
        playlist.length == prevIndex + 1 ? 0 : prevIndex + 1
      );
    },
  });

  const handleMoodChange = async (event) => {
    const mood = event.target.value;
    setMood(mood);
    const resposne = "happpy";
    setPlaylist(resposne);
  };

  const handlePlay = () => {
    sound.stop();
    sound.play();
  };

  const handlePause = () => {
    sound.pause();
  };

  const handleNext = () => {
    setSongIndex((prevIndex) =>
      playlist.length == prevIndex + 1 ? 0 : prevIndex + 1
    );
    handlePlay();
  };

  const handlePrev = () => {
    setSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
    handlePlay();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };
  return (
    <div className="playermain">
      <h2 className="playermood">Current Mood : Happy!</h2>
      <div className="playercontent">
        <div className="left">
          <h2 className="mood-quote">
            We couldn't be happier seeing you happy
          </h2>
          <h3>Enjoy the custom playlist made for you :</h3>
          <div className="playlist">
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>

            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>

            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
              <div className="buttons">
                <div className="play">
                  <FaPlayCircle />
                </div>
              </div>
            </div>
            <div className="song-card">
              <img src={musicIcon} alt="" srcset="" />
              <div className="song-info">
                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                <span>2:33 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="imagecontainer">
            <Slider {...settings}>
              <div className="slide-card">
                <img
                  className="fimage"
                  src="https://source.unsplash.com/random/?pizza"
                  alt=""
                  srcset=""
                />{" "}
                <div className="overlay"></div>
              </div>
              <div className="slide-card">
                <img
                  className="fimage"
                  src="https://source.unsplash.com/random/?burger"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="slide-card">
                <img
                  className="fimage"
                  src="https://source.unsplash.com/random/?icecream"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="slide-card">
                <img
                  className="fimage"
                  src="https://source.unsplash.com/random/?food"
                  alt=""
                  srcset=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="musicplayer">
        <div className="row h-100">
          <div className="col-4 d-flex align-items-center justify-content-center">
            <img
              src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
              className="img-fluid"
              width="60px"
            />
            <div className="ms-4">
                <h2 className="mb-0">{playlist[songIndex]?.song_name}</h2>
                <p>by {playlist[songIndex]?.song_artist}</p>
            </div>
          </div>
          <div className="col-8 text-center d-flex align-items-center justify-content-center">
            <button className="btn btn-light btn-sm me-3" onClick={handlePrev}>
              Previous
            </button>
            <button className="btn btn-light btn-sm me-3" onClick={handlePlay}>
              Play
            </button>
            <button className="btn btn-light btn-sm me-3" onClick={handlePause}>
              Pause
            </button>
            <button className="btn btn-light btn-sm me-3" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
