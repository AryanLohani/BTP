import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

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

export default function Faults() {
  return (
    <React.Fragment>
      <Title>Recent Faults</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date and Time</TableCell>
            <TableCell>Motor ID</TableCell>
            <TableCell>View Motor HealthCard</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}