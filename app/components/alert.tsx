import React from 'react'
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
const AlertTitle1 = () => {
  return (
    <div className='lg:px-28 py-4 px-8'>
      <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Shoot Nostalgic Pictures</AlertTitle>
  <AlertDescription>
    Create Your Memories With The Pictures With Our Application . Please Give Us A Rating And Recommend To Others . Thanks
  </AlertDescription>
</Alert>
    </div>
  )
}

export default AlertTitle1
