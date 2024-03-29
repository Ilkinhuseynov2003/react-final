import React from 'react'
import foto1 from "../../asset/image/foto1.png"
import foto2 from "../../asset/image/Rectangle 23.png"
import foto3 from "../../asset/image/Rectangle 24.png"
import foto4 from "../../asset/image/Rectangle 25.png"
import foto5 from "../../asset/image/Rectangle 26.png"
import foto6 from "../../asset/image/Rectangle 27.png"
import foto7 from "../../asset/image/Rectangle 28.png"
import foto8 from "../../asset/image/Rectangle 29.png"
import foto9 from "../../asset/image/Rectangle 30.png"
import foto10 from "../../asset/image/Rectangle 31.png"
import juku from "../../asset/image/juku.png"
import strel from "../../asset/image/sol.png"
import strelka from "../../asset/image/sag.png"

function Gallery () {
  return (
    <div className='w-[90%] m-auto  h-[1000px]'>
      <p className='text-4xl text-gray-600 ml-32 mt-5'>Photo</p>
      <p className='text-4xl font-bold ml-32'>Gallery</p>
      <hr className='w-[82%] m-auto mt-5' />
      <div className='w-[83%] m-auto  h-[660px] flex flex-wrap mt-8 '>
        <div className=' w-[18%] h-[300px] '> <img src={foto1} alt="" className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'> <img src={foto2} alt="" className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto3} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto4} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto5} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px]'><img src={foto6} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto7} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto8} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7 '><img src={foto9} alt=""className='h-[100%]' /></div>
        <div className=' w-[18%] h-[300px] ml-7'><img src={foto10} alt=""className='h-[100%]' /></div>
      </div>
      <div className='flex w-[20%] justify-between ml-28 mt-10'>
      <img src={juku} alt="" className='w-[100px] h-[50px]' />

      <div className='flex'>
      <img src={strel} alt="" className='w-[50px] h-[50px]' />
      <img src={strelka} alt="" className='ml-5 w-[50px] h-[50px]'/>

      </div>
      </div>
    </div>
  )
}

export default Gallery
