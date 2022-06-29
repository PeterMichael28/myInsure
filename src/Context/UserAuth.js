import { useContext, useState } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"
import { auth } from "../firebase-config";
import { useEffect } from "react";


const UserAuth = createContext();

export function UserAuthProvider({ children }) {
        
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
        function register(email, password) {
            return createUserWithEmailAndPassword( auth, email, password )
        }

        function loginIn(email, password) {
            return signInWithEmailAndPassword( auth, email, password )
        }

        function logOut() {
            return signOut(auth);
        }
        async function googleSignIn() {
            const googleAuthProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleAuthProvider)
        
            .then(result => {
                /*Google access token*/
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;    
            }).catch (error => {
             const errorCode = error.code;
             const errorMessage = error.message;
             const email = error.customDate.email;
            })

            // signInWithRedirect(auth, googleAuthProvider);

            // return getRedirectResult(auth)
            // .then((result) => {
            //     // This gives you a Google Access Token. You can use it to access Google APIs.
            //     const credential = GoogleAuthProvider.credentialFromResult(result);
            //     const token = credential.accessToken;

            //     // The signed-in user info.
            //     const user = result.user;
            // }).catch((error) => {
            //     // Handle Errors here.
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // The email of the user's account used.
            //     const email = error.customData.email;
            //     // The AuthCredential type that was used.
            //     // const credential = GoogleAuthProvider.credentialFromError(error);
            //     // ...
            // });

        }
        useEffect (() => {
          const unsubscribed =  onAuthStateChanged( auth, (currentUser) => {
              setUser(currentUser)
              localStorage.setItem('user', JSON.stringify(user))
            });
            return () => {
                unsubscribed();
            }

        }, [user])


       return <UserAuth.Provider value={{user, register, loginIn, logOut, googleSignIn}}>
            {children}
        </UserAuth.Provider>
}

export function useUserAuth() {
    return useContext(UserAuth)
}