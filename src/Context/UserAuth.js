import { useContext, useState } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "../firebase-config";
import { useEffect } from "react";


const UserAuth = createContext();

export function UserAuthProvider({ children }) {
        
    const [user, setUser] = useState('')
        function register(email, password) {
            return createUserWithEmailAndPassword( auth, email, password )
        }

        function loginIn(email, password) {
            return signInWithEmailAndPassword( auth, email, password )
        }

        function logOut() {
            return signOut();
        }
        function googleSignIn() {
            const googleAuthProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleAuthProvider);
        }
        useEffect (() => {
          const unsubscribed =  onAuthStateChanged( auth, (currentUser) => {
                setUser(currentUser)
            });
            return () => {
                unsubscribed();
            }

        }, [])


       return <UserAuth.Provider value={{user, register, loginIn, logOut, googleSignIn}}>
            {children}
        </UserAuth.Provider>
}

export function useUserAuth() {
    return useContext(UserAuth)
}