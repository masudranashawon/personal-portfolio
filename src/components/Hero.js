import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div
      className='hero container mx-auto mt-20 flex justify-center items-center overflow-hidden'
      id='hero'
    >
      <div className='hero-image' ref={heroImageRef}></div>
      <div className='shutter shutter-left overflow-hidden'>
        <h2>Front-end</h2>
      </div>
      <div className='shutter shutter-right overflow-hidden'>
        <h2>Developer</h2>
      </div>
      <div className='circle-left'></div>
      <div className='circle-right'></div>
    </div>
  );
};

export default Hero;
