import { ReactComponent as Logo } from './../../logo.svg'
import { Typography, Button, Box, Stack, AppBar, Toolbar, SvgIcon, useTheme, IconButton } from '@mui/material';
import GenerateNote from '../GenerateNote/GenerateNote';
import { ExamInputSections } from '../ExamInputSections/ExamInputSections';
import React, { useState } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import {ColorModeContext} from './../App/App';


function DentalExamNoteGeneratorApp() {
    const [showNote, setShowNote] = useState(false);
  
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
  
    // TODO: layout
    // TODO: transform note into a drawer
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <SvgIcon fontSize='large' color='inherit' sx={{ margin: 2 }}><Logo /></SvgIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dental Exam Note Generator
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Stack direction="row" margin={2} spacing={2} justifyContent="space-between" alignItems="flex-start">
          <Stack flex={1} direction="column" spacing={2}>
            <ExamInputSections />
            <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
              <Button variant="contained" color='primary' onClick={() => setShowNote(!showNote)}>Generate</Button>
            </Stack>
          </Stack>

          {showNote && (
            <Stack direction="column" flex={1} spacing={2}>
              <GenerateNote text={'this is a test'} />
            </Stack>
          )}
        </Stack >
      </Box >
    );
  }

export default DentalExamNoteGeneratorApp;