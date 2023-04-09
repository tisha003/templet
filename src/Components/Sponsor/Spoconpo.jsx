import React from 'react'
import './sponsor.css'

function Spoconpo(props) {
  return (
    <div className='col spo'> 
        <div className=' py-5 text-center w-100 bord'>
            <img src={props.img} alt="" width="200px" className='spoimg'/>
        </div>
    </div>
  )
}

export default Spoconpo