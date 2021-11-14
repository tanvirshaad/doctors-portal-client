import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography
                        sx={{ color: 'info.main', fontWeight: 600 }}
                        variant="h5"
                        gutterBottom
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <BookingModal
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;
