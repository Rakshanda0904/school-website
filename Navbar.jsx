import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu.png"

const Navbar = () => {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };


  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
      <li><Link to="Intro" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="About" smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to="Services" smooth={true} offset={-260} duration={500}>Services offered</Link></li>
          <li><Link to="Gallery" smooth={true} offset={-260} duration={500}>Gallery</Link></li>
          <li>
            <Link to="Contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link>
          </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
