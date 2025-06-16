import React, { useState, useRef } from 'react';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';
import SourcingAgentProfileCard from '../dashboard/SourcingAgentProfileCard';

interface AgentAvatarGroupProps {
  agents: AI_Agent[];
  maxVisible?: number;
  className?: string;
}

const AgentAvatarGroup: React.FC<AgentAvatarGroupProps> = ({ 
  agents, 
  maxVisible = 3, 
  className = '' 
}) => {
  const [hoveredAgent, setHoveredAgent] = useState<AI_Agent | null>(null);
  const [agentPosition, setAgentPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);

  const visibleAgents = agents.slice(0, maxVisible);
  const remainingCount = Math.max(0, agents.length - maxVisible);

  const handleAgentMouseEnter = (agent: AI_Agent, event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const avatarRect = event.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Position the profile card below the avatar with a small gap
      setAgentPosition({
        top: avatarRect.bottom - containerRect.top + 8,
        left: avatarRect.left - containerRect.left + avatarRect.width / 2
      });
      setHoveredAgent(agent);
    }
  };

  const handleAgentMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving to the profile card
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (profileCardRef.current && profileCardRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving to profile card
    }
    setHoveredAgent(null);
  };

  const handleProfileCardMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving back to an avatar
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (containerRef.current && containerRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving back to avatar
    }
    setHoveredAgent(null);
  };

  return (
    <div ref={containerRef} className={`relative flex -space-x-2 ${className}`}>
      {/* Agent Avatars */}
      {visibleAgents.map((agent) => (
        <div
          key={agent.id}
          className="w-8 h-8 rounded-full bg-gr-25 border-2 border-white flex items-center justify-center overflow-hidden cursor-pointer hover:z-10 transition-transform hover:scale-110"
          onMouseEnter={(e) => handleAgentMouseEnter(agent, e)}
          onMouseLeave={handleAgentMouseLeave}
          title={agent.name}
        >
          <img
            src={getAgentImageByIndex(agent.imageIndex)}
            alt={agent.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Remaining count indicator */}
      {remainingCount > 0 && (
        <div className="w-8 h-8 rounded-full bg-n-200 border-2 border-white flex items-center justify-center">
          <span className="text-xs font-poppins font-medium text-n-500">
            +{remainingCount}
          </span>
        </div>
      )}

      {/* Agent Profile Card */}
      {hoveredAgent && (
        <div
          ref={profileCardRef}
          onMouseLeave={handleProfileCardMouseLeave}
        >
          <SourcingAgentProfileCard
            agentName={hoveredAgent.name}
            agentImageUrl={getAgentImageByIndex(hoveredAgent.imageIndex)}
            leadsFound={hoveredAgent.leadsFound}
            successRate={hoveredAgent.successRate}
            avgResponseTime={hoveredAgent.avgResponseTime}
            isVisible={true}
            position={agentPosition}
          />
        </div>
      )}
    </div>
  );
};

export default AgentAvatarGroup;