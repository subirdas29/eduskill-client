import React from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])

    const signUp = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email,password) =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = (provider)=>
    {
        return signInWithPopup(auth, provider)
    }

    const gitHubSignUp = (gitProvider) =>
    {
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = ()=>
    {
        return signOut(auth);
    }

    useEffect(()=>
    {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
       })
        return() => unSubscribe();
    },[])


    const authInfo ={signUp,Login,googleSignUp,gitHubSignUp,user,logOut}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
        {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;