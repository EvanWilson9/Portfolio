import React from 'react'

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
          <button className='button'>MY SERVICES</button>
          <a href='https://docs.google.com/document/d/e/2PACX-1vTBq9yLh_s4O4wLLygzNkjEuKNgPaJRKYBiGaSCjHMo4Q6qSF8Wnx63ZHIoZd7hWAeaPXNuBSDi1_1p/pub' target='_blank'><button className='button2'>MY RESUME</button></a>
        </div>
        </div>
      </div>
    </section>
  )
}
