import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState)
 }

  return (
    <header className='mobile'> 
    <img className='logo' src="/images/portfolio-logo.jpg"/>
    <nav className={`navbar ${isOpen ? 'opened' : 'closed'}`}>
      <Link onClick={toggleNavbar} to="/" className='link'>Home</Link>
      <div className='link'>About</div>
      <Link onClick={toggleNavbar} to="/projects" className='link'>Projects</Link>
      <div className='link'>Services</div>
      <div className='link'>Contact</div>

    </nav>
    {!isOpen ? 
                (
                <div onClick={toggleNavbar} class="menu-btn">
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                </div>
                ) : 
                (
                <div onClick={toggleNavbar} class="menu-btn close">
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                </div>               
                )
                }
    </header>
  )
}
