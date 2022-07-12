import React from 'react'
import Header from './Components/header/Header'
import Nav from'./Components/nav/Nav'
import Footer from'./Components/footer/Footer'
import About from'./Components/about/About'
import Services from'./Components/services/Services'
import Contact from'./Components/contact/Contact'
import Testimonials from'./Components/testimonials/Testimonials'
import Portfolio from'./Components/portfolio/Portfolio'
import Experience from './Components/experience/Experience'


function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
