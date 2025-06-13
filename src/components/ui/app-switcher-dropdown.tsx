import React, { useRef, useEffect } from 'react';
import { Settings2, LayoutDashboard, ClipboardList, Home, Puzzle, Palette, LayoutGrid } from 'lucide-react';
import { Environment } from '../../types';
import { cn } from '../../lib/utils';

interface AppSwitcherDropdownProps {
  currentEnvironment: Environment;
  onEnvironmentChange: (env: Environment) => void;
  onClose: () => void;
  isOpen: boolean;
}

interface AppItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isEnvironment?: boolean;
  environment?: Environment;
}

const AppSwitcherDropdown: React.FC<AppSwitcherDropdownProps> = ({
  currentEnvironment,
  onEnvironmentChange,
  onClose,
  isOpen
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const appItems: AppItem[] = [
    {
      id: 'automation-engine',
      label: 'Automation Engine',
      icon: Settings2,
      isEnvironment: false
    },
    {
      id: 'crm',
      label: 'CRM',
      icon: LayoutDashboard,
      isEnvironment: false
    },
    {
      id: 'hiring-manager',
      label: 'Hiring Manager',
      icon: ClipboardList,
      isEnvironment: false
    },
    {
      id: 'app',
      label: 'App',
      icon: Home,
      isEnvironment: true,
      environment: 'App'
    },
    {
      id: 'components',
      label: 'Components',
      icon: Puzzle,
      isEnvironment: true,
      environment: 'Components'
    },
    {
      id: 'style-guide',
      label: 'Style Guide',
      icon: Palette,
      isEnvironment: true,
      environment: 'Style Guide'
    }
  ];

  // Close dropdown when mouse leaves the dropdown area
  useEffect(() => {
    const handleMouseLeave = () => {
      onClose();
    };

    if (isOpen && dropdownRef.current) {
      dropdownRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isOpen, onClose]);

  // Also close on click outside as backup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: AppItem) => {
    if (item.isEnvironment && item.environment) {
      onEnvironmentChange(item.environment);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-96 bg-white border border-n-100 rounded-xl shadow-app-switcher z-50 p-4"
      role="menu"
      aria-label="App Switcher"
    >
      {/* Apps Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {appItems.slice(0, 3).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-n-40 transition-colors group focus:outline-none focus:ring-2 focus:ring-b-200"
              role="menuitem"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors">
                <Icon className="w-5 h-5 text-n-400" />
              </div>
              <span className="text-xs font-poppins font-medium text-n-500 text-center leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Separator */}
      <div className="my-4 border-t border-n-75"></div>

      {/* Environment Grid */}
      <div className="grid grid-cols-3 gap-3">
        {appItems.slice(3).map((item) => {
          const Icon = item.icon;
          const isActive = item.environment === currentEnvironment;
          
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={cn(
                "flex flex-col items-center p-3 rounded-lg transition-colors group focus:outline-none focus:ring-2 focus:ring-b-200",
                isActive 
                  ? "bg-b-40 hover:bg-b-50" 
                  : "hover:bg-n-40"
              )}
              role="menuitem"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors",
                isActive 
                  ? "bg-b-40 text-b-300" 
                  : ""
              )}>
                <Icon className={cn(
                  "w-5 h-5",
                  isActive ? "text-b-300" : "text-n-400"
                )} />
              </div>
              <span className={cn(
                "text-xs font-poppins font-medium text-center leading-tight",
                isActive ? "text-b-300" : "text-n-500"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppSwitcherDropdown;