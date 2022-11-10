import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../FirebaseFile/Firebase.init';
import { Spinner } from 'flowbite-react';


export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);
    

//crete user creating by email and password
const createUserWithEmail= (email, password) => {
  setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in with email and password
  const signInViaEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  

  //auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);


    // sign in by google
    const signInByGoogle = (Provider) => {
      setLoading(true);
        return signInWithPopup(auth, Provider);
      };




      // set user name and photo 
const updateNameAndPhotURL=(profile)=>{
  return updateProfile(auth.currentUser, profile)
}


      //logout function
  const LogOut=()=>{
    localStorage.removeItem('fitness-trainerToken')
    setLoading(true);
    return signOut(auth)
  }

//set context value
    const value={
        user,
        createUserWithEmail,
        signInViaEmailAndPassword,
        LogOut,
        signInByGoogle,
        loading,
        updateNameAndPhotURL
        
    }



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;