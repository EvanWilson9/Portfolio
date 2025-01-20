import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <section className='home-section'>
        <Hero />
        <Technologies />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </section>
    </>
  )
}
