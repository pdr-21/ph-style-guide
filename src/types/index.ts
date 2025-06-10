export type Environment = 'App' | 'Components' | 'Style Guide';

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