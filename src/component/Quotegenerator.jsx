import '../styles/quote.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function QuoteGenerator() {
  // Sample VCard data
  const initialVCardData = 
  `BEGIN:VCARD\r\n` +
  `VERSION:3.0\r\n` +
  `FN:James Ross\r\n` +
  `ORG:Company Name\r\n` +
  `TEL:+1234567890\r\n` +
  `EMAIL:email@example.com\r\n` +
  `URL:http://www.example.com\r\n` +
  `ADR:123 Main Street, City, State, ZIP Code, Country\r\n` +
  `NOTE:Additional notes or information\r\n` +
  `END:VCARD\r\n`;


  const [vCardData] = useState(initialVCardData);

  const handleDownload = () => {
    // Create a Blob from the VCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute, href, and append the link to the document
    link.download = 'habeeb.vcf';
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className='container quote d-block justify-content-center'>
      <h1>Let's Get Started </h1>
      <button onClick={handleDownload} className='q btn btn-success mt-2'>Download</button>
    </div>
  );
}

export default QuoteGenerator;
