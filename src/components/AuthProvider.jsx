import React, { useContext, useState, createContext } from 'react'
import Cookies from 'js-cookie';


export const Auth = createContext();

const AuthProvider = ({children}) => {

  const [token, setToken] = useState(Cookies.get("token"));


  return (
    <Auth.Provider value={{token, setToken}}>{children}</Auth.Provider>
  )
}

export const useAuth = () => useContext(Auth);

export default AuthProvider