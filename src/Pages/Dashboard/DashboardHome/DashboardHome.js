import React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
                <Calendar date={date} setDate={setDate}></Calendar>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
