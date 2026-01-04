import React from 'react'
import Nss from './Nss.jpg';
import Hsga from './Hsga.webp';
import { Link } from 'react-router-dom';

{/* RFCE */}
function Units() {
  return (
    <div>
        <div className="card my-2 mx-2" style={{border: "2px solid black",borderRadius:'25px' }} >
        <img src={Nss} className="card-img-top" alt="..." style={{borderRadius:'25px' }} />
        <div className="card-body">
            <h5 className="card-title">NSS</h5>
            <Link to="/units/Nss">NSS</Link>
        </div>
        </div>

        <div className="card my-2 mx-2" style={{border: "2px solid black",borderRadius:'25px' }} >
        <img src={Hsga} className="card-img-top" alt="..." style={{borderRadius:'25px' }}/>
        <div className="card-body">
            <h5 className="card-title">HSGA</h5>
            <Link to="/units/Hsga">Hsga</Link>
            
        </div>
        </div>

    </div>
  )
}

export default Units
