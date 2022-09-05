import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <section>
      <footer>
        <a href="" className="footer__logo">ASHOK</a>


        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#experience<">Experience</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookSquare /></a>
          <a href="https://instagram.com"><FaInstagramSquare /></a>
          <a href="https://twiter.com"><FaTwitterSquare /></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; ashokcu.All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer
