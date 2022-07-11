import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
function Contact() {
  return (
    <section id='Contact'>
      <h5>
       Get In Touch
      </h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact_options'>
          <article className='contract__option'>
          <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>rohitrajjkd9@gmail.com</h5>
            <a href='mailto:rohitrajjkd9@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contract__option'>
          <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Rohit Raj</h5>
            <a href='https://m.me/' target='_blank'>Send a Message</a>
          </article>
          <article className='contract__option'>
          <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+91 6204892005</h5>
            <a href='https://api.whatsapp.com/send?phone=+916204892005' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

          
        </form>
      </div>
    </section>
  )
}

export default Contact