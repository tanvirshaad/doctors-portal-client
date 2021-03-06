import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({
    openBooking,
    handleBookingClose,
    booking,
    date,
    setBookingSuccess,
}) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialBookingInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: '',
    };
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    };

    const handleBookSubmit = (e) => {
        //collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
        };
        //send to the server
        fetch(
            'https://fathomless-escarpment-76367.herokuapp.com/appointments',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(appointment),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });
        e.preventDefault();
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {name}
                        </Typography>
                        <form onSubmit={handleBookSubmit}>
                            <TextField
                                sx={{ my: 1 }}
                                fullWidth
                                disabled
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ my: 1 }}
                                fullWidth
                                variant="outlined"
                                id="outlined-size-small"
                                label={'Your Name'}
                                name="patientName"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                sx={{ my: 1 }}
                                fullWidth
                                variant="outlined"
                                id="outlined-size-small"
                                label="Your Email"
                                name="email"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                sx={{ my: 1 }}
                                fullWidth
                                variant="outlined"
                                id="outlined-size-small"
                                label="Your Phone Number"
                                name="phone"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ my: 1 }}
                                fullWidth
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type="submit" variant="contained">
                                Sumbit
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;
