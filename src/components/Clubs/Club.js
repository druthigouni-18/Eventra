import React from 'react'
import promptTechies from './promptTechies.png';
import DigiClub from './DigiClub.jpeg';
import DanceClub from './DanceClub.jpeg';
import agastya from './agastya.jpeg';
import { Link } from 'react-router-dom';

function Club() {
  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-3" >
          <div className="card" style={{ width: "16rem",border: "2px solid black", borderRadius:'25px' }}>
            <img src="https://tse1.mm.bing.net/th/id/OIP.4j3FROKqhG2fLKx9VzgKbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="club" style={{borderRadius:'30px'}} />
            <div className="card-body">
              <a href='https://gdg.community.dev/gdg-on-campus-cmr-institute-of-technology-hyderabad-india/'>GDG</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "16rem" ,border: "2px solid black",borderRadius:'25px'}}>
            <img src={promptTechies} className="card-img-top" alt="club" style={{borderTopLeftRadius: "23px",borderTopRightRadius: "23px"}}/>
            <div className="card-body">
              <Link to="/clubs/promptTechies">PromptTechies</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "16rem",border: "2px solid black",borderRadius:'25px' }}>
            <img src={DanceClub} className="card-img-top" alt="club" style={{borderTopLeftRadius: "23px",borderTopRightRadius: "23px"}} />
            <div className="card-body">
              <h5 className="card-title">DanceClub</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "16rem",border: "2px solid black",borderRadius:'25px' }}>
            <img src={DigiClub} className="card-img-top" alt="club" style={{borderTopLeftRadius: "23px",borderTopRightRadius: "23px"}} />
            <div className="card-body">
              <h5 className="card-title">DigiClub</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-2">
          <div className="card" style={{ width: "16rem",border: "2px solid black",borderRadius:'25px' }}>
            <img src={agastya} className="card-img-top" alt="club" style={{borderTopLeftRadius: "23px",borderTopRightRadius: "23px"}} />
            <div className="card-body">
              <h5 className="card-title">Agastya</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Club
