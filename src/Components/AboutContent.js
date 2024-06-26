import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'
import React1 from './assets/IntroImg.jpg'
import React2 from './assets/contact.webp'


function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React2} className='img' alt='true' />
                </div>
                <div className='img-stack bottom'>
                    <img src={React1} className='img' alt='true' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
