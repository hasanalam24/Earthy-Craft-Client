import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AppContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Google Login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
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
        SignOutUser,
        googleLogin
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;