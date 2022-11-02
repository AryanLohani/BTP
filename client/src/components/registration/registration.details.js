import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function RegistrationDetails({motorDetails, setMotorDetails}) {
  const onChange = (e) => {
      const name = e.target.name, value = e.target.value;
      let newMotorDetails = motorDetails;
      newMotorDetails[name] = value;
      setMotorDetails(newMotorDetails);
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motorName"
            name="motorName"
            label="Motor name"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motorID"
            name="motorID"
            label="Motor ID"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="geoLocation"
            name="geoLocation"
            label="Geographical Location"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="powerRating"
            name="powerRating"
            label="Power Rating"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="operatingSchedule"
            name="operatingSchedule"
            label="Operating Schedule"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Temperature"
            name="Temperature"
            label="Temperature"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emergencyContact"
            name="emergencyContact"
            label="Emergency Contact"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="installmentDate"
            name="installmentDate"
            label="Installment Date (DD-MM-YYYY)"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="insulationQuality"
            name="insulationQuality"
            label="Insulation Quality"
            onChange={(e)=>onChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}