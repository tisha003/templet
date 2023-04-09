import React from 'react'
import GalCompo from './GalCompo'

function Gallery() {
    let array =[
        {img:require('../../assets/gal1.jpg')},
        {img:require('../../assets/gal2.jpg')},
        {img:require('../../assets/gal3.jpg') , outline : '5px solid red' , outlineOffset : '10px'},
        {img:require('../../assets/gal4.jpg')},
        {img:require('../../assets/gal5.jpg')}
    ]
  return (
    <div className='container py-5' data-aos="zoom-in-down" data-aos-duration="2000" >
        <div className='text-center'>
            <h1>GALLERY</h1>
            <p className='text-muted fs-5 mb-5' id="pera">Check our gallery from the recent events</p>

        </div>
        <div className='row row-cols-lg-5 row-cols-md-2 row-cols-1'>
           {
            array.map(x => {
                return <GalCompo img={x.img} outline = {x.outline} outlineOffset = {x.outlineOffset} />
            })
           }
        </div>
    </div>
    )
}

export default Gallery