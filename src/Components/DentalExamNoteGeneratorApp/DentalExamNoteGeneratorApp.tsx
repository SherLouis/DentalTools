import { ReactComponent as Logo } from './../../logo.svg'
import { Typography, Button, Box, Stack, AppBar, Toolbar, SvgIcon, useTheme, IconButton } from '@mui/material';
import { GenerateNote } from '../GenerateNote/GenerateNote';
import { ExamInputSections } from '../ExamInputSections/ExamInputSections';
import React, { useState } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { ColorModeContext } from './../App/App';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DentalExamInputs } from '../../Types/DentalExamInputs';


function DentalExamNoteGeneratorApp() {
  const defaultValues = {
    reasonOfVisit: "",
    hasAntecedents: false,
    antecedents: "",
    hasMedication: false,
    medications: "",
    hasAllergies: false,
    allergies: "",

    tabaccoIsCurrent: false,
    tabaccoIsPast: false,
    tabbacoYears: 0,
    tabbacoPackPerDay: 0,

    isAlcoolUsage: false,
    alcoolUsageFrequency: "",
    alcoolDrinksPerDay: 0,
    alcoolYears: 0,
    alcoolDrinksPerMonth: 0,

    EOEIsNormal: true,

    radioPerformed: false,
    radioDateTime: "",
    radioType: "",
    radioNumber: 0,
    radioErrors: "",
    radioNormalCondyles: true,
    radioCondyles: "",
    radioNormalSinuses: true,
    radioSinuses: "",
    radioNormalBasalBones: true,
    radioBasalBones: "",
    radioNormalApicalLesions: true,
    radioApicalLesions: "",
    radioNormalPeriodontalBoneLoss: true,
    radioPeriodontalBoneLoss: "",
    radioNormalTeeth: true,
    radioTeeth: "",
    radioFinalInterpretations: "",

    diagnosticImpressions: "",

    treatmentOptimalPlan: "",
    treatmentAlternativePlans: "",
    treatmentDiscussions: "",
    treatmentChosenPlan: "",

    procedureDescription: "",
    procedureReviewd: false,
    procedureConsent: "",
  }

  const [showNote, setShowNote] = useState(false);
  const [examValues, setExamValues] = useState<DentalExamInputs>(defaultValues);

  const onSubmit: SubmitHandler<DentalExamInputs> = data => {
    setExamValues(data);
    console.log(examValues);
  };

  const { handleSubmit, control, formState: { errors } } = useForm<DentalExamInputs>({
    defaultValues: defaultValues
  });

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // FIXME: fix layout and spacing with form
  // TODO: transform note into a drawer
  const appHeader = (<AppBar position="static">
    <Toolbar>
      <SvgIcon fontSize='large' color='inherit' sx={{ margin: 2 }}><Logo /></SvgIcon>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Dental Exam Note Generator
      </Typography>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Toolbar>
  </AppBar>)


  // FIXME: rendered 2 times for nothing...
  return (
    <Box>
      {appHeader}
      <Stack direction="row" margin={2} spacing={2} justifyContent="space-between" alignItems="flex-start">
        <Stack flex={1} direction="column" spacing={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ExamInputSections control={control} />

            <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
              <Button variant="contained" color='primary' type='submit' onClick={() => {setShowNote(true)}}>Generate</Button>
            </Stack>
          </form>
        </Stack>

        {showNote && (
          <Stack direction="column" flex={1} spacing={2}>
            <GenerateNote {...examValues} />
          </Stack>
        )}
      </Stack >
    </Box >
  );
}

export default DentalExamNoteGeneratorApp;