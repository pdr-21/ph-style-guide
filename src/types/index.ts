export type Environment = 'App' | 'Components' | 'Style Guide';
export type NavigationItemType = 'icon' | 'text';
export type AppPage = 'dashboard' | 'contacts' | 'calendar' | 'reports' | 'documents' | 'email' | 'calls' | 'settings';

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