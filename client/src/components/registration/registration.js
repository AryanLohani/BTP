import React, {useState} from 'react';
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegistrationDetails from './registration.details';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();

export default function Registration() {
    const [motorDetails, setMotorDetails] = useState({});
    const onSubmit = () => {   
        axios.post('http://localhost:8080/api/motors/', JSON.stringify(motorDetails))
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        GAIL
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Details
                    </Typography>
                    <React.Fragment>
                        <RegistrationDetails motorDetails={motorDetails} setMotorDetails={setMotorDetails}/>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <Button
                                variant="contained"
                                sx={{ mt: 3, ml: 1 }}
                                onClick={() => onSubmit()}
                            >
                                Submit
                            </Button>
                        </Box>
                    </React.Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}