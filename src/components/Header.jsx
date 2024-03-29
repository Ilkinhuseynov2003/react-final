import React from 'react'
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { Link } from 'react-router-dom'
import kurt from "../asset/image/Group 8.png"

function Header () {
  return (
    <div className='w-[90%] m-auto h-[100px] '>
      <div className=' w-[80%] flex justify-between m-auto items-center mt-7 '>
        <div>
          {/* <BusinessCenterIcon sx={{fontSize: '40px'}}/> */}
          <img src={kurt} alt="" className='' />
          <span className='text-sm text-black font-bold'>DIGITAL PROJECT </span>
        </div>

        <ul className='flex'>
          <li className='mr-8 text-xs text-gray-500 border-black border-[2px] border-x-0  w-[80px] flex justify-center'>
          <Link to={'/main'}>MAIN</Link>
          </li>
          <li className='mr-8 text-xs text-gray-500'>
            <Link to={'/gallery'}>GALLERY</Link>{' '}
          </li>
          <li className='mr-8 text-xs text-gray-500'>
            <Link to={'/projects'}>PROJECTS</Link>
          </li>
          <li className='mr-8 text-xs text-gray-500'>
            <Link to={'/certifications'}>CERTIFICATIONS</Link>
          </li>
          <li className='mr-8 text-xs text-gray-500'>
            <Link to={'/contacts'}>CONTACTS</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
