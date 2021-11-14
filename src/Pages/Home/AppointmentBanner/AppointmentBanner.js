import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px',
};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: '-110px' }}
                        src={doctor}
                        alt=""
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ mb: 3 }}
                            variant="h6"
                            style={{ color: '#5ce7ed' }}
                        >
                            Appointment
                        </Typography>
                        <Typography
                            sx={{ my: 2 }}
                            variant="h4"
                            style={{ color: 'white' }}
                        >
                            Make An Appointment Today
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{
                                color: 'white',
                                font: 14,
                                fontWeight: 300,
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit in sunt reiciendis aspernatur
                            distinctio perferendis iure, assumenda illo dolorum
                            quia?
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
