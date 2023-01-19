import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { TextField, Box } from '@mui/material';
import { DentalExamInputs } from '../../Types/DentalExamInputs';

export const GenerateNote = (props: DentalExamInputs) => {
  return (
    //TODO: format to correct size
    <div key={uuidv4()}>
      <TextField fullWidth multiline minRows={10} defaultValue={generateTextFromProps(props)}></TextField>
    </div>
  );
}

const generateTextFromProps = (examProps: DentalExamInputs) => {
  //TODO: generate note from exam props
  return "generated text: \n" + JSON.stringify(examProps, null, 2);
}
