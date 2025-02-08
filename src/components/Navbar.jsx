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
    <Link 
    onClick={()=>{
      if(isOpen){
        toggleNavbar();
      }
    }}
       to="/"><img className='logo' src="/images/portfolio-logo.jpg"/></Link>
    <nav className={`navbar ${isOpen ? 'opened' : 'closed'}`}>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/" className='link'>Home</Link>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/about"><div className='link'>About</div></Link>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/projects" className='link'>Projects</Link>
      <div className='link'>Services</div>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/contact"><div className='link'>Contact</div></Link>

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
