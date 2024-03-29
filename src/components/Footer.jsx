import React from 'react'
import kurtlar from '../asset/image/kurtka.png'
import megi from '../asset/image/Vector (2).png'
import tel from '../asset/image/telefon.png'
import pismo from '../asset/image/Vector (3).png'
import f from '../asset/image/facebook (1).png'
import twi from '../asset/image/twitter.png'
import inn from '../asset/image/Shape.png'
import p from '../asset/image/pininterest.png'
import foto from '../asset/image/© 2016 Landing. All.png'

function Footer () {
  return (
    <div className='w-[100%] h-[430px] m-auto  bg-[#333333] '>
      <div className='w-[90%] h-[330px] m-auto  flex justify-between p-10 bg-[#333333]   '>

        <img src={kurtlar} alt='' className='w-[100px] h-[100px]' />

        <ul>
          <li className='font-bold text-sm text-white ' >Information</li>
          <li className='text-sm font-medium  mt-6 text-white'>Main</li>
          <li  className='text-sm font-medium mt-4 text-white'>Gallery</li>
          <li  className='text-sm font-medium mt-4 text-white'>Projects</li>
          <li  className='text-sm font-medium mt-4 text-white'>Certifications</li>
          <li  className='text-sm font-medium mt-4 text-white'>Contacts</li>
        </ul>

        <ul>
          <li className='font-bold text-sm text-white' >Contacts</li>

          <li className='flex mt-5   '>
            <img src={megi} alt='' className=' mb-3 ' />
            
             <li className='ml-2  text-sm font-medium text-white'>1234 Sample Street</li>
             
          </li>

          <li className='text-sm font-medium  text-white'>Austin TX 78681</li>

          <li className='flex justify-between w-[110px]  text-sm font-medium mt-12 text-white '>
             <img src={tel} alt='' className='' />
             
             512.333.2222
          </li>

          <li className='flex justify-between w-[185px] text-sm font-medium mt-9 text-white '>
            <img src={pismo} alt='' className='' />
                  sampleemail@gmail.com
          </li>


        </ul>

        <div className=' w-[200px] h-[100px]'>
          <li className='font-bold text-sm list-none  text-white'>Social Media</li>
          <div className=' flex justify-between w-[150px] mt-5'>
            <img src={f} alt="" className='' />
            <img src={twi} alt=""className='' />
            <img src={inn} alt=""className='' />
            <img src={p} alt=""className='' />
            

          </div>
        </div>
        
      </div>
     <hr />



<img src={foto} alt="" className='m-auto mt-10 w-[200px]' />

    </div>
  )
}

export default Footer
