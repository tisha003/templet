import React from 'react'
import './contec.css'

function ConCompo(props) {
    return (
        <>
            <div className='col text-center m-4' style={props.border}>
                <div className='fs-1 text-danger mb-3'>{props.icon}</div>
                <h4 className='mb-2 '>{props.h4}</h4>
                <p className='hhov' style={props.style}>{props.p}</p>
            </div>
        </>
    )
}

export default ConCompo