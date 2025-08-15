import React from 'react'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
