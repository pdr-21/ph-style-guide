import React, { createContext, useContext, ReactNode } from 'react';

interface NewStrategyContextType {
  // State values
  editedTitle: string;
  editedDescription: string;
  editedHuman: string;
  milestoneList: any[];
  selectedAgents: any[];
  
  // State setters
  setEditedTitle: (title: string) => void;
  setEditedDescription: (description: string) => void;
  setEditedHuman: (human: string) => void;
  setMilestoneList: (milestones: any[]) => void;
  setSelectedAgents: (agents: any[]) => void;
  
  // Helper data
  agentOptions: any[];
  humanOptions: string[];
}

const NewStrategyContext = createContext<NewStrategyContextType | undefined>(undefined);

export const useNewStrategy = () => {
  const context = useContext(NewStrategyContext);
  if (!context) {
    throw new Error('useNewStrategy must be used within a NewStrategyProvider');
  }
  return context;
};

interface NewStrategyProviderProps {
  children: ReactNode;
  value: NewStrategyContextType;
}

export const NewStrategyProvider: React.FC<NewStrategyProviderProps> = ({ children, value }) => {
  return (
    <NewStrategyContext.Provider value={value}>
      {children}
    </NewStrategyContext.Provider>
  );
}; 