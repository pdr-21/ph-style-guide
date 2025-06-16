export type Environment = 'App' | 'Components' | 'Style Guide';
export type NavigationItemType = 'icon' | 'text';
export type AppPage = 'dashboard' | 'contacts' | 'calendar' | 'reports' | 'documents' | 'email' | 'calls' | 'projects' | 'settings';

export interface User {
  name: string;
  initials: string;
}

export interface NavigationItem {
  id: string;
  icon: any;
  label: string;
  path: string;
  isActive?: boolean;
}

export interface TaskPerformance {
  completed: number;
  incomplete: number;
  upcoming: number;
}

export interface Initiative {
  id: string;
  projectName: string;
  description: string;
  category: 'Recruitment' | 'Onboarding' | 'Training' | 'Performance' | 'Compliance' | 'Other';
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Paused' | 'Awaiting Human Input';
  startDate: string;
  deadline: string;
  projectLead: string;
  projectTeam: string[];
  aiAgentsInvolved: string[];
  taskPerformance: TaskPerformance;
  escalations: number;
}