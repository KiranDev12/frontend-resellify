import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
function Hero() {
  return (
    <div className='hero'>
        <div className='left'>
            <h1>left</h1>
        </div>
        <div className='right'>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero