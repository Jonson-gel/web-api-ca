import React from "react";
import LoginForm from "../components/loginForm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <main style={styles.container}>
            <LoginForm />
            <Button 
                variant="outlined" 
                color="secondary" 
                onClick={handleCancel} 
                style={styles.cancelButton}
            >
                Cancel
            </Button>
        </main>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        marginTop: '10vh',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    cancelButton: {
        marginTop: '20px',
        width: '60%',
        maxWidth: '200px',
    },
};

export default LoginPage;
