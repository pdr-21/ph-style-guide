import React from 'react';
import { Tooltip } from '../ui/tooltip';
import { cn } from '../../lib/utils';
import { Milestone } from '../../types';

interface MilestoneTimelineProps {
  milestones: Milestone[];
  selectedMilestoneId: string;
  onSelectMilestone?: (milestoneId: string) => void;
  className?: string;
}

const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({
  milestones,
  selectedMilestoneId,
  onSelectMilestone,
  className = ''
}) => {
  // Get status styling for milestone markers
  const getStatusStyling = (status: Milestone['status'], isSelected: boolean) => {
    if (isSelected) {
      return 'bg-b-200 border-b-300 ring-2 ring-b-100';
    }
    
    switch (status) {
      case 'completed':
        return 'bg-g-300 border-g-400 hover:bg-g-400';
      case 'in-progress':
        return 'bg-b-200 border-b-300 hover:bg-b-300';
      case 'not-started':
        return 'bg-n-100 border-n-200 hover:bg-n-200';
      default:
        return 'bg-n-100 border-n-200 hover:bg-n-200';
    }
  };

  // Get status icon
  const getStatusIcon = (status: Milestone['status']) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in-progress':
        return (
          <div className="w-2 h-2 bg-white rounded-full"></div>
        );
      case 'not-started':
        return null;
      default:
        return null;
    }
  };

  if (milestones.length === 0) {
    return (
      <div className={cn("text-center py-8", className)}>
        <div className="text-sm text-n-300">No milestones available</div>
      </div>
    );
  }

  return (
    <div className={cn("w-full py-8", className)}>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-3 left-6 right-6 h-0.5 bg-n-100"></div>
        
        {/* Progress Line */}
        <div 
          className="absolute top-3 left-6 h-0.5 bg-b-200 transition-all duration-500"
          style={{
            width: `${Math.max(0, (milestones.findIndex(m => m.id === selectedMilestoneId) / Math.max(1, milestones.length - 1)) * 100)}%`
          }}
        ></div>

        {/* Milestone Markers */}
        <div className="relative flex justify-between items-center">
          {milestones.map((milestone, index) => {
            const isSelected = milestone.id === selectedMilestoneId;
            
            return (
              <div key={milestone.id} className="flex flex-col items-center">
                {/* Milestone Marker */}
                <Tooltip content={milestone.name} side="top">
                  <button
                    onClick={() => onSelectMilestone?.(milestone.id)}
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer relative z-10",
                      getStatusStyling(milestone.status, isSelected)
                    )}
                  >
                    {getStatusIcon(milestone.status)}
                  </button>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;