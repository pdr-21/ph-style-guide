import React from 'react';
import { Human } from '../../types';

interface HumanAvatarGroupProps {
  humans: Human[];
  maxVisible?: number;
  className?: string;
}

const HumanAvatarGroup: React.FC<HumanAvatarGroupProps> = ({ 
  humans, 
  maxVisible = 3, 
  className = '' 
}) => {
  const visibleHumans = humans.slice(0, maxVisible);

  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Human name as link */}
      {visibleHumans.length > 0 && (
        <div className="text-sm font-poppins font-normal text-b-200 hover:underline cursor-pointer">
          {visibleHumans[0].name}
        </div>
      )}
    </div>
  );
};

export default HumanAvatarGroup;