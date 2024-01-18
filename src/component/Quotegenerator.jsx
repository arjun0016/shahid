import '../styles/quote.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function QuoteGenerator() {
  // Sample VCard data
  const initialVCardData = `
  BEGIN:VCARD
  VERSION:3.0
  REV:2024-01-18T10:41:24Z
  N;CHARSET=utf-8:RASHID;MUHAMMED;;;
  FN;CHARSET=utf-8:MUHAMMED RASHID
  ORG;CHARSET=utf-8:Orbiz Creativez Pvt Ltd
  TITLE;CHARSET=utf-8:BDE
  EMAIL;INTERNET:connect@orbiz.in
  TEL;TEL;type=CELL:+919605832177
  ADR;WORK;POSTAL;CHARSET=utf-8:Orbiz Creativez Malappuram, Kerala Pin-676 30
   6 India;;;;;;
  URL;TYPE=website:
  URL;TYPE=twitter:
  URL;TYPE=facebook:
  URL;TYPE=instagram:
  URL;TYPE=youtube:
  URL;TYPE=reddit:
  URL;TYPE=tumblr:
  URL;TYPE=linkedin:https://www.linkedin.com/company/orbiz-creativez/
  URL;TYPE=whatsapp:https://wa.me/+91 9605832177
  URL;TYPE=pinterest:
  URL;TYPE=tiktok:
  URL;TYPE=fbb:https://www.facebook.com/Orbizcreative?mibextid=ZbWKwL
  URL;TYPE=1658587303instagramPng:https://instagram.com/orbizcreativez?igshid
   =NzZlODBkYWE4Ng==
  URL;TYPE=1656501968youtubeIconPng:https://youtube.com/@orbizcreativez?si=t9
   myi-MmYB2-FyFr
  URL;TYPE=web:https://orbiz.in/
  URL;TYPE=location:https://maps.app.goo.gl/wTwtxkNTBbg7cwjG6
  URL;TYPE=greview:https://g.page/r/CSSBke_r-2jiEB0/review
  URL:https://bizcard.orbiz.in/MUHAMMED-RASHID
  END:VCARD
  
`;

  const [vCardData, setVCardData] = useState(initialVCardData);

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
