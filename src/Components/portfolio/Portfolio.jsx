import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
const Portfolio = () => {

  // dianamic port folio data

  const data = [{
    id: 1,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  }, {
    id: 2,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  }, {
    id: 3,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  }, {
    id: 4,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  }, {
    id: 5,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  }, {
    id: 6,
    img: "https://cdn.dribbble.com/userupload/2750646/file/original-883db0dfcabb76adfc3e17a1eb04ec70.jpg?compress=1&resize=1000x750&vertical=top",
    title: " Social Media Kit Pt II",
    git: "https://githum.com/",
    host: "https://dribbble.com/goods/1125705-HAUS-Social-Media-Kit-Pt-II?token=gAAAAABjDYY3hCp7GYfEfdu_tcxve1Fc6uVUnWpfchHlMpUKCxRlHod4p-y1XiEq6p2oGWi0iHhStvxaJv7ip2pUdMXeJ4WgKpHoFkZQ5widBAyHnCQkbkD6ijUncCUYNphfX4_nsOVrKdTZLn45FLASyETdHwhOJKCdn_QrVRcyXW0OIkg8Wis%3D"
  },]



  return (

    <section id=" portfolio">
      <h5>my recent works</h5>
      <h2>portfolio </h2>
      <div className="container portfolio__container">
        {data.map(({id,img,title,git,host})=>{
           return(<article className='portfolio__item' key={id}>
           <img src={img} alt="" className="portfolio__item-image" />
           <h3>{title}</h3>
           <div className="portfolio__item-cta">
             <a href={git} className="btn" target="__blank">git link</a>
             <a href={host} className="btn btn-primary" target="__blank">host link</a>
           </div>
         </article>)
 

        })}
       
      </div>
    </section>

  )
}

export default Portfolio
