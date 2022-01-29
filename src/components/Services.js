import React from 'react'
import Customer from '../assets/cloud.jpg'
import {FaCommentDots, FaServer, FaTachometerAlt } from "react-icons/fa";
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
             <div className="container-fluid">
         <div className="row">
         <div className="col-lg-6">
<ul>
<p><FaCommentDots className='icon'/></p>
<li><h3> Best Support</h3>
<p>
Team hangouts and instant text messaging right from the dashboard.
</p></li>
     
<li>
<p><FaServer className='icon'/></p>
<h3> Secure Servers</h3>
<p>
Military-grade encryption on all servers.
</p>
</li>
      
<li>
<span><FaTachometerAlt className='icon'/> </span>
<h3>Speed</h3>
<p>
Fast, reliable calls to and from our servers.</p> 
</li>
     
</ul>
        
 </div>
         <div class="col-lg-6">
        <img className='title-image' src={Customer}  alt='hero' />
      
         </div>
         </div>
         </div>
         </div>
        
    )
}

export default Services
