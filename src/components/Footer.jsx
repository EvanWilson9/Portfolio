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



export default function Footer() {
  return (
    <section className='footer-section'>
      <div className="footer-wrapper">
        <div className='footer-category one'>
          <div className='footer-title'>SOCIALS</div>
          <div className='footer-category-items'>
            <div className='footer-item'><Facebook width="20px" height="20px"/> Facebook</div>
            <div className='footer-item'><Instagram width="20px" height="20px"/> Instagram</div>
            <div className='footer-item'><LinkedIn width="20px" height="20px"/> LinkedIn</div>
            <div className='footer-item'><GitHub width="20px" height="20px"/> GitHub</div>
          </div>
        </div>
        <div className='footer-category two'>
          <div className='footer-title'>LINKS</div>
          <div className='footer-category-items'>
            <div className='footer-item'><HomeIcon/> Home</div>
            <div className='footer-item'><ProjectsIcon/> Projects</div>
            <div className='footer-item'><ServicesIcon/> Services</div>
            <div className='footer-item'><ContactIcon/> Contact</div>
          </div>
        </div>
        <div className='footer-category three'>
          <div className='footer-title'>CONTACT</div>
          <div className='footer-category-items'>
            <div className='footer-item'><PhoneIcon /> 317 869 7832</div>
            <div className='footer-item'><EmailIcon width="20px" height="20px"/> evanpwilson1@gmail.com</div>
            <div className='footer-item'><LocationIcon/> Indianapols, Indiana</div>
          </div>
        </div>
      </div>
    </section>
  )
}
