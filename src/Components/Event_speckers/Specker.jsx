import React from 'react'
import Spekcomponet from './Spekcomponet'


function Specker() {
    let array = [
        {h3:'Brenden Legros', p:'Quas alias incidunt' , img:require('./../../assets/1.jpg'), icon:[require('./../../assets/1.jpg'),require('./../../assets/1.jpg'),require('./../../assets/1.jpg')] },
        {h3:'Hubert Hirthe', p:'Consequuntur odio aut', img:require('./../../assets/2.jpg'),icon:[require('./../../assets/2.jpg'),require('./../../assets/2.jpg'),require('./../../assets/2.jpg')] },
        {h3:'Cole Emmerich', p:'Fugiat laborum et', img:require('./../../assets/3.jpg'), icon:[require('./../../assets/3.jpg'),require('./../../assets/3.jpg'),require('./../../assets/3.jpg')] },
        {h3:'Jack Christiansen', p:'Debitis iure vero', img:require('./../../assets/4.jpg'), icon:[require('./../../assets/4.jpg'),require('./../../assets/4.jpg'),require('./../../assets/4.jpg')] },
        {h3:'Alejandrin Littel', p:'Qui molestiae natus', img:require('./../../assets/5.jpg'),icon:[require('./../../assets/5.jpg'),require('./../../assets/5.jpg'),require('./../../assets/5.jpg')] },
        {h3:'Willow Trantow', p:'Non autem dicta' ,img:require('./../../assets/6.jpg'),icon:[require('./../../assets/6.jpg'),require('./../../assets/6.jpg'),require('./../../assets/6.jpg')] }
    ]
  return (
    <div  data-aos="fade-right" data-aos-duration="2000">
        <div className='text-center pt-5'>
                    <h2 className='display-6 fw-bold' >EVENT SPEAKERS</h2>
                    <p className='fs-5 text-muted' id="pera">Here are some of our speakers</p>
                </div>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1'>
            {
                array.map(x => {
                    return <Spekcomponet img={x.img} h3={x.h3} p={x.p} icon={x.icon} />
                })
            }
        </div>
    </div>   
  )
}

export default Specker