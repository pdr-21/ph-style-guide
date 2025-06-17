import React from 'react';
import { Card } from '../ui/card';
import { Mail, Phone, Building, User, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { Human } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface HumanResponsibleCardProps {
  human: Human;
  className?: string;
}

const HumanResponsibleCard: React.FC<HumanResponsibleCardProps> = ({
  human,
  className = ''
}) => {
  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <Card className="bg-white rounded-xl border border-n-75 p-6 hover:border-n-200 hover:shadow-sm transition-all duration-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-poppins font-semibold text-n-500 mb-2">
            Initiative Owner
          </h3>
          <p className="text-sm font-poppins font-normal text-n-300">
            The person responsible for overseeing this initiative
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gr-25 flex items-center justify-center mb-4">
            {human.imageIndex !== undefined ? (
              <img 
                src={getAgentImageByIndex(human.imageIndex)} 
                alt={human.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-10 h-10 text-n-300" />
            )}
          </div>
          
          {/* Name and Role */}
          <h4 className="text-xl font-poppins font-semibold text-n-500 mb-1 text-center">
            {human.name}
          </h4>
          <p className="text-sm font-poppins font-medium text-b-300 mb-1">
            {human.role}
          </p>
          <p className="text-sm font-poppins font-normal text-n-300">
            {human.department}
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg">
            <Mail className="w-4 h-4 text-n-300 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-poppins font-medium text-n-400 mb-1">
                Email
              </div>
              <div className="text-sm font-poppins font-normal text-n-500 truncate">
                {human.email}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg">
            <Building className="w-4 h-4 text-n-300 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-xs font-poppins font-medium text-n-400 mb-1">
                Department
              </div>
              <div className="text-sm font-poppins font-normal text-n-500">
                {human.department}
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-3 mb-6">
          <h5 className="text-sm font-poppins font-medium text-n-400">
            Key Responsibilities
          </h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-b-200 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm font-poppins font-normal text-n-500">
                Strategic oversight and decision making
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-b-200 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm font-poppins font-normal text-n-500">
                Escalation resolution and approvals
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-b-200 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm font-poppins font-normal text-n-500">
                Quality assurance and final reviews
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-b-200 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm font-poppins font-normal text-n-500">
                Stakeholder communication and reporting
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-sm font-poppins font-medium"
          >
            <Mail className="w-4 h-4" />
            Email
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-sm font-poppins font-medium"
          >
            <MessageSquare className="w-4 h-4" />
            Message
          </Button>
        </div>

        {/* Last Activity */}
        <div className="mt-6 pt-4 border-t border-n-75">
          <div className="flex items-center justify-between text-xs font-poppins font-normal text-n-300">
            <span>Last active</span>
            <span>2 hours ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HumanResponsibleCard;