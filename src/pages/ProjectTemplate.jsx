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
        <div className='project-text'>
          <h3 className='project-title'>{props.title}</h3>
          <p className='project-desc'>{props.desc}</p>
        </div>
        <a href={props.link} target='_blank'><button className='button2'>{props.button}</button></a>
      </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
