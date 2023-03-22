import React from "react";
import Webcam from "react-webcam";
import { useState, useRef } from "react";

const WebcamComponent = () => {
  const webcamref = useRef(null);
  const ssimageref = useRef(null);
  const [ssImage, setSSImage] = useState(null);

  const handleCapture = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout((i) => {
        setSSImage(webcamref.current.getScreenshot());
      }, i * 500);
    }

    console.log(webcamref.current.getScreenshot());
    setSSImage(webcamref.current.getScreenshot());
  };

  return (
    <div className="App">
      <Webcam ref={webcamref} className="webcam" />
      <button onClick={handleCapture}>Capture emotion</button>

      <img src={ssImage} ref={ssimageref} alt="screenshot" />
    </div>
  );
};

export default WebcamComponent;
