import React from 'react';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { CollapsibleSection } from '../CollapsibleSection/CollapsibleSection';

// Panel with all sections. To be used within a form
export const ExamInputSections = () => (
  //TODO: Input sections with form?
  <Box>
    <Typography variant='h4'>Inputs</Typography>
    <Paper elevation={5}>
      <CollapsibleSection title={<Box>This is a test</Box>} content={<Box><TextField label="test input text"></TextField></Box>}></CollapsibleSection>
      <CollapsibleSection title={<Box>This is a test</Box>} content={<Box><TextField label="test input text"></TextField></Box>}></CollapsibleSection>
      <CollapsibleSection title={<Box>This is a test</Box>} content={<Box><TextField label="test input text"></TextField></Box>}></CollapsibleSection>
    </Paper>
  </Box>
)



export type ExamProps = {
  // TODO: proper props
  text: string
}

