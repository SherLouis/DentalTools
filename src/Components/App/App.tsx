import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import { Typography, Button, Paper, Box } from '@mui/material';
import GenerateNote from '../GenerateNote/GenerateNote';
import { ExamInputSections } from '../ExamInputSections/ExamInputSections';
function App() {
  // TODO: layout
  return (
    <Container className="App">
      <Paper>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Box>
          <GenerateNote text={'this is a test'} />
          <ExamInputSections />
        </Box>
      </Paper>
    </Container>
  );
}
export default App;