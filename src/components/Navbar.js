import { HashLink } from "react-router-hash-link";

const Navbar = ({ footerNav }) => {
  return (
    <nav
      className={`navbar container mx-auto flex justify-between ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className='logo'>
        <HashLink smooth to='#hero' className='link-item'>
          {footerNav ? "Go to top" : "Masud Rana Shawon"}
        </HashLink>
      </div>
      <ul className='menus flex flex-col gap-3'>
        <li>
          <HashLink smooth to='#projects' className='link-item'>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#skills' className='link-item'>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#about' className='link-item'>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#contact' className='link-item'>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href='https://docs.google.com/document/d/1Y8kb59-ak90Cdj2IJn5TbzC9OdF4VjTzo0t0ND90-_s/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='link-item'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
