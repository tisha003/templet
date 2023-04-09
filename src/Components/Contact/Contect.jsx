import React from 'react'
import './contec.css'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import ConCompo from './ConCompo'
import {BsFillGeoAltFill} from 'react-icons/bs'
import {BsEnvelope, BsPhone} from 'react-icons/bs'

function Contect() {
    let array =[
        {icon:<BsFillGeoAltFill />, h4:'ADDRESS', p:'A108 Adam Street, NY 535022, USA',style:{color:'gray'} },
        {icon:< BsPhone/> , h4:'PHONE NUMBER', p:'+1 5589 55488 55' , border:{'border-left': '1px solid gray','border-right': '1px solid gray'}},
        {icon:<BsEnvelope /> , h4:'EMAIL', p:'info@example.com' }
    ]
    return (
        <div className='py-5'data-aos="fade-up" data-aos-duration="2000">
            <div className='container'>
                <div className='text-center pb-3'>
                    <h1>CONTACT US</h1>
                    <p className='fs-5 text-muted'id="pera">Nihil officia ut sint molestiae tenetur.</p>
                </div>
                <div className='row row-col-lg-3 row-col-1'>
                {
                    array.map(x => {
                        return <ConCompo icon={x.icon} h4={x.h4} p={x.p} border={x.border} style={x.style}/>
                    })
                }
            </div>

                <div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridname">
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridemail">
                                <Form.Control type="email" placeholder="enter Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} controlId="formGridaddress" className='mb-3'>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <FloatingLabel controlId="floatingTextarea2" label="Message" className='text-muted'>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                            />
                        </FloatingLabel>
                       <div className='w-100 text-center'> <Button className='btnsub' type="submit">
                            Send Massage
                        </Button></div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default Contect