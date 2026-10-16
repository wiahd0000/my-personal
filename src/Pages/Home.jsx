import React from 'react'
import profile from '../Images/profile-one.jpeg'

function Home() {
  return (
   <>
   <div className="home-container">
   <div className="home-left">
    <p className="home-p">
     <span className='dot'>.</span> Ditital Service & Solutions
    </p>
    <h1 className='home-h1'>Digital <br />Services <br /> <span className='home-made'>made simple</span></h1>
    <p className='home-left2'>From online registeratons and docmenttation to graphics, printing, research ad web develpment-Paragon Concepts helps you handle important digital tasks with ease. </p>
    <div className="btn-left">
   <span className='btn-left-1'><a href="https://www.facebook.com/share/18vWuC9SYd/"><i className="fa-brands fa-facebook"></i></a></span>

    <span className='btn-left-2'> <a href="https://wa.me/qr/HRFSUDWAJUVQD1"><i className="fa-brands fa-whatsapp"></i></a></span>
    </div>
   </div>

   {/* home right side */}
   <div className="home-right">
    <img src= {profile} alt="" />

   </div>
   </div>
   </>
  )
};

export default Home;