import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className='bio mt-20 container mx-auto overflow-hidden'>
      <p ref={bioRef}>
        Passionate MERN Stack developer based in Bangladesh, consistently
        pushing boundaries through impactful projects. I am dedicated to
        embracing new technologies and solving complex problems with a logical
        mindset. Committed to honest innovation, I strive to make a positive
        societal impact through my work.
      </p>
    </div>
  );
};

export default Bio;
