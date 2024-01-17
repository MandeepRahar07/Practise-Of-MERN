import React, { createContext, useState } from 'react';

export const contextdata = createContext();

function ContextaxProvider({ children }) {
  const [userdata, setuserdata] = useState([]);
  const [username, setUsername] = useState("");
  
  return (
    <contextdata.Provider value={{ userdata, setuserdata, username, setUsername }}>
      {children}
    </contextdata.Provider>
  );
}

export default ContextaxProvider;