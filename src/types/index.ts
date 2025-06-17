export type Environment = 'App' | 'Components' | 'Style Guide';
export type NavigationItemType = 'icon' | 'text';
export type AppPage = 'dashboard' | 'contacts' | 'calendar' | 'reports' | 'documents' | 'email' | 'calls' | 'chat' | 'projects' | 'settings';
export type InitiativeStatus = 'Not Started' | 'In Progress' | 'Completed' | 'Paused' | 'Escalated' | 'Awaiting Human Input';
export type SpotlightFilter = 'All initiatives' | 'My initiatives' | 'Paused' | 'Escalations' | 'Hiring' | 'Onboarding';
export type SpecialLayoutType = 'none' | 'projectOverview' | 'hiringMetrics';

// Base interface for all chat messages
export interface BaseMessage {
  id: string;
  sender: 'user' | 'ai';
  timestamp?: Date;
}

// Chat bubble message (regular text messages)
export interface ChatBubbleMessage extends BaseMessage {
  type: 'chat';
  content: string;
}

// Layout display message (special layouts)
export interface LayoutDisplayMessage extends BaseMessage {
  type: 'layout';
  layoutType: SpecialLayoutType;
}

// Union type for all possible chat messages
export type ChatMessage = ChatBubbleMessage | LayoutDisplayMessage;

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'completed' | 'in-progress' | 'not-started';
  progressPercentage: number;
  assignedAgentId: string;
  sourcedCandidates?: string[];
  attachedFiles?: AttachedFile[];
}

export interface AttachedFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
}

export interface ProjectAction {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'escalated' | 'not-started';
  category: string;
  milestoneId: string;
}

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
  milestones: Milestone[];
  attachedFiles: AttachedFile[];
  actions: ProjectAction[];
}