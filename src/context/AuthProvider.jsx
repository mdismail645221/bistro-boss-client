import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);



  // register user firebase method 
const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}


// Login User firebase method 
const loginUser = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// google login here method code in firebase 
const provider = new GoogleAuthProvider();

const googleLoginProvider = () => {
  setLoading(true)
  return signInWithPopup(auth, provider); 
}


const LogOutUser = () => {
    setLoading(true)
    return signOut(auth)
}



  // continously check current user 
  useEffect(() => {
    const unSUbscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      console.log({user: currentUser})

     if(currentUser){
      axios.post('http://localhost:5000/jwt', {email: currentUser.email})
      .then(data => {
        localStorage.setItem('access-token', data.data)
         setLoading(false);
        
      })
     }else{
      localStorage.removeItem('access-token')
     }
     
    });
    return () => unSUbscribe();
  });



// all info 
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLoginProvider, 
    LogOutUser,
    setUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
