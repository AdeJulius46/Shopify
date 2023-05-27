import React from 'react'
import "../App.css"
import Test from './Test';
import Wom from './Wom'

const Women = () => {
  return (
  <div>
    <div>
    <div className='row-lg-12 row-sm-12 bg-white text-dark pre p-2'>
      <div className='col-lg-5 col-sm-2 fs-4' >
            Women's Wear
      </div>
      <div className=' col-lg-5 col-sm-2 see'>
          Sortby:
      </div>
    </div>
    </div>
    <div>
  <Wom />
    </div>
</div>

  )
}

export default Women