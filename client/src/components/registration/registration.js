import React, {useState} from 'react';
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegistrationDetails from './registration.details';

const theme = createTheme();

export default function Registration() {
    const [motorDetails, setMotorDetails] = useState({});
    const onSubmit = () => {   
        function replacer(key, value){
            return key == "language" ? undefined : value;
        }
        const data = JSON.stringify(motorDetails, replacer);
        axios.post('http://localhost:8080/api/motors', data)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
            </Container>
        </ThemeProvider>
    );
}