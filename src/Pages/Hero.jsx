import React from 'react'
import "../App.css" 
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='row heroo'>

        <div className='col-lg-3 col-sm-12  ' >
          <div className='right'>

        <p className=""  > <NavLink to='women' className={({isActive}) => isActive ?"yellow":'black'}> Women'Fashion</NavLink>  </p>
        <p className=""  > <NavLink to='men' className={({isActive}) => isActive ?"yellow":'black'}>Men'fashion</NavLink>  </p>
        <p className=""  > <NavLink to='kids' className={({isActive}) => isActive ?"yellow":'black'}>Kids'fashion</NavLink>  </p>
        <p className=""  > <NavLink to='tv' className={({isActive}) => isActive ?"yellow":'black'}> Tv & video</NavLink>  </p>
        <p className=""  > <NavLink to='audio' className={({isActive}) => isActive ?"yellow":'black'}> Home audio</NavLink>  </p>
        <p className=""  > <NavLink to='camera' className={({isActive}) => isActive ?"yellow":'black'}> Camera and photo</NavLink>  </p>
        <p className=""  > <NavLink to='gen' className={({isActive}) => isActive ?"yellow":'black'}> Generators</NavLink>  </p>
        <p className=""  > <NavLink to='mobile' className={({isActive}) => isActive ?"yellow":'black'}> Mobile phones</NavLink>  </p>
        <p className=""  > <NavLink to='view' className={({isActive}) => isActive ?"yellow":'black'}> View all</NavLink>  </p>
          </div>
        </div>
        <div className='col-lg-9 col-sm-12' >
          <div  className='left p-3'>
            <div className='row left2' >
            <div className='col-6 get'>
            <h1 className='p-3'>Get 20% off our <br/> first order!</h1>
            <p className='p-3 fs-3' >Use code: <span><button className='btne'>First 20</button></span></p>
            <label className='exp fs-5' >
            Expires on 13th of May 2023
            </label>
            </div>
            <div className='col-3 get2'>
              jhelo
            </div>

            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Hero