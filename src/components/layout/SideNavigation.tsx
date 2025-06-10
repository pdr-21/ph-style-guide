import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart3,
  Mail,
  Phone
} from 'lucide-react';
import { NavigationItem, Environment } from '../../types';

interface SideNavigationProps {
  currentView: Environment;
  onEnvironmentChange: (view: Environment, subView?: string) => void;
  activeStyleGuideSection: string;
  activeComponentSection: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ currentView, onEnvironmentChange, activeStyleGuideSection, activeComponentSection }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  // App navigation items (icons only)
  const appNavigationItems: NavigationItem[] = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
    { id: 'contacts', icon: Users, label: 'Contacts', path: '/contacts' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar' },
    { id: 'reports', icon: BarChart3, label: 'Reports', path: '/reports' },
    { id: 'documents', icon: FileText, label: 'Documents', path: '/documents' },
    { id: 'email', icon: Mail, label: 'Email', path: '/email' },
    { id: 'calls', icon: Phone, label: 'Calls', path: '/calls' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  // Style Guide navigation items (text only)
  const styleGuideItems = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'corner-radius', label: 'Corner Radius' },
    { id: 'borders', label: 'Borders' },
    { id: 'shadows', label: 'Shadows' },
  ];

  // Components navigation items (text only)
  const componentItems = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'dropdowns', label: 'Dropdowns' },
    { id: 'modals', label: 'Modals' },
    { id: 'cards', label: 'Cards' },
  ];

  const renderAppNavigation = () => (
    <aside className="fixed left-0 top-18 w-16 h-[calc(100vh-4.5rem)] bg-gr-25 border-r border-n-75 z-40">
      <nav className="py-4">
        <ul className="space-y-2">
          {appNavigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id} className="px-2 py-1">
                <button
                  onClick={() => setActiveItem(item.id)}
                  className="w-full flex items-center justify-center transition-colors group relative"
                  title={item.label}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-p-50 text-p-300' 
                      : 'text-n-300 hover:text-n-500 hover:bg-n-50'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute left-full ml-2 px-2 py-1 bg-n-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 ${
                    isActive ? 'group-hover:opacity-0' : ''
                  }`}>
                    {item.label}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );

  const renderTextNavigation = (items: any[], activeItemState: string, handleItemClick: (id: string) => void) => (
    <aside className="fixed left-0 top-18 w-48 h-[calc(100vh-4.5rem)] bg-gr-25 border-r border-n-75 z-40">
      <nav className="py-4">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = activeItemState === item.id;
            
            return (
              <li key={item.id} className="px-2 py-1">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full px-2 py-2 text-left text-sm font-medium transition-colors rounded-xl ${
                    isActive 
                      ? 'bg-p-50 text-p-300' 
                      : 'text-n-400 hover:text-n-500 hover:bg-n-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );

  if (currentView === 'App') {
    return renderAppNavigation();
  } else if (currentView === 'Style Guide') {
    return renderTextNavigation(styleGuideItems, activeStyleGuideSection, (id) => onEnvironmentChange('Style Guide', id));
  } else if (currentView === 'Components') {
    return renderTextNavigation(componentItems, activeComponentSection, (id) => onEnvironmentChange('Components', id));
  }

  return renderAppNavigation();
};

export default SideNavigation;