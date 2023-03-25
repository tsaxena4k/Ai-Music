import React from "react";
import musicIcon from "../assets/images/music-icon.gif";

function SongCard({title, artist,thumbnail,setSongIndex,index,handlePlay}) {
  return (
    <div className="song-card row p-2" onClick={()=>handlePlay(index)} style={{cursor:"pointer"}}>
      <div className="col-auto align-self-center">
        <img src={thumbnail} className="img-fluid rounded-circle" alt="" width="40px"/>
      </div>
      <div className="col-auto">
        <h4 className="song-name">{title} | {artist}</h4>
        <span>2:33 </span>
      </div>
    </div>
  );
}

export default SongCard;
