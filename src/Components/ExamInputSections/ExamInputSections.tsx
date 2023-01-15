import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import * as InputSections from '../InputSections';

// Panel with all sections. To be used within a form
export const ExamInputSections = () => (
  //TODO: Input sections with form?
  <Box>
    <Typography variant='h4'>Inputs</Typography>
    <Paper elevation={5}>
      <InputSections.GeneratlInputSection/>
      <InputSections.TabaccoInputSection />
      <InputSections.AlcoolInputSection />
      <InputSections.EOEInputSection />
      <InputSections.IOEInputSection />
      <InputSections.RadioExamInputSection />
      <InputSections.DiagnosticInputSection />
      <InputSections.TreatmentInputSection />
      <InputSections.ProcedureInputSection />
    </Paper>
  </Box>
)



export type ExamProps = {
  // TODO: proper props
  text: string
}

