import React from 'react'
import '../styles/section.css'
// import Slide from './Slide'
import img2 from './images/web 3.png'

const Section = () => {
  return (
    <div className='section mt-5'>
        {/* <div className='heads m-auto d-flex justify-content-around'>
            <h3>lorem</h3>
            <h3>lorem</h3>
            <h3>lorem</h3>
        </div> */}
        <div className='line2'>
          <img className='img3' src={img2} alt="" />
        </div>       
        {/* <Slide/> */}


    </div>
  )
}

export default Section