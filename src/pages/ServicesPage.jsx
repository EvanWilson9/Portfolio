import React from 'react'
import PageTemplate from '../components/PageTemplate';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Expertise from '../components/Expertise';
import WhyMe from '../components/WhyMe';

export default function ServicesPage() {

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
    <PageTemplate 
      title="Services"
      button1="View Services"
      button2="See Projects"
      button2Link="/projects"
      desc="Creating clean, responsive websites that bring your ideas to life. Let’s build something great together!"
    />
    <section id="next" className='services-page-section'>
        <Expertise/>  
        <WhyMe/>  
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
