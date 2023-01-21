import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import * as InputSections from '../InputSections';
import { Control } from 'react-hook-form';
import { DentalExamInputs } from '../../Types/DentalExamInputs';

// Panel with all sections. To be used within a form
export const ExamInputSections = (props: InputSectionProps) => (
  <Box>
    <Typography variant='h4'>Inputs</Typography>
    <Paper elevation={5}>
      <InputSections.GeneratlInputSection control={props.control} />
      <InputSections.TabaccoInputSection control={props.control} />
      <InputSections.AlcoolInputSection control={props.control} />
      <InputSections.EOEInputSection control={props.control} />
      <InputSections.IOEInputSection control={props.control} />
      <InputSections.RadioExamInputSection control={props.control} />
      <InputSections.DiagnosticInputSection control={props.control} />
      <InputSections.TreatmentInputSection control={props.control} />
      <InputSections.ProcedureInputSection control={props.control} />
    </Paper>
  </Box>
)



export type InputSectionProps = {
  control: Control<DentalExamInputs>
}

