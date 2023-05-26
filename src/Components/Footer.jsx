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
            <div className='col-2 p-3'>
              <div className='fs-1 mx-3 text-light  sho' >Shopinet</div>

              <div className='fs-2 text-light mx-3'  ><AiOutlineTwitter/> <AiFillFacebook/> <AiFillInstagram /> </div>

            </div>
            <div className='col-5  mt-4 mx-auto'>
              <p className='mt-4'>uhuagy</p>
              <input  
              className='w-50 p-2 outline-0 rounded-1 border-0'
              />
             <button className='ms-3 p-2 rounded-1 jh ' >Submit</button>
             <label className='p-2' > hewugydtefedewfytfwytfyf</label>
               
             
             
            </div>
            <div className='col-2 text-center p-2'>
              <div className='text-center p-1'>
                <div>juegt</div>
                <div>juegt</div>
                <div>juegt</div>
              </div>
            </div>
          </div>
        </div>

      </div>

        <div className='col-12' >
                <div className='text-end bg-dark text-light '>
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