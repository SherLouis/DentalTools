import React from 'react';
import { TextField, Box } from '@mui/material';
import { ExamProps } from '../ExamInputSections/ExamInputSections';

function GenerateNote(examProps: ExamProps) {

  return (
    //TODO: format to correct size
    //TODO: only generate
      <TextField fullWidth multiline minRows={10} defaultValue={generateTextFromProps(examProps)}></TextField>
  );
}

const generateTextFromProps = (examProps: ExamProps) => { 
  //TODO: generate note from exam props
  return "generated text: " + examProps.text 
}

export default GenerateNote;

