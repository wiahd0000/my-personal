import React from 'react'

function Skills() {
  return (
   <>
  <div className="skill-container">
    <h4 className='skill'>Skills</h4>
    <p className='skill-text'>I combine technology and creativity to build modern digital solutions. My expertise includes responsive web development, professional graphic design, video editing, and AI-powered workflow automation. I am passionate about creating user-friendly websites, engaging visual content, and intelligent systems that solve real-world problems. Skills:  React.js, HTML, CSS, JavaScript, CorelDRAW, Photoshop, Video Editing, n8n Automation, MySQL, and API Integration.</p>

    <div className="skill-card">
      <div className="card-one">
        <button className='btn-skill'><span className='html'>HTML</span><i className="fa-brands fa-html5"></i></button>
      </div>
{/* card-two */}
       <div className="card-one">
        <button className='btn-skill'><span className='html'>CSS</span><i className="fa-brands fa-css3-alt" id='css'></i></button>
      </div>

      {/* card-three */}
      <div className="card-one">
        <button className='btn-skill'><span className='html'>JavaScript</span><i className="fa-brands fa-js" id='javascript'></i></button>
      </div>

      {/* card-four */}
      <div className="card-one">
        <button className='btn-skill'><span className='html'>Reactjs</span>< i  className="fa-brands fa-react" id='react'></i></button>
      </div>
      
    </div>


  </div>
   
   </>
  )
}

export default Skills