import React from 'react'
import {FaUserLock, FaFingerprint, FaDatabase, FaHeadset } from 'react-icons/fa'
import CountUp from 'react-countup';
import './Results.css'

const Results = () => {
    return (
        <div className='results'>
            <div className="container-fluid">
<div className="row">
<div class="col-sm-12">
             <div class="intro">
               <span className='title'>Outstanding annual results from our awesome Team</span>
             </div>
           </div>
  <div className="feature-box col-6 col-sm-3">
  <FaUserLock className='icon'/>
    <h3 className="feature-title"> <CountUp start={0} end={68} duration={5} separator="," />%</h3>
    <p>Decrease in security vulnerabilities.</p>
  </div>
  <div className="feature-box col-6 col-sm-3">
    <FaFingerprint className='icon'/>
    <h3 className="feature-title"><CountUp start={0} end={23} duration={5} separator="," />%</h3>
    <p>Decrease in security vulnerabilities.</p>
  </div>

  <div className="feature-box col-6 col-sm-3">
   <FaDatabase className='icon'/>
    <h3 className="feature-title"><CountUp start={0} end={48} duration={5} separator="," />%</h3>
    <p>Increase in data integrity.</p>
  </div>

  <div className="feature-box col-6 col-sm-3">
   <FaHeadset className='icon'/>
    <h3 className="feature-title"><CountUp start={0} end={420} duration={5} separator="," /></h3>
    <p>Satisfied customers.</p>
  </div>

</div>
</div>
</div>
    )
}

export default Results
