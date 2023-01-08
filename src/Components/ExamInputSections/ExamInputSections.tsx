import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import React from 'react';

export const ExamInputSections = () => {
  return (
    //TODO: Input sections with form?
    <Box>
        <Accordion>
            <AccordionSummary>
                Summary
            </AccordionSummary>
            <AccordionDetails>
                Details
            </AccordionDetails>
        </Accordion>
    </Box>
  );
}



type ExamProps = {
  // TODO
  text: string;
}

