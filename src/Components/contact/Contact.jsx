import React, { useEffect } from 'react'
import './Contact.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdBlock, MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'

// =============Email JS ============ npm i emailjs-com
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
//============================



const Contact = () => {

  useEffect(() => {
    console.log(process.env.REACT_APP_PUBLIC_KEY)
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    try {
      // email js function
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      alert("successfully submited")

    } catch (err) {
      alert("email api errror ", err.message)
    } finally {

      // reload page
      window.location.reload();

    }
  }

  return (
    <section id="contact">
      <h5>get in tuch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">

        {/* contact options */}
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-icon">
              <MdEmail />
            </div>
            <h4>email</h4>
            <h4>one@gmail.com</h4>
            <a href="mailto:one@gmail.com" target="__blank">send a message</a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon">
              <div className="contact__option-icon">
                <IoLogoWhatsapp />
              </div>
            </div>
            <h4>whatsup</h4>
            <h4>91 8921793266</h4>
            <a href="https://api.whatsapp.com/send?phone=918921793266" target="__blank">send a message</a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon">
              <FaFacebookMessenger />
            </div>
            <h4>messager</h4>
            <h4>ashokcu</h4>
            <a href="mailto:one@gmail.com">send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <div className="contact__form">

          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your email' required />
            <input type="number" name='phone' placeholder='mobile number' required />
            <textarea name="message" rows="7" placeholder='enter your message' required />
            <button className='btn btn-primary'>send mesage</button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Contact;
