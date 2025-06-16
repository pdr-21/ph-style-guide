import React, { useState, useRef } from 'react';
import { Human } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';
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
  const remainingCount = Math.max(0, humans.length - maxVisible);

  const handleHumanMouseEnter = (human: Human, event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const avatarRect = event.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Position the profile card below the avatar with a small gap
      setHumanPosition({
        top: avatarRect.bottom - containerRect.top + 8,
        left: avatarRect.left - containerRect.left + avatarRect.width / 2
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
    // Check if we're moving back to an avatar
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (containerRef.current && containerRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving back to avatar
    }
    setHoveredHuman(null);
  };

  return (
    <div ref={containerRef} className={`relative flex items-center space-x-2 ${className}`}>
      {/* Human Avatar */}
      {visibleHumans.map((human) => (
        <div
          key={human.id}
          className="w-8 h-8 rounded-full bg-n-100 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform"
          onMouseEnter={(e) => handleHumanMouseEnter(human, e)}
          onMouseLeave={handleHumanMouseLeave}
          title={human.name}
        >
          {human.imageIndex !== undefined ? (
            <img
              src={getAgentImageByIndex(human.imageIndex)}
              alt={human.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs font-poppins font-medium text-n-400">
              {human.initials}
            </span>
          )}
        </div>
      ))}
      
      {/* Human name */}
      {visibleHumans.length > 0 && (
        <div className="text-sm font-poppins font-normal text-n-400">
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
            isVisible={true}
            position={humanPosition}
          />
        </div>
      )}
    </div>
  );
};

export default HumanAvatarGroup;