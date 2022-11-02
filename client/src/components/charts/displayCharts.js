import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./displayCharts.css"
import Liveupdateacstat from './liveupdateacstat'
import Liveupdatecompstat from './liveupdatecompstat'
import Liveupdatenew from './liveupdatenew'
import LiveupdatenewPower from './liveupdatenewPower'
import LiveupdatenewVoltage from './liveupdatenewVoltage'

export default function Charts(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Current</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Liveupdatenew/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>RPM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LiveupdatenewVoltage/>
        </AccordionDetails>
      </Accordion>

     
    </div>
  );
}
