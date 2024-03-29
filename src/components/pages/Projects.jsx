import React from 'react'
import kom from "../../asset/image/image 33.png"
import ofis from "../../asset/image/image 34.png"
import leyk from "../../asset/image/image 35.png"

function Projects() {
  return (
    <div className='w-[90%] m-auto border-2px '>
       <p className='text-4xl text-gray-600 ml-32 mt-5'>Sample</p>
       <p className='text-4xl font-bold ml-32'>Project 1</p>
       <br />
       <hr className='m-auto w-[90%]' />
       <br />

       <div className='w-[90%] m-auto  '>
        <img src={kom} alt="" className='w-[100%]' />
       </div>
       <br />

       <div className=' w-[90%] m-auto flex'>
        <div className='w-[40%]'>
          <img src={ofis} alt=""className='w-[450px] h-[405px]' />
        </div>
        <div className='w-[60%] '>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p></div>




       </div>
       <br />
       <img src={leyk} alt="" className='m-auto w-[90%]' />
       <br />
    

      
       </div>
  )
}

export default Projects;
