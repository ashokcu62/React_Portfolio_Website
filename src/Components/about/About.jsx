import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { TbUsers } from 'react-icons/tb'
const About = () => {
  return (

    <section id="about">

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <TbUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>

          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ratione molestias excepturi cumque ad, quas obcaecati consectetur similique beatae
            rerum alias incidunt optio maxime atque accusantium explicabo necessitatibus tenetur exercitationem.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>


  )
}

export default About
