import React from 'react';
import { Tooltip } from '../ui/tooltip';
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

  // Create tooltip content
  const tooltipContent = (
    <div className="p-3 min-w-48">
      {/* Title */}
      <div className="text-sm font-poppins font-semibold text-white mb-3">
        Task Breakdown
      </div>
      
      {/* Breakdown items */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-g-300"></div>
            <span className="text-xs font-poppins font-normal text-white">Completed</span>
          </div>
          <span className="text-xs font-poppins font-medium text-white">{completed}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-r-300"></div>
            <span className="text-xs font-poppins font-normal text-white">Escalated</span>
          </div>
          <span className="text-xs font-poppins font-medium text-white">{escalated}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-y-300"></div>
            <span className="text-xs font-poppins font-normal text-white">Paused</span>
          </div>
          <span className="text-xs font-poppins font-medium text-white">{paused}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-n-200"></div>
            <span className="text-xs font-poppins font-normal text-white">Not Started</span>
          </div>
          <span className="text-xs font-poppins font-medium text-white">{notStarted}</span>
        </div>
      </div>
      
      {/* Total */}
      <div className="border-t border-white/20 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-poppins font-semibold text-white">Total</span>
          <span className="text-xs font-poppins font-semibold text-white">{total}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Tooltip content={tooltipContent} side="top" className="bg-n-500 border-none">
      <div className={`w-32 cursor-pointer ${className}`}>
        {/* Progress bar */}
        <div className="w-full h-4 bg-n-50 rounded-lg overflow-hidden flex">
          {/* Completed */}
          {completed > 0 && (
            <div 
              className="bg-g-300 h-full"
              style={{ width: `${completedPercentage}%` }}
            />
          )}
          
          {/* Escalated */}
          {escalated > 0 && (
            <div 
              className="bg-r-300 h-full"
              style={{ width: `${escalatedPercentage}%` }}
            />
          )}
          
          {/* Paused */}
          {paused > 0 && (
            <div 
              className="bg-y-300 h-full"
              style={{ width: `${pausedPercentage}%` }}
            />
          )}
          
          {/* Not Started */}
          {notStarted > 0 && (
            <div 
              className="bg-n-200 h-full"
              style={{ width: `${notStartedPercentage}%` }}
            />
          )}
        </div>
        
        {/* Task count */}
        <div className="text-xs font-poppins font-normal text-n-300 mt-1 text-center">
          {completed}/{total} tasks
        </div>
      </div>
    </Tooltip>
  );
};

export default TaskDistributionBar;