import React from 'react';
import '../styles/quote.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function QuoteGenerator() {

  return (
    <div className='container quote d-block justify-content-center'>
      <h1>Let's Get Started </h1>
      <button className='q btn btn-success mt-2'   >Download</button>

    </div>
  );
}

export default QuoteGenerator;
