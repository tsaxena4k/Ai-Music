import React from "react";
import musicIcon from "../assets/images/music-icon.gif";

function SongCard(song) {
  return (
    <div className="song-card row p-2">
      <div className="col-auto align-self-center">
        <img src="https://e-cdns-images.dzcdn.net/images/cover/2d827558d540c4f506f121f437be4f87/500x500-000000-80-0-0.jpg" className="img-fluid rounded-circle" alt="" width="40px"/>
      </div>
      <div className="col-auto">
        <h3 className="song-name">Back In Time | Raghav Meatle</h3>
        <span>2:33 </span>
      </div>
    </div>
  );
}

export default SongCard;
