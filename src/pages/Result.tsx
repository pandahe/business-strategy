import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const { state } = useAppContext();
  const navigate = useNavigate();
  const { businessInfo, strategyTable } = state;

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          业务战略推导结果
        </Typography>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              公司基本信息
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" width="30%">公司名称</TableCell>
                    <TableCell>{businessInfo.companyName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">所属行业</TableCell>
                    <TableCell>{businessInfo.industry}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">年营业额</TableCell>
                    <TableCell>{businessInfo.annualRevenue}万元</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">员工人数</TableCell>
                    <TableCell>{businessInfo.employeeCount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">主要产品/服务</TableCell>
                    <TableCell>{businessInfo.mainProducts.join('、')}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">目标客户群体</TableCell>
                    <TableCell>{businessInfo.targetCustomers.join('、')}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">主要竞争对手</TableCell>
                    <TableCell>{businessInfo.competitors.join('、')}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">核心优势</TableCell>
                    <TableCell>{businessInfo.uniqueAdvantages.join('、')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              愿景与使命
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" width="30%">愿景</TableCell>
                    <TableCell>{strategyTable.vision}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">使命</TableCell>
                    <TableCell>{strategyTable.mission}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              战略目标
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {strategyTable.goals.map((goal, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{goal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              战略举措
            </Typography>
            {strategyTable.strategies.map((strategy, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {strategy.category}
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {strategy.items.map((item, itemIndex) => (
                        <TableRow key={itemIndex}>
                          <TableCell width="10%">{itemIndex + 1}</TableCell>
                          <TableCell>{item}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              资源配置
            </Typography>
            {strategyTable.resources.map((resource, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {resource.type}
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {resource.items.map((item, itemIndex) => (
                        <TableRow key={itemIndex}>
                          <TableCell width="10%">{itemIndex + 1}</TableCell>
                          <TableCell>{item}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              风险评估
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>风险</TableCell>
                    <TableCell>应对措施</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {strategyTable.risks.map((risk, index) => (
                    <TableRow key={index}>
                      <TableCell>{risk.risk}</TableCell>
                      <TableCell>{risk.mitigation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRestart}
            >
              重新开始
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Result; 