import { ReactComponent as Logo } from './../../logo.svg'
import { Typography, Button, Box, Stack, AppBar, Toolbar, SvgIcon, useTheme, IconButton, Drawer } from '@mui/material';
import { GenerateNote } from '../GenerateNote/GenerateNote';
import { ExamInputSections } from '../ExamInputSections/ExamInputSections';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { ColorModeContext } from './../App/App';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DentalExamInputs } from '../../Types/DentalExamInputs';
import { ConsentType } from '../../Types/Consent';
import { CollapsibleSection } from '../CollapsibleSection/CollapsibleSection';


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
    EOEPathologies: [{ location: "", shape: "", mobility: "", color: "", size_in_mm: 0, effects: "" }],

    IOESoftIsNormal: true,
    IOESoftPathologies: [{ location: "", shape: "", mobility: "", color: "", size_in_mm: 0, effects: "" }],
    IOEHardIsNormal: true,
    IOEHardPathologies: [{ location: "", shape: "", mobility: "", color: "", size_in_mm: 0, effects: "" }],

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
    procedureConsent: ConsentType.None,
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

  return (
    <Box>
      {appHeader}
      <Stack direction="column" margin={2} spacing={2} justifyContent="space-between" alignItems="center">
        <Stack flex={1} direction="column" spacing={2} width="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ExamInputSections control={control} />

            <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
              <Button variant="contained" color='primary' type='submit' onClick={() => { setShowNote(true) }}>Generate</Button>
            </Stack>
          </form>
        </Stack>

        <Drawer variant='persistent' open={showNote} onClose={() => setShowNote(false)} anchor='bottom'>
          <CollapsibleSection
            title={<Typography variant='h4' component='div'>Generated note</Typography>}
            content={
                <GenerateNote {...examValues} />
            }
          />
        </Drawer>
      </Stack >



    </Box >
  );
}

export default DentalExamNoteGeneratorApp;