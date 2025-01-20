import React from 'react'

import ProjectsP from '../components/ProjectsP'
import ProjectsHero from '../components/ProjectsHero'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ProjectsPage() {

  // window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className='pp-section'>
          <ProjectsHero/>
          <ProjectsP/>
          <Contact/>
          <Footer/>
    </section>
  )
}
