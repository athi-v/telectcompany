import React from 'react'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import cust1 from '../assets/customer-one.png'
import cust2 from '../assets/customer-two.png'
import cust3 from '../assets/customer-three.png'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container-fluid">
<div className="row">
<div class="col-sm-12 col-lg-8 offset-lg-2">
              <div class="intro">
                <span className='title' >Client testimonials</span>
                <p>Don't take our word for it. Hear what our customers had to say!
                </p>
              </div>
            </div>
  <div className="feature-box col-6 col-sm-4">
<img className='imgs' src={cust1} alt='' />
<div class="review-text">
                    
<h2> Melody Giraud</h2>
                    <h6>Product Developer</h6>
                    <a href="#">Rugal Inc</a>
                    
                  </div>
    <p>"Absolute pleasure working with the Viscept team. They sat down and consulted what they thought would be the best data architecture for our organisation."</p>
    <p><IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
<IoIosStarHalf className='ion' />
    </p>
  </div>
  <div className="feature-box col-6 col-sm-4">
  <img className='imgs' src={cust2} alt='' />
  <div class="review-text">
                    
  <h2> Robert Stevenson</h2>
                    <h6>Stack Developer</h6>
                    <a href="#">Petralive</a>
                  </div>
                  <p>"Phenomenal around the clock customer service. The service/help-desk was incredibly helpful and really welcoming as well. They ensured that my issue was resolved."
                    </p>
  
    <p><IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
<IoIosStarHalf className='ion' />
    </p>
  </div>

  <div className="feature-box col-6 col-sm-4">
  <img className='imgs' src={cust3} alt='' />
  <div class="review-text">
  <h2> Reggie Brooks</h2>
                    <h6>Vice President</h6>
                    <a href="#">Argo Corp</a>
                                    </div>
                                    <p>We have had a significant drop in data breaches since we have utilised Viscept for our data. I would highly recommend their services."</p>
  
    <p><IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
    <IoIosStar className='ion'/>
<IoIosStarHalf className='ion' />
    </p>
  </div>
</div>
</div>
</div>
    
    )
}

export default Testimonials
