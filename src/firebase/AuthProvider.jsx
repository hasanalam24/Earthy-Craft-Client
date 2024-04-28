import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AppContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const SignUpUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Google Login

    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Github Login
    const githubLogin = () => {
        setloading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const SignOutUser = () => {
        setloading(true)
        return signOut(auth)
    }


    // update Profile
    // const updatedUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photo
    //     })
    // }

    //observe auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setloading(false)
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
        googleLogin,
        githubLogin,
        loading,


    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;