import React from 'react'

import EmailIcon from '../FooterIcons/EmailIcon'
import Facebook from '../FooterIcons/Facebook'
import Instagram from '../FooterIcons/Instagram'
import LinkedIn from '../FooterIcons/LinkedIn'
import GitHub from '../FooterIcons/GitHub'
import { Link } from 'react-router-dom'

export default function PageTemplate(props) {
  return (
    <section className='ph-section'>
    <div className="ph-wrapper">
            <img className='hero-img' src="/images/hero.png"/>
            <h2 className='hero-title'>{props.title}</h2>
            <div className='hero-icons'>
              <a className='social-link' href="mailto:evanpwilson1@gmail.com" target='_blank'><EmailIcon width="25px" height="25px"/></a>
              <a className='social-link' href='https://www.facebook.com/evan.wilson.14019/' target='_blank'><Facebook width="25px" height="25px"/></a>
              <a className='social-link' href='https://www.instagram.com/lefty_evan9/' target='_blank'><Instagram width="25px" height="25px"/></a>
              <a className='social-link' href='https://www.linkedin.com/in/evan-wilson-2201422a4/' target='_blank'><LinkedIn width="25px" height="25px"/></a> 
              <a className='social-link' href='https://github.com/EvanWilson9' target='_blank'><GitHub width="25px" height="25px"/></a> 
            </div>
            <div className='desc center'>{props.desc}</div>
            <div className='button-container'>
              <a href='#next'><button className='button' role='button'>{props.button1}</button></a>
              <Link to={props.button2Link}><button className='button2' role='button'>{props.button2}</button></Link>
            </div>
          </div>
        </section>
  )
}
