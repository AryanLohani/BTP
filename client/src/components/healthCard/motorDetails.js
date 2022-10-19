import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../dashboard/title';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

// Generate Order Data
function createData(id, date, name, link) {
  return { id, date, name, link };
}

const rows = [
  createData(
    0,
    '2060',
    'x52',
    'link'
  ),
  createData(
    1,
    '2050',
    'y51',
    'link'
  ),
  createData(
    2,
    '2045',
    'z50',
    'link'
  ),
  createData(
    3,
    '2000',
    'y251',
    'link'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function MotorDetails() {
  return (
    <React.Fragment>
      <Title>Motor Details</Title>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>Motor ID</Grid>
        <Grid xs={12} md={6}>Motor Type</Grid>
        <Grid xs={12}>Geographical Location</Grid>
      </Grid>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more details
      </Link>
    </React.Fragment>
  );
}