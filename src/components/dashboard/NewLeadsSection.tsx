import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import LeadCard from './LeadCard';
import SourcingAgentProfileCard from './SourcingAgentProfileCard';
import { getAgentImageByIndex } from '../../lib/agentImages';

const NewLeadsSection: React.FC = () => {
  const [showAgentProfile, setShowAgentProfile] = useState(false);
  const [agentPosition, setAgentPosition] = useState({ top: 0, left: 0 });
  const agentRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);

  // Sample lead data - this will be replaced with real data later
  const leads = [
    {
      id: '1',
      jobTitle: 'Data Analyst',
      location: 'Hyderabad, Telangana, India',
      leadCount: 58,
      jobId: 'DA-2024-001',
      sourcingDaysLeft: 12
    },
    {
      id: '2',
      jobTitle: 'Product Manager',
      location: 'Hyderabad, Telangana, India',
      leadCount: 20,
      jobId: 'PM-2024-002',
      sourcingDaysLeft: 8
    },
    {
      id: '3',
      jobTitle: 'Backend Developer',
      location: 'Hyderabad, Telangana, India',
      leadCount: 32,
      jobId: 'BD-2024-003',
      sourcingDaysLeft: 15
    }
  ];

  const totalLeads = leads.reduce((sum, lead) => sum + lead.leadCount, 0);

  // Agent profile data
  const agentData = {
    agentName: 'Sourcing Agent',
    agentImageUrl: getAgentImageByIndex(0), // Use first agent image
    leadsFound: 2847,
    successRate: 94.2,
    avgResponseTime: '2.3h'
  };

  const handleAgentMouseEnter = () => {
    if (agentRef.current && sectionRef.current) {
      const agentRect = agentRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      
      // Calculate position relative to the section container
      // Position it directly below the agent text with a small gap
      setAgentPosition({
        top: agentRect.bottom - sectionRect.top + 8, // 8px gap (0.5rem)
        left: agentRect.left - sectionRect.left + agentRect.width / 2
      });
      setShowAgentProfile(true);
    }
  };

  const handleAgentMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving to the profile card
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (profileCardRef.current && profileCardRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving to profile card
    }
    setShowAgentProfile(false);
  };

  const handleProfileCardMouseLeave = (event: React.MouseEvent) => {
    // Check if we're moving back to the agent text
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (agentRef.current && agentRef.current.contains(relatedTarget)) {
      return; // Don't hide if moving back to agent text
    }
    setShowAgentProfile(false);
  };

  return (
    <div ref={sectionRef} className="space-y-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xl font-poppins font-semibold text-n-500">
              New Leads
            </h2>
            <Badge 
              variant="secondary" 
              className="bg-n-50 text-n-400 border-n-75 hover:bg-n-50 px-2 py-1 text-xs font-poppins font-medium"
            >
              {totalLeads}
            </Badge>
          </div>
          <p className="text-sm font-poppins font-normal text-n-300">
            Since your last visit,{' '}
            <span 
              ref={agentRef}
              className="text-b-300 font-medium cursor-pointer hover:text-b-400 transition-colors relative"
              onMouseEnter={handleAgentMouseEnter}
              onMouseLeave={handleAgentMouseLeave}
            >
              @Sourcing Agent
            </span>
            {' '}found these leads for your roles
          </p>
        </div>
        
        <Button 
          variant="ghost" 
          className="text-p-300 hover:text-p-400 hover:bg-p-50 font-poppins font-medium"
        >
          View all
        </Button>
      </div>

      {/* Lead Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            jobTitle={lead.jobTitle}
            location={lead.location}
            leadCount={lead.leadCount}
            jobId={lead.jobId}
            sourcingDaysLeft={lead.sourcingDaysLeft}
          />
        ))}
      </div>

      {/* Sourcing Agent Profile Card */}
      <div
        ref={profileCardRef}
        onMouseLeave={handleProfileCardMouseLeave}
      >
        <SourcingAgentProfileCard
          agentName={agentData.agentName}
          agentImageUrl={agentData.agentImageUrl}
          leadsFound={agentData.leadsFound}
          successRate={agentData.successRate}
          avgResponseTime={agentData.avgResponseTime}
          isVisible={showAgentProfile}
          position={agentPosition}
        />
      </div>
    </div>
  );
};

export default NewLeadsSection;