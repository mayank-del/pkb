import React from 'react'
import Navbar from './Navbar'
import './home.css'
import HomeMid from './HomeMid'

function HomePage() {
  return (
    <div className='home'>
        <Navbar/>
        <HomeMid/>
    </div>
  )
}

export default HomePage