import React from 'react'

import ProjectItem from './ProjectItem';

export default function ProjectsP() {

  return (
    <section id="next" className='projectsp-section'>
      <div className="projectsp-wrapper">
        <div className="projectsp-container">
          <div className='projectsp-top'>
            <h2 className='title projects'>Projects</h2>
            <p className='projectsp desc'>Here are examples of websites and applications I’ve built for
               clients and personal projects. Each one highlights my ability to design and develop functional,
                responsive, and user-friendly experiences, whether for businesses or personal brands.</p>
          </div>
          <div className='projects-container'>
            <div className='solo-projects-wrapper'>
              {
                projects.map((item)=> {
                  return(
                    <ProjectItem
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    page={item.page}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
