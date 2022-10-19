import * as React from 'react';
import Title from '../dashboard/title';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function preventDefault(event) {
  event.preventDefault();
}

export default function Detail() {
  return (
    <React.Fragment>
      <Title align="center">Motor Details</Title>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="motorName"
            name="motorName"
            label="Motor name"
            fullWidth
            variant="standard"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="motorID"
            name="motorID"
            label="Motor ID"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            id="motorDetails"
            name="motorDetails"
            label="Motor Details"
            fullWidth
            autoComplete="details"
            variant="standard"
          />
        </Grid>
        </Grid>
    </React.Fragment>
  );
}