import React from 'react';
import Druthi from './photos/Druthi.jpg';
import SaiKiran from './photos/SaiKiran.jpeg';

function About() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">

      {/* First Card */}
      <div className="card mb-3" style={{ maxWidth: "900px"}}>
        <div className="row g-0" style={{border: "1.5px solid black",borderRadius:'20px'}}>
          <div className="col-md-4">
            <img src={Druthi} className="img-fluid" alt="Druthi" style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Druthi</h5>
              <p className="card-text">
                Druthi is a dedicated Frontend Developer passionate about building responsive, interactive, and user-friendly web applications. Skilled in React.js, HTML, CSS, JavaScript, and Bootstrap, she enjoys transforming complex ideas into intuitive and visually appealing interfaces. She loves learning modern web technologies and creating applications that provide seamless user experiences while maintaining clean and efficient code.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="card mb-3" style={{ maxWidth: "900px" }}>
        <div className="row g-0" style={{border: "1.5px solid black",borderRadius:'20px'}}>
          <div className="col-md-4">
            <img src={SaiKiran} className="img-fluid rounded-start" alt="Sai Kiran" style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Sai Kiran</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem repellat error necessitatibus quidem beatae nobis unde, impedit at officiis dolor fugiat asperiores placeat quae quam iusto, recusandae veniam eum
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
                <a href=''> </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="card mb-3" style={{ maxWidth: "900px" }}>
        <div className="row g-0" style={{border: "1.5px solid black" ,borderRadius:'20px'}}>
          <div className="col-md-4">
            <img src=".." className="img-fluid rounded-start" alt="Gopi Krishna" style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Gopi Krishna</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem repellat error necessitatibus quidem beatae nobis unde, impedit at officiis dolor fugiat asperiores placeat quae quam iusto, recusandae veniam eum
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
