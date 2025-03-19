export interface StepOneConfig {
  companyInfo: {
    label: string;
    required: boolean;
    type: 'text' | 'number' | 'textarea';
    placeholder?: string;
  }[];
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
}

export interface StepTwoConfig {
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
    categories: {
      label: string;
      placeholder?: string;
    }[];
  };
  resources: {
    label: string;
    required: boolean;
    categories: {
      label: string;
      placeholder?: string;
    }[];
  };
  risks: {
    label: string;
    required: boolean;
    riskLabel: string;
    mitigationLabel: string;
  };
}

export interface StepThreeConfig {
  questions: {
    id: string;
    question: string;
    category: 'vision' | 'mission' | 'goals' | 'strategies' | 'resources' | 'risks';
    required: boolean;
  }[];
}

export interface AdminConfig {
  stepOne: StepOneConfig;
  stepTwo: StepTwoConfig;
  stepThree: StepThreeConfig;
} 