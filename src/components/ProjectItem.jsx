import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectItem(props) {
  return (
    <div className='project'>
        <img alt="" className='projectp-img' src={props.img}/>
        <h3>{props.title}</h3>
        <p className='desc'>{props.desc}</p>
        <Link to={props.page} className='link'><p className='read-more'>READ MORE &rarr;</p></Link>
      </div>
  )
}
