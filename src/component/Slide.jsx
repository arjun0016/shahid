import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import image from "./images/download.jpeg"
import '../styles/slide.css'


 


const Slide = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 1
        }
      };

  return (
    <>
 <Carousel className='d-flex' 
 infinite={true} 
 responsive={responsive}
 arrows={false}
 autoPlay={true}
Speed={500}
 >

    <div className='cards'>
    <Card style={{ width: '25rem'}}>
    <Card.Img height={'250px'} variant="top"  src={image} />
    <Card.Body>
      <Card.Title>Card Title1</Card.Title>
      <Card.Text>
        Some quick example text to 
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
    </div>
    <div className='cards'>
    <Card style={{ width: '25rem'}}>
    <Card.Img height={'250px'} variant="top"  src={image} />
    <Card.Body>
      <Card.Title>Card Title2</Card.Title>
      <Card.Text>
        Some quick example text to 
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
    </div>
    <div className='cards'>
    <Card style={{ width: '25rem'}}>
    <Card.Img height={'250px'} variant="top"  src={image} />
    <Card.Body>
      <Card.Title>Card Title3</Card.Title>
      <Card.Text>
        Some quick example text to 
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
    </div>
    <div className='cards'>
    <Card style={{ width: '25rem'}}>
    <Card.Img height={'250px'} variant="top"  src={image} />
    <Card.Body>
      <Card.Title>Card Title4</Card.Title>
      <Card.Text>
        Some quick example text to 
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
    </div>
  </Carousel>

    </>
  )
}

export default Slide