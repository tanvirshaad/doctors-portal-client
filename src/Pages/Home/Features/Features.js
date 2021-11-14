import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';

const Features = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 5, textAlign: 'left' }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{ fontWeight: '600', my: 3 }}
                        variant="h2"
                        component="div"
                    >
                        Exceptional Dental Care, On Your Terms
                    </Typography>
                    <Typography
                        sx={{ my: 3 }}
                        color="text.secondary"
                        variant="body2"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Obcaecati totam a cupiditate ea. Possimus eos
                        blanditiis magni doloremque ut atque nihil qui harum,
                        provident ad earum nam quia vero illum error dolor porro
                        architecto rerum dolore commodi quo. Quas doloremque
                        molestias, esse natus velit id placeat voluptatibus
                        amet, libero quibusdam sequi eos. Fuga, aliquid.
                        Voluptatibus reprehenderit veniam, enim soluta assumenda
                        nihil ut laudantium laborum, a odio non delectus eos
                        quos debitis. Iste porro quibusdam animi! Maxime,
                        facilis nostrum similique culpa error illum optio porro
                        distinctio aliquam dignissimos iure vero sed blanditiis
                        temporibus consectetur iusto molestiae rerum! Dolore,
                        consequuntur asperiores. A?
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;
