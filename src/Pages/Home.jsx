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
      
      {/* Each section must have matching ID */}
      <section id="Hero" className="section">
        <Hero/>
      </section>
      
      <section id="About" className="section">
        <About/>
      </section>
      
      <section id="Projects" className="section">
        <Projects/>
      </section>
      
      <section id="Contact" className="section">  {/* Note: Changed from "Contacts" */}
        <Contact/>
      </section>
    </div>
  )
}

export default Home