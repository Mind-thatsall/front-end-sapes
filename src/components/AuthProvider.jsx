import React, { useContext, useState, createContext } from 'react'


export const Auth = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState("");

  return (
    <Auth.Provider value={{token, setToken}}>{children}</Auth.Provider>
  )
}

export const useAuth = () => useContext(Auth);

export default AuthProvider