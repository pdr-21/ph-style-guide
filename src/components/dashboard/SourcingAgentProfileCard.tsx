import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Bot, TrendingUp, Target, Clock } from 'lucide-react';

interface SourcingAgentProfileCardProps {
  agentName: string;
  leadsFound: number;
  successRate: number;
  avgResponseTime: string;
  isVisible: boolean;
  position: { top: number; left: number };
}

const SourcingAgentProfileCard: React.FC<SourcingAgentProfileCardProps> = ({
  agentName,
  leadsFound,
  successRate,
  avgResponseTime,
  isVisible,
  position
}) => {
  if (!isVisible) return null;

  return (
    <Card 
      className="absolute z-50 bg-white border border-n-100 rounded-xl shadow-lg p-4 w-64"
      style={{
        top: position.top + 25,
        left: position.left,
        transform: 'translateX(-50%)'
      }}
    >
      {/* Agent Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-b-40 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-b-300" />
        </div>
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