import React from 'react'
import Hero from './Hero'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Outlet/>
    </div>
  )
}

export default Home