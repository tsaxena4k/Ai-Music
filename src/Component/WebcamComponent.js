import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import { useState, useRef } from 'react';
import '../assets/styles/WebcamComp.css'
import { redirect, Navigate } from "react-router-dom"


const WebcamComponent = () => {
    const webcamref = useRef(null)
    const ssimageref = useRef(null)
    const [ssImage, setSSImage] = useState(null);
    const [gotoPlayer, setGotoPlayer] = useState(false);

    const handleCapture = () => {

        for (let i = 0; i < 10; i++) {
            setTimeout((i) => {
                setSSImage(webcamref.current.getScreenshot())
            }, i * 500)
        }


        console.log(webcamref.current.getScreenshot())
        setSSImage(webcamref.current.getScreenshot())
    }

    if (gotoPlayer) {
        return <Navigate to={"/player"} />
    }


    return (
        <div className="wb-comp">

            <div className="left">
                <div className='wb-container'>
                    <Webcam ref={webcamref} className="webcam" />
                    <span>Disclaimer: We are using your picture to analyse your mood</span>
                </div>

            </div>
            <div className="right">
                <div className="heading">
                    <h2><span>Hi!</span> How do you feel today?</h2>
                </div>
                <button onClick={handleCapture} className="emobutton">Lets see</button>
            </div>

            {/* <img src={ssImage} ref={ssimageref} alt="" srcset="" /> */}

        </div>
    );
}

export default WebcamComponent