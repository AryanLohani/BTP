import * as React from 'react';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(motorID, emergencyContact, faultTime) {
  return { motorID, emergencyContact, faultTime };
}

const rows = [
  createData(
    'motor-fake-id',
    '494499494949',
    '10/21/2022:02:50',
  ),

  createData(
    'motor-fake-id2',
    '494499494949',
    '9/21/2022:02:15',
  ),
  createData(
    'motor-fake-id3',
    '494499494949',
    '10/21/2022:01:50',
  ),createData(
    'motor-fake-id4',
    '494499494949',
    '10/21/2022:02:50',
  ),
];

export default function Faults() {
    return (
        <React.Fragment>
            <Paper sx={{m:2}}>
            <Typography component="h1" variant="h5" align="center" sx={{ color: '#651fff', mb: 2}}> Recent Faults</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Motor ID</StyledTableCell>
                            <StyledTableCell align="right">Fault Time</StyledTableCell>
                            <StyledTableCell align="right">Emergency Contact</StyledTableCell>
                            <StyledTableCell align="right">HealthCard</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.motorID}>
                                <StyledTableCell component="th" scope="row">
                                    {row.motorID}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.faultTime}</StyledTableCell>
                                <StyledTableCell align="right">{row.emergencyContact}</StyledTableCell>
                                <StyledTableCell align="right"><Link to={`/healthCard/${row.motorID}`}>HealthCard</Link></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </React.Fragment>

    );
}
