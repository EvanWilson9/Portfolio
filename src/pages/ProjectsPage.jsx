import React from 'react'

import ProjectsP from '../components/ProjectsP'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import PageTemplate from '../components/PageTemplate'

export default function ProjectsPage() {

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className='pp-section'>
          <PageTemplate
          title="Projects"
          button1="View Projects"
          button2="My Services"
          button2Link="/services"
          desc="Example projects such as business websites, sample websites, and personal projects. Web design, web development, logo design."
          />
          <ProjectsP/>
          <Contact/>
          <Footer/>
    </section>
  )
}
