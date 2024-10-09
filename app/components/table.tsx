import React from 'react'

const Table = () => {
  return (
    <div>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Is Your Device Supported ?</h2>

        <p className="mt-4 text-gray-600">
          For Proper Running Of The Application . Your Device Must Have The Minimum Requirements Met Or The Version . Please Check If Your Device Can Run 
        </p>

       
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl   p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
        >
          

          <h2 className="mt-2 font-bold">Android Version</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-white opacity-50">
            Android Version 9 To Android Version Latest
          </p>
        </a>
        <a
          className="block rounded-xl   p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
        >
          

          <h2 className="mt-2 font-bold">Storage</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-white opacity-50">
            Minimum 200 MB storage should be free for running smoothly .
          </p>
        </a>
        <a
          className="block rounded-xl   p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
        >
          

          <h2 className="mt-2 font-bold">Appication Version</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-white opacity-50">
            5.2.1
          </p>
        </a>
        <a
          className="block rounded-xl   p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
        >
          

          <h2 className="mt-2 font-bold">Latest Update</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-white opacity-50">
            July 28 , 2024
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Table
