import React from 'react'
import Heroimg from '../assets/hero.jpg'
import {Link, Element} from 'react-scroll'
import './Hero.css'

const Hero = () => {
    return (
        <div className='Hero' id='hero'>
                <Element name="normal" className="hero">

         <div className="container-fluid">
         <div className="row">
         <div className="col-lg-6">
         <h5>Renoud SaaS Start-up</h5>
         <h2>Secure cloud enterprise SaaS</h2>
        <p>Best in class big data software and analytics services will render your chunks into meaningful data.</p>
         <div className='form-div'>
         <form>
             <input type='email' placeholder='Please enter your email'></input> <button className='btn btn-primary'>Get started</button>
         </form>
         </div>
        
         <div className='sub-text'>
         <p>14-day free trial and no credit card required.</p>
         </div>
         </div>
         <div class="col-lg-6">
        <img className='title-image' src={Heroimg}  alt='hero' />
         </div>
         </div>
        </div>
        </Element>
        </div>
    )
}

export default Hero
