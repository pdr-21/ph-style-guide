import React, { useState, useRef } from 'react';
import { Human } from '../../types';
import HumanProfileCard from './HumanProfileCard';

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
  const [hoveredHuman, setHoveredHuman] = useState<Human | null>(null);
  const [humanPosition, setHumanPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);

  const visibleHumans = humans.slice(0, maxVisible);

  const handleHumanMouseEnter = (human: Human, event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const nameRect = event.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Position the profile card below the name with a small gap
      setHumanPosition({
        top: nameRect.bottom - containerRect.top + 8,
        left: nameRect.left - containerRect.left + nameRect.width / 2
      });
      setHoveredHuman(human);
    }
  };

  const handleHumanMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving to the profile card
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (profileCardRef.current && profileCardRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving to profile card
    }
    setHoveredHuman(null);
  };

  const handleProfileCardMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving back to the human name
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (containerRef.current && containerRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving back to human name
    }
    setHoveredHuman(null);
  };

  return (
    <div ref={containerRef} className={`relative flex items-center ${className}`}>
      {/* Human name as link */}
      {visibleHumans.length > 0 && (
        <div 
          className="text-sm font-poppins font-normal text-b-200 hover:underline cursor-pointer"
          onMouseEnter={(e) => handleHumanMouseEnter(visibleHumans[0], e)}
          onMouseLeave={handleHumanMouseLeave}
        >
          {visibleHumans[0].name}
        </div>
      )}

      {/* Human Profile Card */}
      {hoveredHuman && (
        <div
          ref={profileCardRef}
          onMouseLeave={handleProfileCardMouseLeave}
        >
          <HumanProfileCard
            human={hoveredHuman}
            tasks={[]}
            isVisible={true}
            position={humanPosition}
          />
        </div>
      )}
    </div>
  );
};

export default HumanAvatarGroup;