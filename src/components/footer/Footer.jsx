import React from "react";
import './footer.scss'

import {Link} from 'react-router-dom'

import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png';

function Footer() {
  return <div className="footer" style={{backgroundImage:`url(${bg})`}}>
    <div className="footer__content">
      <div className="footer__content--logo">
        <div className="logo">
        <img src={`${logo}`} alt="logo" />
        <Link to={'/'}>tMovies</Link>
        </div>
        
      </div>
    </div>
  </div>;
}

export default Footer;
