import React from 'react'
import Hotelcomp from './Hotelcomp'

function Hotel() {
  let array = [
    { img: require('../../assets/hot1.jpg'), title: 'HOTEL_1', pera: '0.4 Mile from the Venue' },
    { img: require('../../assets/hot2.jpg'), title: 'HOTEL_2', pera: '0.5 Mile from the Venue' },
    { img: require('../../assets/hot3.jpg'), title: 'HOTEL_3', pera: '0.6 Mile from the Venue' },
  ]
  return (
    <div className='sec5' data-aos="zoom-in-down" data-aos-duration="2000">
      <div className='container'>
        <div className='text-center pt-5'>
          <h1>HOTELS</h1>
          <p className='text-muted'id="pera">Her are some nearby hotels</p>
        </div>
        <div className=' row row-cols-lg-3 row-cols-md-2 row-cols-1'>
          {
            array.map(x => {
              return <Hotelcomp img={x.img} title={x.title} pera={x.pera} />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Hotel