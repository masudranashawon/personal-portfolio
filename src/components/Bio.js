import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className='bio mt-20 container mx-auto overflow-hidden'>
      <p ref={bioRef}>
        Master of ReactJS, crafting stunning web application interfaces with a
        focus on UI design and animation. Expertise in React, Redux, Tailwind,
        and GSAP elevates every project to new heights. Passionate about
        delivering breathtaking, pixel-perfect results. Always on the cutting
        edge, staying ahead of the latest web development trends.
      </p>
    </div>
  );
};

export default Bio;
