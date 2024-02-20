
import React, {useState} from 'react'
import CompA from "./CompA"
import CompB from "./CompB"


const Body = () => {
  
  return (
    <div className='flex flex-col gap-5'>
      
      <div className='w-[100%] flex justify-center gap-5 flex-wrap'> 
          <CompA/>
          <CompB/>             
      </div>

      <div className='w-[100%] flex justify-center gap-5 flex-wrap'> 
          <CompB/>             
          <CompA/>
      </div>

      <div className='w-[100%] flex justify-center gap-5 flex-wrap'> 
          <CompA/>
          <CompB/>             
      </div>

    </div>
  )
}

export default Body