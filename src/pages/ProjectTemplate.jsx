import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom';

export default function ProjectTemplate(props) {

window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
    <section className='project-container'>
      <div className='project-wrapper'>
        <img className='project-img' alt="" src={props.img}/>
        <div className="project-content">
          <h2 className='title projects'>{props.title}</h2>
          <p className='desc bigger'>{props.desc}</p>
        <a href={props.link} target='_blank'><button className='button2'>{props.button}</button></a>
      </div>
      </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
