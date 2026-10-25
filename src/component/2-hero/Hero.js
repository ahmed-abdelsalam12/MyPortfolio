import React from 'react'
import './hero.css'
import avatar from "../../assets/avatar.png";
import { Lottie } from "lottie-react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-section">
        <img id="img" height={" 88px"} width={"88px"} src={avatar} />
        <h1>I’m Ahmed , a Frontend Developer</h1>
        <p>
          passionate about crafting modern, responsive, and user-centered web
          experiences. I love turning creative concepts into functional and
          visually appealing websites that make an impact.
        </p>
      </div>
      <div className="right-section animation">
        <Lottie
          className="ani"
          style={{ height: 355 }}
          src={`${process.env.PUBLIC_URL}/animations/Programming-Computer.json`}
          autoplay
          loop
          onLoadedIamge={() => {}}
        />
      </div>
    </div>
  );}

export default Hero
