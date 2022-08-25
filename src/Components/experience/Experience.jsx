import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs"
const Experience = () => {
  return (

    <section id="experience">
      <h5>what Skills I Have</h5>
      <h2>My Experience</h2>
      <div className=" container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>

              </div></article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>

        </div>
        {/* end of FrontEnd */}
        {/* experienced intermediate basiscs */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div><h4>Node js </h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div><h4>Mongodb</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div><h4>mysql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article class="experience__details">
             <BsPatchCheckFill className='experience__icon'/>
              <div> <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>

  )
}

export default Experience
