import React, { createContext, useContext, useReducer } from 'react';
import {
  AppState,
  AppAction,
  BusinessInfo,
  StrategicFramework,
  ValidationAnswer,
} from '../types';

const initialState: AppState = {
  currentStep: 1,
  businessInfo: {
    companyName: '',
    industry: '',
    annualRevenue: '',
    employeeCount: '',
    mainProducts: [],
    targetCustomers: [],
    competitors: [],
    uniqueAdvantages: [],
  },
  strategicFramework: {
    vision: '',
    mission: '',
    goals: '',
    strategies: '',
    resources: '',
    risks: '',
  },
  validationAnswers: [],
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    case 'UPDATE_BUSINESS_INFO':
      return { ...state, businessInfo: action.payload };
    case 'UPDATE_STRATEGIC_FRAMEWORK':
      return { ...state, strategicFramework: action.payload };
    case 'UPDATE_VALIDATION_ANSWERS':
      return { ...state, validationAnswers: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 