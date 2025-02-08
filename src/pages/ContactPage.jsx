import React from 'react'

import ProjectsP from '../components/ProjectsP'
import PageTemplate from '../components/PageTemplate'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className='contactp-section'>
      <PageTemplate
      title="Contact"
      button1="To Contact Form"
      button2="My Services"
      button2Link="/services"
      desc="Questions/comments? Or are you here to request a free quote for a website or something else? Feel free to contact me via the form below. You'll get your answer on the same day."
      />
      <ContactForm/>
      <Footer/>
    </section>
  )
}
