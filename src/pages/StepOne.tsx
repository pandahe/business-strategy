import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useAdminConfig } from '../context/AdminConfigContext';
import { BusinessInfo } from '../types';

const StepOne: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { config } = useAdminConfig();
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(state.businessInfo);
  const [newProduct, setNewProduct] = useState('');
  const [newCustomer, setNewCustomer] = useState('');
  const [newCompetitor, setNewCompetitor] = useState('');
  const [newAdvantage, setNewAdvantage] = useState('');

  const handleInputChange = (field: keyof BusinessInfo, value: string) => {
    setBusinessInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddItem = (
    field: 'mainProducts' | 'targetCustomers' | 'competitors' | 'uniqueAdvantages',
    value: string,
    setValue: (value: string) => void
  ) => {
    if (value.trim()) {
      setBusinessInfo((prev) => ({
        ...prev,
        [field]: [...prev[field], value.trim()],
      }));
      setValue('');
    }
  };

  const handleRemoveItem = (
    field: 'mainProducts' | 'targetCustomers' | 'competitors' | 'uniqueAdvantages',
    index: number
  ) => {
    setBusinessInfo((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    dispatch({ type: 'UPDATE_BUSINESS_INFO', payload: businessInfo });
    dispatch({ type: 'SET_CURRENT_STEP', payload: 2 });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          第一步：基本信息收集
        </Typography>
        
        <Stack spacing={3}>
          {config.stepOne.companyInfo.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              value={businessInfo[field.label as keyof BusinessInfo] || ''}
              onChange={(e) => handleInputChange(field.label as keyof BusinessInfo, e.target.value)}
              fullWidth
              required={field.required}
              placeholder={field.placeholder}
              type={field.type === 'number' ? 'number' : 'text'}
              multiline={field.type === 'textarea'}
              rows={field.type === 'textarea' ? 3 : 1}
            />
          ))}

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepOne.mainProducts.label}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder={config.stepOne.mainProducts.placeholder}
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => handleAddItem('mainProducts', newProduct, setNewProduct)}
              >
                添加
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {businessInfo.mainProducts.map((product, index) => (
                <Chip
                  key={index}
                  label={product}
                  onDelete={() => handleRemoveItem('mainProducts', index)}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepOne.targetCustomers.label}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                placeholder={config.stepOne.targetCustomers.placeholder}
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => handleAddItem('targetCustomers', newCustomer, setNewCustomer)}
              >
                添加
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {businessInfo.targetCustomers.map((customer, index) => (
                <Chip
                  key={index}
                  label={customer}
                  onDelete={() => handleRemoveItem('targetCustomers', index)}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepOne.competitors.label}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                value={newCompetitor}
                onChange={(e) => setNewCompetitor(e.target.value)}
                placeholder={config.stepOne.competitors.placeholder}
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => handleAddItem('competitors', newCompetitor, setNewCompetitor)}
              >
                添加
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {businessInfo.competitors.map((competitor, index) => (
                <Chip
                  key={index}
                  label={competitor}
                  onDelete={() => handleRemoveItem('competitors', index)}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {config.stepOne.uniqueAdvantages.label}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                value={newAdvantage}
                onChange={(e) => setNewAdvantage(e.target.value)}
                placeholder={config.stepOne.uniqueAdvantages.placeholder}
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => handleAddItem('uniqueAdvantages', newAdvantage, setNewAdvantage)}
              >
                添加
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {businessInfo.uniqueAdvantages.map((advantage, index) => (
                <Chip
                  key={index}
                  label={advantage}
                  onDelete={() => handleRemoveItem('uniqueAdvantages', index)}
                />
              ))}
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            sx={{ mt: 2 }}
          >
            下一步
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default StepOne; 