import React from 'react'
import './hero.css'

function Heroimg() {
  return (
    <>
      <div id="bgimg"><div id="opacity"></div></div>
      <div className='main'>
        <h1 className='display-5 fw-bold'>THE ANNUAL <br /> <span>MARKETING</span> CONFERENCE</h1>
        <p className='fs-5 fw-bold pb-3'>10-12 December, Downtown Conference Center, New York</p>
        <button>About The Event</button>
      </div>
    </>
    )
}

export default Heroimg