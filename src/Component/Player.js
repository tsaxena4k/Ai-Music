import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Player.css'
import musicIcon from '../assets/img/music-icon.gif'
import Slider from 'react-slick'
import { FaPlayCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Player = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
    };

    const currentMood=useSelector((store)=>store.app.currentMood);
    return (
        <div className="playermain">
            <h2 className="playermood">Current Mood : {currentMood}</h2>
            <div className="playercontent">
                <div className="left">
                    <h2 className="mood-quote">We couldn't be happier seeing you happy</h2>
                    <h3>Enjoy the custom playlist made for you :</h3>
                    <div className="playlist">

                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>

                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>

                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>
                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>
                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>
                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>
                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                            <div className="buttons">
                                <div className="play"><FaPlayCircle /></div>
                            </div>
                        </div>
                        <div className="song-card">
                            <img src={musicIcon} alt="" srcset="" />
                            <div className="song-info">
                                <h3 className="song-name">Back In Time | Raghav Meatle</h3>
                                <span>2:33 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="imagecontainer">
                        <Slider {...settings}>
                            <div className='slide-card'><img className='fimage' src="https://source.unsplash.com/random/?pizza" alt="" srcset="" /> <div className="overlay"></div></div>
                            <div className='slide-card'><img className='fimage' src="https://source.unsplash.com/random/?burger" alt="" srcset="" /></div>
                            <div className='slide-card'><img className='fimage' src="https://source.unsplash.com/random/?icecream" alt="" srcset="" /></div>
                            <div className='slide-card'><img className='fimage' src="https://source.unsplash.com/random/?food" alt="" srcset="" /></div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="musicplayer">

            </div>
        </div>
    )
}

export default Player