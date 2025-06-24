import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from '../../types';
import { Tooltip } from '../ui/tooltip';

interface SideNavigationDropdownProps {
  item: NavigationItem;
  subItems: { id: string; label: string; path: string }[];
  isActive: boolean;
}

const SideNavigationDropdown: React.FC<SideNavigationDropdownProps> = ({
  item,
  subItems,
  isActive,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <li 
      className="relative flex justify-center py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tooltip content={item.label} side="right" disabled={isActive || isHovered}>
        <Link
          to={subItems[0]?.path || '#'}
          className="w-full flex items-center justify-center transition-colors"
          title={item.label}
        >
          <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
            isActive || isHovered
              ? 'bg-b-40 text-b-300' 
              : 'text-n-300 hover:text-n-500 hover:bg-n-50'
          }`}>
            <Icon className="w-5 h-5" />
          </div>
        </Link>
      </Tooltip>
      {isHovered && (
        <div className="absolute left-full ml-2 w-52 bg-white border border-n-100 rounded-lg shadow-lg">
          <ul className="py-1">
            {subItems.map((subItem) => (
              <li key={subItem.id}>
                <Link
                  to={subItem.path}
                  className="block px-4 py-2 text-sm text-n-500 hover:bg-n-50"
                  onClick={() => setIsHovered(false)}
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SideNavigationDropdown; 