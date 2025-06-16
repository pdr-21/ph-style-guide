import React from 'react';
import { TaskPerformance } from '../../types';

interface TaskPerformanceBarProps {
  taskPerformance: TaskPerformance;
  className?: string;
}

const TaskPerformanceBar: React.FC<TaskPerformanceBarProps> = ({ 
  taskPerformance, 
  className = '' 
}) => {
  const { completed, incomplete, upcoming } = taskPerformance;
  const total = completed + incomplete + upcoming;
  
  // Calculate percentages
  const completedPercentage = total > 0 ? (completed / total) * 100 : 0;
  const incompletePercentage = total > 0 ? (incomplete / total) * 100 : 0;
  const upcomingPercentage = total > 0 ? (upcoming / total) * 100 : 0;

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Progress Bar */}
      <div className="w-full bg-n-50 rounded-full h-2 overflow-hidden">
        <div className="h-full flex">
          {/* Completed tasks - Green */}
          <div 
            className="bg-g-300 h-full transition-all duration-300"
            style={{ width: `${completedPercentage}%` }}
          />
          {/* Incomplete tasks - Red */}
          <div 
            className="bg-r-300 h-full transition-all duration-300"
            style={{ width: `${incompletePercentage}%` }}
          />
          {/* Upcoming tasks - Blue */}
          <div 
            className="bg-b-200 h-full transition-all duration-300"
            style={{ width: `${upcomingPercentage}%` }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 text-xs font-poppins font-normal">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-g-300 rounded-full"></div>
          <span className="text-n-300">{completed} Completed</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-r-300 rounded-full"></div>
          <span className="text-n-300">{incomplete} Incomplete</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-b-200 rounded-full"></div>
          <span className="text-n-300">{upcoming} Upcoming</span>
        </div>
      </div>
    </div>
  );
};

export default TaskPerformanceBar;