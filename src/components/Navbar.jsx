import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState)
 }

  return (
    <>
    <div className="laptop-wrapper"> 
    <header className='laptop'>
      <Link to="/"><img className='logo' src="/images/portfolio-logo.jpg"/></Link>
      <nav>
        <Link style={{textDecoration:'none'}} to="/" className='link'>Home</Link>
        <Link style={{textDecoration:'none'}} to="/about" className='link'>About</Link>
        <Link style={{textDecoration:'none'}} to="/projects" className='link'>Projects</Link>
        <Link style={{textDecoration:'none'}} to="/services" className='link'>Services</Link>
        <Link style={{textDecoration:'none'}} to="/contact" className='link'>Contact</Link>

      </nav>
    </header>
    </div>
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
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/about" className='link'>About</Link>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/projects" className='link'>Projects</Link>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/services" className='link'>Services</Link>
      <Link style={{textDecoration:'none'}} onClick={toggleNavbar} to="/contact" className='link'>Contact</Link>

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
    </>
  )
}
