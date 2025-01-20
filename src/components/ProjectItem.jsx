import React from 'react'

export default function ProjectItem(props) {
  return (
    <div className='project'>
        <img className='projectp-img' src={props.img}/>
        <h3>{props.title}</h3>
        <p className='desc'>{props.desc}</p>
        <p className='read-more'>READ MORE &rarr;</p>
      </div>
  )
}
