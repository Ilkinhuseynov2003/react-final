import React from 'react'
import imagine from '../asset/image/image 12.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Group() {
  return (
    <div className='w-[90%] h-[800px]  m-auto flex'>
            <div className='mt-4'>
                <h1 className='text-5xl font-light text-gray-300 ml-3'>CONTACT US</h1>

                <div className=' w-[130%] flex flex-col mt-3'>
                <input className='m-3 p-2 bg-[#f3f3f3] border-none' placeholder='Name*' type="text"  />
                <input className='m-3 p-2 bg-[#f3f3f3]' placeholder='Phone Number*' type="text" />
                <input className='m-3 p-2 bg-[#f3f3f3]' placeholder='E-mail*' type="text" />
                <input className='m-3 p-2 bg-[#f3f3f3]' placeholder='Interested In ' type="text" />
                <textarea className='m-3 p-2 bg-[#f3f3f3]' placeholder='Message*' rows="9"></textarea>
                </div>
               

                <button className='ml-3 bg-[#333333] w-[70%] h-[50px] mt-10 text-white text-center'>Send Email  <ArrowRightAltIcon/></button>
               
            </div>
            <div className='w-[50%] h-[500px] ml-80 mt-20'>
                <img src={imagine} alt="" className='w-[100%] h-[100%]' />
           
            </div>
    </div>
  )
}

export default Group
