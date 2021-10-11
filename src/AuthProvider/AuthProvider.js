import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
  const AllCOntext = useFirebase()

  return (
    <AuthContext.Provider value={AllCOntext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;