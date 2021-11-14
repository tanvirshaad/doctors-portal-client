import React from 'react';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
};
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
};

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    style={{ ...verticalCenter, textAlign: 'left' }}
                    item
                    xs={12}
                    md={6}
                >
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br />
                            Starts here
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: 13,
                                color: 'gray',
                                fontWeight: 300,
                                my: 3,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla gravida felis vel ex ultrices, in
                            posuere nunc sollicitudin. Cras ultricies dapibus
                            arcu. Suspendisse
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
