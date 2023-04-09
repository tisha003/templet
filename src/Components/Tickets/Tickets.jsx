import React from 'react'
import TickCompo from './TickCompo'

function Tickets() {
    let array = [
        {
            per: 'STANDARD ACCESS', num: '$150',
            li: [<li className='pb-3'>Regular Seating</li>,
            <li className='pb-3'>Coffee Break</li>,
            <li className='pb-3'>Custom Badge</li>,
            <li className='text-muted pb-3'>Community Access</li>,
            <li className='text-muted pb-3'>Workshop Access</li>,
            <li className='text-muted pb-3'>After Party</li>
            ]
        },
        {
            per: 'PRO ACCESS', num: '$250',
            li: [<li className='pb-3'>Regular Seating</li>,
            <li className='pb-3'>Coffee Break</li>,
            <li className='pb-3'>Custom Badge</li>,
            <li className='pb-3'>Community Access</li>,
            <li className='text-muted pb-3'>Workshop Access</li>,
            <li className='text-muted pb-3'>After Party</li>
            ]
        },
        {
            per: 'PREMIUM ACCESS', num: '$350',
            li: [<li className='pb-3'>Regular Seating</li>,
            <li className='pb-3'>Coffee Break</li>,
            <li className='pb-3'>Custom Badge</li>,
            <li className='pb-3'>Community Access</li>,
            <li className='pb-3'>Workshop Access</li>,
            <li className='pb-3'>After Party</li>
            ]
        }
    ]
    return (
        <div className='sec8 py-5 mt-5'data-aos="zoom-in-down" data-aos-duration="2000">
            <div className='container'>
                <div className='pb-3 text-center'>
                    <h1>BUY TICKETS</h1>
                    <p id="pera">Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</p>
                </div>
                <div className='row row-cols-lg-3 row-cols-md-1 row-cols-1 '>
                    {
                        array.map(x => {
                            return <TickCompo per={x.per} num={x.num} li={x.li} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tickets