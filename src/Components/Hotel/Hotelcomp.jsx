import React from 'react'
import './hotel.css'
import { Card } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'

function Hotelcomp(props) {
    return (
        <div>
            <div className='mb-5 '>
                <Card className='cardhov'>
                    <div className='cardimg'>
                        <Card.Img variant="top" src={props.img} className="imghov"/>
                    </div>
                    <Card.Body>
                        <Card.Title className='fw-bold'>{props.title}</Card.Title>
                        <Card.Text>
                            <div className=' w-100 me-auto'>
                            <AiFillStar className='ico'/>
                            <AiFillStar className='ico'/>
                            <AiFillStar className='ico'/>
                            <AiFillStar className='ico'/>
                            <AiFillStar className='ico'/>
                            </div>
                           {props.pera}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Hotelcomp