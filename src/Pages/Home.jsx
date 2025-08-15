import React from 'react'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home
