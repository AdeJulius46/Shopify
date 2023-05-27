import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css"
import pic from "../assets/Hear.png"
import gow from "../assets/gow.png"
import gowe from "../assets/gowe.png"
import gre from "../assets/gre.png"
import gree from "../assets/gree.png"
import age from "../assets/age.png"
import agee from "../assets/agee.png"
import age1 from "../assets/age1.png"
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
const Test = () => {
  return (
    <div>
    <div className='row-lg-12 row-sm-12 pr p-2'>
      <div className='col-lg-10 col-sm-2' >
            Featured Product
      </div>
      <div className=' col-lg-1 col-sm-2 see'>
          See all
      </div>
    </div>

    <CardGroup className='mt-3 me-3 '>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={agee} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age1} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
</CardGroup>

<div className='row-lg-12 row-sm-12 pr p-2'>
      <div className='col-lg-10 col-sm-2' >
            Catergories
      </div>
      <div className=' col-lg-1 col-sm-2 see'>
          See all
      </div>
    </div>
    <CardGroup className='mt-3 me-3 border-0'>
  <Card className='m-3 me-2 border-0'>
    <Card.Img className='cur' src={gow} />
    <Card.Body className='p-2'>
    
      <Card.Title  className='mx-3 text-center mt-2' >Fashion</Card.Title>
      
    </Card.Body>
  </Card>
  <Card className='m-3 me-2 border-0'>
    <Card.Img className='cur' src={gre} />
    <Card.Body className='p-2'>
    
      <Card.Title  className='mx-3 text-center mt-2' >Electronics</Card.Title>
      
    </Card.Body>
  </Card >
  <Card className='m-3 me-2 border-0'>
    <Card.Img className='cur' src={gree} />
    <Card.Body className='p-2'>
    
      <Card.Title  className='mx-3 text-center mt-2' >Phones</Card.Title>
      
    </Card.Body>
  </Card>
  <Card className='m-3 me-2 border-0'>
    <Card.Img className='cur' src={gowe} />
    <Card.Body className='p-2'>
    
      <Card.Title  className=' mt-2 mx-3 text-center' >Computing</Card.Title>
      
    </Card.Body>
  </Card>
  </CardGroup>



<div className='row-lg-12 row-sm-12 pr p-2'>
      <div className='col-lg-10 col-sm-2' >
            Top deals 
      </div>
      <div className=' col-lg-1 col-sm-2 see'>
          See all
      </div>
    </div>
    
    <CardGroup className='mt-3 me-3 '>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={agee} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age1} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
</CardGroup>



<div className='row-lg-12 row-sm-12 pr p-2'>
      <div className='col-lg-10 col-sm-2' >
            Best Prices 
      </div>
      <div className=' col-lg-1 col-sm-2 see'>
          See all
      </div>
    </div>

    
    <CardGroup className='mt-3 me-3 '>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={agee} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age1} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={age} />
    <Card.Body className='p-2'>
      <p className='mx-3' >Portable Pu Leather bag</p>
      <Card.Title  className='mx-3' >$2400</Card.Title>
      <div className='d-flex flex-row justify-content-between mx-3 mt-3 '>
      <span > <span classsName="star "> <AiFillStar  className='star fs-4' /> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/> <AiFillStar  className='star fs-4'/>  <AiFillStar  className='star fs-4'/></span> 523</span>
      <span className='align-self-end fs-5 '><AiOutlineHeart/></span>
      </div>
      <div className='text-center p-3'>
        <button className='mx-auto p-2 w-100  suc border-0 rounded-3 success text-light mt-4'> Add to cart </button>
      </div>
    </Card.Body>
  </Card>
</CardGroup>


    

</div>




  )
}

export default Test