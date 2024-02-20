
import React, {useState} from 'react'
import Header from './Header'
import Body from './Body'
import ContextPlay from './utils.js/ContextPlay'

const Main = () => {

  const [info, setInfo] = useState({
    data : {
      name : "Context A",
      text : "text in A"
    }
  })

  return (
    <ContextPlay.Provider value={{
      info : info,
      setInfo : setInfo
    }}>
        <Header/>
        <Body/>
    </ContextPlay.Provider>
  )
}

export default Main