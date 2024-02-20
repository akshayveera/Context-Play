

import React, { useContext, useEffect } from 'react'
import ContextPlay from './utils.js/ContextPlay'

const CompA = () => {

    const {info, setInfo} = useContext(ContextPlay);

    const infoA = {
        data : {
            nameA : "Context A",
            textA : "text of A",
            nameB : "Context B",
            textB : "text of B"
        }
    }

    useEffect(()=>{
        setInfo(infoA);
    }, [])


  return (
    <div className='w-[50%] h-40 border-4 border-blue-900 rounded-xl flex flex-col items-center bg-gradient-to-tr from-blue-400 to-blue-200  text-blue-900 '>
        <p className='text-2xl font-bold'>{info.data.nameA}</p>
        <p className='text-xl font-semibold'>{info.data.textA}</p>
    </div>
  )
}

export default CompA