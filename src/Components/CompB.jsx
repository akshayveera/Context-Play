

import React, {useContext, useEffect} from 'react'
import ContextPlay from './utils.js/ContextPlay'


const CompB = () => {

    const {info, setInfo} = useContext(ContextPlay);

    const infoB = {
        data : {
            nameA : "Context A",
            textA : "text of A",
            nameB : "Context B",
            textB : "text of B"
        }
    }

    useEffect(()=>{
        setInfo(infoB);
    }, [])

    console.log("info",info);
    
  return (
    <div className='w-[30%] h-40 border-4 border-purple-900 rounded-xl flex flex-col items-center bg-gradient-to-tr from-purple-400 to-purple-200 text-purple-900 overflow-hidden'>
        <p className='text-2xl font-bold'>{info.data.nameB}</p>
        <p className='text-xl font-semibold w-[97%]'>{info.data.textB}</p>
    </div>
  )
}

export default CompB