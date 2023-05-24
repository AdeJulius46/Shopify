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
          <div  className='left'>

            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
            <p>cegfter7fgekfeiugfeg</p>
           
          </div>
        </div>
    </div>
  )
}

export default Hero