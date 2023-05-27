import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css"

import age from "../assets/age.png"
import sig from "../assets/sig.png"
import sige from "../assets/sige.png"
import sigee from "../assets/sigee.png"
import si from "../assets/si.png"
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

const Wom = () => {
  return (
    <div>



<div>
  
    <CardGroup className='mt-3 me-3 '>
  <Card className='m-2 me-2 curvee'>
    <Card.Img className='curve ' src={sig} />
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
    <Card.Img className='curve ' src={sige} />
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
    <Card.Img className='curve ' src={sigee} />
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
    <Card.Img className='curve ' src={si} />
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
    </div>
  )
}

export default Wom