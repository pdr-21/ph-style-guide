import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Mail, User, Building } from 'lucide-react';
import { Human } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface HumanProfileCardProps {
  human: Human;
  isVisible: boolean;
  position: { top: number; left: number };
}

const HumanProfileCard: React.FC<HumanProfileCardProps> = ({
  human,
  isVisible,
  position
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
      {/* Human Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-n-100 flex items-center justify-center">
          {human.imageIndex !== undefined ? (
            <img 
              src={getAgentImageByIndex(human.imageIndex)} 
              alt={human.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-poppins font-medium text-n-400">
              {human.initials}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-sm font-poppins font-semibold text-n-500">
            {human.name}
          </h3>
          <p className="text-xs font-poppins font-normal text-n-300">
            {human.role}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Department
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-n-500">
            {human.department}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Role
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-n-500">
            {human.role}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-n-300" />
            <span className="text-xs font-poppins font-normal text-n-300">
              Email
            </span>
          </div>
          <span className="text-xs font-poppins font-medium text-n-500 truncate max-w-32">
            {human.email}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <Button 
        size="sm" 
        className="w-full text-xs font-poppins font-medium"
        variant="outline"
      >
        Contact
      </Button>
    </Card>
  );
};

export default HumanProfileCard;