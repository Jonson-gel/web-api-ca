import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem("sessionId"));

    const login = (sessionId) => {
        sessionStorage.setItem("sessionId", sessionId);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem("sessionId");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);