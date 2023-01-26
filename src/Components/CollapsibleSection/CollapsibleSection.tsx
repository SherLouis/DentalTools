import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const CollapsibleSection = (props: CollapsibleSectionProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {props.title}
      </AccordionSummary>
      <AccordionDetails>
        {props.content}
      </AccordionDetails>
    </Accordion>
  );
}

export type CollapsibleSectionProps = {
  title: React.ReactNode
  content: React.ReactNode
}