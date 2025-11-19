import React from 'react'

import ProjectItem from './ProjectItem';

export default function ProjectsP() {

  const projects = [
    {id: 1, img:"/projectImages/synergy360.png", page:"/synergy360", title:"Synergy 360", desc:"This is a financial company website that is designed to advertise it's services."},
    { id: 2, img:"/projectImages/gametimenetwork.png", page:"/gametimenetwork", title:"Game Time Network", desc:"This is a sports podcast website that showcases episodes, highlights hosts, and provides easy access to recent content." },
    {id: 3, img:"/projectImages/standardbarbecue.png", page:"/standardbarbecue", title:"Standard Barbecue", desc:"This is a barbecue sauce company website. It is designed to advertise and drive sales."},
    {id: 4, img:"/projectImages/mindfulconnections.png", page:"/mindfulconnections", title:"Mindful Connections", desc:"This is a mental health services wesbite that is designed to advertise their services."},
    {id: 5, img:"/projectImages/everythingpasta.png", page:"/everythingpasta", title:"Everything Pasta", desc:"This is a pasta recipe/blog website that allows the user to browse pasta dishes."},
    {id: 6, img:"/projectImages/chessguessr.png", page:"/chessguessr", title:"Chess Guessr", desc:"This was a personal projet where the user has to guess what color square the coordinate is. "},
  ];

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
