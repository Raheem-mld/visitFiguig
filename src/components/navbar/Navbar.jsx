import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import img1 from '../../assets/logo/logo.png'

import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <Link to="/" className='Title'>
        <img src={img1} alt="" />
      </Link>

      <nav ref={navRef}>
        <ul className='list-navbar'>
          <Link to="/do" className="link-without-underline"><li>See & Do</li></Link>
          <Link to="/understand" className="link-without-underline"><li>Plan Your Trip</li></Link>
          <Link to="/hotels" className="link-without-underline"> <li>Hostels & Guest Houses</li></Link>
          <Link to="/eat" className="link-without-underline"><li>Experiences</li></Link>
          
        </ul>

  
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>


      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>

      <Link to="/Signup" className="link-without-underline">
      <PersonOutlineIcon fontSize="large" style={{color: 'black'}}/>

      </Link>

    </header>
  );
}

export default Navbar;