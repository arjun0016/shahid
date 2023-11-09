import React from 'react';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'




import '../styles/footer.css'


function Footer() {
    return (
      <footer className="container  footer">
       
          <Row>
            <Col  className="left-link">
              <h4 >Shahid Irfan</h4>
              <a href="/" className='i ms-2'><BsFacebook/></a>
              <a href="/" className='i ms-2'><BsInstagram/></a>
              <a href="/" className='i ms-2'><BsWhatsapp/></a>


            </Col>
            <Col className="right-link">
              <a className='mb-3' href="https://alkatefitsolutions.com/">© AL KATEF IT SOLUTIONS • POWERED BY AL KATEF</a>
            </Col>
          </Row>
        
      </footer>
    );
  }
  
  export default Footer;
  