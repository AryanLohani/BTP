import * as React from 'react';
import { useParams } from 'react-router-dom';
import Charts from '../charts/displayCharts';
import { Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import MotorDetails from './detail';

export default function HealthCard() {
    const {motorId} = useParams();
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <MotorDetails motorID={motorId}/>
                    </Paper>
                </Grid>
                {/* Chart */}
                <Grid item xs={12} >
                    <Charts />
                </Grid>
            </Grid>
        </Container>
    );
}
