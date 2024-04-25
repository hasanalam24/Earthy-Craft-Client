import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "./firebase.config";
export const AppContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignOutUser = () => {
        return signOut(auth)
    }

    //observe auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const allValues = {
        SignUpUser,
        SignInUser,
        user,
        SignOutUser
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;