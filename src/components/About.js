import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/drgxflcsb/image/upload/v1676030150/Personal%20Portfolio/masud-image3_vxmpd0.jpg",
  img2: "https://res.cloudinary.com/drgxflcsb/image/upload/v1676030148/Personal%20Portfolio/masud-image4_cbbkzc.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"About Me"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            Welcome to my personal portfolio! Unleashing the Power of ReactJS, I
            am a developer with a passion for crafting stunning web
            applications. With a focus on UI design and animation, I bring a
            unique blend of technical skills and artistic vision to every
            project. Expertise in React, Redux, Tailwind, and GSAP, combined
            with a commitment to delivering pixel-perfect results, sets me apart
            as a true master of my craft
          </p>
          <p className='mt-10'>
            Breathing life into user interfaces is my specialty. Utilizing the
            latest tools, including the powerful GreenSock Animation Platform
            (GSAP), I bring dynamic and engaging user experiences to life. With
            a strong background in design, including proficiency in Adobe
            Photoshop and Illustrator, I have the ability to seamlessly blend
            technical skills with artistic vision. The result? Stunning,
            functional web applications that exceed clients' expectations.
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://drive.google.com/file/d/1e1fFCCgcWwN4XP7Es6wAeUesUIrjZgFv/view'
            target='_blank'
            rel='noreferrer'
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
