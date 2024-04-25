import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";

import auth from "./firebase.config";
export const AppContext = createContext(null)

const AuthProvider = ({ children }) => {

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const allValues = {
        SignUpUser,
        SignInUser
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;