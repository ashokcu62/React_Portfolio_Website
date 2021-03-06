import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">     {/*bem*/}
      <h5>hello i am</h5>
      <h1> ashok </h1>
      <h5 className="text-light">Full stack developer</h5>
      <CTA/>
      <HeaderSocials/>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      <div className="me">
        <img src={ME} alt="me image" />
      </div>
      </div>
    </header>
  )
}

export default Header
