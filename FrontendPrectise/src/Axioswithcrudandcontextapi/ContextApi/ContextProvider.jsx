import React, { createContext, useState } from 'react'

export const Authcontent = createContext();


function ContextProvider({children}) {
    const [data, setData] = useState([]);
  return (
    <div>
        <Authcontent.Provider value={{data, setData}}>{children}</Authcontent.Provider>
    </div>
  )
}

export default ContextProvider