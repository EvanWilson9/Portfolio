import React from 'react'

export default function Expertise() {
   
    const ExpertiseItem = (props) => {
        return(
            <div className='expertise-card'>
                <div id={props.svg}></div>
                <h4 className='card-title'>{props.title}</h4>
                <div className='desc gray'>{props.desc}</div>
            </div>
        )
    }

  return (
    <section className='expertise-section'>
        <div className="expertise-wrapper">
            <h2>My Expertise</h2>
            <div className='expertise-container'>
                <ExpertiseItem
                title="Web Design"
                desc="Bringing your vision to life with modern, 
                aesthetically driven web design. I create sleek,
                responsive layouts with thoughtful typography, 
                cohesive color palettes, and intuitive user experiences—all
                tailored to showcase your brand and captivate your audience."
                svg="webdesign-svg"
                />
                <ExpertiseItem
                title="Web Development"
                desc="Building fast, reliable websites with clean, maintainable code.
                I focus on responsive development, seamless functionality, and optimized
                performance to deliver a web experience that’s as powerful as it is user-friendly."
                svg="webdev-svg"
                />
            </div>
        </div>
    </section>
  )
}