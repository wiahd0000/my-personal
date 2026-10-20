import React from 'react';
import profile from '../Images/profile-one.jpeg';
import resume from '../assets/resume.pdf'

function About() {
  return (
    <>
    <div className="about-container">
   
      <div className="about-left">
        <span className='line'>_____</span>
        <h2 className='left-h2' >About-Me</h2>
        <p className='left-p' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vero fuga iusto, culpa eveniet fugiat. Recusandae non laudantium esse cumque, distinctio laboriosam. Labore sequi eligendi, autem recusandae totam porro, fugiat eum, incidunt iste repellat excepturi!</p>

        

         <div className="btn-left">
       
         <div>
          <button btn-contact-me>
          <a href="#">Contact-Me</a>
         </button>

         </div>
         <div>
          <button className='btn-cv'>
          <a href= {resume} download='resume'>Download-M</a>
          </button> </div> 
      </div>
      </div>
      

      <div className="right">
        <img src= {profile} alt="" />
        {/* <button>cv-download</button> */}
      </div>

      
    </div>
    </>
  )
};

export default About; 