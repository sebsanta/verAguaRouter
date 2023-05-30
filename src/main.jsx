import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
//import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#2f2c2c',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
         <App />
      </ThemeProvider>
  </BrowserRouter>,
)
