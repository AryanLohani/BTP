import * as React from 'react';
import Title from "../utilities/title"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';
import { Typography } from '@mui/material';
import axios from 'axios';

export default function MotorDetails({ motorID }) {
  const [motorDetails, setMotorDetails] = React.useState([]);
  React.useEffect(() =>{
    axios.get('http://localhost:8080/api/motor/')
    .then(res => console.log(res.data))
  }, [])
  return (
    <React.Fragment>
      <Title>Motor Details</Title>
      <Grid container spacing={3} sx={{mt:1}}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="motorName"
            label="Motor Name"
            defaultValue={motorID}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="motorID"
            label="Motor ID"
            defaultValue={motorID}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="geoLocation"
            label="GeoLocation"
            defaultValue="Link"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="powerRating"
            label="Power Rating"
            defaultValue="1.2 KWH"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="operatingSchedule"
            label="Operating Schedule"
            defaultValue="9AM-5PM"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="Temperature"
            label="Temperature"
            defaultValue="27"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="emergencyContact"
            label="Emergency Contact"
            defaultValue="8084860905"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="installmentDate"
            label="Installment Date"
            defaultValue="16-01-21"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="insulationQuality"
            label="insulationQuality"
            defaultValue="Poor"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 , backgroundColor:'green'}}
        >
          Running
        </Button>

        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 , backgroundColor:'orange'}}
        >
          RAL : 28 Days
        </Button>
      </Box>
    </React.Fragment>
  );
}
