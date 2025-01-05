import React from "react";
import Register from "../components/registerForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = ({ username, password }) => {
        
    };

    const handleLogin = () => {
        navigate("/movies/login");
    };

    return (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh" }}>
            <Register onRegister={handleRegister} onLogin={handleLogin} />
        </div>
    );
};

export default RegisterPage;
