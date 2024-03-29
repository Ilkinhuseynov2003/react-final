import React from 'react'

function Logo() {
  return (
    <div className='m-auto bg-FBFBFB w-[90%] h-[300px] mt-5'>
    <h1 className='text-5xl font-light text-gray-400'>Main Focus/Mission Statement</h1>
    <div className='flex w-[100%] mt-8'>

    <div className='flex w-[140%]'>
        
        <p className='font-bold text-9xl text-gray-100 mr-2'>1 </p>
        <p className='w-[28%] '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
    </div>
    <div className='flex'>
        <p className='text-9xl font-bold text-gray-100 mr-3'>2</p>
        <p className='w-[66%] text-gray-800 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
    </div>
    </div>
    </div>
  )
}

export default Logo

