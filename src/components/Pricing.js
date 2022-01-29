import React from 'react'

import './Pricing.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            
      <div className="row">

    <div class="col-sm-8 offset-sm-2">
              <div class="pricing-intro">
                <span class='title'>Our Pricing Plans.</span>
                <p>
                  Our plans are designed to meet the requirements of both beginners and players.
                  Get the right plan that suits you.
                </p>
              </div>
              </div>
      <div className="pricing-column col-lg-6 col-md-6">
        <div className="card">
          <div className="card-header">
            <h2>Subscription</h2>
          </div>
          <div className="card-body">
            <h2 className="price-text">Half Yearly</h2>
            <h2>R3000 p/m</h2>
            <button className="btn btn-primary" type="button">CONTACT US</button>
          </div>
        </div>
      </div>

      <div className="pricing-column col-lg-6 col-md-6">
        <div className="card">
          <div className="card-header">
            <h2>Subscription</h2>
          </div>
          <div className="card-body">
          <h2 className="price-text">Yearly</h2>

            <h2 className="price-text">R6000 p/m</h2>
         
            <button className="btn btn-primary" type="button">CONTACT US</button>
          </div>
        </div>
      </div>
      </div>
  
        </div>
    )
}

export default Pricing
