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
        <a className='social-link' href="mailto:evanpwilson1@gmail.com" target='_blank'><EmailIcon width="25px" height="25px"/></a>
        <a className='social-link' href='https://www.facebook.com/evan.wilson.14019/' target='_blank'><Facebook width="25px" height="25px"/></a>
        <a className='social-link' href='https://www.instagram.com/lefty_evan9/' target='_blank'><Instagram width="25px" height="25px"/></a>
        <a className='social-link' href='https://www.linkedin.com/in/evan-wilson-2201422a4/' target='_blank'><LinkedIn width="25px" height="25px"/></a> 
        <a className='social-link' href='https://github.com/EvanWilson9' target='_blank'><GitHub width="25px" height="25px"/></a> 
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
