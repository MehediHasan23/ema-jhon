import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =()=>{
 const [user, setUser] = useState({})
 const [error, setError]= useState('')
 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();


 const signInUsingGoogle =()=>{
  return signInWithPopup(auth, googleProvider)
   
 }
 const logOut =()=>{
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    setError(error.message)
  });
 }

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  });
  
 },[])

 return{
   user,
   error,
   logOut,
   signInUsingGoogle
 }
 
}

export default useFirebase;