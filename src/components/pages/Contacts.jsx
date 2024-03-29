import React from 'react'

function Contact() {
 
  return (
    <div className='w-[100%] m-auto flex h-[600px] '> 
      <div className='text-4xl ml-20 mt-6'>
        <p className='ml-32 mt-5 font-thin text-5xl text-[#333333]'>Contact</p>
        <p className='ml-32 font-bold text-5xl text-[#333333]'>Information</p>
      <div className='mt-10'>
        <p className='text-2xl font-bold ml-32  hover:underline-offset-4 cursor-pointer'>Company Name</p>
        <h2 className='ml-32 text-xl  hover:underline-offset-4 cursor-pointer'>1234 Sample Street Austin Texas 76401</h2>
      </div>
      <div className='ml-32 mt-20'>
        <p className='text-xl font-bold text-[#333333] hover:underline-offset-4 cursor-pointer'>512.333.2222</p>
      </div>
      <div className='ml-32 mt-10'>
        <p className='text-xl font-thin text-[#333333]  hover:underline-offset-4 cursor-pointer'>sampleemail@gmail.com</p>
      </div>
      <div className='ml-32 mt-10'>
        <button className='bg-[#333333] w-[220px] h-[70px] font-thin text-xl text-white border-none '>Contact Us</button>
      </div>
      </div>  
      <div className='ml-auto mt-6'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2920866958957!2d49.8298475!3d40.3802186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6dac25bf3d%3A0x9078c77f64b0ce50!2sCompar%20Academy!5e0!3m2!1saz!2saz!4v1709555727623!5m2!1saz!2saz" width="700" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
      </div>
    </div>
  )
}

export default Contact

