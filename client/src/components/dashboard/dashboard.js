import { Container, Box, borderRadius } from '@mui/system';
import { Accordion, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import React from "react";
import Faults from './faults';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#1de9b6', height: 150 }}>
              <Typography component="h1" variant="h5" align="center" sx={{ mb: 4 }}>
                Good Condition Motors
              </Typography>
              <Typography component="h1" variant="h5" align="center" sx={{ color: '#651fff' }}>
                <span style={{ border: '15px solid #651fff', padding: "10px", margin: "2px", borderRadius: "120px" }}>3</span>
              </Typography>

            </Paper>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#ff5252', height: 150 }}>
              <Typography component="h1" variant="h5" align="center" sx={{ mb: 4 }}>
                Bad Condition Motors
              </Typography>
              <Typography component="h1" variant="h5" align="center" sx={{ color: '#651fff' }}>
                <span style={{ border: '15px solid #651fff', padding: "10px", margin: "2px", borderRadius: "120px" }}>1</span>
              </Typography>

            </Paper>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#d32f2f', height: 150 }}>
              <Typography component="h1" variant="h5" align="center" sx={{ mb: 4 }}>
                Faulty Motors
              </Typography>
              <Typography component="h1" variant="h5" align="center" sx={{ color: '#651fff' }}>
                <span style={{ border: '15px solid #651fff', padding: "10px", margin: "2px", borderRadius: "120px" }}>0</span>
              </Typography>

            </Paper>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

            </Paper>
          </Grid>

          
          <Grid item xs={12}>
            <Faults/>
          </Grid>
      </Grid>
    </Container>
      </React.Fragment >
    );
}