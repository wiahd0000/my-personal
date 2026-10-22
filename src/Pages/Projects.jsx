import React from 'react'
import profile from '../Images/profile-one.jpeg';

function Projects() {
  return (
   <>
   <div className="projects">
    <div>
      <p className='my-work'><span >My-Work</span></p>
    <h3 className='project-h3'>Projects</h3>
    <p className='description'>Explore a collection of projects I've built, showcasing my skills in web development, UI/UX design, graphic design, and problem-solving. Each project reflects my creativity, technical expertise, and passion for building practical digital solutions.</p>
    </div>

<div className="project-sub-container">
  <div className="project-work">
<img src={profile} alt="" />
  <h5>website</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<button className='btn-project'><a href="#"><i className="fa-solid fa-arrow-right"></i>view my project</a></button>
</div>

{/* card-2 */}
  <div className="project-work">
<img src={profile} alt="" />
  <h5>website</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<button className='btn-project'><a href="#"><i className="fa-solid fa-arrow-right"></i>view my project</a></button>
</div>

{/* card-3 */}

  <div className="project-work">
<img src={profile} alt="" />
  <h5>website</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<button className='btn-project'><a href="#"><i className="fa-solid fa-arrow-right"></i>view my project</a></button>
</div>
</div>

   </div>
   </>
  )
};

export default Projects;