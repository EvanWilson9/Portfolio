import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className='contact-section'>
      <div className="contact-wrapper">
        <h2 className='title center'>Contact</h2>
        <div className='desc center'>Do you have any questions or would you like to request my web services?
          Feel free to contact me, and I'll be happy to assist you.</div>
        <Link to='/contact'><button className='contact-btn button'>CONTACT ME</button></Link>
      </div>
    </section>
  )
}
