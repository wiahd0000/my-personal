import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from "./Pages/Home"
import Skills from './Pages/Skills'
import Testimony from './Pages/Testimony'
import Contact from './Pages/Contact'

function App() {
  return (
   <>
   <div>
    <Navbar/>
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/testimony' element={<Testimony/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </div>

   </>
  )
};

export default App;