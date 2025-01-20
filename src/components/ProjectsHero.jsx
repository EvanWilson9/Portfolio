import React from 'react'

import EmailIcon from '../FooterIcons/EmailIcon'
import Facebook from '../FooterIcons/Facebook'
import Instagram from '../FooterIcons/Instagram'
import LinkedIn from '../FooterIcons/LinkedIn'
import GitHub from '../FooterIcons/GitHub'

export default function ProjectsHero() {
  return (
    <section className='ph-section'>
    <div className="ph-wrapper">
            <img className='hero-img' src="/images/hero.png"/>
            <h2 className='hero-title'>Projects</h2>
            <div className='hero-icons'>
              <EmailIcon width="25px" height="25px"/> 
              <Facebook width="25px" height="25px"/> 
              <Instagram width="25px" height="25px"/> 
              <LinkedIn width="25px" height="25px"/> 
              <GitHub width="25px" height="25px"/> 
            </div>
            <div className='desc center'>Example projects such as business websites, sample websites, and personal projects. Web design, web development, logo design.</div>
            <div className='button-container'>
              <button className='button' role='button'>View Projects</button>
              <button className='button2' role='button'>My Services</button>
            </div>
          </div>
        </section>
  )
}
