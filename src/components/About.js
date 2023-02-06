import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"About"} />
      <div className='about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            itaque beatae magni deleniti soluta harum animi iure illo totam
            perferendis fugit saepe laborum, sapiente possimus sint nulla eos?
            Temporibus, nihil.
          </p>
          <p className='mt-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quo
            voluptas non saepe molestiae magnam sint sed ducimus qui corrupti
            perspiciatis, accusamus accusantium eos repudiandae sequi? Illo quia
            eius sit.
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://docs.google.com/document/d/1Y8kb59-ak90Cdj2IJn5TbzC9OdF4VjTzo0t0ND90-_s/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
