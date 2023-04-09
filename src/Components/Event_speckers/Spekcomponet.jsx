import React from 'react'
import './specker.css'
import {AiFillStar} from 'react-icons/ai'

function Spekcomponet(props) {
    return (
        <>
            <div className='container'>
                <div className='w-100 mb-4 imges text-center'>
                    
                    <img variant="top" src={props.img} className="imgset w-100  "/>
                    <div className='text_t'>
                        <h3>{props.h3}</h3>
                        <p>{props.p}</p>
                        <div className="span">
                        <AiFillStar  className='straticon mx-1 mb-3 fs-3'/>
                        <AiFillStar className='straticon mx-1 mb-3 fs-3'/>
                        <AiFillStar className='straticon mx-1 mb-3 fs-3'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spekcomponet