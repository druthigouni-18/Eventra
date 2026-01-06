import React from 'react'
import Dc from './DanceClub.jpeg'
import { Link } from 'react-router-dom';

function AllEvents() {
  return (
    <div>
        <div className="row">

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout1" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister1" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout2" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister2" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion3">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout3" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister3" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion4">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout4" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister4" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion5">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout5" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister5" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion6">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout6" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister6" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>

            <div className="card m-3 " style={{width: "18rem", border :'1px solid black'}}>
                <div className='card-title' >
                    <h5 className="card-title">Dance Club</h5>
                </div>
                <img src={Dc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="danceAccordion7">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceAbout">About</button>
                            </h2>

                            <div id="danceAbout7" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">
                                About Dance Club Event
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#danceRegister"> Register</button>
                            </h2>

                            <div id="danceRegister7" className="accordion-collapse collapse" data-bs-parent="#danceAccordion">
                            <div className="accordion-body">Registration form / link</div>
                            </div>
                        </div>
                        <Link to="/clubs/PromptTechies" className="btn btn-dark">Go somewhere</Link>
                    </div>
                </div>
            </div>
            

        </div>    
    </div>
  )
}

export default AllEvents
