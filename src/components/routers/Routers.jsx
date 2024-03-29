import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../pages/Gallery'
import Projects from '../pages/Projects'
import Certifications from '../pages/Certifications'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'

function Routers () {
  return (
    <Routes>
      <Route path='/main' element={<Home />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/certifications' element={<Certifications/>} />

      <Route path='/contacts' element={<Contacts />} />


    </Routes>
  )
}

export default Routers;
