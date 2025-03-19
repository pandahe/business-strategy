import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useAdminConfig } from '../context/AdminConfigContext';
import { StrategicFramework } from '../types';

const StepTwo: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { config } = useAdminConfig();
  const [strategicFramework, setStrategicFramework] = useState<StrategicFramework>(
    state.strategicFramework
  );

  const handleInputChange = (field: keyof StrategicFramework, value: string) => {
    setStrategicFramework((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    dispatch({ type: 'UPDATE_STRATEGIC_FRAMEWORK', payload: strategicFramework });
    dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
  };

  const handleBack = () => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          第二步：战略框架构建
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.vision.label}
            </Typography>
            <TextField
              value={strategicFramework.vision}
              onChange={(e) => handleInputChange('vision', e.target.value)}
              fullWidth
              required={config.stepTwo.vision.required}
              placeholder={config.stepTwo.vision.placeholder}
              multiline
              rows={3}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.mission.label}
            </Typography>
            <TextField
              value={strategicFramework.mission}
              onChange={(e) => handleInputChange('mission', e.target.value)}
              fullWidth
              required={config.stepTwo.mission.required}
              placeholder={config.stepTwo.mission.placeholder}
              multiline
              rows={3}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.goals.label}
            </Typography>
            <TextField
              value={strategicFramework.goals}
              onChange={(e) => handleInputChange('goals', e.target.value)}
              fullWidth
              required={config.stepTwo.goals.required}
              placeholder={config.stepTwo.goals.placeholder}
              multiline
              rows={4}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.strategies.label}
            </Typography>
            <TextField
              value={strategicFramework.strategies}
              onChange={(e) => handleInputChange('strategies', e.target.value)}
              fullWidth
              required={config.stepTwo.strategies.required}
              placeholder={config.stepTwo.strategies.placeholder}
              multiline
              rows={4}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.resources.label}
            </Typography>
            <TextField
              value={strategicFramework.resources}
              onChange={(e) => handleInputChange('resources', e.target.value)}
              fullWidth
              required={config.stepTwo.resources.required}
              placeholder={config.stepTwo.resources.placeholder}
              multiline
              rows={4}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepTwo.risks.label}
            </Typography>
            <TextField
              value={strategicFramework.risks}
              onChange={(e) => handleInputChange('risks', e.target.value)}
              fullWidth
              required={config.stepTwo.risks.required}
              placeholder={config.stepTwo.risks.placeholder}
              multiline
              rows={4}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="outlined" onClick={handleBack}>
              上一步
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              下一步
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default StepTwo; 