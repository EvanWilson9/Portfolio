import React from 'react'

import ProjectItem from './ProjectItem';

export default function ProjectsP() {

  const projects = [
    {id: 1, img:"/images/everythingpasta.png", title:"Everything Pasta", desc:"This is a pasta recipe/blog website that allows the user to browse pasta dishes."},
    {id: 2, img:"/images/standardbarbecue.png", title:"Standard Barbecue", desc:"This is a barbecue sauce company website. It is designed to advertise and drive sales."},
    {id: 3, img:"/images/mindfulconnections.png", title:"Mindful Connections", desc:"This is a mental health services wesbite that is designed to advertise their services."},
    {id: 4, img:"/images/savannassweets.png", title:"Savanna's Sweets", desc:"This is a sample template of a cafe-style business. It is designed to drive attention and sales."},
    {id: 5, img:"/images/chessguessr.png", title:"Chess Guessr", desc:"This was a personal projet where the user has to guess what color square the coordinate is. "},
  ];

  return (
    <section className='projectsp-section'>
      <div className="projectsp-wrapper">
      <div className='projectsp-top'>
        <h2 className='title'>Projects</h2>
        <p className='desc'>Here are examples of websites and applications I've either developed for my clients or for myself.</p>
      </div>
      <div className='projects-container'>
        {
          projects.map((item)=> {
            return(
              <ProjectItem
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              />
            )
          })
        }
      </div>
      </div>
    </section>
  )
}

/*
This is a pasta recipe/blog website that allows the user to browse pasta dishes.
Users have the ability to sign up and log in, along with the ability to make a post in the blog section. 
There is also a feature that allows the user to search for specific dishes.
*/
