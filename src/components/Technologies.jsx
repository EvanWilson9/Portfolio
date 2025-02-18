import React from 'react'

export default function Technologies() {
  return (
    <section className='technologies-section'>
      <div className="technology-wrapper">
      <h2 className='technologies-title'>TECHNOLOGIES</h2>
      <div className='technologies'>
      <div className='technology-category'>
          <h3 className='technology-category-title'>Languages</h3>
          <div className='technology-category-items'>
            <p className='technology'><img className='technology-icon' src="/TechnologyIcons/javascript.png"/>Javascript</p>
            <p className='technology'><img className='technology-icon' src="/TechnologyIcons/python.png"/>Python</p>
            <p className='technology'><img className='technology-icon' src="/TechnologyIcons/java.png"/>Java</p>
            <p className='technology'><img className='technology-icon' src="/TechnologyIcons/kotlin.png"/>Kotlin</p>
          </div>
        </div>
        <div className='technology-category'>
          <h3 className='technology-category-title'>Backend</h3>
          <div className='technology-category-items'>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/firebase.png"/>Firebase</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/postgresql.png"/>PostgreSQL</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/node.png"/>Node</p>
          </div>
        </div>
        <div className='technology-category'>
          <h3 className='technology-category-title'>Frontend</h3>
          <div className='technology-category-items'>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/react.png"/>React</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/html.png"/>HTML</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/css.png"/>CSS</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/javascript.png"/>Javascript</p>
          </div>
        </div>
        <div className='technology-category'>
          <h3 className='technology-category-title'>Tools</h3>
          <div className='technology-category-items'>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/vscode.png"/>VS Code</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/github.png"/>GitHub</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/npm.png"/>NPM</p>
          <p className='technology'><img className='technology-icon' src="/TechnologyIcons/canva.png"/>Canva</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
