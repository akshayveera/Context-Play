
import { createContext } from "react";


const ContextPlay = createContext({
  data : {
    name : "dummy name",
    text : "dummy text"
  }
})

export default ContextPlay;