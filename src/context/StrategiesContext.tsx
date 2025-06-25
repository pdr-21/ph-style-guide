import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Strategy {
  id: string;
  name: string;
  description: string;
  status: 'Draft' | 'In Progress' | 'Completed' | 'Paused' | 'Planned';
  startDate: string;
  endDate: string;
  progress: number;
  milestones: {
    id: number;
    name: string;
    dueDate: Date;
    assignedAgent: string;
    progress: number;
  }[];
  selectedAgents: {
    name: string;
    avatar: string;
    leadsFound: number;
    successRate: number;
    avgResponseTime: string;
  }[];
  humanInLoop: {
    name: string;
    avatar: string;
    role: string;
    department: string;
    email: string;
  } | null;
  createdAt: Date;
  updatedAt: Date;
}

interface StrategiesContextType {
  strategies: Strategy[];
  addStrategy: (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateStrategy: (id: string, updates: Partial<Strategy>) => void;
  deleteStrategy: (id: string) => void;
  getStrategy: (id: string) => Strategy | undefined;
}

const StrategiesContext = createContext<StrategiesContextType | undefined>(undefined);

export const useStrategies = () => {
  const context = useContext(StrategiesContext);
  if (!context) {
    throw new Error('useStrategies must be used within a StrategiesProvider');
  }
  return context;
};

interface StrategiesProviderProps {
  children: ReactNode;
}

export const StrategiesProvider: React.FC<StrategiesProviderProps> = ({ children }) => {
  const [strategies, setStrategies] = useState<Strategy[]>([]);

  const addStrategy = (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newStrategy: Strategy = {
      ...strategy,
      id: `strategy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: now,
      updatedAt: now,
    };
    setStrategies(prev => [...prev, newStrategy]);
  };

  const updateStrategy = (id: string, updates: Partial<Strategy>) => {
    setStrategies(prev => 
      prev.map(strategy => 
        strategy.id === id 
          ? { ...strategy, ...updates, updatedAt: new Date() }
          : strategy
      )
    );
  };

  const deleteStrategy = (id: string) => {
    setStrategies(prev => prev.filter(strategy => strategy.id !== id));
  };

  const getStrategy = (id: string) => {
    return strategies.find(strategy => strategy.id === id);
  };

  return (
    <StrategiesContext.Provider value={{
      strategies,
      addStrategy,
      updateStrategy,
      deleteStrategy,
      getStrategy,
    }}>
      {children}
    </StrategiesContext.Provider>
  );
}; 