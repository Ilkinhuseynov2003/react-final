import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import megi1 from '../asset/image/juk.png'
import megi2 from '../asset/image/image 15.png'
import megi3 from '../asset/image/image 16.png'
import megi4 from '../asset/image/image 17.png'
import megi5 from '../asset/image/image 18.png'

function Projects () {
  return (
    <div className='w-[90%] m-auto h-[750px] '>
      <p className='text-6xl leading-10 font-light text-gray-300'>
        Our Projects
      </p>
      <div className=' w-[100%] h-[620px] m-auto flex flex-wrap'>
        <div className='w-[48%]  h-[250px] mt-10 relative'>
          <img src={megi1} alt='' className='w-[100%] h-[100%] ' />
          <div className=' w-[250px] absolute bottom-[30%] left-[15%]'>
          <h1 className='text-5xl leading-10 font-bold text-white'>Sample </h1>
         

          <h1 className='text-5xl leading-10 font-bold mt-5 text-white'> Project</h1>
          <br />
          <span className='mt-10 text-white'>View More <ArrowRightAltIcon className='ml-3 text-white' /></span>

          </div>
        </div>
        <div className='w-[48%]  h-[250px] mt-10 ml-12 '>
          <img src={megi2} alt='' className='w-[100%] h-[100%]' />
        </div>
        <div className='w-[20%]  h-[250px] mt-5'>
          <img src={megi3} alt='' className='w-[100%] h-[100%]' />
        </div>
        <div className='w-[37%]  h-[250px] mt-5 ml-10'>
          <img src={megi4} alt='' className='w-[100%] h-[100%]' />
        </div>
        <div className='w-[37%]  h-[250px] mt-5 ml-10'>
          <img src={megi5} alt='' className='w-[100%] h-[100%]' />
        </div>
      </div>
      <button className=' bg-[#333333] w-[200px] h-[50px]  text-white text-center ml-[1163px]'>
        All Projects <ArrowRightAltIcon />
      </button>
    </div>
  )
}

export default Projects
