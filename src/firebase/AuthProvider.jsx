import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";

import auth from "./firebase.config";
export const AppContext = createContext(null)

const AuthProvider = ({ children }) => {

    const RegisterUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allValues = {
        RegisterUser
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;