import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import SpotifyWebApi from "spotify-web-api-js";
import App1 from "./middleware/getMusicByMood";
import "./App.css";
import axios from "axios";
import getMusicByMood from "./middleware/getMusicByMood";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: "368dc6d7edeb44b8a0b85a6e3ff69c3c",
  clientSecret: "feafd71b8c014cce872948b554f4bf6e",
});

function App() {
  const [mood, setMood] = useState("happy");
  const [playlist, setPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);

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
    const resposne = await getMusicByMood(mood);
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
  console.log(playlist);
  return (
    <div className="App">
      <h1>Music Mood Player</h1>
      <form>
        <label>
          Select a mood:
          <select value={mood} onChange={handleMoodChange}>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
          </select>
        </label>
      </form>
      <div>
        <h2>{playlist[songIndex]?.song_name}</h2>
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <Player/>
    </div>
  );
}

export default App;
