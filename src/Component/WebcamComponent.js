import React from "react";
import Webcam from "react-webcam";
import { useState, useRef } from "react";
import "../assets/styles/WebcamComp.scss";
import Player from "../Player";
import Shutter from "../assets/images/shutter.png";
import { storage } from "../firebase/firebase";
import axios from "axios";

const WebcamComponent = () => {
  const webcamref = useRef(null);
  const [ssImage, setSSImage] = useState(null);
  const [cameraLoad, setCameraLoad] = useState(true);
  const [loader, setLoader] = useState(false);
  const [emotion, setEmotion] = useState(null);

  //capture and upload to firebase
  const handleCapture = async () => {
    setLoader(true);
    const imageSrc = webcamref.current.getScreenshot();
    const dateNow = Date.now();
    const uploadTask = await storage
      .ref(`/images/${dateNow + ".jpg"}`)
      .putString(imageSrc, "data_url");

    const url = await storage
      .ref("images")
      .child(dateNow + ".jpg")
      .getDownloadURL();
    setSSImage(url);
    detectEmotions(url);
  };

  //detect emotions using image
  const detectEmotions = async (url) => {
    console.log(url);
    const options = {
      method: "POST",
      url: "https://emotion-detection2.p.rapidapi.com/emotion-detection",
      params: { "api-version": "3.0" },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1eeb293270msh79e196ae85b80d9p11e7c0jsnf3a4dfee16df",
        "X-RapidAPI-Host": "emotion-detection2.p.rapidapi.com",
      },
      data: {
        url,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0]?.emotion?.value);
        setLoader(false);
        setEmotion(response.data[0]?.emotion?.value);
      })
      .catch(function (error) {
        console.error(error);
        setLoader(false);
      });
  };

  return (
    <div className="wc-wrapper">
      <div className="row">
        <div className="col-sm-6 text-center d-flex justify-content-center">
          <div className="wc-container">
            {cameraLoad && (
              <div>
                <div class="alert alert-warning" role="alert">
                  Please give access to your camera
                </div>
                <img src={Shutter} className="webcam" alt="webcam_preview" />
              </div>
            )}
            <Webcam
              ref={webcamref}
              className="webcam"
              onUserMedia={() => {
                setCameraLoad((prevValue) => !prevValue);
              }}
            />
          </div>
        </div>
        <div className="col-sm-6 px-4">
          <div className="wc-heading">
            <h2>
              Hey,
              <br /> How do you feel today?
            </h2>
          </div>
          <div className="wc-info text-light mt-4">
            <p>
              We use your camera to detect your mood and recommend you music
              based on that.
            </p>
          </div>
          {!loader ? (
            <button
              onClick={handleCapture}
              className="action-btn btn btn-primary btn-lg mg-4 d-flex align-items-center"
            >
              Let's see
            </button>
          ) : (
            <button class="btn btn-lg btn-primary" type="button" disabled>
              <span
                class="spinner-grow spinner-grow-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Capturing...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamComponent;
