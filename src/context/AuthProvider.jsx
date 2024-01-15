import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";



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


const LogOutUser = () => {
    setLoading(true)
    return signOut(auth)
}



  // continously check current user 
  useEffect(() => {
    const unSUbscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSUbscribe();
  });



// all info 
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    LogOutUser,
    setUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
