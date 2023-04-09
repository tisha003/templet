import React from 'react'
import VenusCompo from './VenusCompo'

// import {AiFillStar} from 'react-icons/ai'
function Venus() {
    let array = [
        { img: require('./../../assets/1v.jpg') },
        { img: require('./../../assets/2v.jpg') },
        { img: require('./../../assets/3v.jpg') },
        { img: require('./../../assets/4v.jpg') },
        { img: require('./../../assets/5v.jpg') },
        { img: require('./../../assets/6v.jpg') },
        { img: require('./../../assets/7v.jpg') },
        { img: require('./../../assets/8v.jpg') }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            {/* <AiFillStar /> */}
            <div className='text-center pt-5'>
                <h1>EVENT VENUS</h1>
                <p className='fs-5 text-muted'id="pera">Event venue location info and gallery</p>
            </div>
            <div className='row row-cols-lg-2 row-cols-md-1 row-cols-1 g-1'>
                {/* <div className='col'><img src={require('../../assets/v1.jpg')} width="100%" /></div> */}
                <div className='col'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7533723250363!2d72.8742140748006!3d21.241626280461418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f80d4ee94db%3A0x19d611c55470a460!2sOscar%20International!5e0!3m2!1sen!2sin!4v1678501951025!5m2!1sen!2sin" width="670" height="380" style={{border:'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col img_pera'><img src={require('../../assets/v1.jpg')} width="100%" /> <div className='opac'></div>

                <div className='pera_text text-center text-white w-75'><h1 className='fw-bold'>Downtown Conference Center, New York</h1>
                    <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p></div>
                </div>
                
            </div>
            <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1'>
                {
                    array.map((x, i) => {
                        return <VenusCompo key={i} img={x.img} />
                    })
                }
            </div>
        </div>
    )
}

export default Venus