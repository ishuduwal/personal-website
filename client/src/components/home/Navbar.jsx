import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme("light-theme")
    }
  }
  
  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  }
  const closeMenu = () => {
    setShowMenu(false);
  }
  return (
    <>
      <nav>
        <span><Link className='link' to='/' style={{ textDecoration: 'none' }}>ishuduwal</Link></span>
        <ul className={`menu ${showMenu ? 'show':''}`}>
          <li onClick={closeMenu}><Link className='link' to='/project' style={{ textDecoration: 'none' }}>Project</Link></li>
          <li onClick={closeMenu}><Link className='link' to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
          <li onClick={closeMenu}>
            <div onClick={() => toggleTheme()}>
              {theme === 'light-theme'?(<i class="fa-solid fa-moon"></i>):(<i className="fa-solid fa-sun"></i>)}
            </div>
          </li>
        </ul>
        <div id='hamburger' onClick={handleHamburgerClick}>
          <i class={`fa-solid ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>
    </>
  )
}
