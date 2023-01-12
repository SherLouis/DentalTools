import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const CollapsibleSection = (props: CollapsibleSectionProps) => {

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{bgcolor: 'gray', color: 'white'}}>
        {props.title}
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: 'lightgray'}}>
        {props.content}
      </AccordionDetails>
    </Accordion>
  );
}

export type CollapsibleSectionProps = {
  title: React.ReactNode
  content: React.ReactNode
}