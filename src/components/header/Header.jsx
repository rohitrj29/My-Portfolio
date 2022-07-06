import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header >
    <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Rohit Raj</h1>
    <h5 className='text-light'>Fullstack Developer | Designer</h5>
    <CTA />
    
    </div>
    <HeaderSocials/>
    <div className='me'>
      <img src={ME} alt=''/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header