import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './context/AppContext';
import { AdminConfigProvider } from './context/AdminConfigContext';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import AdminConfigPage from './pages/AdminConfig';
import Result from './pages/Result';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <AdminConfigProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/step1" replace />} />
              <Route path="/step1" element={<StepOne />} />
              <Route path="/step2" element={<StepTwo />} />
              <Route path="/step3" element={<StepThree />} />
              <Route path="/result" element={<Result />} />
              <Route path="/admin" element={<AdminConfigPage />} />
              <Route path="*" element={<Navigate to="/step1" replace />} />
            </Routes>
          </Router>
        </AdminConfigProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App; 