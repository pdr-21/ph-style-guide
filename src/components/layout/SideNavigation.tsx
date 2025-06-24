import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart3,
  Mail,
  Phone,
  FolderOpen
} from 'lucide-react';
import { NavigationItem, Environment, AppPage } from '../../types';
import SideNavigationItem from './SideNavigationItem';
import SideNavigationDropdown from './SideNavigationDropdown';

interface SideNavigationProps {
  currentView: Environment;
  onEnvironmentChange: (view: Environment, subView?: string) => void;
  activeAppPage: AppPage;
  activeStyleGuideSection: string;
  activeComponentSection: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ 
  currentView, 
  onEnvironmentChange, 
  activeAppPage,
  activeStyleGuideSection, 
  activeComponentSection 
}) => {
  const [activeItem, setActiveItem] = useState(activeAppPage);

  // Sync with prop changes (e.g., when route changes via Link navigation)
  useEffect(() => {
    setActiveItem(activeAppPage);
  }, [activeAppPage]);

  // App navigation items (icons only)
  const appNavigationItems: NavigationItem[] = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
    { id: 'contacts', icon: Users, label: 'Contacts', path: '/contacts' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar' },
    { id: 'reports', icon: BarChart3, label: 'Reports', path: '/reports' },
    { id: 'documents', icon: FileText, label: 'Documents', path: '/documents' },
    { id: 'email', icon: Mail, label: 'Email', path: '/email' },
    { id: 'calls', icon: Phone, label: 'Calls', path: '/calls' },
    { id: 'strategies', icon: FolderOpen, label: 'Strategies', path: '/strategies' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const strategiesSubItems = [
    { id: 'analytics', label: 'Strategies Analytics', path: '/strategies/analytics' },
    { id: 'list', label: 'Strategies List', path: '/strategies/list' },
  ];

  // Style Guide navigation items (text only)
  const styleGuideItems: NavigationItem[] = [
    { id: 'colors', label: 'Colors', path: '/style-guide/colors' },
    { id: 'typography', label: 'Typography', path: '/style-guide/typography' },
    { id: 'spacing', label: 'Spacing', path: '/style-guide/spacing' },
    { id: 'corner-radius', label: 'Corner Radius', path: '/style-guide/corner-radius' },
    { id: 'borders', label: 'Borders', path: '/style-guide/borders' },
    { id: 'shadows', label: 'Shadows', path: '/style-guide/shadows' },
  ];

  // Components navigation items (text only)
  const componentItems: NavigationItem[] = [
    { id: 'buttons', label: 'Buttons', path: '/components/buttons' },
    { id: 'inputs', label: 'Inputs', path: '/components/inputs' },
    { id: 'dropdowns', label: 'Dropdowns', path: '/components/dropdowns' },
    { id: 'kpi-cards', label: 'KPI Cards', path: '/components/kpi-cards' },
    { id: 'toggle-switch', label: 'Toggle Switch', path: '/components/toggle-switch' },
    { id: 'side-nav-item', label: 'Side Nav Item', path: '/components/side-nav-item' },
    { id: 'side-nav', label: 'Side Navigation', path: '/components/side-nav' },
    { id: 'top-nav', label: 'Top Navigation', path: '/components/top-nav' },
  ];

  if (currentView === 'App') {
    return (
      <aside className="fixed left-0 top-18 w-16 h-[calc(100vh-72px)] bg-gr-25 border-r border-n-75 z-40">
        <nav className="py-4">
          <ul className="space-y-2">
            {appNavigationItems.map((item) => {
              if (item.id === 'strategies') {
                return (
                  <SideNavigationDropdown
                    key={item.id}
                    item={item}
                    subItems={strategiesSubItems}
                    isActive={activeItem.startsWith('strategies')}
                  />
                );
              }
              return (
                <SideNavigationItem
                  key={item.id}
                  item={item}
                  isActive={activeItem === item.id}
                  onClick={() => setActiveItem(item.id as AppPage)}
                  type="icon"
                />
              );
            })}
          </ul>
        </nav>
      </aside>
    );
  } else if (currentView === 'Style Guide') {
    return (
      <aside className="fixed left-0 top-18 w-48 h-[calc(100vh-72px)] bg-gr-25 border-r border-n-75 z-40">
        <nav className="py-4">
          <ul className="space-y-1">
            {styleGuideItems.map((item) => (
              <SideNavigationItem
                key={item.id}
                item={item}
                isActive={activeStyleGuideSection === item.id}
                onClick={() => onEnvironmentChange('Style Guide', item.id)}
                type="text"
              />
            ))}
          </ul>
        </nav>
      </aside>
    );
  } else if (currentView === 'Components') {
    return (
      <aside className="fixed left-0 top-18 w-48 h-[calc(100vh-72px)] bg-gr-25 border-r border-n-75 z-40">
        <nav className="py-4">
          <ul className="space-y-1">
            {componentItems.map((item) => (
              <SideNavigationItem
                key={item.id}
                item={item}
                isActive={activeComponentSection === item.id}
                onClick={() => onEnvironmentChange('Components', item.id)}
                type="text"
              />
            ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return null;
};

export default SideNavigation;