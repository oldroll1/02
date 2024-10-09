import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const NavbarBlack = () => {
  return (
    
      <nav className=' px-4 py-2 bg-black backdrop-blur-lg text-[#ffff]'>
        <h1 className=' font-boldscroll-m-20 text-l font-semibold tracking-tight lg:text-xl '>
        <PhotoCameraIcon /> RetroCamera.Io 
        </h1>
        <div className='border-b border-white opacity-45'>
        </div>
      </nav>

  )
}

export default NavbarBlack
