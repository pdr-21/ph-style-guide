import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { TrendingUp, Target, Clock } from 'lucide-react';

interface SourcingAgentProfileCardProps {
  agentName: string;
  agentImageUrl: string;
  leadsFound: number;
  successRate: number;
  avgResponseTime: string;
  isVisible: boolean;
  position: { top: number; left: number };
}

const SourcingAgentProfileCard: React.FC<SourcingAgentProfileCardProps> = ({
  agentName,
  agentImageUrl,
  leadsFound,
  successRate,
  avgResponseTime,
  isVisible,
  position
}) => {
  if (!isVisible) return null;

  return (
    <Card 
      className="absolute z-50 bg-white border border-n-75 rounded-xl shadow-lg p-4 w-64"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)'
      }}
    >
      {/* Agent Header */}
      <div className="flex items-center space-x-3 mb-4">
        <img 
          src={agentImageUrl} 
          alt={agentName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-poppins font-semibold text-n-500">
            {agentName}
          </h3>
          <p className="text-xs font-poppins font-normal text-n-300">
            AI Sourcing Agent
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Leads Found
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-n-500">
            {leadsFound.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Success Rate
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-g-300">
            {successRate}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Avg Response
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-n-500">
            {avgResponseTime}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <Button 
        size="sm" 
        className="w-full text-xs font-poppins font-medium"
        variant="outline"
      >
        View Profile
      </Button>
    </Card>
  );
};

export default SourcingAgentProfileCard;