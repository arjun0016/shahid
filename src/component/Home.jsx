import React from 'react';
import '../styles/home.css';
import img from "./images/web 2.png"
import img2 from "./images/web 3.png"
import insta from "./images/INSTA.png"
import fb from "./images/FB.png"
import wtsp from "./images/WTSP.png"
import 'bootstrap/dist/css/bootstrap.min.css';



import {BsWhatsapp} from "react-icons/bs"
import { HiMiniPhone } from 'react-icons/hi2';

// import vcf from '../../src/contact.vcf';
const Home = () => {

  const handleWp = () => {
    window.location.href = 'https://wa.me/971586018329'; // Replace with your desired URL
  };
  const handlePh= () => {
    window.location.href = 'tel:+971586018329'; // Replace with your desired URL
  };


  return (
    <div className='cap'>

        <div className='caption'>
            <h2>Hi <span className='coma'>,</span></h2>
            <h2 >I am <span className='name2'>Shahid Irfan</span> </h2>

            <div className='content mt-3'>
          <p className='container'>Leading the charge at Alkatef IT Solutions as the Sales  <br className='br' />
          Manager, With a passion for technology and a knack for <br className='br' /> fostering client relationships, I bring over 6 years of<br className='br' />experience in different portfolios of digital marketing.</p>
        </div>

        <div className='button mt-5'>
          <button className='btn btn1' onClick={handlePh} ><HiMiniPhone className='me-1' /> contact</button>
          <button className='btn btn2 ms-2' onClick={handleWp} ><BsWhatsapp className='me-1' />Whatsapp</button>

        </div>

        </div>

        <div className='imgd'>
          <img src={insta} className='insta' alt="" />
          <img src={fb} className='fb' alt="" />
          <img src={wtsp} className='wtsp' alt="" />
          <img className='img' src={img} alt="" />

        </div>
        <div className='lines'>
          <img className='img2' src={img2} alt="" />
        </div>

    </div>
  )
}

export default Home