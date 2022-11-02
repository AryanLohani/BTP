import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';
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

export default function Motors() {
    const [rows, setRows] = useState([]);
    React.useEffect(() =>{
        axios.get('http://localhost:8080/api/motors')
        .then(res => {
            res.data.map(row => setRows(prev => [...prev, row]))
        })
    },[])
    return (
        <React.Fragment>
            <Paper sx={{m:2}}>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Motor ID</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Emergency Contact</StyledTableCell>
                            <StyledTableCell align="right">HealthCard</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.motorId}>
                                <StyledTableCell component="th" scope="row">
                                    {row.motorId}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.status}</StyledTableCell>
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
