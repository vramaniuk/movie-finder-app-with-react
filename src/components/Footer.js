import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <div className="Footer">
      <div className="Footer__links">
        <a href="https://github.com/vramaniuk/movie-finder-app-with-react" target="_blank">Github repository</a>
      </div>
      <div className="Footer__copy">
        {new Date().getFullYear()}  &copy;  Designed by Viktar Ramaniuk
      </div>
    </div>
);

export default Footer;