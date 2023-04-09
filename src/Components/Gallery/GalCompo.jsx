import React from 'react'

function GalCompo(props) {
  return (
    <div  className='col'>
        <div>
            <img style={{outline : props.outline , outlineOffset : props.outlineOffset}} src={props.img} alt="" width="200px" />
        </div>
    </div>
  )
}

export default GalCompo