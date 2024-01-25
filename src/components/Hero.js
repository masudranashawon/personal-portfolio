import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image2_xhvc03.jpg",
  img2: "https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image1_rejzqv.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlLines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlLines, 1.5);

  return (
    <div
      className='hero container mx-auto mt-20 flex justify-center items-center overflow-hidden'
      id='hero'
    >
      <div className='hero-image' ref={heroImageRef}></div>
      <div className='shutter shutter-left overflow-hidden'>
        <h1 ref={heroHeadline1Ref}>Full Stack</h1>
      </div>
      <div className='shutter shutter-right overflow-hidden'>
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className='circle-left'></div>
      <div className='circle-right'></div>
    </div>
  );
};

export default Hero;
