import React from 'react'


import Banner from '../Banner';
import Group  from '../Group';
import Projects from '../Projects';
import Logo from '../Logo';
import Navbar from '../Navbar';


function Home() {
  return (
 <div>
      <Navbar />
      <Banner />
      <Logo />
      <Projects/>
      <Group/>
 </div>
  

  )
}

export default Home

