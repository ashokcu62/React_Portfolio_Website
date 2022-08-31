import React from 'react'
import './Testimonials.css'
import Avtar1 from '../../assets/avatar1.jpg'
import Avtar2 from '../../assets/avatar2.jpg'
import Avtar3 from '../../assets/avatar3.jpg'
import Avtar4 from '../../assets/avatar4.jpg'

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";


const Testimonials = () => {
  const data = [{
    id: 1,
    name: "janvi",
    image: Avtar1,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur magnam sint vitae consequatur voluptate vero ullam corporis expedita nulla, ex eveniet dolorum aliquid commodi numquam magni quidem iure. Officiis."
  },
  {
    id: 1,
    name: "janvi",
    image: Avtar2,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur magnam sint vitae consequatur voluptate vero ullam corporis expedita nulla, ex eveniet dolorum aliquid commodi numquam magni quidem iure. Officiis."
  },
  {
    id: 1,
    name: "janvi",
    image: Avtar3,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur magnam sint vitae consequatur voluptate vero ullam corporis expedita nulla, ex eveniet dolorum aliquid commodi numquam magni quidem iure. Officiis."
  },
  {
    id: 1,
    name: "janvi",
    image: Avtar4,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur magnam sint vitae consequatur voluptate vero ullam corporis expedita nulla, ex eveniet dolorum aliquid commodi numquam magni quidem iure. Officiis."
  },
  
  ]


  return (
    <section>
      <h5>review form clients</h5>
      <h2>testimonials</h2>
      <Swiper
        pagination={{
          type:'bullets',
        }}
        navigation={true}
        modules={[Pagination,Scrollbar,A11y]}
        spaceBetween={40}
        slidesPerView={1}
        
        className="container testimonial__container">

          {data.map(({id,name,image,review})=>{

           return( <SwiperSlide className="testimonial" key={id}>
            <div className="client_avatar">
              <img src={image} alt="avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>)

          })}
        
   
        


      </Swiper>
    </section>
  )
}

export default Testimonials
