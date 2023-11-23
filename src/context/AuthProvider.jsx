import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("RAJU");
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
    const unsubcribes = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("current User", currentUser);
        setLoading(false);
      }else{
        console.log("not found current user")
        setLoading(false);
      }
    });

    return () => unsubcribes()

  }, []);


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
