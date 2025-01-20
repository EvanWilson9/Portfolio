import React from 'react'
import Facebook from '../FooterIcons/Facebook'
import Instagram from '../FooterIcons/Instagram'
import GitHub from '../FooterIcons/GitHub'
import LinkedIn from '../FooterIcons/LinkedIn'
import EmailIcon from '../FooterIcons/EmailIcon'

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className="hero-wrapper">
      <img className='hero-img' src="/images/hero.png"/>
      <h2 className='hero-title'>Evan Wilson</h2>
      <div className='hero-icons'>
        <EmailIcon width="25px" height="25px"/> 
        <Facebook width="25px" height="25px"/> 
        <Instagram width="25px" height="25px"/> 
        <LinkedIn width="25px" height="25px"/> 
        <GitHub width="25px" height="25px"/> 
      </div>
      <div className='desc center'>I empower your business with digital solutions,
         such as websites and web applications, with a focus on your specific needs,
          including web design and web development.</div>
      <div className='button-container'>
        <button className='button' role='button'>CONTACT</button>
        <button className='button2' role='button'>READ MORE</button>
      </div>
      </div>
    </section>
  )
}
