import React from 'react'
import { FaDatabase, FaCode, FaKey } from "react-icons/fa";
import './Features.css'

const Features = () => {
    return (
        <div className='features'>
           <div className="container-fluid">
<div className="row">
<div class="features-intro">
                  <h2>Welcome to Viscept, where data matters.</h2>
                  <p>Providing a platform to safely store your data so you can worry about other meaningful business concerns.</p>
                </div>

  <div className="feature-box col-lg-4">
  <FaDatabase className='icon'/>
    <h3 className="feature-title">Real-time data.</h3>
    <p>Real-time sync. Make changes to data and see updates in real-time.</p>
  </div>
  <div className="feature-box col-lg-4">
    <FaCode className='icon'/>
    <h3 className="feature-title">AI Algorithms</h3>
    <p>Machine learning technology to learn how to better store your data.</p>
  </div>

  <div className="feature-box col-lg-4">
   <FaKey className='icon'/>
    <h3 className="feature-title">High level</h3>
    <p>mpenetrable system using military-grade encryption.</p>
  </div>

</div>
</div>
</div> 
  
    )
}

export default Features
