import React from 'react';
import { Card } from '../ui/card';
import { Check, AlertTriangle, Circle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ProjectAction } from '../../types';

interface ProjectActionItemProps {
  action: ProjectAction;
  className?: string;
}

const ProjectActionItem: React.FC<ProjectActionItemProps> = ({
  action,
  className = ''
}) => {
  // Get status icon and styling
  const getStatusIcon = () => {
    switch (action.status) {
      case 'completed':
        return <Check className="w-4 h-4 text-g-300" />;
      case 'escalated':
        return <AlertTriangle className="w-4 h-4 text-y-300" />;
      case 'not-started':
        return <Circle className="w-4 h-4 text-n-200" />;
      default:
        return <Circle className="w-4 h-4 text-n-200" />;
    }
  };

  const getStatusStyling = () => {
    switch (action.status) {
      case 'completed':
        return 'border-l-g-300 bg-g-50';
      case 'escalated':
        return 'border-l-y-300 bg-y-100';
      case 'not-started':
        return 'border-l-n-200 bg-white';
      default:
        return 'border-l-n-200 bg-white';
    }
  };

  const getStatusTextColor = () => {
    switch (action.status) {
      case 'completed':
        return 'text-g-300';
      case 'escalated':
        return 'text-y-400';
      case 'not-started':
        return 'text-n-300';
      default:
        return 'text-n-300';
    }
  };

  return (
    <Card 
      className={cn(
        "bg-white rounded-lg border border-n-75 border-l-4 p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200",
        getStatusStyling(),
        className
      )}
    >
      <div className="flex items-start space-x-3">
        {/* Status Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {getStatusIcon()}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-poppins font-medium text-n-500 mb-1">
            {action.title}
          </h4>
          <p className="text-xs font-poppins font-normal text-n-300 mb-2 leading-relaxed">
            {action.description}
          </p>
          
          {/* Status */}
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs font-poppins font-medium capitalize",
              getStatusTextColor()
            )}>
              {action.status.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectActionItem;