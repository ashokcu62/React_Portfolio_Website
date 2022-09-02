import React from 'react'
import './Contact.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'




const Contact = () => {




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

          <form>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your email' required />
            <input type="number" name='phone' placeholder='mobile number' required />
            <textarea name="message" rows="7" placeholder='enter your message' required />
            <button type='submit' className='btn btn-primary'>send mesage</button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Contact
