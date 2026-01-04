import React from 'react'
import hsga from './Hsga.webp';

function Hsga() {
  return (
    <div>
      <img src={hsga} />

      {/* About Section */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 style={{backgroundColor:'black',color:'white'}}>About</h4>
        <p>
          Prompt Techies is a student-driven technical club that focuses on
          prompt engineering, AI tools, and innovative technologies. The club
          encourages learning through workshops, projects, and collaborations.
        </p>
      </div>

      {/* Past Events */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 className="border-bottom pb-2" style={{backgroundColor:'black',color:'white'}}>Past Events</h4>
        <p>
          Conducted hands-on workshops, tech talks, and collaborative sessions
          to help students explore AI tools and real-world applications.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 className="border-bottom pb-2" style={{backgroundColor:'black',color:'white'}}>Upcoming Events</h4>
        <p>
          Planning advanced AI workshops, hackathons, and inter-college
          collaborations.
        </p>
      </div>

      {/* Who to join */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 className="border-bottom pb-2" style={{backgroundColor:'black',color:'white'}}>Who to join</h4>
        <p>
          Conducted hands-on workshops, tech talks, and collaborative sessions
          to help students explore AI tools and real-world applications.
        </p>
      </div>

      {/* How to join */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 className="border-bottom pb-2" style={{backgroundColor:'black',color:'white'}}>How to join</h4>
        <p>
          Conducted hands-on workshops, tech talks, and collaborative sessions
          to help students explore AI tools and real-world applications.
        </p>
      </div>



      {/* Members */}
      <div className="mb-4" style={{border:'1px solid black'}}>
        <h4 className="border-bottom pb-2" style={{backgroundColor:'black',color:'white'}}>Members</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">President</li>
          <li className="list-group-item">Vice President</li>
          <li className="list-group-item">Technical Lead</li>
          <li className="list-group-item">Core Team Members</li>
        </ul>
      </div>
    </div>
  )
}

export default Hsga
