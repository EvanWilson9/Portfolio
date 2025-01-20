import React from 'react'

export default function Services() {
  return (
    <section className='services-section'>
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
          <button className='button2'>MY RESUME</button>
        </div>
        </div>
      </div>
    </section>
  )
}
