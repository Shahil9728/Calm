import React from 'react'
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion Menu 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Text goes here ...</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion Menu 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Text goes here ...</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian