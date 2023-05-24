import React from 'react'
import Nave from './Nave'
import Home from '../Pages/Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
const Layout = () => {
  return (
    <div className='layout'>
      <Nave />
      <div className='pro' >

      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout