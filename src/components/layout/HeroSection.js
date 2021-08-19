import React from 'react';
import Button from '../utils/Button';
import video from '../../assets/videos/video-2.mp4';
import './HeroSection.css'
const HeroSection = () => {
  return (
      <div className="hero-container">
        <video src={video} autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for ?</p>
        <div className="hero-btns">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            GET STARTED
          </Button>
        </div>
      </div>
  )
}

export default HeroSection;