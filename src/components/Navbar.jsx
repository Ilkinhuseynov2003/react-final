
import React from 'react'
import TestImage from '../asset/image/megi.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import sol from '../asset/image/Group 9.png'
import sag  from '../asset/image/Group 10.png'
import slider  from '../asset/image/slide-numbers.png'


function Navbar () {
  return (
    <div className='b m-auto w-[90%] h-[800px] flex '>


      <div className=' w-[40%] h-[400px] ml-16 mt-72'>



        <p className='text-4xl text-gray-600 ml-40'>PROJECT</p>
        <p className='text-4xl font-bold ml-40'>Lorum</p>
        <div className=' flex justify-between flex-wrap w-[140px] ml-40 mt-9'>
        <img src={sol} alt="" />
        <img src={sag} alt="" />


        <img src={slider} alt="" className='mt-20' />
        </div>





      </div>



      <div className=' w-[50%] h-[700px] relative '>
        <img src={TestImage} alt="" className='w-[700px] h-[700px]' />
        <div className='bg-white w-[250px] h-[70px] text-black text-2xl flex justify-between items-center absolute bottom-0'><span>View Project</span><ArrowForwardIcon/></div>
       
      </div>
    </div>
  )
}

export default Navbar
