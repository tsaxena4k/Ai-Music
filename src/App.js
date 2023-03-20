import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import newSound from "./assets/audio/sample.mp3";

const playlist = {
  happy: [newSound],
  sad: [
    "https://open.spotify.com/track/0cx3DUvLuL7iTJ6aUzAZNx?si=9c88991ff1da4bf7&nd=1",
  ],
  angry: [
    "https://example.com/angry-song-1.mp3",
    "https://example.com/angry-song-2.mp3",
    "https://example.com/angry-song-3.mp3",
  ],
};

function App() {
  const [mood, setMood] = useState("happy");
  const [songIndex, setSongIndex] = useState(0);

  const sound = new Howl({
    src: playlist[mood],
    onend: () => {
      setSongIndex((prevIndex) => prevIndex + 1);
    },
  });

  useEffect(() => {
    sound.load();
    sound.play();

    return () => {
      sound.stop();
    };
  }, [songIndex]);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
    setSongIndex(0);
  };

  const handlePlay = () => {
    sound.play();
  };

  const handlePause = () => {
    sound.pause();
  };

  const handleNext = () => {
    setSongIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setSongIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
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
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
