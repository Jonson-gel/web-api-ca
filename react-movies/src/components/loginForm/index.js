import React, { useState } from "react";
import { Button, TextField, Typography, Box, Grid, Link } from "@mui/material";

const Login = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Please fill both fields.");
      return;
    }

    onLogin({ username, password });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 3,
            maxWidth: 400,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>

          <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
            Don't have an account?{" "}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onRegister();
              }}
            >
              Register
            </Link>
            {" "}here
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

// import React, { useEffect, useState } from 'react';
// import { getToken, createSession } from '../../api/tmdb-api';
// import { Container, Button, Typography, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../../contexts/authContext";

// const LoginForm = () => {
//     const { isAuthenticated, login, logout } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const checkTokenAndCreateSession = async () => {
//             const urlParams = new URLSearchParams(window.location.search);
//             const token = urlParams.get('request_token');
//             if (token) {
//                 try {
//                     const sessionId = await createSession(token);
//                     sessionStorage.setItem('sessionId', sessionId);
//                     navigate('/');
//                     login(sessionId);
//                 } catch (error) {
//                     console.error('Error creating session:', error);
//                     alert('Failed to create session. Please try again.');
//                 }
//             }
//         };
//         checkTokenAndCreateSession();
//     }, [navigate]);

//     const handleGetRequestToken = async () => {
//         try {
//             const token = await getToken();
//             window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${encodeURIComponent(window.location.href)}`;
//         } catch (error) {
//             console.error('Error generating request token:', error);
//         }
//     };

//     const handleLogout = () => {
//         logout();
//         navigate("/movies");
//     };

//     return (
//         <Container style={{ textAlign: 'center', marginTop: '50px' }}>
//             <Typography variant="h4" gutterBottom>
//                 <h4>Login to TMDB</h4>
//             </Typography>
//             {!isAuthenticated ? (
//                 <Button 
//                     onClick={handleGetRequestToken} 
//                     variant="contained" 
//                     color="primary" 
//                     style={{ margin: '20px' }}
//                 >
//                     Get Authorization
//                 </Button>
//             ) : (
//                 <Button 
//                     onClick={handleLogout} 
//                     variant="contained" 
//                     color="primary" 
//                     style={{ margin: '20px' }}
//                 >
//                     Log Out
//                 </Button>
//             )}
//         </Container>
//     );
// };

// export default LoginForm;