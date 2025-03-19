export interface BusinessInfo {
  companyName: string;
  industry: string;
  annualRevenue: string;
  employeeCount: string;
  mainProducts: string[];
  targetCustomers: string[];
  competitors: string[];
  uniqueAdvantages: string[];
}

export interface StrategyTable {
  vision: string;
  mission: string;
  goals: string[];
  strategies: {
    category: string;
    items: string[];
  }[];
  resources: {
    type: string;
    items: string[];
  }[];
  risks: {
    risk: string;
    mitigation: string;
  }[];
}

export interface ValidationQuestion {
  id: string;
  question: string;
  answer: boolean;
  relatedStrategyId?: string;
}

export interface AppState {
  currentStep: number;
  businessInfo: BusinessInfo;
  strategyTable: StrategyTable;
  validationQuestions: ValidationQuestion[];
}

export type AppAction =
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'UPDATE_BUSINESS_INFO'; payload: BusinessInfo }
  | { type: 'UPDATE_STRATEGIC_FRAMEWORK'; payload: StrategicFramework }
  | { type: 'UPDATE_VALIDATION_ANSWERS'; payload: ValidationAnswer[] };

export interface AdminConfig {
  stepOne: {
    companyInfo: Array<{
      label: string;
      required: boolean;
      type: 'text' | 'number' | 'textarea';
      placeholder?: string;
    }>;
    mainProducts: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    targetCustomers: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    competitors: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    uniqueAdvantages: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
  };
  stepTwo: {
    vision: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    mission: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    goals: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    strategies: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    resources: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
    risks: {
      label: string;
      required: boolean;
      placeholder?: string;
    };
  };
  stepThree: {
    questions: Array<{
      id: string;
      question: string;
      category: string;
      required: boolean;
    }>;
  };
}

export interface StrategicFramework {
  vision: string;
  mission: string;
  goals: string;
  strategies: string;
  resources: string;
  risks: string;
}

export interface ValidationAnswer {
  questionId: string;
  answer: boolean;
} 