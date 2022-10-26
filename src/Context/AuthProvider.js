import React from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,onAuthStateChanged,signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    const signUp = (email,password) =>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
       
    }

    const userProfile=(profile)=>
    {
        setLoading(true);
        return updateProfile(auth.currentUser,profile)
    }

    const Login = (email,password) =>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSignUp = (provider)=>
    {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const gitHubSignUp = (gitProvider) =>
    {
        setLoading(true);
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
            setLoading(false)
       })
        return() => unSubscribe();
    },[])


    const authInfo ={
        signUp,
        userProfile,
        Login,
        googleSignUp,
        gitHubSignUp,
        user,
        logOut,
        loading
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