import React from 'react'
import './Services.css'
import {BiCheck} from "react-icons/bi"
0
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Non nostrud consectetur proident aute mollit amet qui.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Non nostrud consectetur proident aute mollit amet qui.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Non nostrud consectetur proident aute mollit amet qui.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Non nostrud consectetur proident aute mollit amet qui.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Non nostrud consectetur proident aute mollit amet qui.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services