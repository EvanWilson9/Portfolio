import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <section className='projects-section'>
      <div className="projects-wrapper">
        <h2>PROJECTS</h2>
        <p className='desc'>I’m excited to share some of the work I’ve had the privilege of creating.
           These projects reflect my skills, creativity, and commitment to delivering
            results that make a difference. Click the button to explore my portfolio and 
            see how I can bring value to your vision!</p>
        <Link to="/projects"><div><button className='button' role='button'>See Projects</button></div></Link>
      </div>
    </section>
  )
}
