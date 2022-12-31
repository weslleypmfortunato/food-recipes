import './Footer.css'
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <p className='copyright'>Copyright {new Date().getFullYear()}</p>
        <p className='developers'><span>Developers: </span><a href="https://github.com/pxaviersn" target="_blank" rel="noreferrer">Paulo Xavier</a> | <a href="https://github.com/weslleypmfortunato" target="_blank" rel="noreferrer">Weslley Fortunato</a></p>
      </div>
    </footer>
  );
}

export default Footer;