import React from 'react'

const Contact = () => {
  return (
    <div className='items-center justify-center flex flex-col '>
      <div className='py-12'>
        <h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl'>
        Our Contact 
        </h1>
        <div className='py-4'>
            <h2 className='leading-7 [&:not(:first-child)]:mt-6'>
                Email : support@retrocamera.io
            </h2>
            <h2>
                Phone : +48459338448
            </h2>
            <h2>
                Address : 112 Grand Ave , Savannah , GA 31415-9610
            </h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
