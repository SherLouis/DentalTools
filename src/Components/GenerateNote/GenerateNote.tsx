import React from 'react';
import { TextField, Box } from '@mui/material';

function GenerateNote(examProps: ExamProps) {

  return (
    //TODO: format to correct size
      <TextField multiline defaultValue={generateTextFromProps(examProps)}></TextField>
  );
}

const generateTextFromProps = (examProps: ExamProps) => { 
  //TODO: generate note from exam props
  return "generated text: " + examProps.text 
}

export default GenerateNote;

type ExamProps = {
  // TODO
  text: string;
}

