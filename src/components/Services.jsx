import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <section id="services" className='services-section'>
      <div className="services-wrapper">
        <h2 className='center title'>SERVICES</h2>
        <img src="/images/services.png"/>
        <div className='center desc special'>Web Designer | Web Developer</div>
        <div className='services-bottom'>
        <div className='center desc'>As a freelancer specialized in web design and web development,
             I create digital solutions with a focus on your needs. 
             I create business websites that increases your business' 
             efficiency and/or attract more users, ultimately generating
            more revenue.</div>
        <div className='button-container'>
          <Link to="/services"><button className='button'>My Services</button></Link>
          <a href='https://docs.google.com/document/d/e/2PACX-1vTBq9yLh_s4O4wLLygzNkjEuKNgPaJRKYBiGaSCjHMo4Q6qSF8Wnx63ZHIoZd7hWAeaPXNuBSDi1_1p/pub'><button className='button2'>My Resume</button></a>
        </div>
        </div>
      </div>
    </section>
  )
}
