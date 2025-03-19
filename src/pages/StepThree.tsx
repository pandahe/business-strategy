import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Button,
  Box,
  Stack,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useAdminConfig } from '../context/AdminConfigContext';
import { ValidationAnswer } from '../types';

const StepThree: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { config } = useAdminConfig();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<ValidationAnswer[]>(state.validationAnswers);
  const [showError, setShowError] = useState(false);

  const handleAnswerChange = (questionId: string, answer: boolean) => {
    setAnswers((prev) => {
      const existingAnswer = prev.find((a) => a.questionId === questionId);
      if (existingAnswer) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, answer } : a
        );
      }
      return [...prev, { questionId, answer }];
    });
  };

  const handleNext = () => {
    const requiredQuestions = config.stepThree.questions.filter((q) => q.required);
    const unansweredRequired = requiredQuestions.filter(
      (q) => !answers.find((a) => a.questionId === q.id)?.answer
    );

    if (unansweredRequired.length > 0) {
      setShowError(true);
      return;
    }

    dispatch({ type: 'UPDATE_VALIDATION_ANSWERS', payload: answers });
    navigate('/result');
  };

  const handleBack = () => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 2 });
    navigate('/step2');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          第三步：战略验证
        </Typography>

        <Stack spacing={3}>
          {config.stepThree.questions.map((question) => (
            <Box key={question.id}>
              <Typography variant="subtitle1" gutterBottom>
                {question.question}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={answers.find((a) => a.questionId === question.id)?.answer || false}
                    onChange={(e) => handleAnswerChange(question.id, e.target.checked)}
                  />
                }
                label={answers.find((a) => a.questionId === question.id)?.answer ? '是' : '否'}
              />
            </Box>
          ))}

          {showError && (
            <Typography color="error" variant="body2">
              请回答所有必答题
            </Typography>
          )}

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

export default StepThree; 