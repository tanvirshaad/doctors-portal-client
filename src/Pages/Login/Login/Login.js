import React, { useState } from 'react';
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, loginUser, signInWithGoogle, isLoading, authError } =
        useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ my: 'auto' }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ my: 3 }}
                            fullWidth
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ my: 3 }}
                            fullWidth
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <Button fullWidth type="submit" variant="contained">
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">
                                User created successfully!
                            </Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                    </form>
                    <p>------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">
                        Google Sign In
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
