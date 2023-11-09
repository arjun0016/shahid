import React from 'react';
// import quotes from './quote.js'
import '../styles/quote.css';

function QuoteGenerator() {
  // const [quote, setQuote] = useState('');
  // const [author, setAuthor] = useState('');

 

  // const generateQuote = () => {
  //   const randomIndex = Math.floor(Math.random() * quotes.length);
  //   setQuote(quotes[randomIndex].text);
  //   setAuthor(quotes[randomIndex].author);
  // };


  return (
    <div className='container quote d-block justify-content-center'>
      <h1>Let's Get Started </h1>
      <button className='q btn btn-success mt-2'   >Download</button>

      {/* {quote && author && (
        <div className='mt-3'>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )} */}
    </div>
  );
}

export default QuoteGenerator;
