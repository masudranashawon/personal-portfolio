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
            Welcome to my portfolio! I'm deeply passionate about JavaScript and
            its power in creating dynamic web applications. My journey into web
            development began in July 2022, and since then, I've immersed myself
            in MERN stack development. Constantly learning and pushing
            boundaries, I thrive on building innovative solutions. My insatiable
            curiosity drives me to stay updated with the latest developments,
            ensuring I contribute to technological advancement through impactful
            projects.
          </p>
          <p className='mt-10'>
            As a MERN stack developer based in Bangladesh, I am committed to
            honing my skills and solving complex problems with logic. I approach
            every project with a dedication to honest innovation, aiming for a
            positive societal impact. My goal is to not only meet but exceed
            expectations, delivering excellence in every endeavor.
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://drive.google.com/file/d/1e1fFCCgcWwN4XP7Es6wAeUesUIrjZgFv/view?usp=drive_link'
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
