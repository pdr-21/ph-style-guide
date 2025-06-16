export type Environment = 'App' | 'Components' | 'Style Guide';
export type NavigationItemType = 'icon' | 'text';
export type AppPage = 'dashboard' | 'contacts' | 'calendar' | 'reports' | 'documents' | 'email' | 'calls' | 'projects' | 'settings';
export type InitiativeStatus = 'Not Started' | 'In Progress' | 'Completed' | 'Paused' | 'Escalated' | 'Awaiting Human Input';
export type SpotlightFilter = 'All initiatives' | 'My initiatives' | 'Paused' | 'Escalations' | 'Hiring' | 'Onboarding';

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

export interface TaskBreakdown {
  total: number;
  completed: number;
  escalated: number;
  paused: number;
  notStarted: number;
}

export interface AI_Agent {
  id: string;
  name: string;
  imageIndex: number;
  leadsFound: number;
  successRate: number;
  avgResponseTime: string;
}

export interface Human {
  id: string;
  name: string;
  initials: string;
  role: string;
  department: string;
  email: string;
  imageIndex?: number;
}

export interface Initiative {
  id: string;
  name: string;
  shortDescription: string;
  status: InitiativeStatus;
  startDate: string;
  endDate: string;
  taskDistribution: TaskBreakdown;
  aiAgents: AI_Agent[];
  humanInLoop: Human;
  category: SpotlightFilter;
}