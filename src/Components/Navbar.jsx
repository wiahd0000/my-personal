import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  useEffect(() => {
    const menus = document.getElementById('menus');
    const btn = document.getElementById('btnburger');

    if (!menus || !btn) return;

    const toggleMenu = () => {
      menus.classList.toggle('active');
    };

    btn.addEventListener('click', toggleMenu);

    return () => {
      btn.removeEventListener('click', toggleMenu);
    };
  }, []);
  return (
    <>
      <header className='container'>
        <h1>Wiah <span>-Tech</span></h1>
        <nav className='menus'>
          <ul id='menus'>
            <li className='home'>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/testimony"}>Testimony</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact-Us</Link>
            </li>

          </ul>

        </nav>
        <div>
          <span className='handburger' id='btnburger'><i className="fa-solid fa-bars"></i></span>

             <span className='btn-nav'> <a href="https://wa.me/qr/HRFSUDWAJUVQD1"><i className="fa-brands fa-whatsapp"></i></a>WhatsApp</span>
        </div>
      </header>
    </>
  )
}

export default Navbar;