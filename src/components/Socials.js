import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/masudranashawon786",
  },
  { id: 2, title: "Tweetter", url: "https://twitter.com/MasudRanaShawo1" },
  { id: 3, title: "GitHub", url: "https://github.com/masudranashawon" },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/masudranashawon1/",
  },
  {
    id: 5,
    title: "Instagram",
    url: "https://instagram.com/masudranashawon786",
  },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);

  return (
    <div
      className='socials bg-black/30 p-5 flex gap-5 uppercase text-sm fixed left-10 top-[75%] backdrop-blur-xl origin-left -rotate-90 z-[200] text-white/30'
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target='_blank'
          rel='noreferrer'
          className='hover:text-cyan-400 duration-500'
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
