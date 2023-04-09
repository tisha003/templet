import React from 'react'
import './ticket.css'
import { Button, Card } from 'react-bootstrap'

function TickCompo(props) {
    return (
        <div className='col'>
            <Card className='shadow'>
                <Card.Body>
                    <p className='text-muted text-center fw-bold'>{props.per}</p>
                    <Card.Title className='text-center display-4 '>{props.num}</Card.Title>
                        <hr/>
                    <Card.Text className='fs-5'>
                            {props.li[0]}
                            {props.li[1]}
                            {props.li[2]}
                            {props.li[3]}
                            {props.li[4]}
                            {props.li[5]}
                    </Card.Text>
                    <hr />
                   <div className='w-100  text-center '> <Button className='colrbtn'>BUY NOW</Button></div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TickCompo