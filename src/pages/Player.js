import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Player.scss";
import { Howl, Howler } from "howler";
import Slider from "react-slick";
import { FaPlayCircle, FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { ImNext, ImPrevious } from "react-icons/im";
import happyObject from "../data/happy.json";
import angryObject from "../data/angry.json";
import joyObject from "../data/joy.json";
import fearObject from "../data/fear.json";
import surpriseObject from "../data/surprise.json";
import disgustObject from "../data/disgust.json";
import neutralObject from "../data/neutral.json";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import { useSelector } from "react-redux";
import SongCard from "../Component/SongCard";
import musicIcon from "../assets/images/music-icon.gif";

const Player = () => {
  const [mood, setMood] = useState("happy");
  const [playlist, setPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [quote, setQuote] = useState("");
  const [imgLoading, setImgLoading] = useState(true);
  const currentMood = useSelector((store) => store.app.currentMood);

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

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "CgybgPVlI6e/idtBmiTY3A==MUGB9hcHH7o2IRBV",
        },
      })
      .then((response) => {
        setQuote(response?.data[0]?.quote);
        console.log(response?.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
  const fadeImages = [
    {
      url: "https://source.unsplash.com/random/500x600/?food",
    },
    {
      url: "https://source.unsplash.com/random/500x600/?icecream",
    },
    {
      url: "https://source.unsplash.com/random/500x600/?burger",
    },
    {
      url: "https://source.unsplash.com/random/500x600/?drinks",
    },
    {
      url: "https://source.unsplash.com/random/500x600/?cookies",
    },
    {
      url: "https://source.unsplash.com/random/500x600/?pizza",
    },
  ];
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  return (
    <div className="playermain container">
      <div className="row">
        <div className="col-auto">
          <h2 className="player-mood mb-5 mt-3">
            Current Mood : {currentMood}
          </h2>
        </div>
      </div>
      <div className="row row-mobile-order">
        <div className="col-sm-6 column-order2">
          {quote != "" ? (
            <h1
              className="mood-quote mb-5"
              style={{ fontSize: "calc(15px + 0.390625vw)" }}
            >
              {`"${quote}"`}
            </h1>
          ) : (
            <div class="typing mb-5">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          <h4 className="mt-3">Enjoy the custom playlist made for you :</h4>
          <div className="playlist pe-sm-2">
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
          </div>
        </div>
        <div className="col-sm-6 column-order1">
          {imgLoading && (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="imagecontainer">
            <div className="slide-container">
              <Fade duration="2000" arrows={false}>
                {fadeImages.map((fadeImage, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={fadeImage.url}
                      className="img-fluid rounded"
                      onLoad={() => setImgLoading(false)}
                    />
                    <h2>{fadeImage.caption}</h2>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="musicplayer p-2">
        <div className="row m-auto container justify-content-between align-items-center">
          <div className="col-auto d-flex align-items-center justify-content-center">
            <img src={musicIcon} className="img-fluid rounded" width="60px" />
            <div className="ms-4">
              <h3 className="mb-0">{playlist[songIndex]?.song_name}</h3>
              <h6 className="mb-0">by {playlist[songIndex]?.song_artist}</h6>
            </div>
          </div>
          <div className="col-auto text-center d-flex align-items-center justify-content-center">
            <button
              className="btn btn-dark btn-sm me-3 fw-semibold rounded" style={{backgroundColor:"black",padding:"10px",boxShadow:"0px 0px 15px rgba(0,0,0,0.4)"}}
              onClick={handlePrev}
            >
              <ImPrevious className="fs-3 text-light"/>
            </button>
            <button
              className="btn btn-dark btn-sm me-3 fw-semibold rounded" style={{backgroundColor:"black",padding:"10px",boxShadow:"0px 0px 15px rgba(0,0,0,0.4)"}}
              onClick={handlePlay}
            >
              <FaRegPlayCircle className="fs-3 text-light"/>
            </button>
            <button
              className="btn btn-dark btn-sm me-3 fw-semibold rounded" style={{backgroundColor:"black",padding:"10px",boxShadow:"0px 0px 15px rgba(0,0,0,0.4)"}}
              onClick={handlePause}
            >
              <FaRegPauseCircle className="fs-3 text-light"/>
            </button>
            <button
              className="btn btn-dark btn-sm me-3 fw-semibold rounded" style={{backgroundColor:"black",padding:"10px",boxShadow:"0px 0px 15px rgba(0,0,0,0.4)"}}
              onClick={handleNext}
            >
              <ImNext className="fs-3 text-light"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
