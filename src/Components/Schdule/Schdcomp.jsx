import React from 'react'
import './schedule.css'

function Schdcomp(props) {
  return (
    <>
      <div className=' border-bottom row text-start p-2 sec3'>
        <div className='time col-md-2 col-12  text1 fs-5 text-muted'>{props.time}</div>
        {
          props.img.length >= 1 ?
            <>
              <div className='col-md-2 col-12'>
                <img src={props.img} className='img-fluid img1' />
              </div>
            </>:<></>
        }
        <div className='text3 col-md col-12'>
          <h4 className='fs-5'>{props.h4}</h4><span className='text-muted fs-6 fst-italic span1'> {props.span}</span>
          <p className='pb-2 fs-6 pera'>{props.p}</p>
        </div>
      </div>
    </>
  )
}

export default Schdcomp