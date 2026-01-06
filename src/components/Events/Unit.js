import React from 'react'

function Unit() {
  return (
    <div>
      <div className="accordion accordion-flush" id="danceAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#danceAbout"
      >
        About
      </button>
    </h2>

    <div
      id="danceAbout"
      className="accordion-collapse collapse"
      data-bs-parent="#danceAccordion"
    >
      <div className="accordion-body">
        About Dance Club Event
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#danceRegister"
      >
        Register
      </button>
    </h2>

    <div
      id="danceRegister"
      className="accordion-collapse collapse"
      data-bs-parent="#danceAccordion"
    >
      <div className="accordion-body">
        Registration form / link
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Unit
