import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('https://fathomless-escarpment-76367.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });
        e.preventDefault();
    };
    return (
        <div>
            <h2>Make me an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleOnBlur}
                    label="Email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">
                    Make Admin
                </Button>
            </form>
            {success && (
                <Alert severity="success">Admin created successfully.</Alert>
            )}
        </div>
    );
};

export default MakeAdmin;
