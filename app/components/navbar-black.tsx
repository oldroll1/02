import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Link from 'next/link';
const NavbarBlack = () => {
  return (
    <div>
      <nav className=' px-4 py-2 bg-black backdrop-blur-lg text-[#ffff] flex justify-between lg:px-32'>
        <h1 className=' font-boldscroll-m-20 text-l font-semibold tracking-tight lg:text-xl '>
        <PhotoCameraIcon /> RetroCamera.Io 

        </h1>
       
        
      </nav>
      <div className='border-b border-white opacity-45'>
        </div>
      </div>
  )
}

export default NavbarBlack
