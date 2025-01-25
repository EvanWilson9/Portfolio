import React from 'react'

import Instagram from '../FooterIcons/Instagram'
import Facebook from '../FooterIcons/Facebook'
import LinkedIn from '../FooterIcons/LinkedIn'
import GitHub from '../FooterIcons/GitHub'

import HomeIcon from '../FooterIcons/HomeIcon'
import ProjectsIcon from '../FooterIcons/ProjectsIcon'
import ServicesIcon from '../FooterIcons/ServicesIcon'
import ContactIcon from '../FooterIcons/ContactIcon'

import PhoneIcon from '../FooterIcons/PhoneIcon'
import EmailIcon from '../FooterIcons/EmailIcon'
import LocationIcon from '../FooterIcons/LocationIcon'

import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <section className='footer-section'>
      <div className="footer-wrapper">
        <div className='footer-category one'>
          <div className='footer-title'>SOCIALS</div>
          <div className='footer-category-items'>
            <a className='link' href='https://www.facebook.com/evan.wilson.14019/' target='_blank'><div className='footer-item'><Facebook width="20px" height="20px"/> Facebook</div></a>
            <a className='link' href='https://www.instagram.com/lefty_evan9/' target='_blank'><div className='footer-item'><Instagram width="20px" height="20px"/> Instagram</div></a>
            <a className='link' href='https://www.linkedin.com/in/evan-wilson-2201422a4/' target='_blank'><div className='footer-item'><LinkedIn width="20px" height="20px"/> LinkedIn</div></a>
            <a className='link' href='https://github.com/EvanWilson9' target='_blank'><div className='footer-item'><GitHub width="20px" height="20px"/> GitHub</div></a>
          </div>
        </div>
        <div className='footer-category two'>
          <div className='footer-title'>LINKS</div>
          <div className='footer-category-items'>
            <Link className='link' to="/"><div className='footer-item'><HomeIcon/> Home</div></Link>
            <Link className='link' to="/projects"><div className='footer-item'><ProjectsIcon/> Projects</div></Link>
            <Link className='link' to="/"><div className='footer-item'><ServicesIcon/> Services</div></Link>
            <Link className='link' to="/contact"><div className='footer-item'><ContactIcon/> Contact</div></Link>
          </div>
        </div>
        <div className='footer-category three'>
          <div className='footer-title'>CONTACT</div>
          <div className='footer-category-items'>
            <div className='footer-item'><PhoneIcon /> 317 869 7832</div>
            <a className='no-underline link' href="mailto:evanpwilson1@gmail.com"><div className='footer-item'><EmailIcon width="20px" height="20px"/> evanpwilson1@gmail.com</div></a>
            <div className='footer-item'><LocationIcon/> Indianapols, Indiana</div>
          </div>
        </div>
      </div>
    </section>
  )
}
