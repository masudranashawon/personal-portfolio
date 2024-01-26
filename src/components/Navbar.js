import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);
  const link8Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
    link8Ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav
      className={`navbar container mx-auto flex justify-between ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className='logo flex flex-col gap-5'>
        <HashLink smooth to='#home' className='link-item' ref={link1Ref}>
          {footerNav ? "Go to top" : "Masud Rana Shawon"}
        </HashLink>
        {footerNav && (
          <div className='bg-[#f7f7f7] p-3 rounded-lg' ref={link8Ref}>
            <a
              href='https://www.trustpilot.com/review/masudranashawon.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/78/Trustpilot_Logo_%282022%29.svg'
                alt='Trustpilot Logo'
                className='w-32'
              />
            </a>
          </div>
        )}
      </div>
      <ul className='menus flex flex-col gap-3 sm:w-[170px] w-[100px]'>
        <li className='self-start'>
          <HashLink smooth to='/' className='link-item' ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#projects' className='link-item' ref={link3Ref}>
            My Projects
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#skills' className='link-item' ref={link4Ref}>
            My Skills
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#about' className='link-item' ref={link5Ref}>
            About Me
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#contact' className='link-item' ref={link6Ref}>
            Contact Me
          </HashLink>
        </li>
        <li className='self-end'>
          <a
            href='https://drive.google.com/uc?export=download&id=1e1fFCCgcWwN4XP7Es6wAeUesUIrjZgFv'
            target='_blank'
            rel='noreferrer'
            className='link-item'
            ref={link7Ref}
          >
            My Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
