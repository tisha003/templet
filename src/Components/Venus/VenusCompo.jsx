import React from 'react'
import './venu.css'

function VenusCompo(props) {
  return (
    <>
        <div className='g-1  div1 col-md-6 col-sm-12'>
            <img src={props.img} alt="" width="100%" className='imgc' />
        </div>
    </>
    )
}

export default VenusCompo