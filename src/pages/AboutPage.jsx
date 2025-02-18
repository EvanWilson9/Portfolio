import React from 'react'
import PageTemplate from '../components/PageTemplate'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function AboutPage() {

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
    <PageTemplate 
    title="About Me"
    button1="More About Me"
    button2="My Services"
    button2Link="/services"
    desc="Hi, I’m Evan Wilson, a web developer passionate about creating sleek websites and apps. Let’s bring your ideas to life!"
    />
      <section id="next" className='about-section'>
        <div className="about-wrapper">
          <img className='services-img-laptop' src="/images/about.jpg"/>
        <div className='about-content'>
          <h2 className='title projects'>My Story</h2>
          <p>
            Hi there! I’m Evan Wilson, a 19-year-old web developer from Indianapolis, Indiana, and a Computer Science major at Ball State University. I have concentrations in Web & Mobile Development and Machine Learning & Data Analytics.
            My passion lies in creating — whether it's designing sleek, functional websites or building innovative applications.
            I discovered my love for web development through a mix of curiosity and creativity, and it’s now the driving force behind everything I do.
            This website is not just a portfolio but also a gateway to the services I offer as a web developer. 
            Whether you're looking to bring a bold idea to life or need a polished online presence, I’m here to help. 
            Let’s create something amazing together!
          </p>
        </div>
        </div>
      </section>
      <Contact/>
      <Footer/>
    </>
  )
}
