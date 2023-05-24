import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css"
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

    <CardGroup>
  <Card className='m-2 me-2'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
    </Card.Footer> */}
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to
        additional content.{' '}
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
    </Card.Footer> */}
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card className='m-2 me-4'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardGroup>

</div>
  )
}

export default Test