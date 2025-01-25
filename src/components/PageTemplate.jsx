import React from 'react'

import EmailIcon from '../FooterIcons/EmailIcon'
import Facebook from '../FooterIcons/Facebook'
import Instagram from '../FooterIcons/Instagram'
import LinkedIn from '../FooterIcons/LinkedIn'
import GitHub from '../FooterIcons/GitHub'

export default function PageTemplate(props) {
  return (
    <section className='ph-section'>
    <div className="ph-wrapper">
            <img className='hero-img' src="/images/hero.png"/>
            <h2 className='hero-title'>{props.title}</h2>
            <div className='hero-icons'>
              <EmailIcon width="25px" height="25px"/> 
              <Facebook width="25px" height="25px"/> 
              <Instagram width="25px" height="25px"/> 
              <LinkedIn width="25px" height="25px"/> 
              <GitHub width="25px" height="25px"/> 
            </div>
            <div className='desc center'>{props.desc}</div>
            <div className='button-container'>
              <a href='#next'><button className='button' role='button'>{props.button}</button></a>
              <button className='button2' role='button'>My Services</button>
            </div>
          </div>
        </section>
  )
}
