import React from 'react'
import Image from 'next/image'
import Image1 from '../public/1.jpg'
import Image2 from '../public/2.jpg'
import Image3 from '../public/3.jpg'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
const Resizable122 = () => {
  return (
    <div >
        <ResizablePanelGroup
      direction="horizontal"
      className=" rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[400px] items-center justify-center p-2">
          <span className="font-semibold"><Image src={Image1} alt='Image1' className='bg-cover'/></span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-2">
              <span className="font-semibold"><Image src={Image2} alt='Image2' /></span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-2">
              <span className="font-semibold"><Image src={Image3} alt='Image3' /></span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  )
}

export default Resizable122
