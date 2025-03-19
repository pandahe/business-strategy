import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Chip,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch({ type: 'RESET_STATE' });
    navigate('/step1');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          战略规划文档
        </Typography>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h5" gutterBottom>
              1. 公司基本信息
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">公司名称</TableCell>
                    <TableCell>{state.businessInfo.companyName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">行业</TableCell>
                    <TableCell>{state.businessInfo.industry}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">年收入</TableCell>
                    <TableCell>{state.businessInfo.annualRevenue}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">员工数量</TableCell>
                    <TableCell>{state.businessInfo.employeeCount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                主要产品/服务
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.businessInfo.mainProducts.map((product, index) => (
                  <Chip key={index} label={product} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                目标客户
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.businessInfo.targetCustomers.map((customer, index) => (
                  <Chip key={index} label={customer} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                主要竞争对手
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.businessInfo.competitors.map((competitor, index) => (
                  <Chip key={index} label={competitor} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                核心优势
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.businessInfo.uniqueAdvantages.map((advantage, index) => (
                  <Chip key={index} label={advantage} />
                ))}
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              2. 战略框架
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">愿景</TableCell>
                    <TableCell>{state.strategicFramework.vision}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">使命</TableCell>
                    <TableCell>{state.strategicFramework.mission}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                战略目标
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.strategicFramework.goals.map((goal, index) => (
                  <Chip key={index} label={goal} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                战略举措
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.strategicFramework.strategies.map((strategy, index) => (
                  <Chip key={index} label={strategy} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                资源配置
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.strategicFramework.resources.map((resource, index) => (
                  <Chip key={index} label={resource} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                风险管理
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {state.strategicFramework.risks.map((risk, index) => (
                  <Chip key={index} label={risk} />
                ))}
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              3. 战略验证
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>问题</TableCell>
                    <TableCell>回答</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.validationAnswers.map((answer, index) => (
                    <TableRow key={index}>
                      <TableCell>{answer.questionId}</TableCell>
                      <TableCell>{answer.answer ? '是' : '否'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleRestart}
            sx={{ mt: 2 }}
          >
            重新开始
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Result; 