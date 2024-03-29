import React from 'react'
import bina from '../asset/image/Rectangle 8.png'
import villa from '../asset/image/Rectangle 10.png'
import roya from '../asset/image/Rectangle 9.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Banner () {
  return (
    <div className='w-[90%]  bg-gray-100 m-auto h-[600px] flex'>
      <div className=' w-[28%] ml-14 bg-gray-100'>
        <img src={bina} alt='' className='ml-10 mt-10 w-[90%]' />
        <img src={villa} alt='' className='ml-10 mt-10 w-[90%] ' />
      </div>
      <div className=' w-[28%] ml-10 bg-gray-100'>
        <img src={roya} alt='' className='w-[90%] mt-24' />
      </div>
      <div className=' w-[30%] ml-10 bg-gray-100'>
        <h1 className='font-light text-6xl text-gray-500 leading-10 mt-20'>
          {' '}
          About
        </h1>
        <br />
        <br />
        <span className='text-base mt-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </span>
        <div className=' bg-white w-[230px] h-[90px] flex justify-around items-center mt-10'> <span>Read More</span><ArrowForwardIcon/> </div>
        
       
      </div>
    </div>
  )
}

export default Banner
