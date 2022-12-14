import { createContext, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const navigate = useNavigate();
  
  const signed = !!user;

  useEffect(() => {
    const token = localStorage.getItem("ftcToken")

    if (token) {
      recoverUserInformation(token).then(response => {
        setUser(response.data)
      })
    }
  }, [])

  async function signIn({ email, password }) {
    const { token, user } = await signInRequest({
      email,
      password,
    })
    
    localStorage.setItem("ftcToken", token)
    
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    navigate('/dashboard');
    
  }

  return (
    <AuthContext.Provider value={{ user, signed, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}