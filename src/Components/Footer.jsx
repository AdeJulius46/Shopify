import React from 'react'
import "../App.css"
import {AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      <div className='' >
        <div className=' row footer '>
        <div className='col-12 jhe p-4' >
          <div className='row d-flex justify-content-space-between'>
            <div className='col-lg-2 col-sm-12 p-3 '>
              <div className='fs-1 mx-2 text-light sho' >Shopinet</div>
              <div className='fs-2 text-light mx-2'  ><AiOutlineTwitter/> <AiFillFacebook/> <AiFillInstagram /> </div>

            </div>
            <div className='col-lg-5 col-sm-12  mt-4  mx-auto '>
              <p className='mt-4 '>uhuagy</p>
              <input  
              className='w-50 p-2 outline-0 rounded-1 border-0'
              />
             <button className='ms-3 p-2 rounded-1 jh text-light ' >Submit</button>
             <label className='p-2' > hewugydtefedewfytfwytfyf</label>
               
             
             
            </div>
            <div className='col-lg-3 col-sm-12 p-2 '>
              <div className='text-start mt-4'>
                <div>jkwdhuygwywgdytwfvjuegt</div>
                <div>jkwdhuygwywgdytwfvjuegt</div>
                <div>jkwdhuygwywgdytwfvjuegt</div>
                {/* <div>juegjuegceuhuyegyegcytegfcyewftyeftwyefdyetwftt</div>
                <div>juejuegceuhuyegyegcytegfcyewftyeftwyefdyetwftgt</div> */}
              </div>
            </div>
          </div>
        </div>

      </div>

        <div className='col-12' >
                <div className='bg-dark text-light text-end'>
                  <div className='p-3'>

                  Copy right 2023
                  </div>
                </div>
        </div>

        </div>
    </div>
  )
}

export default Footer