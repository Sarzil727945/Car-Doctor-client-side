import React, { createContext, useEffect, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const signIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const googlSignIn = () => {
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
     }

     const githubSingIn = () => {
          setLoading(true)
          return signInWithPopup(auth, githubProvider)
     }

     useEffect(() => {
          const unSubScript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setLoading(false)
          })
          return () => {
               unSubScript()
          }
     }, [])

     const logOut = () => {
          return signOut(auth)
     }

     const resetPassword = (email) => {
          return sendPasswordResetEmail(auth, email)
     }

     const authInfo = {
          user,
          loading,
          logOut,
          createUser,
          signIn,
          resetPassword,
          googlSignIn,
          githubSingIn,
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;