import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import { Typography, Button, Paper } from '@mui/material';
function App() {
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
      </Paper>
    </Container>
  );
}
export default App;