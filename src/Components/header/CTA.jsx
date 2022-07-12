import React from 'react'
import Resume from'../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>Downlode Resume</a>
      <a href='#Contact' className='btn btn-primary'> Lets Talk</a>
      
    </div>
  )
 }

export default CTA
