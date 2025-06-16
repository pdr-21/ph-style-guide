import React from 'react';
import { TaskBreakdown } from '../../types';

interface TaskDistributionBarProps {
  taskBreakdown: TaskBreakdown;
  className?: string;
}

const TaskDistributionBar: React.FC<TaskDistributionBarProps> = ({ 
  taskBreakdown, 
  className = '' 
}) => {
  const { total, completed, escalated, paused, notStarted } = taskBreakdown;

  // Calculate percentages
  const completedPercentage = (completed / total) * 100;
  const escalatedPercentage = (escalated / total) * 100;
  const pausedPercentage = (paused / total) * 100;
  const notStartedPercentage = (notStarted / total) * 100;

  return (
    <div className={`w-32 ${className}`}>
      {/* Progress bar */}
      <div className="w-full h-4 bg-n-50 rounded-lg overflow-hidden flex">
        {/* Completed */}
        {completed > 0 && (
          <div 
            className="bg-g-300 h-full"
            style={{ width: `${completedPercentage}%` }}
            title={`Completed: ${completed}`}
          />
        )}
        
        {/* Escalated */}
        {escalated > 0 && (
          <div 
            className="bg-r-300 h-full"
            style={{ width: `${escalatedPercentage}%` }}
            title={`Escalated: ${escalated}`}
          />
        )}
        
        {/* Paused */}
        {paused > 0 && (
          <div 
            className="bg-y-300 h-full"
            style={{ width: `${pausedPercentage}%` }}
            title={`Paused: ${paused}`}
          />
        )}
        
        {/* Not Started */}
        {notStarted > 0 && (
          <div 
            className="bg-n-200 h-full"
            style={{ width: `${notStartedPercentage}%` }}
            title={`Not Started: ${notStarted}`}
          />
        )}
      </div>
      
      {/* Task count */}
      <div className="text-xs font-poppins font-normal text-n-300 mt-1 text-center">
        {completed}/{total} tasks
      </div>
    </div>
  );
};

export default TaskDistributionBar;