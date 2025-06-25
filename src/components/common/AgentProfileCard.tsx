import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { TrendingUp, Target, Clock, User, Bot } from 'lucide-react';

interface AgentProfileCardProps {
  name: string;
  imageUrl: string;
  type: 'ai-agent' | 'human';
  isVisible: boolean;
  position: { top: number; left: number };
  // AI Agent specific props
  leadsFound?: number;
  successRate?: number;
  avgResponseTime?: string;
  // Human specific props  
  role?: string;
  department?: string;
  email?: string;
}

const AgentProfileCard: React.FC<AgentProfileCardProps> = ({
  name,
  imageUrl,
  type,
  isVisible,
  position,
  leadsFound,
  successRate,
  avgResponseTime,
  role,
  department,
  email
}) => {
  if (!isVisible) return null;

  return (
    <Card 
      className="absolute z-50 bg-white border border-n-100 rounded-xl shadow-lg p-4 w-64"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold text-n-500">
            {name}
          </h3>
          <p className="text-xs text-n-300">
            {type === 'ai-agent' ? 'AI Agent' : role || 'Team Member'}
          </p>
        </div>
      </div>

      {/* Stats/Info based on type */}
      {type === 'ai-agent' ? (
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-3 h-3 text-n-300" />
              <span className="text-xs text-n-300">
                Tasks Completed
              </span>
            </div>
            <span className="text-xs font-medium text-n-500">
              {leadsFound?.toLocaleString() || '0'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-3 h-3 text-n-300" />
              <span className="text-xs text-n-300">
                Success Rate
              </span>
            </div>
            <span className="text-xs font-medium text-g-300">
              {successRate || 0}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-n-300" />
              <span className="text-xs text-n-300">
                Avg Response
              </span>
            </div>
            <span className="text-xs font-medium text-n-500">
              {avgResponseTime || 'N/A'}
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          {department && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-3 h-3 text-n-300" />
                <span className="text-xs text-n-300">
                  Department
                </span>
              </div>
              <span className="text-xs font-medium text-n-500">
                {department}
              </span>
            </div>
          )}
          
          {email && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-n-300">
                  Email
                </span>
              </div>
              <span className="text-xs font-medium text-b-300">
                {email}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Action Button */}
      <Button 
        size="sm" 
        className="w-full text-xs font-medium"
        variant="outline"
      >
        {type === 'ai-agent' ? 'View Agent Details' : 'Contact'}
      </Button>
    </Card>
  );
};

export default AgentProfileCard; 