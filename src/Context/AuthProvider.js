import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../FirebaseFile/Firebase.init';


export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

const createUserWithEmail= (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in with email and password
  const signInViaEmailAndPassword = (email, password) => {
 
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      
    });

    return () => {
      unsubscribe();
    };
  }, []);


    // sign in by google
    const signInByGoogle = (Provider) => {
      
        return signInWithPopup(auth, Provider);
      };

  const LogOut=()=>{
    return signOut(auth)
  }


    const value={
        user,
        createUserWithEmail,
        signInViaEmailAndPassword,
        LogOut,
        signInByGoogle
        
    }



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;