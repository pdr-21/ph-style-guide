import React from 'react';
import { Check, Clock, Circle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Milestone } from '../../types';

interface MilestoneListProps {
  milestones: Milestone[];
  selectedMilestoneId: string;
  onSelectMilestone: (id: string) => void;
  className?: string;
}

const MilestoneList: React.FC<MilestoneListProps> = ({
  milestones,
  selectedMilestoneId,
  onSelectMilestone,
  className = ''
}) => {
  // Get status icon and styling
  const getStatusIcon = (status: Milestone['status']) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4 text-g-300" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-b-200" />;
      case 'not-started':
        return <Circle className="w-4 h-4 text-n-200" />;
      default:
        return <Circle className="w-4 h-4 text-n-200" />;
    }
  };

  const getStatusColor = (status: Milestone['status']) => {
    switch (status) {
      case 'completed':
        return 'text-g-300';
      case 'in-progress':
        return 'text-b-200';
      case 'not-started':
        return 'text-n-300';
      default:
        return 'text-n-300';
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={cn("bg-gr-25 rounded-xl p-4", className)}>
      <h3 className="text-sm font-poppins font-medium text-n-500 mb-4">
        Milestones
      </h3>
      
      <div className="space-y-2">
        {milestones.map((milestone) => {
          const isSelected = milestone.id === selectedMilestoneId;
          
          return (
            <button
              key={milestone.id}
              onClick={() => onSelectMilestone(milestone.id)}
              className={cn(
                "w-full p-3 rounded-lg text-left transition-all duration-200 border",
                isSelected
                  ? "bg-white border-b-200 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-white hover:border-n-100 hover:shadow-sm"
              )}
            >
              <div className="flex items-start space-x-3">
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {getStatusIcon(milestone.status)}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={cn(
                      "text-sm font-poppins font-medium truncate",
                      isSelected ? "text-b-300" : "text-n-500"
                    )}>
                      {milestone.name}
                    </h4>
                    <span className="text-xs font-poppins font-normal text-n-300 ml-2 flex-shrink-0">
                      {formatDate(milestone.dueDate)}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-n-50 rounded-full h-1.5 mb-2">
                    <div 
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        milestone.status === 'completed' ? "bg-g-300" :
                        milestone.status === 'in-progress' ? "bg-b-200" : "bg-n-200"
                      )}
                      style={{ width: `${milestone.progressPercentage}%` }}
                    ></div>
                  </div>
                  
                  {/* Status and Progress */}
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-xs font-poppins font-normal capitalize",
                      getStatusColor(milestone.status)
                    )}>
                      {milestone.status.replace('-', ' ')}
                    </span>
                    <span className="text-xs font-poppins font-normal text-n-300">
                      {milestone.progressPercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneList;