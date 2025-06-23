import React from 'react';
import { NavigationItem, NavigationItemType } from '../../types';
import { Tooltip } from '../ui/tooltip';
import { Link } from 'react-router-dom';

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
      <li className="flex justify-center py-1">
        <Tooltip content={item.label} side="right" disabled={isActive}>
          <Link
            to={item.path}
            onClick={onClick}
            className="w-full flex items-center justify-center transition-colors"
            title={item.label}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
              isActive 
                ? 'bg-b-40 text-b-300' 
                : 'text-n-300 hover:text-n-500 hover:bg-n-50'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
          </Link>
        </Tooltip>
      </li>
    );
  }

  // Text navigation item
  return (
    <li className="px-2 py-1">
      <Link
        to={item.path}
        onClick={onClick}
        className={`w-full px-2 py-2 text-left text-sm font-medium transition-colors rounded-xl ${
          isActive 
            ? 'bg-b-40 text-b-300' 
            : 'text-n-400 hover:text-n-500 hover:bg-n-50'
        }`}
      >
        {item.label}
      </Link>
    </li>
  );
};

export default SideNavigationItem;