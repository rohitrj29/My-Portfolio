import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'
function HeaderSocials() {
  return (
    <div className='header__socials'>
    <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com' target="_blank"><AiFillGithub/></a>
    <a href='https://dribbble.com' target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials