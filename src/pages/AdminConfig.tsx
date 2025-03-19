import React from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  IconButton,
  FormControlLabel,
  Switch,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAdminConfig } from '../context/AdminConfigContext';
import { AdminConfig } from '../types';

const AdminConfigPage: React.FC = () => {
  const { config, updateConfig } = useAdminConfig();

  const handleCompanyInfoChange = (index: number, field: keyof AdminConfig['stepOne']['companyInfo'][0], value: string | boolean) => {
    const newConfig = { ...config };
    newConfig.stepOne.companyInfo[index] = {
      ...newConfig.stepOne.companyInfo[index],
      [field]: value,
    };
    updateConfig(newConfig);
  };

  const handleAddCompanyInfo = () => {
    const newConfig = { ...config };
    newConfig.stepOne.companyInfo.push({
      label: '',
      required: true,
      type: 'text',
      placeholder: '',
    });
    updateConfig(newConfig);
  };

  const handleRemoveCompanyInfo = (index: number) => {
    const newConfig = { ...config };
    newConfig.stepOne.companyInfo = newConfig.stepOne.companyInfo.filter((_, i) => i !== index);
    updateConfig(newConfig);
  };

  const handleStepOneFieldChange = (
    field: keyof AdminConfig['stepOne'],
    subField: keyof AdminConfig['stepOne'][typeof field],
    value: string | boolean
  ) => {
    const newConfig = { ...config };
    newConfig.stepOne[field] = {
      ...newConfig.stepOne[field],
      [subField]: value,
    };
    updateConfig(newConfig);
  };

  const handleStepTwoFieldChange = (
    field: keyof AdminConfig['stepTwo'],
    subField: keyof AdminConfig['stepTwo'][typeof field],
    value: string | boolean
  ) => {
    const newConfig = { ...config };
    newConfig.stepTwo[field] = {
      ...newConfig.stepTwo[field],
      [subField]: value,
    };
    updateConfig(newConfig);
  };

  const handleQuestionChange = (index: number, field: keyof AdminConfig['stepThree']['questions'][0], value: string | boolean) => {
    const newConfig = { ...config };
    newConfig.stepThree.questions[index] = {
      ...newConfig.stepThree.questions[index],
      [field]: value,
    };
    updateConfig(newConfig);
  };

  const handleAddQuestion = () => {
    const newConfig = { ...config };
    newConfig.stepThree.questions.push({
      id: `q${newConfig.stepThree.questions.length + 1}`,
      question: '',
      category: '',
      required: true,
    });
    updateConfig(newConfig);
  };

  const handleRemoveQuestion = (index: number) => {
    const newConfig = { ...config };
    newConfig.stepThree.questions = newConfig.stepThree.questions.filter((_, i) => i !== index);
    updateConfig(newConfig);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          管理员配置
        </Typography>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              第一步：公司信息
            </Typography>
            <Stack spacing={2}>
              {config.stepOne.companyInfo.map((field, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TextField
                    label="字段名称"
                    value={field.label}
                    onChange={(e) => handleCompanyInfoChange(index, 'label', e.target.value)}
                    size="small"
                  />
                  <TextField
                    label="占位符"
                    value={field.placeholder || ''}
                    onChange={(e) => handleCompanyInfoChange(index, 'placeholder', e.target.value)}
                    size="small"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.required}
                        onChange={(e) => handleCompanyInfoChange(index, 'required', e.target.checked)}
                      />
                    }
                    label="必填"
                  />
                  <IconButton onClick={() => handleRemoveCompanyInfo(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={handleAddCompanyInfo}
                variant="outlined"
              >
                添加字段
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              第二步：战略框架
            </Typography>
            <Stack spacing={2}>
              {Object.entries(config.stepTwo).map(([key, field]) => (
                <Box key={key} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TextField
                    label="字段名称"
                    value={field.label}
                    onChange={(e) => handleStepTwoFieldChange(key as keyof AdminConfig['stepTwo'], 'label', e.target.value)}
                    size="small"
                  />
                  <TextField
                    label="占位符"
                    value={field.placeholder || ''}
                    onChange={(e) => handleStepTwoFieldChange(key as keyof AdminConfig['stepTwo'], 'placeholder', e.target.value)}
                    size="small"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={field.required}
                        onChange={(e) => handleStepTwoFieldChange(key as keyof AdminConfig['stepTwo'], 'required', e.target.checked)}
                      />
                    }
                    label="必填"
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              第三步：验证问题
            </Typography>
            <Stack spacing={2}>
              {config.stepThree.questions.map((question, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TextField
                    label="问题"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    size="small"
                    fullWidth
                  />
                  <TextField
                    label="类别"
                    value={question.category}
                    onChange={(e) => handleQuestionChange(index, 'category', e.target.value)}
                    size="small"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={question.required}
                        onChange={(e) => handleQuestionChange(index, 'required', e.target.checked)}
                      />
                    }
                    label="必填"
                  />
                  <IconButton onClick={() => handleRemoveQuestion(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={handleAddQuestion}
                variant="outlined"
              >
                添加问题
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AdminConfigPage; 