import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className='navbar container mx-auto flex justify-between mt-20 uppercase'>
      <div className='logo'>
        <HashLink smooth to='#home' className='link-item'>
          Masud Rana Shawon
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
            href='https://google.com'
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
