import React from 'react'
import home1 from './photos/Home.png';
function Home() {
  return (
    <div>
        <img src={home1} className="card-img" alt="..." style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />          
    </div>
  )
}

export default Home
