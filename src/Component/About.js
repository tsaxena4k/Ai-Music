import React from "react";
import "../assets/styles/About.scss";
import reactLogo from "../assets/images/reactjslogo.png";
import firebaseLogo from "../assets/images/firebaselogo.png";
import deepfaceLogo from "../assets/images/deepfacelogo.png";
import howlerLogo from "../assets/images/logohowler.png";

const About = () => {
  return (
    <div className="aboutmain">
      <h2 className="heading">AI-MUSIC</h2>
      <p className="details">
        Introducing AI-Music, the revolutionary app that uses artificial
        intelligence to read and interpret human emotions and suggest songs that
        match your mood. <br />
        AI-Music was developed by a team of experienced software engineers, data
        scientists, and music enthusiasts who share a passion for using
        technology to enhance human experiences. With cutting-edge machine
        learning algorithms and sophisticated emotion detection capabilities,
        AI-Music is able to analyze subtle changes in facial expressions, voice
        tone, and body language to determine how you're feeling. <br />
        Once AI-Music detects your emotion, it suggests a personalized playlist
        of songs that match your mood. Whether you're feeling happy, sad, angry,
        or any other emotion, AI-Music has the perfect song for you. With a
        database of millions of songs and a sophisticated recommendation engine,
        AI-Music is constantly learning and improving its suggestions based on
        your feedback. <br />
        AI-Music is more than just a music player, it's a companion that
        understands you and helps you express your emotions through music.
        Whether you're going through a breakup, celebrating a victory, or just
        need to unwind, AI-Music has got you covered. <br />
        Download AI-Music today and start exploring the power of emotion-based
        music recommendations. With AI-Music, you'll never have to worry about
        finding the perfect song for your mood again. <br />
      </p>
      <h2 className="tech-heading">Tech Stack Used:</h2>
      <div className="tech-stack">
        <div className="tech-card">
          <img src={reactLogo} alt="react-logo" className="tech-logo" />
          React.js
        </div>
        <div className="tech-card">
          <img src={firebaseLogo} alt="react-logo" className="tech-logo" />
          Firebase
        </div>
        <div className="tech-card">
          <img src={deepfaceLogo} alt="react-logo" className="tech-logo" />
          Deep Face
        </div>
        <div className="tech-card">
          <img src={howlerLogo} alt="react-logo" className="tech-logo" />
          Howler.js
        </div>
      </div>
    </div>
  );
};

export default About;
