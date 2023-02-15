import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className=' navbar  pb-5 pt-5 bg-no-repeat bg-cover'>
        <div className='nav text-center'>
            <div className='logo text-center text-4xl'>
                <h1>AI Image Gallery</h1>
            </div>
            <div className='tex'>By <h2 className='text-2xl'>NafisBD_</h2>
            </div>
            <div>
              <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/midjourney">Midjourney</Link></li>
                <li><Link to ="/lexica">Lexica</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar