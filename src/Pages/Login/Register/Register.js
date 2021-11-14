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
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    };
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        registerUser(
            loginData.email,
            loginData.password,
            loginData.name,
            history
        );
        e.preventDefault();
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ my: 'auto' }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && (
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ my: 3 }}
                                fullWidth
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ my: 3 }}
                                fullWidth
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ my: 3 }}
                                fullWidth
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ my: 3 }}
                                fullWidth
                                id="standard-basic"
                                label="Retype Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <Button fullWidth type="submit" variant="contained">
                                Register
                            </Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login"
                            >
                                <Button variant="text">
                                    Already Registered? Please Login
                                </Button>
                            </NavLink>
                        </form>
                    )}
                    {isLoading && <CircularProgress />}
                    {user?.email && (
                        <Alert severity="success">
                            User created successfully!
                        </Alert>
                    )}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
