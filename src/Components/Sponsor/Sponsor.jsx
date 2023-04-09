import React from 'react'
import Spoconpo from './Spoconpo'

function Sponsor() {
    let array =[
        {img:require('../../assets/spo1.png')},
        {img:require('../../assets/spo2.png')},
        {img:require('../../assets/spo3.png')},
        {img:require('../../assets/spo4.png')},
        {img:require('../../assets/spo5.png')},
        {img:require('../../assets/spo6.png')},
        {img:require('../../assets/spo7.png')},
        {img:require('../../assets/spo8.png')}
    ]
  return (
    <div className='sec7 py-5'data-aos="flip-down" data-aos-duration="2000">
        <div className='container'>
        <div className='text-center pb-4'>
            <h1 id="pera">SPONSORS</h1>
        </div>
        <div className='mai'>
        <div className='row row-col-lg-4 row-col-md-2 row-col-1'>
        {
            array.map(x=>{
                return <Spoconpo img={x.img}/>
            })
        }
        </div>
        </div>
    </div>
    </div>
  )
}

export default Sponsor