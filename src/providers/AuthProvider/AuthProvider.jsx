import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //register
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //logout
    const logout = () => {
        setLoading(true);
        return signOut();
    };

    //on auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current user ====>", currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe;
        };
    }, []);

    //values to return
    const valuesOfAuthentications = {
        user,
        setUser,
        loading,
        setLoading,
        login,
        register,
        googleLogin,
        logout,
    };

    return (
        <AuthContext.Provider value={valuesOfAuthentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;
