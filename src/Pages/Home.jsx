import React from 'react'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
