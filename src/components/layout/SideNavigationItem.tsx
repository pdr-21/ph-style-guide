import React from 'react';
import { NavigationItem, NavigationItemType } from '../../types';

interface SideNavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
  type: NavigationItemType;
}

const SideNavigationItem: React.FC<SideNavigationItemProps> = ({ 
  item, 
  isActive, 
  onClick, 
  type 
}) => {
  if (type === 'icon') {
    const Icon = item.icon;
    
    return (
      <li className="px-2 py-1">
        <button
          onClick={onClick}
          className="w-full flex items-center justify-center transition-colors group relative"
          title={item.label}
        >
          <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
            isActive 
              ? 'bg-b-40 text-b-300' 
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
  }

  // Text navigation item
  return (
    <li className="px-2 py-1">
      <button
        onClick={onClick}
        className={`w-full px-2 py-2 text-left text-sm font-medium transition-colors rounded-xl ${
          isActive 
            ? 'bg-b-40 text-b-300' 
            : 'text-n-400 hover:text-n-500 hover:bg-n-50'
        }`}
      >
        {item.label}
      </button>
    </li>
  );
};

export default SideNavigationItem;