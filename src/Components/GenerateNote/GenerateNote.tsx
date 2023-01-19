import React from 'react';
import { TextField, Box } from '@mui/material';
import { DentalExamInputs } from '../../Types/DentalExamInputs';

export const GenerateNote = (props: DentalExamInputs) => {

  console.log(props.reasonOfVisit);
  return (
    //TODO: format to correct size
    //TODO: only generate
      <TextField fullWidth multiline minRows={10} defaultValue={generateTextFromProps(props)}></TextField>
  );
}

const generateTextFromProps = (examProps: DentalExamInputs) => { 
  //TODO: generate note from exam props
  return "generated text: " + examProps.reasonOfVisit + "\n" + JSON.stringify(examProps, null, 2);
}
