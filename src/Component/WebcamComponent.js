import React from 'react';
import Webcam from 'react-webcam';
import { useState,useRef } from 'react';
import '../assets/styles/WebcamComp.css'

const WebcamComponent = () => {
    const webcamref = useRef(null)
    const ssimageref = useRef(null)
    const [ssImage, setSSImage] = useState(null);

    const handleCapture = () => {

        for (let i = 0; i < 10; i++) {
            setTimeout((i) => {
                setSSImage(webcamref.current.getScreenshot())
            }, i * 500)
        }


        console.log(webcamref.current.getScreenshot())
        setSSImage(webcamref.current.getScreenshot())
    }

    return (
        <div className="wb-comp">
            <div className="left">
                <Webcam ref={webcamref} className="webcam" />
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