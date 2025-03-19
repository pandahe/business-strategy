import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminConfig } from '../types';

const defaultConfig: AdminConfig = {
  stepOne: {
    companyInfo: [
      {
        label: '公司名称',
        required: true,
        type: 'text',
        placeholder: '请输入公司名称',
      },
      {
        label: '所属行业',
        required: true,
        type: 'text',
        placeholder: '请输入所属行业',
      },
      {
        label: '年营业额（万元）',
        required: true,
        type: 'number',
        placeholder: '请输入年营业额',
      },
      {
        label: '员工人数',
        required: true,
        type: 'number',
        placeholder: '请输入员工人数',
      },
    ],
    mainProducts: {
      label: '主要产品/服务',
      required: true,
      placeholder: '输入产品/服务',
    },
    targetCustomers: {
      label: '目标客户群体',
      required: true,
      placeholder: '输入目标客户',
    },
    competitors: {
      label: '主要竞争对手',
      required: true,
      placeholder: '输入竞争对手',
    },
    uniqueAdvantages: {
      label: '核心优势',
      required: true,
      placeholder: '输入核心优势',
    },
  },
  stepTwo: {
    vision: {
      label: '愿景',
      required: true,
      placeholder: '请输入公司愿景',
    },
    mission: {
      label: '使命',
      required: true,
      placeholder: '请输入公司使命',
    },
    goals: {
      label: '战略目标',
      required: true,
      placeholder: '请输入战略目标',
    },
    strategies: {
      label: '战略举措',
      required: true,
      placeholder: '请输入战略举措',
    },
    resources: {
      label: '资源配置',
      required: true,
      placeholder: '请输入资源配置',
    },
    risks: {
      label: '风险评估',
      required: true,
      placeholder: '请输入风险评估',
    },
  },
  stepThree: {
    questions: [
      {
        id: 'q1',
        question: '您的战略目标是否具体且可衡量？',
        category: '目标设定',
        required: true,
      },
      {
        id: 'q2',
        question: '您的战略举措是否与目标相匹配？',
        category: '战略匹配',
        required: true,
      },
      {
        id: 'q3',
        question: '您是否考虑了所有必要的资源？',
        category: '资源配置',
        required: true,
      },
      {
        id: 'q4',
        question: '您是否制定了风险应对措施？',
        category: '风险管理',
        required: true,
      },
    ],
  },
};

interface AdminConfigContextType {
  config: AdminConfig;
  updateConfig: (newConfig: AdminConfig) => void;
  resetConfig: () => void;
}

const AdminConfigContext = createContext<AdminConfigContextType | null>(null);

export const AdminConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<AdminConfig>(() => {
    const savedConfig = localStorage.getItem('adminConfig');
    return savedConfig ? JSON.parse(savedConfig) : defaultConfig;
  });

  useEffect(() => {
    localStorage.setItem('adminConfig', JSON.stringify(config));
  }, [config]);

  const updateConfig = (newConfig: AdminConfig) => {
    setConfig(newConfig);
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
  };

  return (
    <AdminConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </AdminConfigContext.Provider>
  );
};

export const useAdminConfig = () => {
  const context = useContext(AdminConfigContext);
  if (!context) {
    throw new Error('useAdminConfig must be used within an AdminConfigProvider');
  }
  return context;
}; 