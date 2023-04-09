import React from 'react'
import Schdcomp from './Schdcomp'


function Schedule() {
  let array =[
    {time:'10:00 AM',img:[],h4:'Registration',span:'', p:'Fugit voluptas iusto maiores temporibus autem numquam magnam.'},
    {time:'10:00 AM',img:[require('./../../assets/1.jpg')],h4:'Keynote',span:'Brenden Legros', p:'Facere provident incidunt quos voluptas.'},
    {time:'11:00 AM',img:[require('./../../assets/2.jpg')], h4:'Et voluptatem iusto dicta nobis.',span:'Hubert Hirthe', p:'Maiores dignissimos neque qui cum accusantium ut sit sint inventore.'},
    {time:'12:00 AM',img:[require('./../../assets/3.jpg')], h4:'Maiores dignissimos neque qui cum accusantium ut sit sint inventore.',span:'Cole Emmerich', p:'Veniam accusantium laborum nihil eos eaque accusantium aspernatur.'},
    {time:'02:00 AM',img:[require('./../../assets/4.jpg')], h4:'Qui non qui vel amet culpa sequi.',span:'Jack Christiansen', p:'Nam ex distinctio voluptatem doloremque suscipit iusto.'},
    {time:'03:00 AM',img:[require('./../../assets/5.jpg')], h4:'Quos ratione neque expedita asperiores.',span:'Alejandrin Littel', p:'Eligendi quo eveniet est nobis et ad temporibus odio quo.'},
    {time:'04:00 AM',img:[require('./../../assets/6.jpg')], h4:'Quo qui praesentium nesciunt ',span:'Willow Trantow', p:'Voluptatem et alias dolorum est aut sit enim neque veritatis.'}
  ]
  return (
    <div className='sec4' data-aos="fade-left" data-aos-duration="2000" >
    <div className='container m-auto w-75 pt-5 '>
      <div className='text-center pb-3'>
        <h1>EVENT SCHEDULE</h1>
        <p className='fs-5 text-muted' id="pera">Here is our event schedule</p>
      </div>
      {
        array.map(x => {
          return <Schdcomp time={x.time} img={x.img} h4={x.h4} span={x.span} p={x.p} />
        })
      }    
    </div>
    </div>        
  )
}

export default Schedule