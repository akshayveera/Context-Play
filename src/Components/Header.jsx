
import React, { useState, useContext } from 'react'
import ContextPlay from './utils.js/ContextPlay'

const Header = () => {

  const {info, setInfo} = useContext(ContextPlay);

  return (
    <div className='flex flex-col items-center'>

      <p className='text-5xl py-3 font-bold font-mono bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text'>Context Play</p>

      <div className='w-full flex justify-around pt-5 pb-10'>
        <input className='p-2  text-lg w-[30%] outline-none text-blue-900 border-2 border-blue-900 bg-blue-200 hover:shadow-xl shadow-blue-500 font-semibold' type="text" name='CompA' value={info.data.textA} onChange={(e)=>{
          setInfo({
            data : {
              nameA : "Context A",
              textA : e.target.value,
              nameB : info.data.nameB,
              textB : info.data.textB
            }
          })
        }}/>
        <input className='p-2 text-lg w-[30%] outline-none text-purple-900 border-2 border-purple-900 bg-purple-200 hover:shadow-xl shadow-purple-500 font-semibold' type="text" name="CompB" value={info.data.textB} onChange={(e)=>{
          setInfo({
            data : {
              nameA : info.data.nameA,
              textA : info.data.textA,
              nameB : "Context B",
              textB : e.target.value
            }
          })
        }} />
      </div>
    </div>
  )
}

export default Header