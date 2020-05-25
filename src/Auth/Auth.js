import React, { useEffect, useState } from 'react';
import app from '../firebase';

export const AuthContext = React.createContext();

//This component gets the current user, after you log in, and stores it in context. Other components can then grab it from here.

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};