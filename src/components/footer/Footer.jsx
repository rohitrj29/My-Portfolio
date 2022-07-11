import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Rohit</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>      
        <li><a href='#services'>Services</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='hhtps://facebook.com'><FaFacebookF/></a>
        <a href='hhtps://instagram.com'><FiInstagram/></a>
        <a href='hhtps://twitter.com'><IoLogoTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy;All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer